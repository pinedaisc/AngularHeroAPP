import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent implements OnInit {

  heroes: any = [];
  termino: string;
  constructor(private _heroesServicie: HeroesService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.termino = params['termino'] ;
      this.heroes = this._heroesServicie.buscarHeroes(this.termino);
    }
  }

  ngOnInit() {}

}
