import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: []
})
export class SearchComponent implements OnInit {

  termino:string = "";
  heroes:Heroe[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService,
    private router: Router ) { 
    //console.log("constructor");
  }

  ngOnInit(){
    this.activatedRoute.params.subscribe( params => {
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes( this.termino );
    });
  }

  verHeroe( idx:number )
  {
    //console.log(idx);
    this.router.navigate( ['/heroe', idx]);
  }
}
