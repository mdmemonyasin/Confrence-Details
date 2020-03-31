import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from 'protractor';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // config: Config;
  public conf = [];
  public all = [];
  config : any[];
  title = 'http';
  constructor(http: HttpClient){
    http.get('https://o136z8hk40.execute-api.us-east-1.amazonaws.com/dev/get-list-of-conferences').subscribe(responce =>{
    this.conf.push(responce);
    // console.log(this.employees[0].paid);
    this.all = [...this.conf[0].paid , ...this.conf[0].free];
    console.log(this.all);
    return this.all;
    });
    
    
  }
}
