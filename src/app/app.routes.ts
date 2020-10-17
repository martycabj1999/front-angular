import { Routes } from '@angular/router'
import { HomeComponent } from './components/home/home.component'
import { SearchComponent } from './components/search/search.component'
import { ProductComponent } from './components/product/product.component'

export const ROUTES = [
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: 'product/:id', component: ProductComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];