'use strict'

function main() {

    var buttonDiv;
    var body;
    var titleDiv;
    var title;
    var buttond
    var buttonc
    var buttonb
    var buttonk
    var buttonjz
    var buttonjb
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
        buttond = document.createElement('h1');     // Button Artist option
        buttond.setAttribute('class', 'artist-button-drake');
        buttond.innerText = 'Drake'; 
        buttonDiv.appendChild(buttond); 
        buttonc = document.createElement('h1');     // Button Artist option
        buttonc.setAttribute('class', 'artist-button-cardib');
        buttonc.innerText = 'Cardi B'; 
        buttonDiv.appendChild(buttonc);
        buttonb = document.createElement('h1');     // Button Artist option
        buttonb.setAttribute('class', 'artist-button-badbunny');
        buttonb.innerText = 'Bad Bunny'; 
        buttonDiv.appendChild(buttonb);
        buttonk = document.createElement('h1');     // Button Artist option
        buttonk.setAttribute('class', 'artist-button-kanye');
        buttonk.innerText = 'Kanye'; 
        buttonDiv.appendChild(buttonk);
        buttonjz = document.createElement('h1');     // Button Artist option
        buttonjz.setAttribute('class', 'artist-button-jay');
        buttonjz.innerText = 'Jay-Z'; 
        buttonDiv.appendChild(buttonjz);
        buttonjb = document.createElement('h1');     // Button Artist option
        buttonjb.setAttribute('class', 'artist-button-balvin');
        buttonjb.innerText = 'J Balvin'; 
        buttonDiv.appendChild(buttonjb);
        
        body.appendChild(buttonDiv);                    // Div of Artist's placed after Heading Div
        buttonc.addEventListener('click', startClickc)    // Once you press on Artist Button startClick is called
        buttonb.addEventListener('click', startClickb)
        buttond.addEventListener('click', startClickd)
        buttonjb.addEventListener('click', startClickjb)
        buttonjz.addEventListener('click', startClickjz)
        buttonk.addEventListener('click', startClickk)
    }
    buildSplash();
    var setArtist;
    function startClickc (){      
        removeFromStart();
        setArtist = buttonc.innerText;             
        getQuestion(buttonc.innerText);                     // getQuestion Called
    }
    function startClickb (){      
       removeFromStart();
        setArtist = buttonb.innerText;
        getQuestion(buttonb.innerText);                     // getQuestion Called
    }
    function startClickd (){      
       removeFromStart();
        setArtist = buttond.innerText;
        getQuestion(buttond.innerText);                     // getQuestion Called
    }
    function startClickjb (){      
       removeFromStart();
        setArtist = buttonjb.innerText;
        getQuestion(buttonjb.innerText);                     // getQuestion Called
    }
    function startClickjz (){      
       removeFromStart();
        setArtist = buttonjz.innerText;
        getQuestion(buttonjz.innerText);                     // getQuestion Called
    }
    function startClickk (){      
       removeFromStart();
        setArtist = buttonk.innerText;
        getQuestion(buttonk.innerText);                     // getQuestion Called
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
    var storeQuestion = [];
    var currentQ;
    var indexOfA;

    function getQuestion (nameofartist) {
        
        var artist = new QandA(nameofartist);
        currentQ = artist.randomQuestion();
        
        for (var x=0 ; x < 20 ; x++) {
            indexOfA = storeQuestion.indexOf(currentQ)
            if (indexOfA > -1) {
                currentQ = artist.randomQuestion();
            }
        }
        

        body = document.body;
        questionDiv = document.createElement('div');                // Div created to place questions inside
        questionDiv.setAttribute('class', 'question-box paper');
        questionText = document.createElement('h3');                
        questionText.setAttribute('class','question-text')
        questionText.innerText = currentQ;

        storeQuestion.push(currentQ);

        questionDiv.appendChild(questionText);
        body.appendChild(questionDiv);

        var randomAnswer1 = artist.getRandomAnswer();
        var randomAnswer2 = artist.getRandomAnswer();

        for (x=0 ; x < 10 ; x++) {
            if (randomAnswer1 === randomAnswer2) {
                randomAnswer2 = artist.getRandomAnswer();
            }
        }

        answersDiv = document.createElement('div');         // Div created to place the answers inside
        answersDiv.setAttribute('class', 'answer-boxes');
        
        innerDivA = document.createElement('div');          // Div created to place the answer
        innerDivA.setAttribute('class', 'answer-a-box');
        
        innerDivB = document.createElement('div');          // Div created to place the answer
        innerDivB.setAttribute('class', 'answer-b-box');
        
        innerDivC = document.createElement('div');          // Div created to place the answer
        innerDivC.setAttribute('class', 'answer-c-box');

        buttona = document.createElement('h5');
        buttona.setAttribute('class', 'choice-a');
        buttona.innerText = randomAnswer1;

        buttonb = document.createElement('h5');
        buttonb.setAttribute('class', 'choice-b');
        buttonb.innerText = artist.answer;

        buttonc = document.createElement('h5');
        buttonc.setAttribute('class', 'choice-c');
        buttonc.innerText = randomAnswer2;

        innerDivA.appendChild(buttona);
        innerDivB.appendChild(buttonb);
        innerDivC.appendChild(buttonc);
        answersDiv.appendChild(innerDivA);
        answersDiv.appendChild(innerDivB);
        answersDiv.appendChild(innerDivC);
        body.appendChild(answersDiv);             // This is what must be edited for 
        body.setAttribute('class', 'game-screen') // individual Artist background color go to css-html-js
        innerDivA.addEventListener('click', nextQuestiona)
        innerDivB.addEventListener('click', nextQuestionb)
        innerDivC.addEventListener('click', nextQuestionc)

        clicks++;
        if(clicks > 10) {
            questionDiv.remove();
            answersDiv.remove(); 
            body.setAttribute('class', 'hide');
            endGame();
        }
    }

    

    function nextQuestiona(){
        innerDivA.removeEventListener('click', nextQuestiona);
        innerDivB.removeEventListener('click', nextQuestionb);
        innerDivC.removeEventListener('click', nextQuestionc);
        questionDiv.remove();
        answersDiv.remove();
        body.setAttribute('class', 'hide');
        getQuestion(setArtist);
    }

    function nextQuestionb(){
        innerDivA.removeEventListener('click', nextQuestiona);
        innerDivB.removeEventListener('click', nextQuestionb);
        innerDivC.removeEventListener('click', nextQuestionc);
        questionDiv.remove();
        answersDiv.remove();
        body.setAttribute('class', 'hide');
        getQuestion(setArtist);
    }

    function nextQuestionc(){
        innerDivA.removeEventListener('click', nextQuestiona);
        innerDivB.removeEventListener('click', nextQuestionb);
        innerDivC.removeEventListener('click', nextQuestionc);
        questionDiv.remove();
        answersDiv.remove();
        body.setAttribute('class', 'hide');
        getQuestion(setArtist);
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

        tryAgainButtonDiv.addEventListener('click', replay);
        homeButtonDiv.addEventListener('click', goHome);
    }
    function replay () {
        tryAgainButtonDiv.removeEventListener('click', replay);
        homeButtonDiv.removeEventListener('click', goHome);
        endGameDiv1.remove();
        endGameDiv2.remove();
        clicks = 0;
        getQuestion(setArtist);
    }
    function removeFromStart() {
        buttonc.removeEventListener('click', startClickc);    
        buttonb.removeEventListener('click', startClickb);
        buttond.removeEventListener('click', startClickd);
        buttonjb.removeEventListener('click', startClickjb);
        buttonjz.removeEventListener('click', startClickjz);
        buttonk.removeEventListener('click', startClickk); 
        buttonDiv.remove();                
        titleDiv.remove(); 
        body.setAttribute('class', 'hide');
    }
    function goHome(){
        homeButtonDiv.removeEventListener('click', goHome);
        tryAgainButtonDiv.removeEventListener('click', replay);
        endGameDiv1.remove();
        endGameDiv2.remove();
        clicks = 0;
        buildSplash();
    }
}
window.addEventListener('load', main)