export interface IRateLimiter {
  rateLimit(customerId: number): boolean;
}

class UserRecord {
  private requestCount: number;
  private startTime: number;

  public constructor() {
    this.requestCount = 0;
    this.startTime = new Date().getTime() / 1000; // would be in seconds
  }

  public getStartTime(): number {
    return this.startTime;
  }

  public reset(): void {
    this.requestCount = 0;
    this.startTime = new Date().getTime() / 1000; // would be in seconds
  }

  public increment(): void {
    this.requestCount++;
  }

  public getRequestCount(): number {
    return this.requestCount;
  }
}

export class Step1RateLimiter implements IRateLimiter {
  private threshold: number;

  private timeLimitInSeconds: number;

  private userRecord: Record<number, UserRecord>;

  public constructor(threshold: number, timeLimitInSeconds: number) {
    this.threshold = threshold;
    this.timeLimitInSeconds = timeLimitInSeconds;
    this.userRecord = {};
  }

  rateLimit(customerId: number): boolean {
    if (!this.userRecord[customerId]) {
      this.userRecord[customerId] = new UserRecord();
    }

    const currTime = new Date().getTime() / 1000;
    if (currTime - this.userRecord[customerId].getStartTime() > this.timeLimitInSeconds) {
      this.userRecord[customerId].reset();
    }

    this.userRecord[customerId].increment();

    if (this.userRecord[customerId].getRequestCount() > this.threshold) {
      return false;
    }

    return true;
  }
}

class Bucket {
  private credit: number;
  private lastUpdatedTimeInSecond: number;

  public constructor(credit: number) {
    console.log('credit', credit);
    this.credit = credit;
    this.lastUpdatedTimeInSecond = new Date().getTime() / 1000;
  }

  public updateCredit(credit: number): void {
    // console.log('update dec', this.credit)

    this.credit = credit;

    // console.log('after update', this.credit)
  }

  public useCredit(): void {
    console.log(this.credit);
    this.credit = this.credit - 1;
    // console.log('after dec', this.credit)
  }

  public getCredit(): number {
    return this.credit;
  }

  public getLastUpdatedTime(): number {
    return this.lastUpdatedTimeInSecond;
  }
}

export class BucketRateLimiter implements IRateLimiter {
  private bucketTotalCapacity: number;

  private fillingRatePerSecond: number;

  private customerBucket: Record<number, Bucket>;

  public constructor(totalCapacity: number, fillingRate: number) {
    this.bucketTotalCapacity = totalCapacity;
    this.fillingRatePerSecond = fillingRate;
    this.customerBucket = {};
  }

  rateLimit(customerId: number): boolean {
    if (!this.customerBucket[customerId]) {
      this.customerBucket[customerId] = new Bucket(this.bucketTotalCapacity);
    }

    const currTime = new Date().getTime() / 1000;
    const fillingCount =
      this.customerBucket[customerId].getCredit() +
      Math.floor((currTime - this.customerBucket[customerId].getLastUpdatedTime()) * this.fillingRatePerSecond);

    this.customerBucket[customerId].updateCredit(Math.min(this.bucketTotalCapacity, fillingCount));
    this.customerBucket[customerId].useCredit();

    if (this.customerBucket[customerId].getCredit() <= -1) {
      return false;
    }
    return true;

    // bucketCapacity 5
    // filling rate 1 / second
    // rateLimit(100)
    // rateLimit(100)
    // rateLimit(100)
    // rateLimit(100)
    // rateLimit(100)

    // 0 bucket capacity
    // rateLimit(100) -> return false

    // wait for 2 second
    // 2 to the bucket
    // rateLimit(100) -> return true

    // if customerBucket does not exist
    // create new bucket for the customer
    // 1. new bucket with the total capacity to start with

    // fillingCount = (current time - current user bucket last updated time) * filling rate
    // fill the credit to the bucket with Math.min(capacity or the filling count)

    // decrease the bucket credit
    // if (bucket credit is 0)
    // return false
    // otherwise
    // return true

    // throw new Error("Method not implemented.");
  }
}

// threshold = 1
// timeLimitInSeconds = 1

// rateLimit(1)
// rateLimit(1) -> this should be false

// wait for 2 seconds
// rateLimit(1) -> this should return true
async function main() {
  const rateLimiter = new BucketRateLimiter(5, 1);
  console.log('attempt 1', rateLimiter.rateLimit(123));
  console.log('attempt 2', rateLimiter.rateLimit(123));
  console.log('attempt 3', rateLimiter.rateLimit(123));
  console.log('attempt 4', rateLimiter.rateLimit(123));
  console.log('attempt 5', rateLimiter.rateLimit(123));

  console.log('attempt 6', rateLimiter.rateLimit(123));
  console.log('another user attempt', rateLimiter.rateLimit(100)); // should return true

  await new Promise((resolve) => setTimeout(resolve, 2000));

  console.log('attempt 7', rateLimiter.rateLimit(123));
}

main();
