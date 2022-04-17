import {Component, OnInit} from '@angular/core';
import {swingAnimation} from 'angular-animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [swingAnimation()]
})
export class HomeComponent implements OnInit {
  animationState = false;
  animationWithState = false;
  visible = true;
  left = true;

  constructor() {
  }

  ngOnInit(): void {
    this.animate();
  }

  scroll(id) {
    const el = document.getElementById(id);
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
