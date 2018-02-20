import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  reactiveForm: FormGroup;
  reactiveFormObject: any;
  name: String = '';
  description: String = '';


  constructor(private formBuilder: FormBuilder) {
    this.reactiveForm = formBuilder.group({
      'name': [null, Validators.required],
      'description': [null, Validators.compose
        ([Validators.required, Validators.minLength(30), Validators.maxLength(250)])],
      'validate': ''
    });
  }

  saveReactiveForm(reactiveFormObject) {
    this.description = reactiveFormObject.description;
    this.name = reactiveFormObject.name;
  }
}
