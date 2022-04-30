//  let a=10
//  function outer(){
//      let b=10
//      function inner(){
//          let c=30
//          console.log(a,b,c);
//      }inner()
// }outer()

// function outer() {
//     let counter = 0
//     function inner() {
//     counter++
//     console.log(counter)
//     }
//     return inner
//     }
//     const fn = outer()
//     fn()
//     fn()
    //function currying
    function sum(a, b, c) {
        return a + b + c
        }
        console.log(sum(2, 3, 5))
        // sum(2,3,5) sum(2) (3) (5)
        function curry (fn) {
        
        return function(a) {
        return function(b) {
        return function(c) {
            return fn(a,b,c)
        }
    }
}
        }
        const curriedSum = curry(sum)
        console.log(curriedSum(2) (3) (5))
        const add2 = curriedSum(2)
        const add3 = add2 (3)
        const add5 = add3 (5)
        console.log(add5)
