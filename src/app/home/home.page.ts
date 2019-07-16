import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  questions = [
    {
      question: "Question 1",
      answers: [
        "Yes",
        "No",
        "Not sure",
      ]
    },
    {
      question: "Question 2",
      answers: [
        "A",
        "B",
        "C",
        "D",
      ]
    },
    {
      question: "Question 3",
      answers: [
        "Yes",
        "No",
        "Not sure",
      ]
    }
  ];

  itemReorder(event) {
    event.detail["complete"](true);
  }


}
