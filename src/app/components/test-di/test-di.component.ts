import { Component, OnInit } from '@angular/core';
import { TestDIService } from 'src/app/services/test-di.service';

@Component({
  selector: 'app-test-di',
  templateUrl: './test-di.component.html',
  styleUrls: ['./test-di.component.scss'],
  providers: [TestDIService]
})
export class TestDIComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
