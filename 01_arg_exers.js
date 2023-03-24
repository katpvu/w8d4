// function sum() {
//     let args = Array.prototype.slice.call(arguments);
//     let sum = 0;
//     args.forEach((arg) => {
//         sum += arg;
//     });
//     console.log(sum);
// }

// function sum(...args) {
//     let sum = 0;
//     args.forEach((arg) => {
//         sum += arg;
//     });
//     console.log(sum);
// }

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


let curriedSum = function(numArgs) {
  // console.log(numArgs, "Console log of numArgs")
  let numbers = []
  return function _curriedSum(arg){
    // console.log(arg, "entered sub function")
    numbers.push(arg)
    // console.log(numbers, 'numbers array')
    if (numbers.length === numArgs) {
      let sum = 0
      for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
      } 
      // console.log(sum);
      return sum;
    } else {
     return _curriedSum
    }
  }
  // return _curriedSum
}

const sum = curriedSum(4);
// curriedSum(5)(30)(20)(1);

// console.log(typeof sum)
console.log(sum(5)(30)(20)(1)); // => 56



Function.prototype.curry = function(numArgs){
  let numbers = []
  let that = this
  function _curreied(arg){
    numbers.push(arg)
    if(numArgs == numbers.length) {
    // return that(...numbers)
    return that.apply(that, numbers)
  // return this()
// should return original function
//should use ... or .apply

    }  else {
      return _curreied
// should return itself
  //  let curriedFunction = 
    // retrun this.curry
    }
  }
  return _curreied
}
 

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

sumThree(4, 20, 6); // == 30

// you'll write `Function#curry`!
let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
f1 = f1(4); // [Function]
// console.log(f1)
f1 = f1(20); // [Function]
// console.log(f1)
f1 = f1(6); // = 30
// console.log(f1)

// or more briefly:
console.log(sumThree.curry(3)(4)(20)(6)); // == 30





