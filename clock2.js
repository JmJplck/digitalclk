function displaytime(){
    var datetime=new Date();
    var hrs = datetime.getHours();
    var min = datetime.getMinutes();
    var sec = datetime.getSeconds();
    var session = document.getElementById('session');

if(hrs >= 12){
session.innerHTML = 'PM';
}
else{
session.innerHTML = 'AM';
}

if(hrs > 12){
    hrs = hrs -12;
}
document.getElementById('hours').innerHTML = hrs;
document.getElementById('minutes').innerHTML = min;
document.getElementById('seconds').innerHTML = sec;
}
setInterval(displaytime,10);



    
function setalarm(){
    var hrs= new Date().getHours();
    var i=document.getElementById("timeselector3").value;

 if(hrs == i){

        document.getElementById('item4').innerHTML="GOOD AFTERNOON !! TAKE SOME SLEEP";
        document.getElementById('item8').innerHTML="LET'S HAVE SOME LUNCH !!";
        document.getElementById('item9').style.backgroundImage="url(./images/Lunch.png)";
 }  
}



