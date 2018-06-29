'use strict'

function main() {

    var buttonDiv;
    var body;
    var titleDiv;
    var title;
    var buttond;
    var buttonc;
    var buttonb;
    var buttonk;
    var buttonjz;
    var buttonjb;
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
        buttond = document.createElement('img');     // Button Artist option
        buttond.setAttribute('class', 'artist-button-drake');
        buttond.setAttribute('alt', 'Drake');
        buttond.setAttribute('src', 'images/D1.png');
        buttond.innerText = 'Drake'; 
        buttonDiv.appendChild(buttond); 
        buttonc = document.createElement('img');     // Button Artist option
        buttonc.setAttribute('class', 'artist-button-cardib');
        buttonc.setAttribute('alt', 'Cardi B');
        buttonc.setAttribute('src', 'images/CB2.png');
        buttonc.innerText = 'Cardi B'; 
        buttonDiv.appendChild(buttonc);
        buttonb = document.createElement('img');     // Button Artist option
        buttonb.setAttribute('class', 'artist-button-badbunny');
        buttonb.setAttribute('alt', 'Bad Bunny');
        buttonb.setAttribute('src', 'images/BB1.png');
        buttonb.innerText = 'Bad Bunny'; 
        buttonDiv.appendChild(buttonb);
        buttonk = document.createElement('img');     // Button Artist option
        buttonk.setAttribute('class', 'artist-button-kanye');
        buttonk.setAttribute('alt', 'Kanye');
        buttonk.setAttribute('src', 'images/K3.png');
        buttonk.innerText = 'Kanye'; 
        buttonDiv.appendChild(buttonk);
        buttonjz = document.createElement('img');     // Button Artist option
        buttonjz.setAttribute('class', 'artist-button-jay');
        buttonjz.setAttribute('alt', 'Jay-Z');
        buttonjz.setAttribute('src', 'images/J1.png');
        buttonjz.innerText = 'Jay-Z'; 
        buttonDiv.appendChild(buttonjz);
        buttonjb = document.createElement('img');     // Button Artist option
        buttonjb.setAttribute('class', 'artist-button-balvin');
        buttonjb.setAttribute('alt', 'J Balvin');
        buttonjb.setAttribute('src', 'images/JB1.png');
        buttonjb.innerText = 'J Balvin'; 
        buttonDiv.appendChild(buttonjb);
        
        body.appendChild(buttonDiv);                    // Div of Artist's placed after Heading Div
        buttonc.addEventListener('click', startClickc);    // Once you press on Artist Button startClick is called
        buttonb.addEventListener('click', startClickb);
        buttond.addEventListener('click', startClickd);
        buttonjb.addEventListener('click', startClickjb);
        buttonjz.addEventListener('click', startClickjz);
        buttonk.addEventListener('click', startClickk);
    }
    buildSplash();
    var setArtist;
    var mainAudio;
    function startClickc (){      
        removeFromStart();
        setArtist = buttonc.innerText; 
        mainAudio = new Audio ("audio/CBloop.m4a");
        mainAudio.loop = true;
        mainAudio.play();
        gif = document.createElement('img');                // Div created to place questions inside
        gif.setAttribute('class', 'gif');
        gif.setAttribute('alt', 'Cardi B');
        gif.setAttribute('src', 'images/Cgif.gif');
        getQuestion(buttonc.innerText);                     // getQuestion Called
    }
    function startClickb (){      
       removeFromStart();
        setArtist = buttonb.innerText;
        mainAudio = new Audio ("audio/BBloop.m4a");
        mainAudio.loop = true;
        mainAudio.play();
        gif = document.createElement('img');                // Div created to place questions inside
        gif.setAttribute('class', 'gif');
        gif.setAttribute('alt', 'Bad Bunny');
        gif.setAttribute('src', 'images/BBgif.gif');
        getQuestion(buttonb.innerText);                     // getQuestion Called
    }
    function startClickd (){      
       removeFromStart();
        setArtist = buttond.innerText;
        mainAudio = new Audio ("audio/Dloop.mp3");
        mainAudio.loop = true;
        mainAudio.play();
        gif = document.createElement('img');                // Div created to place questions inside
        gif.setAttribute('class', 'gif');
        gif.setAttribute('alt', 'Drake');
        gif.setAttribute('src', 'images/Dgif.gif');
        getQuestion(buttond.innerText);                     // getQuestion Called
    }
    function startClickjb (){      
       removeFromStart();
        setArtist = buttonjb.innerText;
        mainAudio = new Audio ("audio/JBloop.m4a");
        mainAudio.loop = true;
        mainAudio.play();
        gif = document.createElement('img');                // Div created to place questions inside
        gif.setAttribute('class', 'gif');
        gif.setAttribute('alt', 'J Balvin');
        gif.setAttribute('src', 'images/JBgif.gif');
        getQuestion(buttonjb.innerText);                     // getQuestion Called
    }
    function startClickjz (){      
       removeFromStart();
        setArtist = buttonjz.innerText;
        mainAudio = new Audio ("audio/JZloop.m4a");
        mainAudio.loop = true;
        mainAudio.play();
        gif = document.createElement('img');                // Div created to place questions inside
        gif.setAttribute('class', 'gif');
        gif.setAttribute('alt', 'Jay-Z');
        gif.setAttribute('src', 'images/JZgif.gif');
        getQuestion(buttonjz.innerText);                     // getQuestion Called
    }
    function startClickk (){      
       removeFromStart();
        setArtist = buttonk.innerText;
        mainAudio = new Audio ("audio/Kloop.m4a");
        mainAudio.loop = true;
        mainAudio.play();
        gif = document.createElement('img');                // Div created to place questions inside
        gif.setAttribute('class', 'gif');
        gif.setAttribute('alt', 'Kanye');
        gif.setAttribute('src', 'images/Kgif.gif');
        getQuestion(buttonk.innerText);                     // getQuestion Called
    }

    var gif;
    var scoreDiv;
    var scoreText;
    var questionDiv;
    var questionText;
    var answersDiv;
    var innerDivA;
    var innerDivB;
    var innerDivC;
    var buttona;
    var buttonb;
    var buttonc;
    var score = 0;
    var clicks = 0;
    var storeQuestion = [];
    var answer;

    function getQuestion (nameofartist) {
        
        var artist = new QandA(nameofartist);
        var currentQ = artist.randomQuestion();
        var outputQ;
        body = document.body;
        scoreDiv = document.createElement('div');                // Div created to place questions inside
        scoreDiv.setAttribute('class', 'score');
        scoreText = document.createElement('h3');                
        scoreText.setAttribute('class','game-score');
        scoreText.innerText = score+'/'+clicks;
        scoreDiv.appendChild(scoreText);
        body.appendChild(scoreDiv);
        
        questionDiv = document.createElement('div');                // Div created to place questions inside
        questionDiv.setAttribute('class', 'question-box paper');
        questionText = document.createElement('h3');                
        questionText.setAttribute('class','question-text');
        
        
        for (var x = 0 ; x < 100 ; x++) {
            for (var y = 0; y < storeQuestion.length; y++){
                if (storeQuestion[y] === currentQ) {
                    currentQ = artist.randomQuestion();
                }
            }
        }
        
        storeQuestion.push(currentQ);
        outputQ = storeQuestion[storeQuestion.length-1];
        questionText.innerText = outputQ;
        questionDiv.appendChild(questionText);
        body.appendChild(questionDiv);

        var randomAnswer1 = artist.getRandomAnswer();
        var randomAnswer2 = artist.getRandomAnswer();

        for (var x = 0 ; x < 100 ; x++) {
            if (randomAnswer1 === randomAnswer2) {
                randomAnswer2 = artist.getRandomAnswer();
            }
        }

        answer = artist.answer;

        var threeChoices = [];
        var choiceA = 'a';
        var choiceB = 'b';
        var choiceC = 'c';
        threeChoices.push(randomAnswer1);
        threeChoices.push(answer);
        threeChoices.push(randomAnswer2);
        for (var z = 0 ; z < 100 ; z++) {
            if (z === 0) {
                choiceA = threeChoices[Math.floor(Math.random() * Math.floor(3))];
                choiceB = threeChoices[Math.floor(Math.random() * Math.floor(3))];
                choiceC = threeChoices[Math.floor(Math.random() * Math.floor(3))];
            }
            if (choiceA === choiceB) {
                choiceB = threeChoices[Math.floor(Math.random() * Math.floor(3))];
            }
            if (choiceA === choiceC) {
                choiceC = threeChoices[Math.floor(Math.random() * Math.floor(3))];
            }
            if (choiceB === choiceC) {
                choiceC = threeChoices[Math.floor(Math.random() * Math.floor(3))];
            }
        }

        answersDiv = document.createElement('div');         // Div created to place the answers inside
        answersDiv.setAttribute('class', 'answer-boxes');
        
        innerDivA = document.createElement('div');          // Div created to place the answer
        innerDivA.setAttribute('class', 'answer-a-box zoom');
        
        innerDivB = document.createElement('div');          // Div created to place the answer
        innerDivB.setAttribute('class', 'answer-b-box zoom');
        
        innerDivC = document.createElement('div');          // Div created to place the answer
        innerDivC.setAttribute('class', 'answer-c-box zoom');

        buttona = document.createElement('h5');
        buttona.setAttribute('class', 'choice-a');
        buttona.innerText = choiceA;
        
        buttonb = document.createElement('h5');
        buttonb.setAttribute('class', 'choice-b');
        buttonb.innerText = choiceB;

        buttonc = document.createElement('h5');
        buttonc.setAttribute('class', 'choice-c');
        buttonc.innerText = choiceC;

        innerDivA.appendChild(buttona);
        innerDivB.appendChild(buttonb);
        innerDivC.appendChild(buttonc);
        answersDiv.appendChild(innerDivA);
        answersDiv.appendChild(innerDivB);
        answersDiv.appendChild(innerDivC);
        body.appendChild(answersDiv);             // This is what must be edited for 
        body.setAttribute('class', 'game-screen'); // individual Artist background color go to css-html-js
        
        if(nameofartist === 'Kanye') {
            body.setAttribute('class', 'game-screen-kanye');
        }
        if(nameofartist === 'Drake') {
            body.setAttribute('class', 'game-screen-drake');
        }
        if(nameofartist === 'Jay-Z') {
            body.setAttribute('class', 'game-screen-jayz');
        }
        if(nameofartist === 'Bad Bunny') {
            body.setAttribute('class', 'game-screen-badbunny');
        }
        if(nameofartist === 'J Balvin') {
            body.setAttribute('class', 'game-screen-jbalvin');
        }
        if(nameofartist === 'Cardi B') {
            body.setAttribute('class', 'game-screen-cardi');
        }
        innerDivA.addEventListener('click', nextQuestiona);
        innerDivB.addEventListener('click', nextQuestionb);
        innerDivC.addEventListener('click', nextQuestionc);

        clicks++;
        if(clicks > 10) {
            questionDiv.remove();
            answersDiv.remove(); 
            scoreDiv.remove();
            body.setAttribute('class', 'hide');
            endGame();
        }
    }

    

    function nextQuestiona(){
        if (buttona.innerText ===  answer) {
            score++;
        }
        innerDivA.removeEventListener('click', nextQuestiona);
        innerDivB.removeEventListener('click', nextQuestionb);
        innerDivC.removeEventListener('click', nextQuestionc);
        scoreDiv.remove();
        questionDiv.remove();
        answersDiv.remove();
        body.setAttribute('class', 'hide');
        
        getQuestion(setArtist);
    }

    function nextQuestionb(){
        if (buttonb.innerText ===  answer) {
            score++;
        }
        innerDivA.removeEventListener('click', nextQuestiona);
        innerDivB.removeEventListener('click', nextQuestionb);
        innerDivC.removeEventListener('click', nextQuestionc);
        scoreDiv.remove();
        questionDiv.remove();
        answersDiv.remove();
        body.setAttribute('class', 'hide');
        
        getQuestion(setArtist);
    }

    function nextQuestionc(){
        if (buttonc.innerText === answer) {
            score++;
        }
        innerDivA.removeEventListener('click', nextQuestiona);
        innerDivB.removeEventListener('click', nextQuestionb);
        innerDivC.removeEventListener('click', nextQuestionc);
        scoreDiv.remove();
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
        endScoreText.innerText= score+' out of 10';
        endFanGradeText = document.createElement('h1'); 
        
        if (score > 7) {
            endFanGradeText.innerText= 'You\'re a Superfan !!!';

        } else if (score > 4) {
            endFanGradeText.innerText= 'You\'re an OK fan. ';
        } else {
            endFanGradeText.innerText= 'You\'re a Horrible fan !';
        }            
        
        endScoreDiv.appendChild(endScoreText);
        endFanGradeDiv.appendChild(endFanGradeText);
        endGameDiv1.appendChild(endScoreDiv);
        endGameDiv1.appendChild(endFanGradeDiv);
        body.appendChild(endGameDiv1);

        body.appendChild(gif);

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
        score = 0;
        storeQuestion = [];
        gif.remove();
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
        storeQuestion = [];
        score = 0;
        body.setAttribute('class', 'home-page');
        mainAudio.pause();
        gif.remove();
        buildSplash();
    }
}
window.addEventListener('load', main)