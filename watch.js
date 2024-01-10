let isrunning= false;
let seconds=0;
let hours=0;
let minutes=0;
let timer;
let c=0;
function starttime()
{   if(c===0)
    {
    isrunning=true;
    timer= setInterval(updatetime,1000);
    }
  else{
    isrunning=true;
    clearInterval(timer);
    timer= setInterval(updatetime,1000);
  }
    
}
function stoptime()
{
    isrunning= false;
    clearInterval(timer);
    document.getElementById('x').style.color="red";
    let result= hours+":"+minutes+":"+seconds;
    document.getElementById('x').innerHTML="TIMER STOPPED<br>"+result;
    document.getElementById('x').style.fontSize="large";
}
function reset()
{
    isrunning=false;
    clearInterval(timer);
    seconds=0;
    hours=0;
    minutes=0;
    let result= hours+":"+minutes+":"+seconds;
    document.getElementById('x').innerHTML=result;
    document.getElementById('x').innerHTML="TIMER RESET<br>"+result;
    document.getElementById('x').style.color="yellow";
    document.getElementById('x').style.fontSize="large";
}
function updatetime()
{  if(isrunning===true)
    {seconds++;
    if(seconds===60)
    {
        seconds=0;
        minutes++;
    }
    if(minutes===60)
    {
        minutes=0;
        hours++;
    }
    let result= hours+":"+minutes+":"+seconds;
    
    document.getElementById('x').innerHTML="TIMER IN PROGRESS<br>"+result;
    document.getElementById('x').style.color="purple";
    document.getElementById('x').style.fontSize="large";
}


}
function increment()
{
    isrunning=true;
    c++;
    clearInterval(timer);
    let m= parseInt(prompt("ENTER NUMBER OF TIMES YOU WANT TO INCREMENT TIMER:"));
    timer= setInterval(updatetime,1000/m);
    document.getElementById('x').style.color="blue";
    
}
function decrement()
{
    isrunning=true;
    c++;
    clearInterval(timer);
    let m= parseInt(prompt("ENTER NUMBER OF TIMES YOU WANT TO DECREMENT TIMER:"));
    timer= setInterval(updatetime,1000*m);
    document.getElementById('x').style.color="purple";
    
}
