import { Component } from '@angular/core';
import { Http } from "@angular/http";
@Component({
    selector: 'typography-cmp',
    moduleId: module.id,
    templateUrl: 'typography.component.html'
})

export class TypographyComponent{
    medicines: any[];
    constructor(private http: Http){
        http.get('https://apimedical.au-syd.mybluemix.net/api/medicineDetails')
        .subscribe(response =>{
           this.medicines = response.json();
           console.log(this.medicines);  
        },error =>{
            alert('Your are offline or Unexpected error');
            
        })    
        
    }
    deletemed(medicine){
        console.log(medicine.id);
        this.http.delete('https://apimedical.au-syd.mybluemix.net/api/medicineDetails'+'/'+ medicine.id)
        .subscribe(response =>{
           let index = this.medicines.indexOf(medicine);
           this.medicines.splice(index, 1);
        },error =>{
            alert('Your are offline or Unexpected error');
            
        })      
 
    }
    
}
