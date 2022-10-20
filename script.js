'use strict';

/*
console.log(document.querySelector(".message"));   //class ayonde .messgae   
//id anenki #message aakum same concept style as css

console.log(document.querySelector(".message").textContent); // returns the text in the query  ie start guessing..

document.querySelector(".message").textContent = "Lets set"   //changed the text in the .message to lets set


document.querySelector(".number").textContent = 15;
document.querySelector(".score").textContent = 10;


document.querySelector(".guess").value = 23;     */


//Starting the project code

let secretNumber = Math.trunc(Math.random() * 20) +1;
let score = 20;
let highscore = 0;
 //check button
document.querySelector(".check").addEventListener("click",function(){

    const guessNumber =  Number(document.querySelector(".guess").value);    //any input from the user is string

    //game logic
    //no number 
    if(!guessNumber){    //if the user does not enter the input
        document.querySelector(".message").textContent = "!!!Please Enter a VAlue!!!";

    } //crct number
    else if(guessNumber === secretNumber)
    {
        document.querySelector(".message").textContent = "YOU GUESSED THE CORRECT NUMBER";
        document.querySelector("body").style.backgroundColor = "red";
        document.querySelector(".number").style.width = "30rem";
        document.querySelector(".number").textContent = secretNumber;
        if(score>highscore)
        {
           highscore = score; 
           document.querySelector(".highscore").textContent= highscore;
        }
        

    }  
    else if(guessNumber !==secretNumber)
    {
        { if(score>1)
            {
                document.querySelector(".message").textContent =  guessNumber >secretNumber ? "TOO High" :"TOO LOW" ;
                score-=1;
                document.querySelector(".score").textContent = score;
            }
            else 
            {
                document.querySelector(".message").textContent = "YOU LOST";
                document.querySelector(".score").textContent = 0;
            }
        }
        
    }
    /*
    //too high
    else if(guessNumber > secretNumber)
    {
        if(score>1)
        {
            document.querySelector(".message").textContent = "TOO High";
            score-=1;
            document.querySelector(".score").textContent = score;
        }
        else 
        {
            document.querySelector(".message").textContent = "YOU LOST";
            document.querySelector(".score").textContent = 0;
        }
        
    }  //too low
    else if(guessNumber < secretNumber)
    { if(score>1)
        {
            document.querySelector(".message").textContent = "TOO LOW";
            score-=1;
            document.querySelector(".score").textContent = score;
        }
        else 
        {
            document.querySelector(".message").textContent = "YOU LOST";
            document.querySelector(".score").textContent = 0;
        }
    }
    */
    
});

//again button
document.querySelector(".again").addEventListener("click",function()
{
    secretNumber = Math.trunc(Math.random() * 20) +1;
    document.querySelector(".score").textContent = 20;
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
    document.querySelector(".message").textContent = "Start Guessing Again";




});