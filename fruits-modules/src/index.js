import foods from "./foods";
import  { choice, remove } from "./helpers";

// randomly draw a fruit from the array
// log the message "I'd like one RANDOMFRUIT, please." 
// log the message "here you go: RANDOMFRUIT." 
// log the message "Delicious! May I have another?"
//Remove the fruit from the array of fruits
// log the message "i'm sorry, we're all out. We have FRUITSLEFT left"

let fruit = choice(foods);

console.log(`I'd like one ${fruit}, please.`)
console.log(`here you go: ${fruit}.`)
console.log("Delicious! May I have another?")
let fruitsLeft = remove(foods, fruit);
console.log(`I'm sorry, we're all out. We have ${fruitsLeft.length} another fruits left`)

