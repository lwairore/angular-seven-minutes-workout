import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'abe-finish',
  templateUrl: './finish.component.html',
  styles: [
  ]
})
export class FinishComponent implements OnInit, OnDestroy {
  public workoutName: string;
  private sub: any;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.workoutName = params['id'];
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
