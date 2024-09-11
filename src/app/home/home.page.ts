import { Component, OnInit } from '@angular/core';
import { KeepAwake } from '@capacitor-community/keep-awake';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  counter: number = 0;

  constructor() {}

  ngOnInit() {
    this.keepScreenAwake();
  }

  incrementCounter() {
    this.counter++;
  }

  async keepScreenAwake() {
    await KeepAwake.keepAwake();
  }
}
