function QandA(nameofartist) {
    this.nameofartist = nameofartist;
    this.randNumber = Math.floor(Math.random() * Math.floor(15));
    this.chosenArtist = null;
    for (var x = 0 ; x < artistObject.artistsArray.length ; x++) {
        if (artistObject.artistsArray[x].name === nameofartist) {      
            this.chosenArtist = artistObject.artistsArray[x].songs; 
        } 
    }
    this.song = this.chosenArtist[this.randNumber];
}

QandA.prototype.getSongQuote = function() {
   return this.song.songQuote;
}


