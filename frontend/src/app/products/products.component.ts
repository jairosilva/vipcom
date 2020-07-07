import { Component, OnInit } from '@angular/core';
import { Product } from '../model/Product.model';
import { ProductService } from '../services/product.service';
import { MatDialog } from '@angular/material/dialog';
import { ExcluirComponent } from './excluir/excluir.component';
import { AlterarComponent } from './alterar/alterar.component';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { NotificationService } from '../notification.service';

registerLocaleData(localePt, 'pt');

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  dataSource: Product[] = [];
  displayedColumns: string[] = [
    'linha',
    'title',
    'type',
    'rating',
    'price',
    'created',
    'actions',
  ];

  constructor(
    private productService: ProductService,
    public dialog: MatDialog,
    private notifyService : NotificationService
  ) {}

  ngOnInit(): void {
    this.atualizaTabela();

    this.productService.enviouArquivoJson.subscribe(
      (data) => {
        this.atualizaTabela();
      }
    );
  }

  private atualizaTabela(): void {
    this.productService.getProducts().subscribe(
      (data) => {
        this.dataSource = data;
        this.notifyService.showSuccess("Os dados foram atualizados!", "Sucesso");
      },
      (error) => {
        console.log('Erro ao buscar os dados.');
      }
    );
  }

  excluir(produto: Product) {
    const dialogRef = this.dialog.open(ExcluirComponent, {
      data: produto,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 1) {
        this.atualizaTabela();
      }
    });
  }

  alterar(produto: Product) {
    const dialogRef = this.dialog.open(AlterarComponent, {
      data: produto,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 1) {
        this.atualizaTabela();
      }
    });
  }
}
