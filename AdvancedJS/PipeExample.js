// First calculate the total cost of the pizza including tax
const calcTotalWithTax = pizzaCost => pizzaCost * 1.13 // Here in Toronto, tax is 13%

// Then calculate the cost of pizza for two people
const costForTwo = itemCost => Math.round(itemCost/2 * 100) / 100

// implement pipe function
// the pipe function accepts only two
// operations
const pipe = (op1, op2) => {
  // return a function that bundles all
  // operations into a single operation
  return (arg) => {
     // first we invoke op1 with the passed
    // arg and save its output
   const result1 = op1(arg);
   // invoke op2 by calling it with
   // saved output of the op1 and return the result of op2
   return op2(result1);
  }
}

//Let's try out the pipe function
const splitTotalCost = pipe(calcTotalWithTax, costForTwo)
console.log(`$5 pizza (plus tax), would cost ${splitTotalCost(5)} between two people`); 
