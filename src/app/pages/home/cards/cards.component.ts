import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  cardList: CardsModel[] = [
    {
      id: 0,
      name: 'Hamburguer',
      img: 'assets/hamburguer.png',
      value: 19.00,
      description: 'SUCESSO'
    },
    {
      id: 1,
      name: 'Pastel',
      img: 'assets/hamburguer.png',
      value: 119.50,
      description: 'SUCESSO'
    },
    {
      id: 2,
      name: 'Pratos',
      img: 'assets/hamburguer.png',
      value: 1.10,
      description: 'SUCESSO'
    },
    {
      id: 3,
      name: 'frios',
      img: 'assets/hamburguer.png',
      value: 2300.00,
      description: 'SUCESSO'
    }
  ]

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
