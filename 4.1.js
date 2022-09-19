// 'use strict';

const prompt = require('prompt-sync')({sigint: true});
    // let guess = prompt('What is your guess?:');
let answer = parseInt(prompt('how many siblings do you have?'));
if (answer === 1 ){
    console.log('1 sibling!');
} else if (answer > 1) {
    console.log('more then 1 sibling');
} else if (answer <=0){
    console.log('no siblings');
}

