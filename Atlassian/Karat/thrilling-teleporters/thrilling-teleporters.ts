function destinations(teleporters: string[], dieSides: number, startPos: number, lastSquare: number): number[] {
  // Create a map for quick lookup of teleporters
  const teleporterMap: { [key: number]: number } = {};
  for (const teleporter of teleporters) {
    const [from, to] = teleporter.split(',').map(Number);
    teleporterMap[from] = to;
  }

  // Create a set to store unique destination squares
  const destinationSet: Set<number> = new Set();

  // Calculate the possible destinations for each die roll
  for (let roll = 1; roll <= dieSides; roll++) {
    let nextPos = startPos + roll;

    // Stop at the last square
    if (nextPos > lastSquare) {
      nextPos = lastSquare;
    }

    // Check for teleporter at the next position
    if (teleporterMap[nextPos] !== undefined) {
      nextPos = teleporterMap[nextPos];
    }

    destinationSet.add(nextPos);
  }

  // Convert the set to an array and return it
  return Array.from(destinationSet);
}

// Test cases
function testDestinations() {
  const testCases = [
    {
      teleporters: ['3,1', '4,2', '5,10'],
      dieSides: 6,
      startPos: 0,
      lastSquare: 20,
      expected: [1, 2, 10, 6],
    },
    {
      teleporters: ['5,10', '6,22', '39,40', '40,49', '47,29'],
      dieSides: 6,
      startPos: 46,
      lastSquare: 100,
      expected: [48, 49, 50, 51, 52, 29],
    },
    {
      teleporters: ['5,10', '6,22', '39,40', '40,49', '47,29'],
      dieSides: 10,
      startPos: 0,
      lastSquare: 50,
      expected: [1, 2, 3, 4, 7, 8, 9, 10, 22],
    },
    {
      teleporters: ['6,18', '36,26', '41,21', '49,55', '54,52', '71,58', '74,77', '78,76', '80,73', '92,85'],
      dieSides: 10,
      startPos: 95,
      lastSquare: 100,
      expected: [96, 97, 98, 99, 100],
    },
    {
      teleporters: ['6,18', '36,26', '41,21', '49,55', '54,52', '71,58', '74,77', '78,76', '80,73', '92,85'],
      dieSides: 10,
      startPos: 70,
      lastSquare: 100,
      expected: [72, 73, 75, 76, 77, 79, 58],
    },
    {
      teleporters: [
        '97,93',
        '99,81',
        '36,33',
        '92,59',
        '17,3',
        '82,75',
        '4,1',
        '84,79',
        '54,4',
        '88,53',
        '91,37',
        '60,57',
        '61,7',
        '62,51',
        '31,19',
      ],
      dieSides: 6,
      startPos: 0,
      lastSquare: 100,
      expected: [1, 2, 3, 5, 6],
    },
    {
      teleporters: ['3,8', '8,9', '9,3'],
      dieSides: 7,
      startPos: 2,
      lastSquare: 20,
      expected: [3, 4, 5, 6, 7, 8, 9],
    },
  ];

  for (const { teleporters, dieSides, startPos, lastSquare, expected } of testCases) {
    const result = destinations(teleporters, dieSides, startPos, lastSquare);
    console.log(
      `Input: teleporters=${JSON.stringify(
        teleporters
      )}, dieSides=${dieSides}, startPos=${startPos}, lastSquare=${lastSquare}`
    );
    console.log(`Expected: ${expected}, Got: ${result}`);
    console.assert(
      JSON.stringify(result.sort((a, b) => a - b)) === JSON.stringify(expected.sort((a, b) => a - b)),
      `Test failed!`

  }
  console.log('All tests passed!');
}

testDestinations();
