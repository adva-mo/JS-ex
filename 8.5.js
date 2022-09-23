function reverseObject(object){
    let values = Object.keys(object);
    let keys = Object.values(object);
    var result = {};
    keys.forEach((key, i) => result[key] = values[i]);
    return result;
}

myobject= {
    1:'a',
    2:'b',
    3:'c'
}

console.log(reverseObject(myobject));