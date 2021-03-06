import { Component, OnInit } from '@angular/core';
import { flyInOut, expand } from '../animations';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]

})
export class WelcomeComponent implements OnInit {

  constructor() { }
  Helper:boolean = false;
  InNeed:boolean = false;
  ngOnInit() {
  }

  HelperF(){
    this.Helper = !this.Helper;
  }
  InNeedF(){
    this.InNeed = !this.InNeed;
  }
}
