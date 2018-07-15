import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  public heroes: Hero[];
  public selectedHero: Hero;

  constructor() {
    this.heroes = HEROES;
  }

  public onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  public ngOnInit(): void {
    console.log('HeroesComponent');
  }

}
