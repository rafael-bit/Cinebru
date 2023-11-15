import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmeService } from '../filmes/filmes.service';

@Component({
  selector: 'app-filme-detalhes',
  templateUrl: './filme-detalhes.component.html',
  styleUrls: ['./filme-detalhes.component.scss'],
})
export class FilmeDetalhesComponent implements OnInit {
  movie: any;

  constructor(private route: ActivatedRoute, private filmeService: FilmeService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.filmeService.getMovieById(id).subscribe((data: any) => {
        this.movie = data;
        console.log('Detalhes do filme:', this.movie);
      });
    });
  }
}
