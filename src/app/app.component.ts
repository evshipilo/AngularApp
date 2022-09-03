import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
// import { products as data } from './data/products';
import { IProduct } from './models/product';
import { ProductService } from './services/product.service';
import { tap } from 'rxjs';
import { ErrorService } from './services/error.service';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {


}
