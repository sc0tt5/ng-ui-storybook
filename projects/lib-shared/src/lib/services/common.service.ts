import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {
  constructor() {}

  saySomething(message: string) {
    console.log(message);
  }
}
