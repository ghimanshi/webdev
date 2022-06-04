alert("For better experience, open this link in a desktop, please!");
let a = document.getElementsByClassName("greet").innerHTML;
var message= "Hey, there!";
function ani(){
    for( i=0; i< message.length; i++){
        a=message[0]+message[i];
        setInterval(ani,3000);
    }
}
a.ani();

