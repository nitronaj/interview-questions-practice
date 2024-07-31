package FixedWindow

import (
	"strconv"
	"time"
)

func RateLimitUsingFixedWindow(userID string, intervalInSeconds int64, maximumRequests int64) bool {

	// var intervalInSeconds int64 = 60 * time.Second
	currentTime := time.Now().Unix() / intervalInSeconds
	currentWindow := strconv.FormatInt(currentTime, 10)
	key := userID + ":" + currentWindow // user userID + current time window

	return intervalInSeconds%10 == 0
}
