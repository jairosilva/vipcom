import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { Product } from 'src/app/model/Product.model';
import { ProductService } from 'src/app/services/product.service';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt, 'pt');

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.css'],
})
export class ExcluirComponent {
  constructor(
    public dialogRef: MatDialogRef<ExcluirComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product,
    private productService: ProductService
  ) {}

  close(): void {
    this.dialogRef.close();
  }

  delete(id: number): void {
    this.productService.deleteProduct(id).subscribe(
      (res) => console.log('HTTP response', res),
      (err) => console.log('HTTP Error', err),
      () => console.log('HTTP request completed.')
    );
  }
}
