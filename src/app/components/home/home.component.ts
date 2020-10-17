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
  categories: any[] = []
  loading: boolean[];
  validate: string;
  empty: boolean = false;

  constructor(private products: ProductsService) {
    this.loading = true;

    /*this.newProducts = this.products.getProducts();

    let cat = []
    this.newProducts.map(product => {
      cat.push(product.category)
    });

    this.categories = cat.filter(this.onlyUnique);*/

    this.products.getProducts().subscribe((data: any) => {
      this.newProducts = data;
      let cat = []
      this.newProducts.map(product => {
        cat.push(product.category)
      });

      this.categories = cat.filter(this.onlyUnique);
      this.loading = false;
    });

  }

  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  search(product: String) {

    let currentProducts = []
    let productsSearch = []

    if (product !== '') {
      this.products.getProducts().subscribe((data: any) => {
        currentProducts = data;
        productsSearch = currentProducts.filter(p => p.name.toLowerCase().indexOf(product) !== -1)
        
        if (productsSearch.length == 0) {
          return this.empty = true
        }

        return this.newProducts = productsSearch;

      });
    } else {
      this.products.getProducts().subscribe((data: any) => {
        console.log(data)
        this.empty = false
        return this.newProducts = data;
      });
    }
  }

  filter(min: Number, max: Number) {

    if (!min) {
      this.validate = "Debe Ingresar un valor"
      return setTimeout(() => {
        this.validate = ""
      }, 1000);
    }
    if (!max) {
      this.validate = "Debe Ingresar un valor"
      return setTimeout(() => {
        this.validate = ""
      }, 1000);
    }

    if (parseFloat(min) > parseFloat(max)) {
      this.validate = "El max debe ser mayor que min"
      return setTimeout(() => {
        this.validate = ""
      }, 1000);
    }

    this.products.getProducts().subscribe((data: any) => {
      let products = data
      let filterProducts = []

      products.map(product => {
        if (product.price > parseFloat(min) && product.price < parseFloat(max)) {
          filterProducts.push(product)
        }
      })

      if (filterProducts.length == 0) {
        return this.empty = true
      }

      return this.newProducts = filterProducts;
    });

  }

  categoryFilter(category: String) {

    this.products.getProducts().subscribe((data: any) => {
      let products = data;
      if (!category) {
        return this.newProducts = products
      }

      return this.newProducts = products.filter(p => p.category.indexOf(category) !== -1)
    });

  }

}
