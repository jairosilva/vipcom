import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppMaterialModule } from './app-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { ExcluirComponent } from './products/excluir/excluir.component';
import { ProductService } from './services/product.service';
import { AlterarComponent } from './products/alterar/alterar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { FileUploadModule } from 'ng2-file-upload';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ExcluirComponent,
    AlterarComponent
  ],
  imports: [
    BrowserModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    FileUploadModule,
    NgxMaskModule.forRoot(),
    ToastrModule.forRoot()
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
