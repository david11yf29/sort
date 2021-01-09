"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
// import { CharactersCollection } from './CharactersCollection';
var numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0]);
console.log(numbersCollection);
numbersCollection.sort();
console.log(numbersCollection);
