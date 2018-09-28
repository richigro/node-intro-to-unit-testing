// import chai assertion library
const expect = require("chai").expect;

// import file that you are testing
const fizzBuzzer = require("../fizzBuzzer.js");

//function to be tested
describe("fizzBuzzer", function(){
    //test normal case
    it("Number that are multiple of 15, 5 or 3 should  have either 'buzz', 'fizz' or 'buzz-fizz' as a result ", function(){
        //normal cases
        const normalCases = [
            {a: 30, expected: 'fizz-buzz'}, 
            {a: 10, expected: 'buzz'},
            {a: 9, expected: 'fizz'}
         ];
        normalCases.forEach(function(input){
            const answer = fizzBuzzer(input.a);
            expect(answer).to.be.equal(input.expected);
        }); 

    });
    // edge test case
    it("Numbers passed should be integers", function(){
         
        const edgeCases = [
            5.1
            ];
        edgeCases.forEach(function(input) {
            expect(() => {fizzBuzzer(input)}).to.not.throw(Error);
        });    
    });
    
});