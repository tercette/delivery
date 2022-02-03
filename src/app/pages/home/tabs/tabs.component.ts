import { Component, OnInit } from '@angular/core';
import { TabsService } from './tabs.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  listTabs: any[] = [];

  constructor(private tabsService: TabsService) { }

  ngOnInit() {
    this.tabsService.getTabs().subscribe(list => {
      this.listTabs = list;
    }, err => {
      console.log(err)
    })
  }

}
