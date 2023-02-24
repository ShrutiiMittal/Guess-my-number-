'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent="Correct number";
document.querySelector('.number').textContent=13;
document.querySelector('score').textContent=10;
document.querySelector('.guess').value=23;
console.log(document.querySelector('.guess').value);

*/
let secretNumber= Math.trunc(Math.random()*20)+1;
let score=20;
let highScore=0;


document.querySelector('.check').addEventListener(
    'click', function(){
        const guess=Number(document.querySelector('.guess').value);
        console.log(guess,typeof(guess));

        if(!guess){
            document.querySelector('.message').textContent='No number❌';
        }
        else if(guess===secretNumber)
        {
            document.querySelector('.number').textContent=secretNumber;
            document.querySelector('.message').textContent='Correct number🎉';
            document.querySelector('body').style.backgroundColor= '#60b347';
            document.querySelector('.number').style.width='30rem';
            if(score>highScore)
            {
                highScore=score;
                document.querySelector('.highscore').textContent=highScore;
            }
        }
        else {
            score--;
            if(score>0){
            document.querySelector('.message').textContent=guess>secretNumber? 'Too high':'Too low';
            document.querySelector('.score').textContent=score;
            }
            else{
                document.querySelector('.message').textContent='You Lost😣';
                document.querySelector('.score').textContent=0;
            }
        }
        /*
        else if(guess>secretNumber){
            score--;
            if(score>0){
            document.querySelector('.message').textContent='Too high';
            document.querySelector('.score').textContent=score;
            }
            else{
                document.querySelector('.message').textContent='You Lost😣';
                document.querySelector('.score').textContent=0;
            }
            
        }
        else {
            score--;
            if(score>0){
            document.querySelector('.message').textContent='Too low';
            document.querySelector('.score').textContent=score;
            }
            else{
                document.querySelector('.message').textContent='You Lost😣';
                document.querySelector('.score').textContent=0;
            }
        }*/
    }
);

document.querySelector('.again').addEventListener('click',function(){
    score=20;
    secretNumber= Math.trunc(Math.random()*20)+1;
    document.querySelector('.score').textContent=score;
    document.querySelector('.message').textContent="Start guessing...";
    document.querySelector('.number').textContent="?";
    document.querySelector('.guess').value=null;
    document.querySelector('body').style.backgroundColor="#222";
    document.querySelector('.number').style.width='10rem';
    
    // document.querySelector('.')
})