var a=0;
var b=0;
var c=0;
var d=0;
var e=0;
var f=0;
var g=0;
var h=0;
let arr;
function fun(num,n)
{
    
        document.getElementById(num).style.backgroundColor="red";
        document.getElementById(num).style.boxShadow="-5px 5px 15px white";
        setTimeout(close,1500);
        function close()
            {
               document.getElementById(num).style.backgroundColor="white";
                document.getElementById(num).style.boxShadow="0 0 0";
            }
    if(num==='num1')
    {
     a++;
     console.log(a);
    }
    if(num==='num2')
    {
     b++;
     console.log(b);
    }
    if(num==='num3')
    {
     c++;
     console.log(c);
    }
    if(num==='num4')
    {
     d++;
     console.log(d);
    }
    if(num==='num5')
    {
     e++;
     console.log(e);
    }
    if(num==='num6')
    {
     f++;
     console.log(f);
    }
    if(num==='num7')
    {
     g++;
     console.log(g);
    }
    if(num==='num8')
    {
     h++;
     console.log(h);
    }
    arr=[a,b,c,d,e,f,g,h];
}

function result(){
   let text=document.getElementsByClassName("button");
   document.getElementById("button").style.fontSize="50px";

   let i=0;
   for(let em of text)
   {
      em.innerHTML=arr[i];
      i++;
   }
}
