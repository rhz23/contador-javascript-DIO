var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function increment(){
    if (currentNumber < 20){
        currentNumber++;
    }
    if(currentNumber >= 0 ){
        document.getElementById("currentNumber").style.color = 'black';
    }
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement(){
    if (currentNumber > -20){
        currentNumber--;
    }
    if(currentNumber < 0 ){
        document.getElementById("currentNumber").style.color = 'red';
    }
    currentNumberWrapper.innerHTML = currentNumber;

}