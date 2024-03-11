const locals = () => {


    
    const firstInput = document.getElementById('input-id');
    const firstValue= firstInput.value;
    const secondInput = document.getElementById('input-value');
    const secondValue = secondInput.value;
//

    if (firstValue && secondValue){
        localStorage.setItem(firstValue,  secondValue);
    }

    firstInput.value = "";

    secondInput.value = "";

}