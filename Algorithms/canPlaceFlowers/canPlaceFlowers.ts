function testcanPlaceFlowers() {
  // Test cases
  const testCases = [
    {
      flowerbed: [1, 0, 1, 0, 1, 0, 1],
      n: 1,
      expected: false,
    },
    {
      flowerbed: [0],
      n: 1,
      expected: true,
    },
    {
      flowerbed: [0, 0, 1, 0, 0],
      n: 1,
      expected: true,
    },
  ];

  // Running the tests
  testCases.forEach((testCase, index) => {
    const result = canPlaceFlowers(testCase.flowerbed, testCase.n);
    if (result === testCase.expected) {
      console.log(`Test ${index + 1} passed!`);
    } else {
      console.log(`Test ${index + 1} failed. Expected "${testCase.expected}", but got "${result}".`);
    }
  });
}

testcanPlaceFlowers();

function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let count = 0;
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0) {
      const leftEmpty = i === 0 || flowerbed[i - 1] === 0;
      const rightEmpty = i === flowerbed.length - 1 || flowerbed[i + 1] === 0;

      if (leftEmpty && rightEmpty) {
        flowerbed[i] = 1;
        count += 1;
        if (count === n) {
          return true;
        }
      }
    }
  }

  return count >= n;
}

