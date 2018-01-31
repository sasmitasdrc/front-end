import { Component, OnInit } from '@angular/core';
import { FormFieldsService } from  '../../service/form-fields.service'
@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {
  formFields:any;
  buttonStyle = { 'color': '#F00', 'font-size': '20px', 'background-color': '#CCC' }
  constructor(private formFieldService: FormFieldsService) { 
  
  }

  ngOnInit() {
    this.formFields = this.formFieldService.getQuestions();
  }

}
