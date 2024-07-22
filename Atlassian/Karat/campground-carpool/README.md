# Campground Carpool Game

You and your friends are driving to a Campground to go camping. Only 2 of you have cars, so you will be carpooling.

Routes to the campground are linear, so each location will only lead to 1 location and there will be no loops or detours. Both cars will leave from their starting locations at the same time. The first car to pass someone's location will pick them up. If both cars arrive at the same time, the person can go in either car.

Roads are provided as a directed list of connected locations with the duration (in minutes) it takes to drive between the locations.
[Origin, Destination, Duration it takes to drive]

Given a list of roads, a list of starting locations and a list of people/where they live, return a collection of who will be in each car upon arrival to the Campground.

## Example Scenario 1:

------------------------------------------------------
```
Bridgewater--(30)-->Caledonia--(15)-->New Grafton--(5)-->Campground
									   ^
Liverpool---(10)---Milton-----(30)-----^
```

```javascript
const roads1 = [    ["Bridgewater", "Caledonia", "30"], // The road from Bridgewater to Caledonia takes 30 minutes to drive.
    ["Caledonia", "New Grafton", "15"],
    ["New Grafton", "Campground", "5"],
    ["Liverpool", "Milton", "10"],
    ["Milton", "New Grafton", "30"]
];
const starts1 = ["Bridgewater", "Liverpool"];
const people1 = [    ["Jessie", "Bridgewater"], ["Travis", "Caledonia"],
    ["Jeremy", "New Grafton"], ["Katie", "Liverpool"]
];
```

```
Car1 path: (from Bridgewater): [Bridgewater(0, Jessie)->Caledonia(30, Travis)->New Grafton(45)->Campground(50)]
Car2 path: (from Liverpool): [Liverpool(0, Katie)->Milton(10)->New Grafton(40, Jeremy)->Campground(45)]
```

### Output (In any order/format):
```
  [Jessie, Travis], [Katie, Jeremy]
```
## Example Scenario 2:
--------------------------------------
```
Riverport->Chester->Campground
             ^
Halifax------^
```

```javascript
const roads2 = [["Riverport", "Chester", "40"], ["Chester", "Campground", "60"], ["Halifax", "Chester", "40"]];
const starts2 = ["Riverport", "Halifax"];
const people2 = [["Colin", "Riverport"], ["Sam", "Chester"], ["Alyssa", "Halifax"]];
```

### Output (In any order/format):
```
    [Colin, Sam], [Alyssa] OR [Colin], [Alyssa, Sam]
```

## Example Scenario 3:
----------------------------------------
```
Riverport->Bridgewater->Liverpool->Campground
```

```javascript
roads3 = [["Riverport", "Bridgewater", "1"], ["Bridgewater", "Liverpool", "1"], ["Liverpool", "Campground", "1"]]
starts3_1 = ["Riverport", "Bridgewater"]
starts3_2 = ["Bridgewater", "Riverport"]
starts3_3 = ["Riverport", "Liverpool"]
people3 = [["Colin", "Riverport"], ["Jessie", "Bridgewater"], ["Sam", "Liverpool"]]
```

### Output (In any order/format):
```
Output (starts3_1/starts3_2):  [Colin], [Jessie, Sam] - (Cars can be in any order)
Output (starts3_3): [Jessie, Colin], [Sam]
```
----------------------------------------
### All Test Cases: (Cars can be in either order)
```javascript
carpool(roads1, starts1, people1) => [Jessie, Travis], [Katie, Jeremy]
carpool(roads2, starts2, people2) => [Colin, Sam], [Alyssa] OR [Colin], [Alyssa, Sam]
carpool(roads3, starts3_1, people3) => [Colin], [Jessie, Sam]
carpool(roads3, starts3_2, people3) => [Jessie, Sam], [Colin]
carpool(roads3, starts3_3, people3) => [Jessie, Colin], [Sam]
```
----------------------------------------
## Complexity Variable:
n = number of roads



```javascript
const roads1 = [
  ['Bridgewater', 'Caledonia', '30'], ['Caledonia', 'New Grafton', '15'],
  ['New Grafton', 'Campground', '5'], ['Liverpool', 'Milton', '10'],
  ['Milton', 'New Grafton', '30']
];
const starts1 = ['Bridgewater', 'Liverpool'];
const people1 = [
  ['Jessie', 'Bridgewater'], ['Travis', 'Caledonia'],
  ['Jeremy', 'New Grafton'], ['Katie', 'Liverpool']
];

const roads2 = [['Riverport', 'Chester', '40'], ['Chester', 'Campground', '60'], ['Halifax', 'Chester', '40']];
const starts2 = ['Riverport', 'Halifax'];
const people2 = [['Colin', 'Riverport'], ['Sam', 'Chester'], ['Alyssa', 'Halifax']];

const roads3 = [['Riverport', 'Bridgewater', '1'], ['Bridgewater', 'Liverpool', '1'], ['Liverpool', 'Campground', '1']];
const starts3_1 = ['Riverport', 'Bridgewater'];
const starts3_2 = ['Bridgewater', 'Riverport'];
const starts3_3 = ['Riverport', 'Liverpool'];
const people3 = [['Colin', 'Riverport'], ['Jessie', 'Bridgewater'], ['Sam', 'Liverpool']];
```
