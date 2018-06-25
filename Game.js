'use strict'

function Game() {

    var buttonDiv;
    var button;
    var body;
    var titleDiv;
    var title;
    function buildSplash(){
        body = document.body;
        titleDiv = document.createElement('div');
        titleDiv.setAttribute('class', 'home-title');
        title = document.createElement('h1');
        title.innerText= 'Superfan Quiz';
        titleDiv.appendChild(title);
        body.appendChild(titleDiv);

        buttonDiv = document.createElement('div');
        buttonDiv.setAttribute('class', 'artist-buttons');
        button = document.createElement('button');
        button.setAttribute('class', 'artist-button-drake');
        button.innerText = 'Drake';
        buttonDiv.appendChild(button);
        body.appendChild(buttonDiv);
    
        button.addEventListener('click', startClick)
    }
    buildSplash();

    function startClick(){
        button.removeEventListener('click', startClick);
        buttonDiv.remove();
        titleDiv.remove(); 
        body.setAttribute('class', 'hide');
        startGame(button.innerText);
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
        if (artistObject.artistsArray[5].name === nameofartist) {
            chosenArtist = artistObject.artistsArray[5].songs;
        }
        body = document.body;
        questionDiv = document.createElement('div');
        questionDiv.setAttribute('class', 'question-box paper');
        questionText = document.createElement('h3');
        questionText.setAttribute('class','question-text')
        questionText.innerText= Question(chosenArtist);
        questionDiv.appendChild(questionText);
        body.appendChild(questionDiv);

        answersDiv = document.createElement('div');
        answersDiv.setAttribute('class', 'answer-boxes');
        
        innerDivA = document.createElement('div');
        innerDivA.setAttribute('class', 'answer-a-box');
        
        innerDivB = document.createElement('div');
        innerDivB.setAttribute('class', 'answer-b-box');
        
        innerDivC = document.createElement('div');
        innerDivC.setAttribute('class', 'answer-c-box');
        
        buttona = document.createElement('button');
        buttona.setAttribute('class', 'choice-a');
        buttona.innerText = 'A';

        buttonb = document.createElement('button');
        buttonb.setAttribute('class', 'choice-b');
        buttonb.innerText = 'B';

        buttonc = document.createElement('button');
        buttonc.setAttribute('class', 'choice-c');
        buttonc.innerText = 'C';

        innerDivA.appendChild(buttona);
        innerDivB.appendChild(buttonb);
        innerDivC.appendChild(buttonc);
        answersDiv.appendChild(innerDivA);
        answersDiv.appendChild(innerDivB);
        answersDiv.appendChild(innerDivC);
        body.appendChild(answersDiv);
        body.setAttribute('class', 'game-screen') 

        buttona.addEventListener('click', nextQuestion)
        buttonb.addEventListener('click', nextQuestion)
        buttonc.addEventListener('click', nextQuestion)

        clicks++;
        if(clicks === 11) {
            questionDiv.remove();
            answersDiv.remove(); 
            body.setAttribute('class', 'hide');
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

    function Question(artistChosen) {
        var newRando =getRandomInt(15);
        return ("This "+ button.innerText +" quote is from what song?"+ artistChosen[newRando].songQuote)
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
}

window.addEventListener('load', Game)

