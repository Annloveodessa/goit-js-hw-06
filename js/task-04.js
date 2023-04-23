
const value = document.querySelector('#value');
const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');


increment.addEventListener("click", () => {
    
    counterValue = incrementNumber(counterValue);
    value.textContent = counterValue;

})


decrement.addEventListener("click", () => {
    
     counterValue=decrementNumber(counterValue)
    
    value.textContent=counterValue
})

let counterValue = 0; 

function decrementNumber(counterValue) {
    return counterValue - 1
}

    
function incrementNumber(counterValue) {
  return counterValue + 1;
}

