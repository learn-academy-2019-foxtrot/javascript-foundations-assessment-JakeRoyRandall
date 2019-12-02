// ASSESSMENT 2: JAVASCRIPT FOUNDATIONS
// Coding practical questions

// 1. Write a function that takes a number as an argument and decides if the number
// is evenly divisble by three or not. Use the test cases 15, 0, 385, -7.
// Expected output: "15 is divisible by three", "0 is divisible by three",
// "385 is not divisble by three", "-7 is not divisble by three".

const divBy3 = (num) => {
      if (num % 3 === 0) {return `${num} is divisble by 3`}
      else {return `${num} is not divisble by 3`}}

// Sanity checks for divBy3()
// console.log(divBy3(15));
// console.log(divBy3(0));
// console.log(divBy3(385));
// console.log(divBy3(-7));

const divBy = (num1, num2) => {
      if (num1 % num2 === 0) {return `${num1} is evenly divisble by ${num2}`}
      else if (num1 % num2 > 0) {return `${num1} is not evenly divisble by ${num2}`}
      else {return `Please enter two valid numbers`}}

// Sanity checks for divBy3()
// console.log(divBy(15, 3));
// console.log(divBy3(0));
// console.log(divBy3(385));
// console.log(divBy3(-7));

// 2. Create an object called helloMe. Include your firstName, lastName and TWO OTHER properties of you. Add a method to your object that will return a sentence using the object properties to describe you.

var helloMe = {
    firstName: "Jake",
    lastName: "Randall",
    birthday: "August 9th",
    birthYear: 1991,
    aboutMe: function () {
      return `Hello, my name is ${helloMe.firstname} ${helloMe.lastname} & I was born on ${helloMe.birthday} ${helloMe.birthYear}`}}

// console.log(helloMe.aboutMe());

// ------------------------------------- Consider the variable:

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]

// 3a. Write a function that returns every other item from the array as one string. Expected output: "streetlamp teeth nephew database"

const getOdd = (array) => {
      let oddArray = []
      for (var i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            oddArray.push(array[i])
        }
      }
      return oddArray.join(" ")
    }

// const getEveryOther = (array) => {
//           let oddArray = array.filter((v, i) => {
//             if (i % 2 === 0) {
//                 v.push(array[i])
//                 return v.join(" ")
//             }
//           })
//
//         }

// Sanity check for getOdd()
// console.log(getOdd(randomNouns));
// console.log(getEveryOther(randomNouns));

// 3b. Create a function that takes in the variable and returns the array with all the words capitalized. Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]

const upperCaseArray = (array) => {
      return array.map(value => value.slice(0,1).toUpperCase() + value.slice(1))
    }

const capitalizer = (array) => {
      return array.map(value => {
        return value[0].toUpperCase().concat(value.slice(1))
      })
}

// Sanity Check for upperCaseArray()
// console.log(upperCaseArray(randomNouns));
// console.log(capitalizer(randomNouns));

// 3c. STRETCH: Create a function that returns the length of each string from the randomNouns variable. Expected output: [10, 6, 5, 10, 6, 11, 8]

const stringLengthArray = (array) => {
      return array.map(value => value.length)
    }

// Sanity check for stringLengthArray()
// console.log(stringLengthArray(randomNouns));


// -------------------------------------- Consider the variables:
var testString1 = "learn"
var testString2 = "academy"
var testString3 = "sandiego"

// 4a. Write a function called alphabetSoup that takes one argument and returns a string with all the letters in alphabetical order. Use each of the varibales as test cases. Expected output: "aelnr" "aacdemy" "adeginos"

const alphabetSoup = (string) => {
      let tempString = string.split("")
      tempString = tempString.sort()
      return tempString.join("")
      // return string.split("").sort().join("") **DUH**
    }



// Sanity checks for alphabetSoup()
// console.log(alphabetSoup(testString1));
// console.log(alphabetSoup(testString2));
// console.log(alphabetSoup(testString3));

// 4b. Write a function that takes in all three variables and returns a string with all the letters in alphabetical order. Expected output: "aaaacddeeegilmnnorsy"

const alphabetScramble = (str1, str2, str3) => {
      let tempString = str1.concat(str2.concat(str3))
      tempString = tempString.split("")
      tempString = tempString.sort()
      return tempString.join("")
    }

const betterAlpabetSoup = (...strings) => {
      return strings.join("").split("").sort().join("")
      }

// Sanity check for alphabetScramble
// console.log(alphabetScramble(testString1, testString2, testString3));
// console.log(betterAlpabetSoup(testString1, testString2, testString3));


// ------------------------------------- Consider the variables:
var amounts = [9, 1, 8, 16, 5, 1, 42]
var animals = ["ducks", "elephants", "pangolins", "zebras", "giraffes", "penguins", "llamas"]

// 5a. Write a function that takes the two variables and returns a combined string. Expected output: "9 ducks 1 elephants 8 pangolins 16 zebras 5 giraffes 1 penguins 42 llamas"

const mergeArraysToString = (arr1, arr2) => {
      let newArr = []
      let tempLength = (arr1.length >= arr2.length) ? arr1.length : arr2.length
      for (var i = 0; i < tempLength; i++) {
          newArr.push(arr1[i])
          newArr.push(arr2[i])
      }
      return newArr.join(" ")
  }

  const combinedArrays = (arr1, arr2) => {
        let combined = arr1.map((v,i) => {
          return v + " " + arr2[i]
        })
        return combined.join(" ");
}

// Sanity check for mergeArraysToString()
// console.log(mergeArraysToString(amounts, animals));
// console.log(combinedArrays(amounts, animals));

// 5b. STRETCH: Create a function that combines the two variables and updates the animal to be singular if the animal's corresponding number is 1. Expected output: "9 ducks 1 elephant 8 pangolins 16 zebras 5 giraffes 1 penguin 42 llamas"

const mergeArraysToSingularString = (arr1, arr2) => {
      let newArr = []
      let tempLength = (arr1.length >= arr2.length) ? arr1.length : arr2.length
      for (var i = 0; i < tempLength; i++) {
          if (arr1[i] === 1 && arr2[i].endsWith("s")) {
              let garbage = arr2[i].slice(0, arr2[i].length - 1)
              newArr.push(arr1[i])
              newArr.push(garbage)
          } else {
            newArr.push(arr1[i])
            newArr.push(arr2[i])
          }
      }
      return newArr.join(" ")
  }

  const combinedArraysAgain = (arr1, arr2) => {
          let combined = arr1.map((v,i) => {
              if (v === 1) {
                  return `1 ${arr2[i].slice(0, arr2[i].length - 1)}`
              } else { return v + " " + arr2[i]}
          })
          return combined.join(" ");
  }


// Sanity check for mergeArraysToSingularString()
// console.log(mergeArraysToSingularString(amounts, animals));
console.log(combinedArraysAgain(amounts, animals));
