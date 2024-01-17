//function to clear all the values
function clearScreen(){
    document.getElementById("result").value="";
}

//function to display the values
function display(value){
    document.getElementById("result").value +=value;
}


//function evaluates the expression and return the result
function calculate(){
    var p=document.getElementById("result").value;
    var q=eval(p)
    document.getElementById("result").value=q;

}
