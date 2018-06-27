function QandA(nameOfArtist) {
    this.nameOfArtist = nameOfArtist;
    this.chosenArtist = null;
    for (var x = 0 ; x < artistObject.artistsArray.length ; x++) {
        if (artistObject.artistsArray[x].name === nameOfArtist) {      
            this.chosenArtist = artistObject.artistsArray[x].songs; 
        } 
    }
    this.randNumberOfSong = Math.floor(Math.random() * Math.floor(15));
    this.song = this.chosenArtist[this.randNumberOfSong];

    this.randNumberOfOtherSong1 = null;
    this.randNumberOfOtherSong2 = null;

    var diffrentSong = true;
    var diffrentAttributes = true;
    while (diffrentSong || diffrentAttributes) {
        var rand1 = Math.floor(Math.random() * Math.floor(15));
        var rand2 = Math.floor(Math.random() * Math.floor(15));
        if (diffrentSong === true && rand1 !== this.randNumberOfSong && rand2 !== this.randNumberOfSong && rand1 !== rand2) {
            this.randNumberOfOtherSong1 = rand1;
            this.randNumberOfOtherSong2 = rand2;
            diffrentSong = false;
        }
        if (diffrentAttributes === true && this.chosenArtist[rand1].songName !== this.song.songName && this.chosenArtist[rand1].songName !== this.chosenArtist[rand2].songName && this.chosenArtist[rand2].songName !== this.song.songName && this.chosenArtist[rand1].yearReleased !== this.song.yearReleased && this.chosenArtist[rand1].yearReleased !== this.chosenArtist[rand2].yearReleased && this.chosenArtist[rand2].yearReleased !== this.song.yearReleased && this.chosenArtist[rand1].albumOfSong !== this.song.albumOfSong && this.chosenArtist[rand2].albumOfSong !== this.chosenArtist[rand1].albumOfSong && this.chosenArtist[rand2].albumOfSong !== this.song.albumOfSong) {
            this.randNumberOfOtherSong1 = rand1;
            this.randNumberOfOtherSong2 = rand2;
            diffrentAttributes = false;
        }
    }
   
    this.randNumberOfAttribute = Math.floor(Math.random() * Math.floor(6));
    this.notSong1 = this.chosenArtist[this.randNumberOfOtherSong1];
    this.notSong2 = this.chosenArtist[this.randNumberOfOtherSong2];
    this.attribute = null;
    if (this.randNumberOfAttribute === 0) {
        this.attribute = this.song.songName;
    } else if (this.randNumberOfAttribute === 1) {
        this.attribute = this.song.songQuote
    } else if (this.randNumberOfAttribute === 2) {
        this.attribute = this.song.albumOfSong
    } else if (this.randNumberOfAttribute === 3) {
        this.attribute = this.song.songQuote
    } else if (this.randNumberOfAttribute === 4) {
        this.attribute = this.song.songQuote
    } else if (this.randNumberOfAttribute === 5) {
        this.attribute = this.song.songQuote
    } 
    this.answer = null; 
    this.notAnswer1 = null;
    this.notAnswer2 = null;
    if (this.nameOfArtist === 'J Balvin' || this.nameOfArtist === 'Cardi B' || this.nameOfArtist === 'Bad Bunny') {
        this.attribute = this.song.songQuote;
    }
}

QandA.prototype.getSongNameQuestion = function() {
    this.answer = this.song.albumOfSong;
    this.notAnswer1 = this.notSong1.albumOfSong;
    this.notAnswer2 = this.notSong2.albumOfSong;
    return "On what album did this song appear on? \n\n"+this.song.songName;
}

QandA.prototype.getSongQuoteQuestion = function() {
    this.answer = this.song.songName;
    this.notAnswer1 = this.notSong1.songName;
    this.notAnswer2 = this.notSong2.songName;
    return "Which song did this quote come from?\n\n"+this.song.songQuote;
}

QandA.prototype.getAlbumOfSongQuestion = function() {
    this.answer = this.song.yearReleased;
    this.notAnswer1 = this.notSong1.yearReleased;
    this.notAnswer2 = this.notSong2.yearReleased;
    return "What year was this Album released?\n\n"+this.song.albumOfSong;
}

QandA.prototype.randomQuestion = function() {
    if (this.attribute === this.song.songName) {
        return this.getSongNameQuestion();
    } else if (this.attribute === this.song.songQuote) {
        return this.getSongQuoteQuestion();
    } else if (this.attribute === this.song.albumOfSong) {
        return this.getAlbumOfSongQuestion();
    }
}

QandA.prototype.answerOfRandomQuestion = function() {
    
}