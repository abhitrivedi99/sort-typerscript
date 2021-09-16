import { NumbersCollection } from './NumbersCollection'
import { CharacterCollection } from './CharactersCollection'
import { LinkedList } from './LinkedList'

const numbersCollection = new NumbersCollection([10, -3, 0, 5])
numbersCollection.sort()
console.log(numbersCollection.data)

const characterCollection = new CharacterCollection('XYaZazab')
numbersCollection.sort()
console.log(characterCollection.data)

const linkedList = new LinkedList()

linkedList.add(500)
linkedList.add(50)
linkedList.add(-1)
linkedList.add(5)
linkedList.add(-500)

linkedList.sort()
linkedList.print()
