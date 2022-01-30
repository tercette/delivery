import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {

  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  openMenu: boolean = false;

  constructor(private observer: BreakpointObserver) { }

  ngAfterViewInit() {
    setTimeout(() => {
      this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
          this.openMenu = false;
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
          this.openMenu = true;
        }
      });
    }, 0)
  }
}
