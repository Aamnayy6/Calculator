const display=document.querySelector('.display');
let a="";
let b="";
let operation;
let flag=0;
function add(a,b){
    return +a + +b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    if(b==0)
    return "error 0_0";
    return a/b;
}
function percentage(a){
    return a/100;
}
function operator(a,b,op){
    switch (op) {
        case '+':
            updatedisplay(add(a,b));
            break;
        case '-':
            updatedisplay(subtract(a,b));
            break;
        case '*':
            updatedisplay(multiply(a,b));
            break;
        case '/':
            updatedisplay(divide(a,b));
            break;
        case '%':
            updatedisplay(percentage(a));
            break;
        default:
            return "Invalid operator";
    }
}
function updatedisplay(str){

    display.textContent=str;
    
}
function cleardisplay()
{
    display.textContent="";
   
}
function reset()
{
    display.textContent="";
    a="";
    b="";
    operation="";
   
}
const numberbutton=document.querySelectorAll('.number-button');
numberbutton.forEach(button => {
    button.addEventListener('click', ()=>{
        if(flag)
        {
            flag=0;
            cleardisplay();
        }
        updatedisplay(display.textContent+=button.innerHTML);
    })

});
function evaluate(){
    operator(a,b,operation);
    a=display.textContent;
   b="";
}
const clearbutton=document.getElementById('clear');
clearbutton.addEventListener('click', reset);
const operatorbutton=document.querySelectorAll('.operator-button');
operatorbutton.forEach(button=>{
    button.addEventListener('click', ()=>{
        
        if(a==""){
            a=display.textContent;
            }
        else if(b=="" && !flag){
            b=display.textContent;
        evaluate();
        
    }
    flag=1;
    operation=button.id;
    })
});
const percent=document.getElementById('%');
percent.addEventListener('click', ()=>{
    operator(display.textContent, "", "%");
})
const eval=document.getElementById("equals");
eval.addEventListener('click', ()=>{
    if(!flag){
    b=display.textContent;
    evaluate();
    a="";
    flag=1;
    }
})
const decimal=document.getElementById('.');
decimal.addEventListener('click', ()=>{
    let check_decimal=display.textContent;
    if (!check_decimal.includes("."))
    updatedisplay(display.textContent+".");
})
const backspace=document.getElementById('backspace');
backspace.addEventListener('click', ()=>{
    let temp = display.textContent;
    display.textContent=temp.slice(0, -1);
})
const allbuttons=document.querySelectorAll('button');
allbuttons.forEach(button => {
    button.addEventListener('transitionend', ()=>button.classList.remove('button-pop'));
    button.addEventListener('click', ()=> button.classList.add('button-pop'));
  
});