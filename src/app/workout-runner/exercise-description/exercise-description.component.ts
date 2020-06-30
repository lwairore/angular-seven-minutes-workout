import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'abe-exercise-description',
  templateUrl: './exercise-description.component.html',
  styles: [
  ]
})
export class ExerciseDescriptionComponent implements OnInit {
  @Input() description: string;
  @Input() steps: string;

  constructor() { }

  ngOnInit(): void {
  }

}
