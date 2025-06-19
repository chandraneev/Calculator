let display=document.querySelector("#dis");

function press(val){
    display.value += val;
}

function calculate(){
    display.value=eval(display.value);
}

function cleardis(){
    display.value="";
}