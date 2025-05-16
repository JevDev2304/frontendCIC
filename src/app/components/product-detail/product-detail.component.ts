import { Component, OnInit, signal, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router'; // Importa Router
import { Product } from '../../models/product.model';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  product = signal<Product | undefined>(undefined);
  error = signal<string | null>(null);
  private destroy$ = new Subject<void>();

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router 
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(takeUntil(this.destroy$))
      .subscribe((params) => {
        const id = params['id'];
        if (id) {
          this.productService.getProductById(id)
            .pipe(takeUntil(this.destroy$))
            .subscribe({
              next: (data) => {
                this.product.set(data);
                this.error.set(null);
              },
              error: (err) => {
                console.error('Error al cargar el producto', err);
                this.error.set('Error al cargar los detalles del producto.');
                this.product.set(undefined);
              }
            });
        } else {
          this.error.set('ID de producto no válido.');
          this.product.set(undefined);
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  goBackToList() {
    this.router.navigate(['/']);
  }
}