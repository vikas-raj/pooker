import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play-cards',
  templateUrl: './play-cards.component.html',
  styleUrls: ['./play-cards.component.scss']
})
export class PlayCardsComponent implements OnInit {
  initialLeftValue = 2;
  selectedIndex?: number = undefined;
  constructor() { }

  ngOnInit(): void {
  }

  getLeftValue(i: number) {
    this.initialLeftValue = i == 0 ? 2 : this.initialLeftValue + 7.3;
    return i == 0 ? 2 : this.initialLeftValue;
  }
  onClick(index: number) {
    this.selectedIndex = index;
  }
}
