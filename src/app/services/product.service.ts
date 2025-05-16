import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product, CreateProduct, UpdateProduct, DeleteProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = environment.apiUrl;

  constructor(private http:HttpClient) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.apiUrl}/products`);
  }
  createProduct(createProduct: CreateProduct): Observable<Product>{
    return this.http.post<Product>(`${this.apiUrl}/products`,createProduct);
  }
  updateProduct(updateProduct: UpdateProduct,id : number): Observable<Product>{
    return this.http.put<Product>(`${this.apiUrl}/products/${id}`,updateProduct);
  }
  deleteProduct(deleteProduct: DeleteProduct): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/products/${deleteProduct.id}`);
  }
  syncProduct(): Observable<Product[]>{
    return this.http.post<Product[]>(`${this.apiUrl}/products/sync`,{});
  }
  getProductById(id: number): Observable<Product>{
    return this.http.get<Product>(`${this.apiUrl}/products/${id}`);
  }
}
