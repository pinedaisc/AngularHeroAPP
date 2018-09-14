import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
    heroes: any = [];
  constructor(private _heroesServicie: HeroesService, private router: Router) {
  }

  ngOnInit() {
  }

  buscarHeroe(termino: string ) {
    this.router.navigate(['/busqueda', termino]);
  }

}
