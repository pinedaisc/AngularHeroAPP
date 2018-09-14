import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
@Component({
  selector: 'app-heroebio',
  templateUrl: './heroebio.component.html',
  styles: []
})
export class HeroebioComponent implements OnInit {

  heroe: any = {};

  constructor(private _heroesServicie: HeroesService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.heroe = this._heroesServicie.getHeroe(params['id']);
      //console.log(this.heroe);
    });
  }

  ngOnInit() {
  }

}
