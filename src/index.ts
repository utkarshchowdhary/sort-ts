import { NumbersCollection } from "./collections/NumbersCollection";
import { CharactersCollection } from "./collections/CharactersCollection";
import { LinkedList } from "./collections/LinkedList";

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data); // [-5, 0, 3, 10]

const charactersCollection = new CharactersCollection("crOCoDIliaN");
charactersCollection.sort(); // sorting characters of a string regardless of casing
console.log(charactersCollection.data); // acCDIilNOor

const linkedList = new LinkedList();
linkedList.add(10);
linkedList.add(3);
linkedList.add(-5);
linkedList.add(0);

linkedList.sort();
linkedList.print(); // -5 0 3 10
