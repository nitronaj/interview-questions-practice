package FixedWindow

type inputData struct {
	userID            string
	intervalInSeconds int64
	maximumRequests   int64
}

type fixedWindowTestCases struct {
	description string
	input       inputData
	expected    bool
}

var testCases = []fixedWindowTestCases{
	{
		description: "First request in min 1",
		input: inputData{
			userID:            "1",
			intervalInSeconds: 60,
			maximumRequests:   2,
		},
		expected: true,
	},
}
