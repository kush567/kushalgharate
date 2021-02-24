import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { Employee } from '../shared/employee.model';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  constructor(private service : EmployeeService) { }

  ngOnInit() {
    debugger
    this.service.refreshList();
  }
  populateForm(emp : Employee){

  }

}
