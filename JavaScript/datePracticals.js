
//________________________ find date and time in javascript
const date = new Date().toLocaleDateString("en-IN");
console.log(date);

//________________________ find time in javascript
const time = new Date().toLocaleTimeString("en-IN");
console.log(time);

//________________________ find tommorrow's date
const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate()+1);
console.log(tomorrow.toLocaleString('en-IN'));

//________________________ find yesterday's date
const today1 = new Date();
const yesterday = new Date(today1);
yesterday.setDate(yesterday.getDate()-1);
console.log(yesterday.toLocaleString('en-IN'))

//________________________ find the name of the day and month if a date is given
function dayMonName(str){
   let date = new Date(str);
   return date.toLocaleString('en-IN',{weekday:'long',month: 'long'})
}
console.log(dayMonName('2022-12-12'))

//