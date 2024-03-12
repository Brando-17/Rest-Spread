// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

// ES2015
const filterOutOdds = (...arguments) => arguments.filter(num => num % 2 ===0);

// find Min

const findMin = (...nums) => Math.min(...nums);

const mergeObjects = (obj1, obj2) => ({...obj1,...obj2});

// accepts array and makes a new array that is doubled
const double = (argument ,...argument2) => [...argument,...argument.map(num => num *2)];



/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = items => {
    let index = math.floor(math.random() * items.length);
    return [...items.slice(0,index), ...items.slice(index +1)]
}

/** Return a new array with every item in array1 and array2. */

// function extend(array1, array2) {}

const extend = (array1,array2) => {
    return [...array1,...aray2]
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

// function addKeyVal(obj, key, val) {}

const addKeyVal = (obj,key,val) => {
    let newObj = {...obj}
    newObj[key] = val;
    return newObj
}

/** Return a new object with a key removed. */

// function removeKey(obj, key) {}

const removeKey = (obj,key) => {
    let newObj = {...obj}
    delete newObj[key];
    return newObj
}


/** Combine two objects and return a new object. */

// function combine(obj1, obj2) {}

const combine = (obj1,obj2) => {
    return {...obj1,...obj2}
}


/** Return a new object with a modified key and value. */

// function update(obj, key, val) {}

const update = (obj,key,val) => {
    let newObj = {...obj}
    newObj[key] = val;
    return newObj
}
