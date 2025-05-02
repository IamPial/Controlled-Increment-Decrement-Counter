/**
 * Author : Pial Uddin
 * Description : Let's create a counter application with some fancy requirements
 */

//finding all the necessary elements
const resultBody = document.getElementById('result-body');
const incrementInput = document.getElementById('increment-input');
const decrementInput = document.getElementById('decrement-input');
const buttonIncrement = document.getElementById('increment-btn');
const buttonDecrement = document.getElementById('decrement-btn');



let counter;

//Add an eventlistener with increment button
buttonIncrement.addEventListener('click', function(){
    let increment = parseInt(incrementInput.value);
    let result = parseInt(resultBody.innerHTML);

    counter = increment + result;
    
    if(counter <= 9){
        resultBody.innerHTML = `0${counter}`;
    }
    else{
        resultBody.innerHTML = counter;
    }
    incrementInput.value = '1';

});


//Add an eventlistener with decrement button
buttonDecrement.addEventListener('click', function(){

    let decrement = parseInt(decrementInput.value);
    let result = parseInt(resultBody.innerHTML);
  
    counter = result - decrement;

    if(counter < 0){
        alert('Negative values are not allowed!');
    }
    else{
        if(counter <= 9){
            resultBody.innerHTML = `0${counter}`;
        }
        else{
            resultBody.innerHTML = counter;
            
        }
    }
    decrementInput.value = "1";
})







