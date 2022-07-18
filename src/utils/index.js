const movieArr = [];

class Movie {
  constructor(title, actor = "Not specified", director = "Not Specified") {
    this.title = title;
    this.actor = actor;
    this.director = director;
  }
  add() {
    movieArr.push(this);
    
  }
}

module.exports = Movie;

