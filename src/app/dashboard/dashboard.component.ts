import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http } from "@angular/http";

@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit{
    
    constructor(private http: Http){
    }
    ngOnInit(){         
    }
    submit(f){
    console.log(f);
       this.http.post('https://apimedical.au-syd.mybluemix.net/api/medicineDetails',{
        "medicineId": f.value.medicineId,
        "medicineName": f.value.mname,
        "manufacturer": f.value.manufact,
        "type": f.value.type,
        "price": f.value.price,
        "expiryDate": f.value.edate
      })
        .subscribe(response =>{
            console.log(response.json());  
            alert('Sucessfully Added');   
        },error =>{
        alert('Your are Offline or Unexpected error');
    });
        f.resetForm();
    }

}

