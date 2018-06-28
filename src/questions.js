function QandA(nameOfArtist) {
    this.nameOfArtist = nameOfArtist;
    this.chosenArtist = null;
    for (var x = 0 ; x < artistObject.artistsArray.length ; x++) {
        if (artistObject.artistsArray[x].name === nameOfArtist) {      
            this.chosenArtist = artistObject.artistsArray[x].songs; 
        } 
    }
    this.randNumberOfSong = null;
    this.song = null;
    this.notSong = null;
    this.attribute = null;
    this.randNumberOfAttribute = Math.floor(Math.random() * Math.floor(5));
    this.answer = null; 
    this.notAnswer = null;
    this.notCorrectAnswer = null;
}

QandA.prototype.getSongNameQuestion = function() {
    this.answer = this.song.albumOfSong;
    return "On what album did this song appear on? \n\n"+this.song.songName;
}

QandA.prototype.getSongQuoteQuestion = function() {
    this.answer = this.song.songName;
    return "Which song did this quote come from?\n\n"+this.song.songQuote;
}

QandA.prototype.getAlbumOfSongQuestion = function() {
    this.answer = this.song.yearReleased;
    return "What year was this Album released?\n\n"+this.song.albumOfSong;
}

QandA.prototype.randomQuestion = function() {
    this.randNumberOfSong = Math.floor(Math.random() * Math.floor(15));
    this.song = this.chosenArtist[this.randNumberOfSong];
    
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
    }

    if (this.nameOfArtist === 'J Balvin' || this.nameOfArtist === 'Cardi B' || this.nameOfArtist === 'Bad Bunny') {
        this.attribute = this.song.songQuote;
    }

    if (this.attribute === this.song.songName) {
        return this.getSongNameQuestion();
    } else if (this.attribute === this.song.songQuote) {
        return this.getSongQuoteQuestion();
    } else if (this.attribute === this.song.albumOfSong) {
        return this.getAlbumOfSongQuestion();
    }
}

QandA.prototype.getSongNameAnswer = function() {
    this.notCorrectAnswer = this.song.albumOfSong;
    if (this.notCorrectAnswer === this.answer) {
        this.getRandomAnswer();
    } 
    return this.notCorrectAnswer;
}

QandA.prototype.getSongQuoteAnswer = function() {
    this.notCorrectAnswer = this.song.songName;
    if (this.notCorrectAnswer === this.answer) {
        this.getRandomAnswer();
    }
    return this.notCorrectAnswer;
}

QandA.prototype.getAlbumOfSongAnswer = function() {
    this.notCorrectAnswer = this.song.yearReleased;
    if (this.notCorrectAnswer === this.answer) {
        this.getRandomAnswer();
    }
    return this.notCorrectAnswer;
}

QandA.prototype.getRandomAnswer = function() {
    this.randNumberOfSong = Math.floor(Math.random() * Math.floor(15));
    this.song = this.chosenArtist[this.randNumberOfSong];
    
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
    }

    if (this.nameOfArtist === 'J Balvin' || this.nameOfArtist === 'Cardi B' || this.nameOfArtist === 'Bad Bunny') {
        this.attribute = this.song.songQuote;
    }

    if (this.attribute === this.song.songName) {
        return this.getSongNameAnswer();
    } else if (this.attribute === this.song.songQuote) {
        return this.getSongQuoteAnswer();
    } else if (this.attribute === this.song.albumOfSong) {
        return this.getAlbumOfSongAnswer();
    }

    
}