import {Component, OnInit} from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService }  from '../hero.service';
import {Hero} from "../hero";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero:Hero;

  constructor(
      private route: ActivatedRoute,
      private heroService: HeroService,
      private location: Location
  ) {
      this.route.params.subscribe(params => {
          console.log(params);
      });
  }

  ngOnInit() {
      this.getHero();
  }

  getHero() {
    this.route.params.subscribe(params => {
        //console.log(this.heroService.getHero(params.id));
        this.hero = this.heroService.getHero(params.id);
    });
  }

  goBack() {
      this.location.back();
  }

}


