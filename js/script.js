'use strict';

function randomInt(min, max) {
    let rand = min + Math.random() * (max - min);
    return Math.floor(rand);
}

const isNumber = function(userNumber) {
    return !isNaN(parseFloat(userNumber)) && isFinite(userNumber);
};
  
const randomNumber = randomInt(1,100);

function play() {
    let userNumber = prompt('Угадай число от 1 до 100?');
    if (+userNumber === randomNumber) {
        alert('Поздравляю, Вы угадали!!!');
        return;
    }  if (userNumber === null) { 
        alert('Игра окончена');
        return;
    } if (!isNumber(userNumber)) {
        alert('Введи число!');
        play();
    } if (userNumber < randomNumber) {
        alert('Загаданное число больше');
        play();
    } else {
        alert('Загаданное число меньше');
        play();
    }    
}
play();