import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play-cards',
  templateUrl: './play-cards.component.html',
  styleUrls: ['./play-cards.component.scss']
})
export class PlayCardsComponent implements OnInit {
  initialLeftValue = 20;
  selectedIndex?: number = undefined;
  constructor() { }

  ngOnInit(): void {
  }

  getLeftValue(i: number) {
    let zoom = ((window.outerWidth - 10) / window.innerWidth) * 100;

    this.initialLeftValue = i == 0 ? 20 : this.initialLeftValue + 83;
    return i == 0 ? 20 : this.initialLeftValue;
  }
  onClick(index: number) {
    this.selectedIndex = index;
  }
}
