function testGcdOfStrings() {
  // Test cases
  const testCases = [
    {
      str1: 'ABCABC',
      str2: 'ABC',
      expected: 'ABC',
    },
    {
      str1: 'ABABAB',
      str2: 'ABAB',
      expected: 'AB',
    },
    {
      str1: 'LEET',
      str2: 'CODE',
      expected: '',
    },
    {
      str1: 'TAUXXTAUXXTAUXXTAUXXTAUXX',
      str2: 'TAUXX',
      expected: 'TAUXX',
    },
    {
      str1: 'ABCABC',
      str2: 'ABC',
      expected: 'ABC',
    },
    {
      str1: 'LEET',
      str2: 'CODE',
      expected: '',
    },
    {
      str1: 'AAAAAA',
      str2: 'AAA',
      expected: 'AAA',
    },
    {
      str1: 'XYZXYZXYZ',
      str2: 'XYZ',
      expected: 'XYZ',
    },
    {
      str1: 'A',
      str2: 'A',
      expected: 'A',
    },
    {
      str1: 'A',
      str2: 'B',
      expected: '',
    },
    {
      str1: '',
      str2: '',
      expected: '',
    },
    {
      str1: 'AAAAAAAAAA',
      str2: 'AAAA',
      expected: 'A',
    },
    {
      str1: 'ABABAB',
      str2: 'AB',
      expected: 'AB',
    },
  ];

  // Running the tests
  testCases.forEach((testCase, index) => {
    const result = gcdOfStrings(testCase.str1, testCase.str2);
    if (result === testCase.expected) {
      console.log(`Test ${index + 1} passed!`);
    } else {
      console.log(`Test ${index + 1} failed. Expected "${testCase.expected}", but got "${result}".`);
    }
  });
}

function gcdOfStrings(str1: string, str2: string): string {
  // Helper function to check if one string is a divisor of another
  function isDivisor(small: string, large: string): boolean {
    if (large.length % small.length !== 0) {
      return false;
    }
    let repeatCount = large.length / small.length;
    return small.repeat(repeatCount) === large;
  }

  // Determine the shorter and longer strings
  let shorter = str1.length < str2.length ? str1 : str2;
  let longer = str1.length >= str2.length ? str1 : str2;

  // Check all possible prefixes of the shorter string
  for (let i = shorter.length; i > 0; i--) {
    let prefix = shorter.slice(0, i);
    if (isDivisor(prefix, shorter) && isDivisor(prefix, longer)) {
      return prefix;
    }
  }

  // If no common divisor is found, return an empty string
  return '';
}

// Run the tests
testGcdOfStrings();
