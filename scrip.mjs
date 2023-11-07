let inputvalue=document.getElementById("input");
let output=document.getElementById("output");

function GradeChecking(){
    let input=parseInt(inputvalue.value);

    if(input <=100 && input >=80){
        output.value="A+ Grade";
    }   
    else if (input <80 && input >=70){
        output.value="A Grade";
    }
    else if (input <70 && input >=60){
        output.value="B Grade";
    }
    else if (input <60 && input >=50){
        output.value="C Grade";
    }else{
        output.value="Fail";
    }
}

function clearIfEmpty(CurrentField,SecondField){
    var CurrentField=document.getElementById("CurrentField");
    var SecondField=document.getElementById("SecondField");

    if(CurrentField.value===""){
        SecondField.value="";
    }
}