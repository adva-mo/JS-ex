function tellFortune(jobTitle, city, partnerName,numberOfChildren){
    let text = 'You will be a '+jobTitle+' in '+city+' married to '+partnerName+' with '+numberOfChildren+' children';
    return text; 
}

console.log(tellFortune('programmer', 'New York', 'Rana', 2));

