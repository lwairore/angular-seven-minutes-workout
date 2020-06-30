import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'abe-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {
  public showHistoryLink = true;

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd))
      .subscribe((e: NavigationEnd) => {
        this.showHistoryLink = !e.url.startsWith('/workout');
      });
  }

  ngOnInit(): void {
  }

}
