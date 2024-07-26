import { Ballot, VoteCounter } from './voting';

describe('Atlassian interview data structure and pattern', () => {
  test('Single ballot scenario should return winner in order', () => {
    const ballot1 = new Ballot(['Winner', 'RunnerUp', 'ThirdPerson']);
    const voteCounter = new VoteCounter();
    const result = voteCounter.getResults([ballot1]);

    expect(result[0]).toBe('Winner');
    expect(result[1]).toBe('RunnerUp');
    expect(result[2]).toBe('ThirdPerson');
    expect(result.length).toBe(3);
  });

  test('Multiple ballot scenario should return winner in order', () => {
    const ballot1 = new Ballot(['Winner', 'RunnerUp', 'ThirdPerson']);
    const ballot2 = new Ballot(['Winner', 'RunnerUp', 'ThirdPerson']);
    const ballot3 = new Ballot(['OtherWinner', 'OtherRunnerUp', 'OtherThirdPerson']);

    const voteCounter = new VoteCounter();
    const result = voteCounter.getResults([ballot1, ballot2, ballot3]);

    expect(result[0]).toBe('Winner');
    expect(result[1]).toBe('RunnerUp');
    expect(result[2]).toBe('OtherWinner');

    expect(result.length).toBe(6);
  });

  test('In the case of ties, should return the highest number of first place', () => {
    const ballot1 = new Ballot(['Winner', 'Winner2', 'ThirdPerson']);
    const ballot2 = new Ballot(['Winner', 'Winner2', 'ThirdPerson']);

    const ballot3 = new Ballot(['Winner2', 'Winner', 'ThirdPerson']);
    const ballot4 = new Ballot(['OtherCandidate', 'OtherCandidate2', 'Winner2']);

    const voteCounter = new VoteCounter();
    const result = voteCounter.getResults([ballot1, ballot2, ballot3, ballot4]);

    expect(result[0]).toBe('Winner');
    expect(result[1]).toBe('Winner2');
    expect(result[2]).toBe('OtherCandidate');

    expect(result.length).toBe(5);
  });
});
