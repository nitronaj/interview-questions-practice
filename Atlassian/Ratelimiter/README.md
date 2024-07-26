Here's the content converted into Markdown format:


# Atlassian Code Design Interview

Imagine we are building an application that is used by many different customers.

We want to avoid one customer being able to overload the system by sending too many requests, so we enforce a per-customer rate limit. The rate limit is defined as:

_"Each customer can make X requests per Y seconds"_

```java
// Perform rate limiting logic for provided customer ID. Return true if the
// request is allowed, and false if it is not.
boolean rateLimit(int customerId)
```

Some of our customers have bursty traffic and are complaining about being rate limited. We want to better accommodate those customers, so we want to adopt a 'credit' based system. It will work as follows:
- For each bucket of time, any capacity available below the limit is converted into credits for that customer.
- There is some maximum number of credits that a customer can accumulate.
- When a customer exceeds their normal request limit for a window, the credit count starts to decrease. When there are 0 credits, the customer is rate limited.

```
// some sort of bucket
// let's say it's always start at 0
// fillingCredit -> this will be calculated by rate
// there is a limit on the bucket capacity
// return false when bucket credit hits 0
```
