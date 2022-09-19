function isLeap (year) {
    if (year%4==0){
        if (year%100==0){
            if (year%400==0){
                isLeap = true;
            } else {
                isLeap= false;
            }
        } else {
            return true;
        }
    }else {
        isLeap = false;
    }
    return isLeap;
}
 
console.log(isLeap(2012));