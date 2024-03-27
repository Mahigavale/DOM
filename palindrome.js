


let num=122;

let str1=num.toString(); 
let arr2=str1.split('');
let str2=arr2.reverse();
let str21=str2.join('');
if(str1==str21)
{
    console.log("the given number :",num ,"is the palindorme number " );
}
else
{
    console.log("the given number :",num ,"is not palindrome number ");
}