import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  _cardList: CardsModel[] = [];

  @Input() set cardList(value: CardsModel[]) {
    this._cardList = value;
  }

  constructor() { }

  ngOnInit() {
  }

}

export class CardsModel {
  id?: number;
  name?: string;
  img?: string;
  value?: number;
  description?: string;
}
