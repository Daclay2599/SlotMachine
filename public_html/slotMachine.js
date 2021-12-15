
var cash = 1000;

while(cash > 0){
   var bet = Number(prompt('Enter your bet here:'));
    if(bet > cash){
        bet = cash;
    }else
        prompt('You do not have enough money!');
}

var slots = ['0','1','2','3','4','5'];
slots[0] = 'Cherries';
slots[1] = 'Oranges';
slots[2] = 'Plums';
slots[3] = 'Bells';
slots[4] = 'Melons';
slots[5] = 'Bars';

var chanceOne = Math.floor(Math.random()* slots.length);
document.write (chanceOne + ' ');
var chanceTwo = Math.floor(Math.random()* slots.length);
document.write (chanceTwo + ' ');
var chanceThree = Math.floor(Math.random()* slots.length);
document.write (chanceThree + ' ');

