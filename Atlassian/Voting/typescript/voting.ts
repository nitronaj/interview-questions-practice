export class Ballot {
    private votes: string[]

    public constructor(votes: string[]) {
        this.votes = votes;
    }

    public getVotes() {
        return this.votes;
    }
}

export interface IVoteCounter {
    getResults(ballots: Ballot[]): string[];
}

export class VoteCounter implements IVoteCounter {
    private candidateRecord: Record<string, number[]>;

    public constructor() {
        this.candidateRecord = {};
    }

    getResults(ballots: Ballot[]): string[] {
        for (const ballot of ballots) {
            const votes = ballot.getVotes();

            if (!this.candidateRecord[votes[0]]) {
                this.candidateRecord[votes[0]] = [1, 0, 0];
            } else {
                this.candidateRecord[votes[0]][0]++
            }

            if (!this.candidateRecord[votes[1]]) {
                this.candidateRecord[votes[1]] = [0, 1, 0];
            } else {
                this.candidateRecord[votes[1]][1]++
            }

            if (!this.candidateRecord[votes[2]]) {
                this.candidateRecord[votes[2]] = [0, 0, 1];
            } else {
                this.candidateRecord[votes[2]][2]++
            }
        } //O(n) -> n = number of ballots

        return Object.entries(this.candidateRecord).sort((a: [string, number[]], b: [string, number[]]) => { // m = nmber of candidates in records, Time complexity total = O(n) + O(m log m), Space complexity O(m + n)
            const aScore = this.calculateScore(a[1])
            const bScore = this.calculateScore(b[1])

            if (aScore === bScore) {
                return b[1][0] - a[1][0]
            }

            return bScore - aScore
        }).map(x=> x[0])
    }

    private calculateScore(scoreArray: number[]): number {
        return (scoreArray[0] * 3) + (scoreArray[1] * 2) + (scoreArray[2] * 1)
    }
}

// Example
// getResults(["Winner", "RunnerUp", "ThirdPerson"])


const ballot1 = new Ballot(["Winner", "RunnerUp", "ThirdPerson"])
const ballot2 = new Ballot(["OtherCandidate1", "RunnerUp", "OtherCandidate2"])

const voteCounter = new VoteCounter();
console.log(voteCounter.getResults([ballot1, ballot2]))


