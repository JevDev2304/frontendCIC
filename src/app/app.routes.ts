import { Routes } from '@angular/router';
import { ProductListComponent } from './views/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

export const routes: Routes = [
    {
        path: '',
        component: ProductListComponent,
        
    },
    { path: 'products/:id', component: ProductDetailComponent }
];
