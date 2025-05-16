import { Component , Inject} from '@angular/core';
import { DeleteProduct } from '../../models/product.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-product-modal',
  imports: [],
  templateUrl: './delete-product-modal.component.html',
  styleUrl: './delete-product-modal.component.css'
})
export class DeleteProductModalComponent {
  product: DeleteProduct;

  constructor(
    private dialogRef: MatDialogRef<DeleteProductModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DeleteProduct
  ) {
    this.product = { ...data };
  }
  delete() {
    if (this.product.id) {
      this.dialogRef.close(this.product);
    }
  }

  cancel() {
    this.dialogRef.close();
  }
}
