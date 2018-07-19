import { Injectable }     from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { Hero }           from './hero';
import { HEROES }         from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

    constructor(private messageService: MessageService) { }

    getHeroes(): Observable<Hero[]> {

        // TODO: send the message _after_ fetching the heroes
        this.messageService.add('HeroService: fetched heroes');

        return of(HEROES);
    }

    getHero(id): Hero {

        var hero = HEROES.find(function(hero) {
            return hero.id == id;
        });

        console.log(hero);

        return hero;
    }
}
