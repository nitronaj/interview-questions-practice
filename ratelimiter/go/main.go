package main

import (
	"fmt"
	rateLimiter "ratelimiter/strategies"
	"time"
)

func main() {

	tb := rateLimiter.NewTokenBucket(10, 10)
	fmt.Printf("Bucket size: %d\n", tb.GetCurrentTokenSize())

	time.Sleep(time.Millisecond * 3)
	tb.AllowRequest(6)
	fmt.Printf("Bucket size: %d\n", tb.GetCurrentTokenSize())

	time.Sleep(time.Millisecond * 2)
	tb.AllowRequest(2)
	fmt.Printf("Bucket size: %d\n", tb.GetCurrentTokenSize())

}
