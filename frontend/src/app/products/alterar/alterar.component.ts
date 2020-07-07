import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/model/Product.model';
import { ProductService } from 'src/app/services/product.service';
import { Validators, FormControl } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt, 'pt');

@Component({
  selector: 'app-alterar',
  templateUrl: './alterar.component.html',
  styleUrls: ['./alterar.component.css']
})
export class AlterarComponent {

  constructor(
    public dialogRef: MatDialogRef<AlterarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product,
    private productService: ProductService
  ) {}

  formControl = new FormControl('', [
    Validators.required,
  ]);

  getErrorMessage() {
    return this.formControl.hasError('required')
      ? 'Campo deve ser preenchido.'
      : '';
  }

   close(): void {
    this.dialogRef.close();
  }

  public save(data:Product): void {
    this.productService.updateProduct(data);
  }

}
