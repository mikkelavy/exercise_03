var input = document.querySelector(".product__counter-value");
var inputValue = parseInt(input.value);
document.querySelector(".decrease-btn").onClick = function(){
    input.value = ++inputValue;
}
document.querySelector(".increase-btn").onClick = function(){
    if(inputValue>1){
        input.value = --inputValue;
    }
}