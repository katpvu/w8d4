// function sum() {
//     let args = Array.prototype.slice.call(arguments);
//     let sum = 0;
//     args.forEach((arg) => {
//         sum += arg;
//     });
//     console.log(sum);
// }

function sum(...args) {
    let sum = 0;
    args.forEach((arg) => {
        sum += arg;
    });
    console.log(sum);
}

// sum(2, 2)

class Cat {
    constructor(name) {
      this.name = name;
    }
  
    says(sound, person) {
      console.log(`${this.name} says ${sound} to ${person}!`);
      return true;
    }
  }
  
  class Dog {
    constructor(name) {
      this.name = name;
    }
  }
  
  const markov = new Cat("Markov");
  const pavlov = new Dog("Pavlov");
  

Function.prototype.myBind = function(ctx) {
    let bindArgs = Array.from(arguments).slice(1);
    let that = this;
    // console.log(bindArgs, "bindArgs")
    return function() {
        let callArgs = Array.from(arguments);
        // console.log(callArgs, "callArgs")
        // console.log("")
        return that.call(ctx, ...bindArgs, ...callArgs)
    }

}

// //bind returns a the same function but with diff context
// Function.prototype.myBind = function(ctx, ...bindArgs){
//     let that = this;
//     return function(...callArgs) {
//         return that.apply(ctx, bindArgs.concat(callArgs))
//     }
// }

markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

// bind time args are "meow" and "Kush", no call time args
markov.says.myBind(pavlov, "meow", "Kush")();
// Pavlov says meow to Kush!
// true

// no bind time args (other than context), call time args are "meow" and "a tree"
markov.says.myBind(pavlov)("meow", "a tree");
// Pavlov says meow to a tree!
// true

// bind time arg is "meow", call time arg is "Markov"
markov.says.myBind(pavlov, "meow")("Markov");
// Pavlov says meow to Markov!
// true

// no bind time args (other than context), call time args are "meow" and "me"
const notMarkovSays = markov.says.myBind(pavlov);
notMarkovSays("meow", "me");
// Pavlov says meow to me!
// true
