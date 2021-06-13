import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.scss']
})
export class OperationComponent implements OnInit {
  @Output() addNewUserStory: EventEmitter<boolean> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onAddNewuserStory() {
    this.addNewUserStory.emit(true);
  }
}
