import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})

export class HeroesComponent implements OnInit {

  heroes: any[] = [];

  constructor(private _servicio: HeroesService, private router: Router) {}

  ngOnInit() {
    this.heroes = this._servicio.getHeroes();
  }

  verHeroe(index: number ) {
    this.router.navigate(['/heroe', index]);
  }

}
