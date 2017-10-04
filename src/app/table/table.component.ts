import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import {CategoryPipe} from './../pipes'

@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'table.component.html'
})

export class TableComponent implements OnInit{
   medicines: any[];
   searchText:String;
   constructor(http: Http){
        http.get('https://apimedical.au-syd.mybluemix.net/api/medicineDetails')
        .subscribe(response =>{
           this.medicines = response.json();
           console.log(this.medicines);
            
        },error =>{
            alert('Your are Offline or Unexpected error');
        })
     }
    ngOnInit(){
    }
}
