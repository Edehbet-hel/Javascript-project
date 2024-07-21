//  function reversestring(str){
//     return str.split(""). reverse().join("")
    

//  }
//  console.log(reversestring("hello world"))
//  let result= document.getElementById("result")
// console.log(result)

// function count(str){
//    let name="bethel";
//
//   let length=name.length
//    return length;?


// }
// console.log(count());

//   let str="hello world";
//   let capitalizedstr=str.charAt(0).toUpperCase()
//  console.log(capitalizedstr);





// let arr=[12,3,9,90,45,32];

// let min= arr[0];
// let max= 0;
// let len= arr.length;

// for(let i=0; i < len- 1;i++){
//     if(min>arr[i]){
//         min= arr[i];
        
//     }
//     if (max < arr[i]){
//         max = arr[i];
//     }
//     min;
//     max;
// }
// console.log("Minimum value in array is ; = + 3");
// console.log("Maximum value in array is ; = + 90");


// function sumArray(arr){
//     let sum=0;
//     for(let i =0; i < arr.length;i++){
//         sum=sum+arr[i];
//     }
//     return sum;
// }
// const arr=[,2,3,4,5];
// sumArray(arr);

// const numbers=[1,2,3,4,5,6];
// const even=numbers.filter(isEven);
// function  isEven(value){
//     return value % 2 ===0;
// }
// console.log(even);






 

//  function isPrime(n){
//     if (n < 2)
//         return `${n} is not a prime`
//     for (let i = 2; i < n; i++){
//         if(n % i === 0){
//             return `${n} is not a prime number`


//         }
//     }
//     return `${n} is not a prime number`


//  }
//  console.log(isPrime(17));




// function factorial(n){
//     if (n==0){
//         return 1
//     }
//     else{
//         return factorial(n-1)*n
//     }
// }
// console.log(factorial(8))


var fibonacci=function(result,len){
    var num1=result[0];
    num2=result[1];
    next,
    cnt=2;
    while(cnt<len){
        next=num1+num2
        num1=num2;
        num2=next;
        result.push(next);
        cnt++
    }
    return result;
}