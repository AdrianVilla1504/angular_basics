import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../peliculas.service';

@Component({
  selector: 'app-nuevo-componente',
  templateUrl: './nuevo-componente.component.html',
  styleUrls: ['./nuevo-componente.component.scss']
})

export class NuevoComponenteComponent implements OnInit {
  nombre = 'Navis Code'
  peliculas :{nombre: string; puntuacion: number}[] = []

  constructor(service: PeliculasService) {
    this.peliculas = service.getPeliculas()
  }

  ngOnInit(): void {
  }

}
