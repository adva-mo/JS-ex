function boom (n){
    for(let x=1; x<n; x++) {
        if (x%7==0 && (x+'').includes(7)) {
            console.log('BOOM BOOM');
        } else if (x%7==0) {
            console.log('BOOM');
        } else {
            console.log(x);
        }
    }
}

console.log(boom(18));