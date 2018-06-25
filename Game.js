'use strict'

function main() {
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
    
        button.addEventListener('click', handleStartClick)
    }
    buildSplash();

    function handleStartClick(){
        button.removeEventListener('click', handleStartClick);
        buttonDiv.remove();
        titleDiv.remove(); 
        body.setAttribute('class', 'hide');
        startGame(button.innerText);
    }

    function startGame (nameofartist) { 
        var chosenArtist;
        if (artistObject.artistsArray[5].name === nameofartist) {
            chosenArtist = artistObject.artistsArray[5].songs;
        }
        
        Question(chosenArtist);
    }

    function Question(artistChosen) {
        return ("The song "+ artistChosen[0].songName)
    }

}

window.addEventListener('load', main)

