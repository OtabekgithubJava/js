document.getElementById('round1').innerHTML = Math.floor(Math.random() * 100);
document.getElementById('round2').innerHTML = Math.floor(Math.random() * 100);

var index = 0;
var selectedOperation = '+';

function refresh() {
    document.getElementById('round1').innerHTML = Math.floor(Math.random() * 100);
    document.getElementById('round2').innerHTML = Math.floor(Math.random() * 100);

    document.getElementsByTagName("body")[0].style.background = numbers[index++];

    if (index > numbers.length - 1)
        index = 0;
}

function check(){
    var round1 = parseInt(document.getElementById('round1').innerHTML);
    var round2 = parseInt(document.getElementById('round2').innerHTML);
    var userGuess = parseInt(document.getElementById('userAnswer').value);
    
    var result;
    switch(selectedOperation) {
        case '+':
            result = round1 + round2;
            break;
        case '-':
            result = round1 - round2;
            break;
        case '*':
            result = round1 * round2;
            break;
        case '/':
            result = round1 / round2;
            break;
        case '%':
            result = round1 % round2;
            break;
    }
    
    if(userGuess === result) {
        alert("Congratulations!");
    } else {
        alert("Incorrect! The correct answer is: " + result);
    }
}

document.getElementById('operation').addEventListener('change', function() {
    selectedOperation = this.value;
    refresh();
});
