import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from './Hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {

    //TODO: send the message after fetching heroes
    this.messageService.add('HeroService: fetched heroes')
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {

    //TODO: send the message after fetching the hero
    this.messageService.add(`HeroService: fetched hero`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
