# Voting System

This project processes a list of ballots and returns all candidates sorted in descending order by their total number of points.

## Overview

Each ballot contains a list of candidates ranked by preference. Points are assigned based on the ranking:
- 1st place: 3 points
- 2nd place: 2 points
- 3rd place: 1 point

The `getResults` function takes a list of ballots and returns a list of candidates sorted by their total points in descending order.

## Function Signature

```java
List<String> getResults(List<Ballot> ballots)
```


1st -> 3 points
2nd -> 2 points
3rd -> 1 points

return result based on the number of points of the candidate


```typescript
const ballot1 = new Ballot(["Alice", "Bob", "Charlie"]);
const ballot2 = new Ballot(["Bob", "Charlie", "Alice"]);
const ballot3 = new Ballot(["Charlie", "Alice", "Bob"]);

const ballots = [ballot1, ballot2, ballot3];
```

Calling **getResults(ballots)** will return:


```typescript
const result = getResults(ballots)
// result = ["Alice", "Bob", "Charlie"]
```
