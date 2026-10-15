let strong=[40,10,5,20,30]
let res = strong.sort((a,b)=>a-b)
console.log(res)

let number = [10,20,30,40]
let res = number.reduce((total,num)=>{
    return total+num;
},0);
console.log(res);

let number = [10,20,30,40,50]
let a = number.slice(1,3)
let b = number.splice(2,1)
console.log(a)
console.log(b)

let number = [10,20,15,5]
let result = number.some((n)=>{
    return n > 20;
});
console.log(result);

let number = [10,20,15,5]
let result = number.every((n)=>{
    return n < 30;
});
console.log(result);
