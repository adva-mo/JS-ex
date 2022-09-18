function today_date(dayToday,dayOfMonth,month,year){
    let text = 'today is '+dayToday+' the '+dayOfMonth+' of '+month+' '+year;
    return text;
}
let x = new Date();

let dayToday = x.getDay();
if (dayToday==0){
    dayToday = 'sunday';
} else if (dayToday==1){
    dayToday = 'monday';
} else if (dayToday==2) {
    dayToday = 'Tuesday';
} else if (dayToday==3) {
    dayToday = 'wednsday';
} else if (dayToday==4) {
    dayToday = 'Thursday';
} else if (dayToday==5) {
    dayToday = 'friday';
} else if (dayToday==6) {
    dayToday = 'saturday';
} 

let dayOfMonth = x.getDate();

let month = x.getMonth();
let months = {
    0:'janury',
    1:'february',
    2:'march',
    3:'april',
    4:'may',
    5:'june',
    6:'july',
    7:'augost',
    8:'september',
    9:'october',
    10: 'november',
    11: 'december'
}
month = months[month];

let year = x.getFullYear();

console.log(today_date(dayToday,dayOfMonth,month,year));
