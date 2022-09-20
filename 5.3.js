// --------------if/else

function passwordValidation(password){
    if (password.length>7){
        return 'strong'
    } else {
        return 'weak'
    }
}

// -------------ternanry 

function passwordValidation2(password){
    let res = (password.length>7)?'strong':'weak';
    return res  
}


//  ----------&&

function passwordValidation3(password){
    let res = password.length>=7&&'strong';
    if (res == false){
        res= 'weak';
    } 
    return res
}


//-------- advanced validation

function advanced(password){
    let res = password.length>7?password == password.toLowerCase?'strong':'very strong':'weak';
    return res
}


console.log(passwordValidation3('8888'));


