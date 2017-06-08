// 1.
// Without logging the values, list the value of `sports` and `total`
var sports = ['soccer', 'baseball'];
var total = sports.push('football', 'swimming');
// A:
// sports = ["soccer", "baseball", "football", "swimming"]
// total = ["soccer", "baseball", "football", "swimming"]


// 2.
// Using the `strings` array, wrte a function `longestString()`
// that accepts an array argument and returns the longest string in the array
var strings = ['this', 'is', 'a', 'collection', 'of', 'words'];
// A:
function sortArrayByLength(arr, ascYN) {
  arr.sort(function(a, b) {
    if (ascYN) return a.length - b.length;
    else return b.length - a.length;
  });
}
sortArrayByLength(strings, true);

var longest = 0;
var longestString = function() {

  for (var i = 0; i < strings.length; i++) {
    var word = strings[i];
    if (strings[i].length > longest) {
      longest = strings[i].length;
    }

    var index = strings.length - 1;
    console.log(strings);
    console.log("length: " + longest + " index: " + index);
    console.log(strings[index]);
    return strings[index];
  }
};

longestString();

//A:------------------

console.assert(longestString(strings) === 'collection', {
  "message": "longestString should return 'collection'"
});
}

// Use the `numbers` array for questions 3 - 8.
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];


// 3.
// Write a function `smallestNumber()` that accepts an array
// and returns the smallest number in the array.
// A:
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];

var smallestNumber = function() {
  smallestNumber = Math.min(1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6);
  console.log(smallestNumber);
  return smallestNumber;
}
smallestNumber();

//A:------------------

console.assert(smallestNumber(numbers) === 1, {
  "message": "smallestNumber should return 1"
});


// 4.
// Write a function `getEvens()` that accepts an array
// and returns only the even numbers in the array.
// A:
var evens = [];
var odds = [];
var evenNumbers = function() {
  for (var i = 0; i < numbers.length; i++) {
    if ((numbers[i] % 2) != 1) {
      evens.push(numbers[i]);
      console.log(evens);
    } else {
      odds.push(numbers[i]);
    }
  }
  return evens;
};
evenNumbers(numbers);

//A:-----------------

console.assert(getEvens(numbers).toString() === '12,4,18,6', {
  'message': 'getEvens should return "12,4,18,6"'
});


// 5.
// Write a function that accepts an array argument
// and returns the array reversed
// Hint: When looping over the array, start at the last index
// and decrement the iterator to zero
// A:
var arrayReverse = function() {
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
var reversed = numbers.reverse();
console.log(numbers);
return numbers;
}
arrayReverse()

//A:------------------

console.assert(arrayReverser(numbers).toString() === '6,5,101,3,11,7,9,18,4,12,1', {
  'message': 'arrayReverser should return "6,5,101,3,11,7,9,18,4,12,1"'
});


// 6.
// Write a function that accepts an array argument
// and returns the sum of all of the numbers in the array
// A:
var getSum = function() {
  var getSum = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4] + numbers[5] + numbers[6] + numbers[7] + numbers[8] + numbers[9] + numbers[10];
  console.log (getSum);
  return getSum;
};
getSum();
//A:------------------

console.assert(sumArrayOfNumbers(numbers) === 177, {
  'message': 'sumArrayOfNumbers should return 177'
});


// 7.
// Write a function that accepts an array argument
// and returns an array of only the numbers greater than 10
// A:
var lessTen = [];
var greaterTen = [];
var tenOrMore = function() {
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > 10) {
      greaterTen.push(numbers[i]);
      console.log(greaterTen);
    } else {
      lessTen.push(numbers[i]);
    }
  }
  return greaterTen;
};
tenOrMore(numbers);
//A:-------------------

console.assert(numbersOver10(numbers).toString() === "12,18,11,101", {
  'message': 'numbersOver10 should return "12,18,11,101"'
});


// 8.
// Write a function that accepts both an array and number argument
// and returns an array of only the numbers greater than the number passed to the function
// A:
var notOverX = [];
var overX = [];
var numbersOverX = function(arr, x) {
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] >= x) {
      overX.push(numbers[i]);
      console.log(overX);
    } else {
      notOverX.push(numbers[i]);
    }
  }
  return overX;
};
numbersOverX(numbers, 15);
//A:-------------------

console.assert(numbersOverX(numbers, 15).toString() === "18,101", {
  'message': 'numbersOverX should return "18,101"'
});

// 9.
// Write a function `joinArrays()` that takes an array of arrays,
// and returns a single array with the contents of the second array
// listed after the contents of the first array
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
var numbersTwo = [33, 56, 72, 2, 5, 66, 90, 21, 42];
// A:


console.assert(joinArrays([numbers, numbersTwo]).toString() === '1,12,4,18,9,7,11,3,101,5,6,33,56,72,2,5,66,90,21,42', {
  'message': 'joinArrays should return "1,12,4,18,9,7,11,3,101,5,6,33,56,72,2,5,66,90,21,42"'
});


// 10.
// Using the `instructors` array, comment the value of each variable below
var instructors = [
  ['JD', 'JavaScript'],
  ['Tim', 'JavaScript'],
  ['Brit', 'Ruby'],
  ['Joe', 'iOS'],
  ['Dan', 'JavaScript'],
  ['Will', 'JavaScript'],
  ['Calvin', 'JavaScript'],
  ['James', 'Ruby']
];

var instructorNameDiscipline = instructors[5];
// greenvIlleInstructor = <your answer>

var instructorOne = instructors[4][0];
// instructorOne = <your answer>

var instructorTwo = instructors[0][1];
// instructorTwo = <your answer>

var instructorThree = instructors[2][0];
// instructorThree = <your answer>
