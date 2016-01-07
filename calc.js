var button = document.getElementById("submitButton");
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var answer;
var display = document.getElementById('display');
var dropdown = document.getElementById("dropdown");

button.addEventListener("click", doMath);

function doMath() {
    if  (dropdown.value == "+"){
        answer = parseInt(input1.value) + parseInt(input2.value);
        display.innerHTML = answer;
        
        //This if statement makes it so that if the "+" is selected from the dropdown, it will calculate the sum of whatever numbers are put into the two different spaces.
    }    
    
    if  (dropdown.value == "-"){
        answer = parseInt(input1.value) - parseInt(input2.value);
        display.innerHTML = answer;
        
        //This if statement makes it so that if the "-" is selected from the dropdown, it will calculate the difference between whatever numbers are placed in the two different spaces.
    }
    
    if  (dropdown.value == "x"){
        answer = parseInt(input1.value) * parseInt(input2.value);
        display.innerHTML = answer;
        
        //This if statement makes it so that if the "*" is selected from the dropdown, it will calculate the product of whatever numbers are placed in the two different spaces.
    }
    
    if  (dropdown.value == "/"){
        answer = parseInt(input1.value) / parseInt(input2.value);
        display.innerHTML = answer;
        
        //This if statement makes it so that if the "/" is selected from the dropdown, it will divide the number in the first space by the number in the second space.
    }
    
    if (dropdown.value == "^ (to the power of)"){
        answer = Math.pow(parseInt(input1.value) , parseInt(input2.value));
        display.innerHTML = answer;
        
        //This if statement makes it so that if the "^ (to the power of)" is selected from the dropdown, it will calculate the number in the first space to the power of the number in the second space.
    } 
    
    if  (dropdown.value == ", (square root)"){
        answer = Math.pow(parseInt(input1.value) , 1/parseInt(input2.value));
        display.innerHTML = answer
        
        //This if statement makes it so that if the ", (square root)" is selected from the dropdown, it will calculate the square root of the first number, if the second number is 2.
    }
    
    
}