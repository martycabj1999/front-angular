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

    this.products.getProducts().subscribe((data: any) => {
      this.newProducts = data;
      this.loading = false;
    });

  }

}
