import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { CreateProduct } from '../../models/product.model';

@Component({
  selector: 'app-create-product-modal-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-product-modal.component.html',
  styleUrl: './create-product-modal.component.css'
})
export class CreateProductModalComponent {
  product: CreateProduct = {
    title: '',
    price: 0,
    image: '',
    description: '',
    category: ''
  }
  constructor(private dialogRef: MatDialogRef<CreateProductModalComponent>){

  }
  save(){
    this.dialogRef.close(this.product);
  }
  cancel(){
    this.dialogRef.close();
  }


}
