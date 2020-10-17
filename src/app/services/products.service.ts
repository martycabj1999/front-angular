import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {
  }

  getProducts() {

    /*return [
      {
        "id": 1,
        "image": "https://picsum.photos/id/566/640/480",
        "title": "The Awakening",
        "price": 33.5,
        "author": "Kate Chopin"
      },
      {
        "id": 2,
        "image": "https://picsum.photos/id/46/640/480",
        "title": "Outliers",
        "price": 99.9,
        "author": "Malcolm Gladwell"
      },
      {
        "id": 3,
        "image": "https://picsum.photos/id/863/640/480",
        "title": "City of Glass",
        "price": 83.5,
        "author": "Paul Auster"
      }
    ]

    const headers = new HttpHeaders({
      
    }) */

    return this.http.get('http://localhost:3000/products');

  }

}
