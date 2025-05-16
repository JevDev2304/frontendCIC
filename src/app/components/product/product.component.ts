import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({required:true}) product!: Product;
  @Output() edit = new EventEmitter<Product>();
  @Output() delete = new EventEmitter<Product>();
  

  onUpdate(event: Event) {
    event.stopPropagation(); 
    this.edit.emit(this.product);
  }
  onDelete(event: Event){
    event.stopPropagation(); 
    this.delete.emit(this.product);
  }

}
