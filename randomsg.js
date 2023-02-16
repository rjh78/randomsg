/*
    Author: Robert Hermann
    Date: Feb 16, 2023
    Project: Codecademy project titled Random Message Generator
    Description:  Project as part of Back-End Engineer Path
    Build a message generator program. Every time a user runs a program, they should get a new, randomized output. To make your program truly random, the message that it outputs should be made up of at least three different pieces of data. 

    Project Objectives:
    Build a message generator program using JavaScript
    Use Git version control
    Use command line
*/

//four arrays contain words/phrases used to build random message
let verb = ["achieve", "build", "believe", "create", "imagine", "inspire"];
let noun = [
  "adventure",
  "appreciation",
  "a good attitutde",
  "compassion",
  "self-confidence",
  "determination",
  "integrity",
];
let adjective = [
  "fearless",
  "relentless",
  "motivated",
  "optimistic",
  "meaningful",
  "humble",
  "daring",
];
let infinitive_phrase = [
  "live",
  "learn",
  "challenge yourself",
  "move forward",
  "empower yourself",
  "overcome adversity",
  "be trustworthy",
];

let output_str = "";

//creates random index value for each array
let verbIndex = Math.floor(Math.random() * verb.length);
let nounIndex = Math.floor(Math.random() * noun.length);
let adjectiveIndex = Math.floor(Math.random() * adjective.length);
let infinitive_phraseIndex = Math.floor(
  Math.random() * infinitive_phrase.length
);

//build the random message output string
output_str = `\nYou can ${verb[verbIndex]} positive things with ${noun[nounIndex]}!\n\n Be ${adjective[adjectiveIndex]} in your efforts to ${infinitive_phrase[infinitive_phraseIndex]}!\n`;

console.log(output_str);
