import { Injectable } from '@angular/core';

@Injectable()
export class TestDIService {

  constructor() { }

  write(logMessage:string){

    console.log(logMessage);
}
}
