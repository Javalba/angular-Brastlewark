import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class GnomeService {

  private BASE_URL: string = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json'


  constructor(private http: Http) { }

  getGnomeInfo() {
  	return this.http.get(`${this.BASE_URL}`)
  		.map((res) => res.json() );
  }

}
