import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../shared/movie.model';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input() movie: Movie;
  debugger;
  buttonText = ['Delete','Details'];
  // How to get the Original Movies Array
  @Input() movies: Movie[];
  //length:number = this.movies.length;
  noMovies = true;

  @Input() checked: boolean;

  constructor() { }

  ngOnInit() {
    /*this.ids.push({"movieId":this.movie.MovieId,"selected":this.movie.selectStatus});
    console.log("Currently " + JSON.stringify(this.ids))*/
  
  }

  

  deleteCard(movieObj) {
    for (var i = 0; i < this.movies.length; i++) {
      if (this.movies[i]["MovieId"] === movieObj.MovieId) {
        this.movies.splice(i, 1);
      }
    }

  }
  
  

}

