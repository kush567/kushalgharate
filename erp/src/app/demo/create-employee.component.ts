import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
employeeForm : FormGroup;
  constructor(private service : EmployeeService) { }

  ngOnInit() {
    this.employeeForm =  new  FormGroup ({
      fullname : new FormControl(),
      position: new FormControl(),
      empcode: new FormControl(),
      mobile: new FormControl()
    });
  }

  onSubmit(){
    debugger
    console.log(this.employeeForm.value);
    this.insertRecord();
  }

  insertRecord()
  {
    debugger
    console.log(this.employeeForm.value);
    console.log(this.employeeForm.value);
    this.service.postEmployee(this.employeeForm.value).subscribe(res => {
      this.ngOnInit()
    })
  }

  updateRecord()
  {
    debugger
    console.log(this.employeeForm.value);
    console.log(this.employeeForm.value);
    this.service.putEmployee(this.employeeForm.value).subscribe(res => {
      this.ngOnInit()
    })
  }

}
