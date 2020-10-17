import { Component, Input } from '@angular/core';
import { ProductsService } from '../../services/products.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: [
  ]
})
export class ProductComponent {

  newProduct: any[] = []

  constructor(private products: ProductsService) {

    let id = window.location.href.split('/')[5]

    this.newProduct = this.products.getProduct();

    /* this.products.getProduct(id).subscribe((data: any) => {
      this.newProducts = data;
      this.loading = false;
    }); */
  }

}
