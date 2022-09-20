let myArray = [3,4,4,3,6,3] ;
var unique = [];

// Go through each car, one at a time.
myArray.forEach(function (val) {
    // The code within the following block runs only if the
    // current car does NOT exist in the uniqueCars list
    // - a.k.a. prevent duplicates
    if (unique.indexOf(val) === -1) {
        // Since we now know we haven't seen this car before,
        // copy it to the end of the uniqueCars list.
        unique.push(val);
    }
});
console.log(unique);