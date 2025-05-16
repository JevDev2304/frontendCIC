import { CommonModule } from '@angular/common';
import { Component , signal} from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProductComponent } from '../../components/product/product.component';
import { Product, CreateProduct, UpdateProduct, DeleteProduct } from '../../models/product.model';
import { CreateProductModalComponent} from '../../components/create-product-modal-component/create-product-modal.component';
import { UpdateProductModalComponent } from '../../components/update-product-modal/update-product-modal.component';
import { DeleteProductModalComponent } from '../../components/delete-product-modal/delete-product-modal.component';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, ProductComponent],
  standalone:true,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  constructor(private dialog: MatDialog, private productService : ProductService,
    private router: Router
  ) {}
   products = signal<Product[]>([]);
   ngOnInit(){
    this.productService.getProducts().subscribe((data) => {
      this.products.set(data);
    })

   }
   openCreateModal() {
    const dialogRef = this.dialog.open(CreateProductModalComponent, {
      width: '400px'
    });
  
    dialogRef.afterClosed().subscribe((result: CreateProduct) => {
      if (result) {
        this.productService.createProduct(result).subscribe((newProduct) => {
          const current = this.products();
          this.products.set([...current, newProduct]);
        });
        
      }
    });

  }
  openEditModal(product: Product) {
    const dialogRef = this.dialog.open(UpdateProductModalComponent, {
      width: '500px',
      data: { ...product },
    });

    dialogRef.afterClosed().subscribe((product: Product) => {
      if (product) {
        const updateProductDto : UpdateProduct= {
          title: product.title,
          price: product.price,
          image: product.image,
          description: product.description,
          category: product.category
        } 
        this.productService.updateProduct(updateProductDto,product.id).subscribe((updatedProduct) => {
          this.products.set([...this.products().filter((product_i) => product_i.id !== product.id),updatedProduct]);
        });
      }
    });
  }

  openDeleteModal(product: Product) {
    const dialogRef = this.dialog.open(DeleteProductModalComponent, {
      width: '500px',
      data: { ...product },
    });

    

    dialogRef.afterClosed().subscribe((deletedProduct: Product) => {
      if (deletedProduct) {
        const deleteDto : DeleteProduct ={
          id: product.id,
          title: product.title
        }
        this.productService.deleteProduct(deleteDto).subscribe(() => {
          this.products.set(this.products().filter((product) => product.id !== deleteDto.id));
        })
      }
    });
  }
   syncProducts() {
    this.productService.syncProduct().subscribe({
      next: (syncedProducts) => {
        this.products.set(syncedProducts);
        console.log('Productos sincronizados exitosamente', syncedProducts);
      },
      error: (err) => {
        console.error('Error al sincronizar productos', err);
    
      }
    });
  }

  viewProductDetail(productId: number) {
    this.router.navigate(['/products', productId]);
  }
}
