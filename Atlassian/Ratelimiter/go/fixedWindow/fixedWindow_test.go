package FixedWindow

import "testing"

func TestRateLimitUsingFixedWindow(t *testing.T) {

	for _, tc := range testCases {
		t.Run(tc.description, func(t *testing.T) {
			input := tc.input
			userID, intervalInSeconds, maximumRequests := input.userID, input.intervalInSeconds, input.maximumRequests
			if actual := RateLimitUsingFixedWindow(userID, intervalInSeconds, maximumRequests); actual != tc.expected {
				t.Fatalf("RateLimitUsingFixedWindow(%q) = %t, want: %t", tc.input, actual, tc.expected)
			}
		})

	}
}
