function display(value) {
    var v=document.getElementById("result").value+= value;
}
function calculate(){
    let num1 = document.getElementById("result").value;
    let num2 =eval(num1);
    document.getElementById("result").value=num2;

}
function clr(){
    document.getElementById("result").value="";
}
function de(){
    var ev=document.getElementById("result");
    ev.value=ev.value.slice(0,-1);0
}