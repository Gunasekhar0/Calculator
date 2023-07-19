function add(){
    let a=parseInt(document.getElementById("value1").value);
    let b=parseInt(document.getElementById("value2").value);
    let c=(a+b);

    document.getElementById("A1").innerHTML=c;
}
function sub(){
    let a=parseInt(document.getElementById("value1").value);
    let b=parseInt(document.getElementById("value2").value);
    let c=(a-b);
    document.getElementById("A1").innerHTML=c;

}
function mul(){
    let a=parseInt(document.getElementById("value1").value);
    let b=parseInt(document.getElementById("value2").value);
    let c=(a*b);
    document.getElementById("A1").innerHTML=c;

}
function div(){
    let a=parseInt(document.getElementById("value1").value);
    let b=parseInt(document.getElementById("value2").value);
    let c=(a/b);
    document.getElementById("A1").innerHTML=c;

}

