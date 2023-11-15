import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilmeService } from './filmes.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.scss']
})
export class FilmeComponent implements OnInit {
  movies: any[] = [];
  searchTerm: string = '';

  constructor(private movieService: FilmeService, private router: Router) { }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((data: any) => {
      this.movies = data;
    });
  }

  filterMovies() {
    if (this.searchTerm.trim() === '') {
      this.movieService.getMovies().subscribe((data: any) => {
        this.movies = data.filmes;
      });
    } else {
      this.movies = this.movies.filter((movie: any) => {
        return movie.titulo_traduzido.toLowerCase().includes(this.searchTerm.toLowerCase());
      });
    }
  }

  viewDetails(id: number) {
    this.router.navigate(['movie-details', id]);
  }
}
