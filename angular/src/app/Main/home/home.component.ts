import { Component, OnInit } from '@angular/core';
import { count, Subscription } from 'rxjs';
import { Movie } from 'src/app/Models/Movie/movie.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  moviesForView?: Movie[]= [];


subscription!: Subscription;
  constructor(private _movieService: MovieService) { }

  ngOnInit(): void {

    this.getMovies()
  }

  getMovies(){
     this._movieService.getMovies().subscribe({

    next: m => this.moviesForView = m, // permet de réagir quand on recoit une donnée
      error: e => alert("un problème est survenu"), // permet de réagir selon l'erreur qu'on recoit
     complete: () => null

     }
  

    
    );

  
  }
 

}
