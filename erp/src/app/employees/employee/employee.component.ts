import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl  } from '@angular/forms';
import { EmployeeService } from 'src/app/shared/employee.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
employeeForm : FormGroup; //this taken for formgroup


  constructor(private service : EmployeeService){ }

  ngOnInit() {
    //this.resetForm();
    this.employeeForm = new FormGroup({
      fullname: new FormControl(),
      position: new FormControl(),
      empcode: new FormControl(),
      mobile: new FormControl()
    });
  }


  resetForm(form: NgForm){
    if(form != null)
    form.resetForm();
    this.service.formData = {
      EmployeeID : null,
      FullName : '',
      Position : '',
      EMPCode : '',
      Mobile : ''
  }
  }

  onSubmit(form: NgForm){
    debugger
    console.log(form);
    console.log(this.employeeForm.value);
  this.insertRecord(form);
  }

  insertRecord(form: NgForm)
  {
    debugger
    console.log(form);
    console.log(this.employeeForm.value);
    this.service.postEmployee(form.value).subscribe(res => {      
      //this.toastr.success('Inserted Successfully','EMP. Register');
      this.resetForm(form)
    })
  }

}
