import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/product';
import { ErrorService } from 'src/app/services/error.service';
import { ModalService } from 'src/app/services/modal.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  title = 'angular-app';
  loading = false;
  term = '';

  products: IProduct[] = [];
  // products$: Observable<IProduct[]>;

  constructor(public productServise: ProductService, private errorServise: ErrorService, public modalService: ModalService) {}

  ngOnInit(): void {
    this.loading = true;
    // this.products$ = this.productServise
    //   .getAll()
    //   .pipe(tap(() => (this.loading = false)),
    //   );

    this.productServise.getAll().subscribe((products) => {
      this.loading = false;
    });
  }

}
