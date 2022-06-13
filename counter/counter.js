const btnDecrease = document.getElementById("decrease");
const btnReset = document.getElementById("reset");
const btnIncrease = document.getElementById("increase");
let zero = document.getElementsByClassName("zeroo");
let counter = 0;
btnDecrease.addEventListener("click", function (){
    counter--;
    
    zero[0].textContent = counter;
    if(counter<0){

        zero[0].style.color = "red";
    }
    else if(counter===0){

        zero[0].style.color = "black";
    }

});
btnReset.addEventListener("click", function (){
    counter = 0;
    
    zero[0].textContent = counter;
    if(counter===0){

        zero[0].style.color = "black";
    }
    
});
btnIncrease.addEventListener("click", function (){
    counter++;
    
    if(counter>0){

        zero[0].style.color = "green";
    }
    else if(counter===0){

        zero[0].style.color = "black";
    }
    zero[0].textContent = counter;
    
});