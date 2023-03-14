const calculatorPrice = () => {
    const calculatorSwitches = document.querySelector(".calculator__switches"),
        inputNumber = calculatorSwitches.querySelector(".calculator__number"),
        inputRange = calculatorSwitches.querySelector(".calculator__range"),
        inputRangeMin = inputRange.min,
        inputRangeMax = inputRange.max;
    function inputRangeGradient() {
        inputRange.style.backgroundSize =
            (inputRange.value - inputRangeMin) /
                ((inputRangeMax - inputRangeMin) / 100) +
            "%";
    }
    function setValue({ target: { value } }) {
        inputNumber.value = value;
        inputRange.value = value;
        inputRangeGradient();
    }
    inputNumber.value = inputRange.value;
    inputRange.previousElementSibling.textContent = inputRange.min;
    inputRange.nextElementSibling.textContent = inputRange.max;
    inputRangeGradient();
    calculatorSwitches.addEventListener("input", setValue);
};

export default calculatorPrice;
