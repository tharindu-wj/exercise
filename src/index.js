const { getRandomWordSync, getRandomWord } = require('word-maker');
const fs = require('fs');

console.log('It works!');

// YOUR CODE HERE

/***********************************************
 * Task 1
 * Numbers from 1 to 100 with random word
 * Synchronous
 ***********************************************/
// const taskOne = (_, i) => {
//     let count = i + 1;
//     let word = getRandomWordSync();
//     console.log(`${count}: ${word}`);
// };

// [...Array(100)].map(taskOne);

/*****************************************************
 * Task 2
 * Numbers from 1 to 100 with random word or FizzBuzz
 * Synchronous
 *****************************************************/
// const taskTwo = (_, i) => {
//     let count = i + 1;
//     let word = '';

//     const modulusThree = count % 3;
//     const modulusFive = count % 5;

//     if (modulusThree === 0 && modulusFive === 0) {
//         word = 'FizzBuzz';
//     } else if (modulusThree === 0) {
//         word = 'Fizz';
//     } else if (modulusFive === 0) {
//         word = 'Buzz';
//     } else {
//         word = getRandomWordSync();
//     }

//     console.log(`${count}: ${word}`);
// };

// [...Array(100)].map(taskTwo);

/*******************************************************
 * Task 3
 * Numbers from 1 to 100 with random word
 * Asynchronous
 *******************************************************/
// (async () => {
//     const taskThreeA = async (_, i) => {
//         let count = i + 1;
//         let word = await getRandomWord();
//         return {
//             count,
//             word
//         };
//     };

//     const promises = [...Array(100)].map(taskThreeA);

//     const results = await Promise.all(promises);

//     for (const result of results) {
//         let { count, word } = result;
//         console.log(`${count}: ${word}`);
//     }
// })();

/*******************************************************
 * Task 3
 * Numbers from 1 to 100 with random word or FizzBuzz
 * Asynchronous
 *******************************************************/
// (async () => {
//     const taskThreeB = async (_, i) => {
//         let count = i + 1;
//         let word = '';

//         const modulusThree = count % 3;
//         const modulusFive = count % 5;

//         if (modulusThree === 0 && modulusFive === 0) {
//             word = 'FizzBuzz';
//         } else if (modulusThree === 0) {
//             word = 'Fizz';
//         } else if (modulusFive === 0) {
//             word = 'Buzz';
//         } else {
//             word = await getRandomWord();
//         }

//         return {
//             count,
//             word
//         };
//     };

//     const promises = [...Array(100)].map(taskThreeB);

//     const results = await Promise.all(promises);

//     for (const result of results) {
//         let { count, word } = result;
//         console.log(`${count}: ${word}`);
//     }
// })();

/*******************************************************
 * Task 4
 * Numbers from 1 to 100 with random word or FizzBuzz
 * Synchronous
 * With Errors
 *******************************************************/
// const taskFourSync = (_, i) => {
//     let count = i + 1;
//     let word = '';

//     const modulusThree = count % 3;
//     const modulusFive = count % 5;

//     if (modulusThree === 0 && modulusFive === 0) {
//         word = 'FizzBuzz';
//     } else if (modulusThree === 0) {
//         word = 'Fizz';
//     } else if (modulusFive === 0) {
//         word = 'Buzz';
//     } else {
//         try {
//             word = getRandomWordSync({
//                 withErrors: true
//             });
//         } catch (err) {
//             word = `It shouldn't break anything!`;
//         }
//     }

//     console.log(`${count}: ${word}`);
// };

// [...Array(100)].map(taskFourSync);

/*******************************************************
 * Task 4
 * Numbers from 1 to 100 with random word or FizzBuzz
 * Asynchronous
 * With Errors
 *******************************************************/
// (async () => {
//     const taskFourAsync = async (_, i) => {
//         let count = i + 1;
//         let word = '';

//         const modulusThree = count % 3;
//         const modulusFive = count % 5;

//         if (modulusThree === 0 && modulusFive === 0) {
//             word = 'FizzBuzz';
//         } else if (modulusThree === 0) {
//             word = 'Fizz';
//         } else if (modulusFive === 0) {
//             word = 'Buzz';
//         } else {
//             try {
//                 word = await getRandomWord({
//                     withErrors: true
//                 });
//             } catch (err) {
//                 word = `It shouldn't break anything!`;
//             }
//         }

//         return {
//             count,
//             word
//         };
//     };

//     const promises = [...Array(100)].map(taskFourAsync);

//     const results = await Promise.all(promises);

//     for (const result of results) {
//         let { count, word } = result;
//         console.log(`${count}: ${word}`);
//     }
// })();

/*******************************************************
 * Task 5
 * Numbers from 1 to 100 with random word or FizzBuzz
 * Asynchronous
 * With Errors
 * Write to file with ascending order
 * File path: {project_root}/log.txt
 *******************************************************/
(async () => {
    const taskFive = async (_, i) => {
        let count = i + 1;
        let word = '';

        const modulusThree = count % 3;
        const modulusFive = count % 5;

        if (modulusThree === 0 && modulusFive === 0) {
            word = 'FizzBuzz';
        } else if (modulusThree === 0) {
            word = 'Fizz';
        } else if (modulusFive === 0) {
            word = 'Buzz';
        } else {
            try {
                word = await getRandomWord({
                    withErrors: true,
                    slow: true
                });
            } catch (err) {
                word = `It shouldn't break anything!`;
            }
        }
        return {
            count,
            word
        };
    };

    const promises = [...Array(100)].map(taskFive);

    const results = await Promise.all(promises);

    const writeStream = fs.createWriteStream('log.txt');

    for (const result of results) {
        const { count, word } = result;
        try {
            writeStream.write(`${count}: ${word}\n`);
        } catch (err) {
            console.log(err.message);
        }
    }
})();
