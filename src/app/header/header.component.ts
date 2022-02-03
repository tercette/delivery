import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {

  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  menus = [
    {
      name: 'Inicial',
      icon: 'home',
      url: '/home'
    },
    {
      name: 'Perfil',
      icon: 'person'
    },
    {
      name: 'Sobre nós',
      icon: 'info'
    },
    {
      name: 'Ajuda',
      icon: 'help'
    },
    {
      name: 'Registro',
      icon: 'add',
      url: '/home/register-order'
    },
  ]

  openMenu: boolean = false;

  constructor(
    private observer: BreakpointObserver,
    private router: Router
  ) { }

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

  open(item: any) {
    this.router.navigate([item.url])
  }
}
