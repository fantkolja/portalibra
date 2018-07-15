import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  public hero: Hero;

  constructor() {
    this.hero = {
      id: 1,
      name: 'Alarak',
    };
  }

  public ngOnInit(): void {
    console.log('HeroesComponent');
  }

}
