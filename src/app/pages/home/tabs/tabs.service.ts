import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabsService {

  constructor() { }

  getTabs(): Observable<any[]> {
    let arr = [
      {
        name: 'Pratos frios',
        permition: true,
        cards: [
          {
            id: 0,
            status: true,
            name: 'salada',
            description: 'descrição salada',
            value: 9.99,
            img: 'assets/hamburguer.png',
          },
          {
            id: 1,
            status: true,
            name: 'sorvete',
            description: 'descrição sorvete',
            value: 9.99,
            img: 'assets/hamburguer.png',
          }
        ]
      },
      {
        name: 'Pratos quentes',
        permition: true,
        cards: [
          {
            id: 0,
            status: true,
            name: 'Hambunguer',
            description: 'descrição Hambunguer',
            value: 9.99,
            img: 'assets/hamburguer.png',
          },
          {
            id: 1,
            status: true,
            name: 'Sopa',
            description: 'descrição sopa',
            value: 9.99,
            img: 'assets/hamburguer.png',
          }
        ]
      }
    ];
    return of(arr);
  }

}
