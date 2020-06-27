import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nu-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  bannerHeight: number = 570;

  constructor() { }

  ngOnInit(): void {
  }

}
