import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  listTabs = [
    {
      name: 'Pratos frios 2',
      status: false
    },
    {
      name: 'Pratos quentes',
      status: true
    },
    {
      name: 'Bebidas',
      status: true
    },
    {
      name: 'Sobremesas',
      status: true
    },
  ]

  constructor() {
    this.listTabs = this.listTabs.filter(el => el.status)
  }

  ngOnInit() {
  }

}
