import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {
  }

  getProducts() {

    return [
      {
        "id": 1,
        "image": "https://picsum.photos/id/566/640/480",
        "name": "The Awakening",
        "price": 33.5,
        "category": "Kate Chopin",
        "description": "DOUUUUU"
      },
      {
        "id": 2,
        "image": "https://picsum.photos/id/46/640/480",
        "name": "Outliers",
        "price": 99.9,
        "category": "Malcolm Gladwell",
        "description": "DOUUUUU"
      },
      {
        "id": 3,
        "image": "https://picsum.photos/id/863/640/480",
        "name": "City of Glass",
        "price": 83.5,
        "category": "Paul Auster",
        "description": "DOUUUUU"
      },
      {
        "id": 1,
        "image": "https://picsum.photos/id/566/640/480",
        "name": "The Awakening",
        "price": 33.5,
        "category": "Kate Chopin",
        "description": "DOUUUUU"
      },
      {
        "id": 2,
        "image": "https://picsum.photos/id/46/640/480",
        "name": "Outliers",
        "price": 99.9,
        "category": "Malcolm Gladwell",
        "description": "DOUUUUU"
      },
      {
        "id": 3,
        "image": "https://picsum.photos/id/863/640/480",
        "name": "City of Glass",
        "price": 83.5,
        "category": "Paul Auster",
        "description": "DOUUUUU"
      }
    ]

    return this.http.get('http://localhost:3000/products');
    return this.http.get('http://localhost:3000/productsid');

  }

  getProduct(id: Number) {

    return {
      "id": 1,
      "image": "https://picsum.photos/id/566/640/480",
      "name": "The Awakening",
      "price": 33.5,
      "category": "Kate Chopin",
      "description": "DOUUUUU"
    }

    return this.http.get('http://localhost:3000/products/' + id);

  }

}
