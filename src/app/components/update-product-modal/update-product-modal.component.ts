import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UpdateProduct } from '../../models/product.model';

@Component({
  selector: 'app-update-product-modal',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './update-product-modal.component.html',
  styleUrl: './update-product-modal.component.css'
})
export class UpdateProductModalComponent {
  product: UpdateProduct;

  constructor(
    private dialogRef: MatDialogRef<UpdateProductModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UpdateProduct
  ) {

    this.product = { 
      ...data,
      description: data.description || '', 
      category: data.category || '' 
    };
  }

  update() {
    if (this.product.title && this.product.price > 0 && this.product.image) {
      this.dialogRef.close(this.product);
    }
  }

  cancel() {
    this.dialogRef.close();
  }
}