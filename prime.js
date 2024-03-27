let num=21;

 let flag=new Boolean('true');

 let str='';
for(let i=2;i<num;i++)
{
    if(num%i==0)
    {
        //console.log("number is not prime !");
        flag=false;
        break;
    }
}

if(flag==true)
{
    str="the given number is prime !";
}
else{
    str="the number is not I repeat not prime !";
}

console.log('result',str);