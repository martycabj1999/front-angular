import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

  newProducts: any[] = []
  loading: boolean[];

  constructor(private products: ProductsService) {
    this.loading = true;

    setTimeout(() => {
      this.newProducts = this.products.getProducts();
      this.loading = false;
    }, 1000);

    /* this.products.getProducts().subscribe((data: any) => {
      console.log(data)
      this.newProducts = data;
    }) */

  }

}
