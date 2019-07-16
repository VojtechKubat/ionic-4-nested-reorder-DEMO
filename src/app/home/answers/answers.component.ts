import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-answers',
  templateUrl: 'answers.component.html',
  styleUrls: ['answers.component.scss'],
})
export class AnswersComponent {

  @Input() answers = [];

  itemReorder(event) {
    event.detail["complete"](true);
    event.stopPropagation();
  }

}
