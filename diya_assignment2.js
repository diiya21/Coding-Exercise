// 1. Write a function that takes a string parameter, and it console "YES" if the string,
// contains 'y' other wise it console "NO".
// Example - 'Crazyy'

let lowercaseTheInput = (inputString) => {return inputString.toLowerCase()}

function checkforLetterY(lowercaseTheInput){
  const lowercaseString = lowercaseTheInput()
  if (lowercaseString.includes('y')) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}

// 2. Write a function that finds a factorial of a number.
// Example - 5! = 120 (Use a normal loop for this one.)

function giveFactorial(num)
{
    let factorialValue = 1
    for(let i = 1; i<=num ; i++)
    {
        factorialValue = factorialValue*i
    }
    return factorialValue
}



//3. You have an array of students
// let studentList = [
//   { name: "Mike", marks: [80, 50, 60, 100] },
//   { name: "Daniel", marks: [40, 50, 100, 100] },
//   {
//     name: "Stacy",
//     marks: [20, 100, 50, 70],
//   },
// ];

// function getHighestAverageStudent() {
    // returns the student name with highest average marks
// }

let studentList = [
  { name: "Mike", marks: [80, 50, 60, 100] },
  { name: "Daniel", marks: [40, 50, 100, 100] },
  { name: "Stacy", marks: [20, 100, 50, 70] },
];

function getHighestAverageStudent() {
  let averages = studentList.map(student => {
      let sum = student.marks.reduce((total, mark) => total + mark, 0)
      return sum / student.marks.length;
  });

  let highestAverage = Math.max(...averages);
  let highestAverageStudent = studentList.find(student => {
      let sum = student.marks.reduce((total, mark) => total + mark, 0)
      return (sum / student.marks.length) === highestAverage;
  });

  return highestAverageStudent.name;
}

console.log(getHighestAverageStudent());

//4. HARD Question - You have to write a function that has the highest number of occurrences
// [ 20, 4, -10, 4, 11, 20, 4, 2]; 

function highestOccurences(arr){
  let count = {};
  arr.forEach(num => {
    if (count[num]) {
      count[num]++
    } else {
      count[num] = 1
    }
  });

  let maxCount = 0;
  let mostFrequentNum;
  for (let num in count) {
    if (count[num] > maxCount) {
      maxCount = count[num]
      mostFrequentNum = num
    }
  }

  return parseInt(mostFrequentNum)
}

let arr = [20, 4, -10, 4, 11, 20, 4, 2]
console.log(highestOccurences(arr)); // Output: 4



//5. You have to write a function that has to find a number which is unique in the array (I.e Only occured once)
// [20, 20, 11, 4, 11, 20, 2, 4]

function findUniqueNumber(nums) {
  const numCounts = nums.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});

  const uniqueNum = Object.keys(numCounts).find(num => numCounts[num] === 1);

  return parseInt(uniqueNum);
}




//6. You have an arryay of palindromes and not palindromes,  and you have to return only palindromes array

// ['abc', 'aba', 'ccc', 'dca', 'a']

// ['aba', 'ccc', 'a']

function filterPalindromes(arr) {
  return arr.filter(word => {
    const reversed = word.split('').reverse().join('');
    return word === reversed;
  });
}

const mixedArray = ['abc', 'aba', 'ccc', 'dca', 'a'];
const palindromesArray = filterPalindromes(mixedArray);

console.log(palindromesArray);


















