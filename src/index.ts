import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
// import { CharactersCollection } from './CharactersCollection';

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
console.log(numbersCollection);
numbersCollection.sort();
console.log(numbersCollection);


