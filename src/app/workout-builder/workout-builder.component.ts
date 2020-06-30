import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'abe-workout-builder',
  template: `
    <!-- <div class="row">
      <div class="col-sm-3"></div>
      <div class="col-sm-6">
          <h1 class="text-center">Workout Builder</h1>
      </div>
      <div class="col-sm-3"></div>
    </div> -->
    <div class="container-fluid fixed-top mt-5">
      <div class="row mt-5">
          <abe-sub-nav-main></abe-sub-nav-main>
      </div>
      <div class="row mt-2">
          <div class="col-sm-12">
              <router-outlet></router-outlet>
          </div>
      </div>
  </div>
  `,
  styles: [
  ]
})
export class WorkoutBuilderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
