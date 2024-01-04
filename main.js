function clickButton(target) {
    const calculateNumber = document.getElementById('display');
    
    const targetVallue = target.innerHTML;
    
    if (targetVallue == "AC") {
        display.innerHTML = "0";
    } else if (targetVallue == "=") {
        display.innerHTML = eval(display.innerHTML);
    } else {
        if (display.innerHTML == "0") {
            display.innerHTML = targetVallue;
        } else {
            display.innerHTML += targetVallue;
        }
    }
}