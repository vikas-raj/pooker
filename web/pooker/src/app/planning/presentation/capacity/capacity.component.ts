import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-capacity',
  templateUrl: './capacity.component.html',
  styleUrls: ['./capacity.component.scss']
})
export class CapacityComponent implements OnInit {

  constructor() { }
  actualVelocity = 10;
  totalVelocity = 100;

  ngOnInit(): void {
  }

}
