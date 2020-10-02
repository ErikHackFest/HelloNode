console.log("hello world");
if (Math.random() > 0.5) {
    console.log("high");
}else{
    console.log("low");
}


let date_ob = new Date();

let date = ("0" + date_ob.getDate()).slice(-2);

let year = date_ob.getFullYear();

let day = date_ob.getDay();

console.log(year);
console.log(day);


