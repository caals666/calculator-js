const displaytext=document.querySelector(".display");
let text="";
let buttons=document.querySelectorAll("button");
let arr=[];
let calc;

function calculate(button){
    let value=button.textContent;
    if(value =="C"){
        arr=[];
        text="";
    }
    else if(value=="<"){
        text=text.slice(0,-1);
    }
    else if(value=="="){
        text= eval(calc);
    }
    else{
        arr.push(value);
        calc=arr.join('');
        text=calc;
    }
    displaytext.textContent=text;
}

buttons.forEach(button =>{button.onclick=() => calculate(button) });