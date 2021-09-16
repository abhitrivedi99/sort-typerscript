import { Sorter } from './Sorter'

export class NumbersCollection extends Sorter {
	constructor(public data: number[]) {
		super()
	}

	compare(leftIndex: number, rightIndex: number): boolean {
		return this.data[leftIndex] > this.data[rightIndex]
	}

	swap(leftIndex: number, rightIndex: number): void {
		const leftHand = this.data[leftIndex]
		this.data[leftIndex] = this.data[rightIndex]
		this.data[rightIndex] = leftHand
	}

	get length(): number {
		return this.data.length
	}
}

const collection = new NumbersCollection([1, 2, 3])
console.log(collection.length)