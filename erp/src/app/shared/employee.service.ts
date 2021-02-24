import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  formData : Employee;
  list: Employee[];
  //readonly rootURL = "http://localhost:51847/api";
  readonly rootURL = "http://192.168.1.116/WebAPInew/api";  

  constructor(private http: HttpClient) { }

  postEmployee(formData : Employee){
    console.log(formData);
   return this.http.post(this.rootURL+'/Employee',formData)
  }

  refreshList(){    
    this.http.get(this.rootURL+'/Employee')
    .toPromise().then( res => this.list = res as Employee[] );
  }

  putEmployee(formData : Employee){
    console.log(formData);
   return this.http.put(this.rootURL+'/Employee',formData.EmployeeID)
  }

}
