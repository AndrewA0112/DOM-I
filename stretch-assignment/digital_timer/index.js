
let timer

let digitsContent = Array.from(document.querySelectorAll(".digits div"));

let colonText = document.getElementById('colon');

let msTensText = document.getElementById('msTens');

let msHundredsText = document.getElementById('msHundreds')

let secondOnesText = document.getElementById('secondOnes')

let secondTensText = document.getElementById('secondTens')

let buttonStart = document.getElementById('start');

let startTimer = function() {
    timer = setInterval(function(){countUp(timer);}, 10)
    buttonStart.disabled = true;
}

let changeColor = function() {
    digitsContent.forEach(elem => elem.classList.add("redDigit", "animated", "flash"));
}

let msTens=0, msHundreds=0, secondOnes=0, secondTens=0;

let countUp = function(myTimer) {
    msTens++;
    if(msTens > 9) {
        msHundreds++
        if(msHundreds > 9) {
            secondOnes++
            if(secondOnes > 9) {
                secondTens++
                clearInterval(myTimer);
                secondTensText.textContent = secondTens;
                secondOnes = 0;
                changeColor();
            }
            secondOnesText.textContent = secondOnes;
            msHundreds = 0;
        }

        msHundredsText.textContent = msHundreds;
        msTens = 0;
    }

    msTensText.textContent = msTens;
}

let resetTimer = function() {
    clearInterval(timer);
    buttonStart.disabled = false;
    msTens = 0, msHundreds = 0, secondOnes = 0, secondTens= 0;
    digitsContent.filter(elem => !elem.classList.contains('colon')).forEach(elem => elem.textContent = '-');
    digitsContent.forEach(elem => elem.classList.remove("redDigit", "animated", "flash"))
}