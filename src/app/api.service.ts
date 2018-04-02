import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {

  constructor() { }

  apiOrigin:string = "http://gkameme.org";
  apiRoot:string = "http://gkameme.org/api/";
  apiDomain:string = "gkameme.org";

}
