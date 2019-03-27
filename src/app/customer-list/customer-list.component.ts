import { Component, OnInit } from '@angular/core';
import { Observable } from  "rxjs";

import { HttpClient, HttpParams, HttpHeaders } from  "@angular/common/http";
import { List } from "../list.model";
import {} from  "@angular/common/http";

//const  params = new  HttpParams().set('_page', "1").set('_limit', "5");
const params = new HttpParams({fromString: '_page=1&_limit=1'});
const headers = new HttpHeaders().set("X-CustomHttpHeader", "CUSTOM_VALUE")
@Component({  
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customersObservable : Observable<List[]>;
  constructor(private  httpClient:HttpClient) { }

  ngOnInit() {
    this.customersObservable = this.httpClient

.request<List[]>( "GET", "http://localhost:3000/customers", {headers});
  }

}
