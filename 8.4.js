function countLetters(array){

    let res = {};
    for (let w=0 ; w<array.length ; w++){
        for (let l= 0 ; l<(array[w].length); l++){
            if (!res.hasOwnProperty(array[w][l])){
                res[array[w][l]]=1;
            } else {
                res[array[w][l]]+=1;
            }
        }
    }
    return res
}

const array = ["Hello","Good Day","Your Welcome","hotdog", "hamburgers"];
console.log(countLetters(array));