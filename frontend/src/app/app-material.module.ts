import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule, MatList } from '@angular/material/list';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgpMaterialRatingModule } from 'ngp-material-rating';

@NgModule({
  declarations: [],
  imports: [
    NgpMaterialRatingModule,
   BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule,
    MatMenuModule,
    MatDialogModule,
    MatListModule,
  ],
})
export class AppMaterialModule {}
