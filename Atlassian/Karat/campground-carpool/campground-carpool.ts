type TestCase = {
  roads: string[][];
  starts: string[];
  people: string[][];
	expected: string
};
const testCases: TestCase[] = [
  {
    roads: [
      ['Bridgewater', 'Caledonia', '30'], // The road from Bridgewater to Caledonia takes 30 minutes to drive.
      ['Caledonia', 'New Grafton', '15'],
      ['New Grafton', 'Campground', '5'],
      ['Liverpool', 'Milton', '10'],
      ['Milton', 'New Grafton', '30'],
    ],
    starts: ['Bridgewater', 'Liverpool'],
    people: [
      ['Jessie', 'Bridgewater'],
      ['Travis', 'Caledonia'],
      ['Jeremy', 'New Grafton'],
      ['Katie', 'Liverpool'],
    ],
    expected: '',
  },
];

function testCardPool() {
	testCases.forEach(({roads, starts, people, expected}, index) => {
		const result = carPool(roads, starts, people )
		if (result === expected) {
			console.log(`Test ${index + 1} passed!`);
		} else {
			console.log(`Test ${index + 1} failed. Expected "${expected}", but got "${result}}.`);
		}
	})
}

function carPool(roads:string[][], cars:string[], people: string[][]): string {



	return ''
}


testCardPool();
