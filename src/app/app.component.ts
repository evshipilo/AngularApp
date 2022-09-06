import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  combineLatest,
  fromEvent,
  interval,
  map,
  Observable,
  of,
  take,
  scan,
  reduce,
  every,
  sequenceEqual,
  delay,
  mergeMap,
} from 'rxjs';
// import { products as data } from './data/products';
import { IProduct } from './models/product';
import { ProductService } from './services/product.service';
import { tap } from 'rxjs';
import { ErrorService } from './services/error.service';
import { ModalService } from './services/modal.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  stream1$ = interval(1000).pipe(take(10));
  arr = ['a','b','c','d']
  stream2$ = interval(2500).pipe(take(4),map((val,index)=>this.arr[index]));


  ngOnInit(): void {

    // interval(1000).pipe(take(10)).subscribe(x=>console.log(x))
    //   fromEvent(document, 'click')
    //     .pipe(
    //       take(10),
    //       map(x=>x.target),
    //       tap((val) => console.log(val))
    //     )
    //     .subscribe();
    // this.stream1$
    //   .pipe(
    //     scan((acc: number[], cur: number) => [...acc, cur], []),
    //     tap((cur) => console.log(cur))
    //   )
    //   .subscribe();
    // this.stream1$
    //   .pipe(
    //     reduce((acc: number[], cur: number) => [...acc, cur], []),
    //     tap((cur) => console.log(cur))
    //   )
    //   .subscribe();
    //   this.stream1$
    //     .pipe(
    //       every((item) => item < 11),
    //       tap((cur) => console.log(cur))
    //     )
    //     .subscribe();

    // this.stream1$
    // .pipe(
    //   sequenceEqual(of(0,1,2,3,4,5,6,7,8,9)),
    //   tap((cur) => console.log(cur))
    // )
    // .subscribe();

    //   combineLatest(this.stream1$,this.stream2$,(s1,s2)=>s2+s1).
    // pipe(tap((cur) => console.log(cur)))
    // .subscribe();

    // this.stream2$.pipe(tap((cur) => console.log(cur))).subscribe();

  }
}
