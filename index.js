
function saturdayFun(x = "roller-skate") {
    return `This Saturday, I want to ${x}!`
}
    
saturdayFun();


saturdayFun("bathe my dog")

//Implement a function expression called mondayWork. The function should return a String like "This Monday, I will ... ." Fill in the ... with the activity that's passed in as the first parameter. If nothing is passed in, default to "go to the office". Run learn to verify you've gotten this set of tests passing before continuing with the lesson.

function mondayWork(y = "go to the office") {
    return `This Monday, I will ${y}.`
}
mondayWork();


// Implement a function called wrapAdjective:

// It should return a function
// This "inner" function should:
// take a single parameter that should default to "special". Name it however you wish.
// return a String of the form "You are ..." where ... should be the adjective this function received wrapped in visual flair
// It should take as parameter a String that will be used to create visual flair
// You may call the parameter whatever you like, but its default value should be "*"
// Call example: const encouragingPromptFunction = wrapAdjective("!!!")
// Thus a total call should be:

// wrapAdjective("%")("a dedicated programmer") //=> "You are %a dedicated programmer%!" 


// function outer(greeting, msg="It's a fine day to learn") { // 2
 // const innerFunction =  function(name, lang="Python") { // 3
   // return `${greeting}, ${name}! ${msg} ${lang}`; // 4
  //}
  //return innerFunction("student", "JavaScript"); // 5


//outer("Hello"); // 1
//=> "Hello, student! It's a fine day to learn JavaScript" 

function wrapAdjective (flair = "*"){
    return function innerFunction (str = "special"){
        return `You are ${flair}${str}${flair}!`
    } 
}