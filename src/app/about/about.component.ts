import {Component, OnInit, ViewChild} from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})

export class AboutComponent implements OnInit {
  // subheader_role = ['Machine Learning Engineer | Full Stack Developer']
  // subheader_misc = ['AWS Machine Learning Specialist | Speaker @ AIxIA Conference 2019']
  subheader_role = ['Machine Learning Engineer', 'Full Stack Developer', 'AWS Machine Learning Specialist', 'Speaker @ AIxIA Conference 2019']
  constructor() {
  }

  ngOnInit() {
  }
}
