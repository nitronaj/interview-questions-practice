package reverse

import "unicode/utf8"

func Reverse(input string) string {
	inputRune := []rune(input)

	for i, j := 0, len(inputRune)-1; i < j; i, j = i+1, j-1 {
		inputRune[i], inputRune[j] = inputRune[j], inputRune[i]
	}

	return string(inputRune)
}

func ReverseLoop(input string) string {
	reverse := ""

	for _, v := range input {
		reverse = string(v) + reverse
	}

	return reverse
}

func ReverseRec(input string) string {
	if input == "" {
		return input
	}

	firstRune, size := utf8.DecodeRuneInString(input)

	return ReverseRec(input[size:]) + string(firstRune)
}
