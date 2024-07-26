# String Reversal Functions in Go

This Go package provides different approaches to reverse a string.

## Installation

To use these functions in your Go project, import the package:

```bash
go get github.com/yourusername/reverse
```

## Functions

### Reverse

#### Description

Reverses a string using a two-pointer approach with runes.

#### Method

Converts the input string to a slice of runes. It then swaps characters from the beginning and end until they meet in the middle.

#### Efficiency

O(n) time complexity where n is the length of the string.

#### Example

```go
func Reverse(input string) string {
    inputRune := []rune(input)

    for i, j := 0, len(inputRune)-1; i < j; i, j = i+1, j-1 {
        inputRune[i], inputRune[j] = inputRune[j], inputRune[i]
    }

    return string(inputRune)
}

// Example usage:
input := "Hello, 世界 🌍"
reversed := reverse.Reverse(input)
fmt.Println("Reversed:", reversed) // Output: "🌍 界世 ,olleH"
```

### ReverseLoop

#### Description

Reverses a string using a loop and concatenation.

#### Method

Iterates over each rune in the input string and builds the reversed string by prepending each rune.

#### Efficiency

O(n^2) time complexity due to string concatenation (`+` operation inside the loop).

#### Example

```go
func ReverseLoop(input string) string {
    reverse := ""

    for _, v := range input {
        reverse = string(v) + reverse
    }

    return reverse
}

// Example usage:
input := "Hello, 世界 🌍"
reversed := reverse.ReverseLoop(input)
fmt.Println("Reversed:", reversed) // Output: "🌍 界世 ,olleH"
```

### ReverseRec

#### Description

Reverses a string recursively using `utf8.DecodeRuneInString` to handle UTF-8 correctly.

#### Method

Recursively decodes and appends each rune from the end of the string to the beginning.

#### Efficiency

O(n^2) time complexity due to string concatenation (`+` operation in recursion).

#### Example

```go
import "unicode/utf8"

func ReverseRec(input string) string {
    if input == "" {
        return input
    }

    firstRune, size := utf8.DecodeRuneInString(input)

    return ReverseRec(input[size:]) + string(firstRune)
}

// Example usage:
input := "Hello, 世界 🌍"
reversed := reverse.ReverseRec(input)
fmt.Println("Reversed:", reversed) // Output: "🌍 界世 ,olleH"
```

## Considerations

- **Unicode Handling**: All approaches handle Unicode characters correctly due to Go's native support for UTF-8 encoding.

- **Efficiency**: The `Reverse` function is more efficient than `ReverseLoop` and `ReverseRec` due to their quadratic time complexity caused by string concatenation operations.

- **Choosing the Right Approach**: Use `Reverse` for optimal performance, especially for large strings. `ReverseLoop` and `ReverseRec` are simpler but less efficient for larger inputs.

Replace `yourusername/reverse` with your actual package path when using these examples.
```

### Instructions

1. Replace `github.com/yourusername/reverse` with the actual path to your Go package.
2. Adjust the examples and descriptions as needed to fit your specific implementation or additional features.
3. Save this Markdown content into a file named `README.md` in the root directory of your Go package.
4. Use this `README.md` to document and share your `reverse` package effectively.

This Markdown file now includes detailed explanations and example usages for each function (`Reverse`, `ReverseLoop`, `ReverseRec`) in the `reverse` package, formatted for easy readability in a README file.
