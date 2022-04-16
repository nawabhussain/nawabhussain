import { Component, OnInit } from '@angular/core';
import {flipAnimation} from 'angular-animations';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations:[flipAnimation()]
})
export class HomeComponent implements OnInit {
  animationState = false;
  animationWithState = false;
  visible = true;
  left = true;
  constructor() { }

  ngOnInit(): void {
    this.animate();
  }

  scroll(id) {
    const el = document.getElementById(id);
    console.log(el);
    el.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  }

  animate() {
    this.animationState = false;
    setTimeout(() => {
      this.animationState = true;
      this.animationWithState = !this.animationWithState;
    }, 1);
  }
}
