// create comment for package

package rateLimiter

import (
	"time"
)

// TokenBucket is a data structure that implements a token bucket rate-limiting algorithm.
// It controls the rate at which tokens (representing permissions to perform certain actions)
// are added to a bucket, ensuring that actions are limited to a specific rate.
//
// Fields:
//   - maxBucketSize: The maximum number of tokens that the bucket can hold.
//   - refillRate: The rate at which tokens are added to the bucket, specified in tokens per second.
//   - currentBucketSize: The current number of tokens in the bucket.
//   - lastRefillTimeStamp: The timestamp of the last refill operation, used to calculate the number of tokens to add.
type TokenBucket struct {
	maxBucketSize       int
	currentBucketSize   int
	refillRate          int // per second
	lastRefillTimeStamp int64
}

// NewTokenBucket creates a new TokenBucket with the specified maximum bucket size and refill rate.
// The current bucket size is initialized to the maximum bucket size, and the last refill timestamp is set to the current time.
//
// Parameters:
//   - maxBucketSize: The maximum number of tokens that the bucket can hold.
//   - refillRate: The rate at which tokens are added to the bucket, specified in tokens per minute.
//
// Returns:
// A pointer to the newly created TokenBucket.
func NewTokenBucket(maxBucketSize, refillRate int) *TokenBucket {
	return &TokenBucket{
		maxBucketSize:       maxBucketSize,
		refillRate:          refillRate,
		currentBucketSize:   maxBucketSize,
		lastRefillTimeStamp: time.Now().Unix(),
	}
}

// Refill adds tokens to the bucket based on the elapsed time in minutes since the last refill.
func (tb *TokenBucket) Refill() {
	currentTime := time.Now().Unix()
	tokenToAdd := (currentTime - tb.lastRefillTimeStamp) * int64(tb.refillRate) / int64(time.Millisecond)

	tb.currentBucketSize = min(tb.currentBucketSize+int(tokenToAdd), tb.maxBucketSize)

	// update the last refill timestamp
	tb.lastRefillTimeStamp = time.Now().Unix()
}

// AllowRequest checks if there are enough tokens in the bucket to satisfy the request.
// If there are, it allows the request and decrements the token count.
//
// Parameters:
//   - tokens: The number of tokens required for the request.
//
// Returns:
// True if the request is allowed (enough tokens are available), false otherwise.
func (tb *TokenBucket) AllowRequest(tokens int) bool {
	// add token back to the bucket by calling refill
	tb.Refill()

	// check if there are enough tokens in the bucket
	if tb.currentBucketSize > tokens {
		tb.currentBucketSize -= tokens
		return true

	}

	return false
}

// CurrentTokenSize returns the current number of tokens in the bucket.
//
// Returns:
// The current number of tokens in the bucket.
func (tb *TokenBucket) GetCurrentTokenSize() int {
	tb.Refill()
	return tb.currentBucketSize
}
