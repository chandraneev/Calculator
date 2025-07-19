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

function percentage(){
    display.value=display.value/100;
}

function backspace(){
    display.value=display.value.slice(0,-1);
}