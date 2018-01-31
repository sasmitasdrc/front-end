import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormModel } from '../../../../interface/form.model'

@Component({
  selector: 'app-dynamic-form-fields',
  templateUrl: './dynamic-form-fields.component.html',
  styleUrls: ['./dynamic-form-fields.component.scss']
})
export class DynamicFormFieldsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() field: FormModel<any>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.field.key].valid; }

}
