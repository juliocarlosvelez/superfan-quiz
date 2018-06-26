'use strict'

function Game() {

    var buttonDiv;
    var button;
    var body;
    var titleDiv;
    var title;
    var corrAnsofRanQ;
    function buildSplash(){
        body = document.body;
        titleDiv = document.createElement('div');
        titleDiv.setAttribute('class', 'home-title');  // Div to place the Heading of Splash
        title = document.createElement('h1');   
        title.innerText= 'Superfan Quiz';              // Heading of Splash
        titleDiv.appendChild(title);
        body.appendChild(titleDiv);                    // Div of Heading placed in Body

        buttonDiv = document.createElement('div');     // Div to place all Artist buttons inside
        buttonDiv.setAttribute('class', 'artist-buttons');
        button = document.createElement('button');     // Button Artist option
        button.setAttribute('class', 'artist-button-drake');
        button.innerText = 'Drake'; 
        buttonDiv.appendChild(button);         
        // Cardi B
        // button = document.createElement('button');
        // button.innerText = 'Cardi B';
        buttonDiv.appendChild(button);
        body.appendChild(buttonDiv);                    // Div of Artist's placed after Heading Div
    
        button.addEventListener('click', startClick)    // Once you press on Artist Button startClick is called
    }
    buildSplash();

    function startClick(){      
        button.removeEventListener('click', startClick); // Removed event listener of Artist Button Press
        buttonDiv.remove();                
        titleDiv.remove(); 
        body.setAttribute('class', 'hide');              // Removal of all things in in Splash
        startGame(button.innerText);                     // startGame Called
    }
    var questionDiv;
    var questionText;
    var answersDiv;
    var innerDivA;
    var innerDivB;
    var innerDivC;
    var buttona;
    var buttonb;
    var buttonc;

    var clicks = 0;

    function startGame (nameofartist) { 
        var chosenArtist;
        if (artistObject.artistsArray[5].name === nameofartist) {        // This is so whatever
            chosenArtist = artistObject.artistsArray[5].songs;           // button you pressed 
        } else if (artistObject.artistsArray[0].name === nameofartist) { // that artist is the
            chosenArtist = artistObject.artistsArray[0].songs;           // one you will get the
        } else if (artistObject.artistsArray[1].name === nameofartist) { // questions and answers
            chosenArtist = artistObject.artistsArray[1].songs;
        } else if (artistObject.artistsArray[2].name === nameofartist) {
            chosenArtist = artistObject.artistsArray[2].songs;
        } else if (artistObject.artistsArray[3].name === nameofartist) {
            chosenArtist = artistObject.artistsArray[3].songs;
        } else if (artistObject.artistsArray[4].name === nameofartist) {
            chosenArtist = artistObject.artistsArray[4].songs;
        } 
        body = document.body;
        questionDiv = document.createElement('div');                // Div created to place questions inside
        questionDiv.setAttribute('class', 'question-box paper');
        questionText = document.createElement('h3');                
        questionText.setAttribute('class','question-text')
        questionText.innerText= question(chosenArtist);
        questionDiv.appendChild(questionText);
        body.appendChild(questionDiv);

        answersDiv = document.createElement('div');         // Div created to place the answers inside
        answersDiv.setAttribute('class', 'answer-boxes');
        
        innerDivA = document.createElement('div');          // Div created to place the answer
        innerDivA.setAttribute('class', 'answer-a-box');
        
        innerDivB = document.createElement('div');          // Div created to place the answer
        innerDivB.setAttribute('class', 'answer-b-box');
        
        innerDivC = document.createElement('div');          // Div created to place the answer
        innerDivC.setAttribute('class', 'answer-c-box');
        
        // Need to create a function to get 3 distinct answers







        buttona = document.createElement('h5');
        buttona.setAttribute('class', 'choice-a');
        buttona.innerText = 'A';

        buttonb = document.createElement('h5');
        buttonb.setAttribute('class', 'choice-b');
        buttonb.innerText = corrAnsofRanQ;

        buttonc = document.createElement('h5');
        buttonc.setAttribute('class', 'choice-c');
        buttonc.innerText = 'C';

        innerDivA.appendChild(buttona);
        innerDivB.appendChild(buttonb);
        innerDivC.appendChild(buttonc);
        answersDiv.appendChild(innerDivA);
        answersDiv.appendChild(innerDivB);
        answersDiv.appendChild(innerDivC);
        body.appendChild(answersDiv);             // This is what must be edited for 
        body.setAttribute('class', 'game-screen') // individual Artist background color go to css-html-js
        innerDivA.addEventListener('click', nextQuestion)
        innerDivB.addEventListener('click', nextQuestion)
        innerDivC.addEventListener('click', nextQuestion)

        clicks++;
        if(clicks === 11) {
            questionDiv.remove();
            answersDiv.remove(); 
            body.setAttribute('class', 'hide');
            endGame();
        }
    }

    function nextQuestion(){
        buttona.removeEventListener('click', nextQuestion);
        buttonb.removeEventListener('click', nextQuestion);
        buttonc.removeEventListener('click', nextQuestion);
        questionDiv.remove();
            answersDiv.remove();
        body.setAttribute('class', 'hide');
        startGame(button.innerText);
    }
    
    

    function question(artistChosen) {
        var newRandoQ = getRandomInt(15);  // A Random Number between 0 and 14 is gotten 
        corrAnsofRanQ = artistChosen[newRandoQ].songName; 
        return ("This "+ button.innerText +" quote is from what song?\n\n"+ artistChosen[newRandoQ].songQuote);
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    var endGameDiv1;
    var endGameDiv2;
    var endScoreDiv;
    var endFanGradeDiv;
    var tryAgainButtonDiv;
    var homeButtonDiv;
    var endScoreText;
    var endFanGradeText;
    var tryAgainButtonText;
    var homeButtonText;


    function endGame() {
        body = document.body;

        endGameDiv1 = document.createElement('div');                // Div created to place questions inside
        endGameDiv1.setAttribute('class', 'game-info');
        endScoreDiv = document.createElement('div');                // Div created to place questions inside
        endScoreDiv.setAttribute('class', 'score');
        endFanGradeDiv = document.createElement('div');                // Div created to place questions inside
        endFanGradeDiv.setAttribute('class', 'fan-grade');
        endScoreText = document.createElement('h1');                
        endScoreText.innerText= '9 out of 10';
        endFanGradeText = document.createElement('h1');                
        endFanGradeText.innerText= 'You\'re a Superfan !!!';
        endScoreDiv.appendChild(endScoreText);
        endFanGradeDiv.appendChild(endFanGradeText);
        endGameDiv1.appendChild(endScoreDiv);
        endGameDiv1.appendChild(endFanGradeDiv);
        body.appendChild(endGameDiv1);

        endGameDiv2 = document.createElement('div');                // Div created to place questions inside
        endGameDiv2.setAttribute('class', 'replay-buttons');
        tryAgainButtonDiv = document.createElement('div');                // Div created to place questions inside
        tryAgainButtonDiv.setAttribute('class', 'try-again');
        homeButtonDiv = document.createElement('div');                // Div created to place questions inside
        homeButtonDiv.setAttribute('class', 'home');
        
        tryAgainButtonText = document.createElement('h2');                
        tryAgainButtonText.innerText= 'Try Again';

        homeButtonText = document.createElement('h2');                
        homeButtonText.innerText= 'Home';


        tryAgainButtonDiv.appendChild(tryAgainButtonText);
        homeButtonDiv.appendChild(homeButtonText);
        endGameDiv2.appendChild(tryAgainButtonDiv);
        endGameDiv2.appendChild(homeButtonDiv);
        body.appendChild(endGameDiv2);

        body.setAttribute('class', 'replay-page') // individual Artist background color go to css-html-js
    }

}

window.addEventListener('load', Game)

