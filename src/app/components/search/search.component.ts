import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  searchProducts: any[] = this.productsService.getProducts()

  constructor(private productsService: ProductsService) { }

  search(product: string) {
    let products = this.productsService.getProducts();

    this.searchProducts = products.filter(p => p.title.toLowerCase().indexOf(product) !== -1)

  }

}
