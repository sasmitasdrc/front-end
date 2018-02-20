import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { BasicComponent } from './basic.component';
import { InlineFormComponent } from '../fragments/allUIComponents/inline-form/inline-form.component';
import { DynamicFormComponent } from '../fragments/allUIComponents/dynamic-form/dynamic-form.component';
import { SdrcTableComponent } from '../fragments/allUIComponents/sdrc-table/sdrc-table.component';
import { FormFieldsService } from '../../service/form-fields.service';

describe('BasicComponent', () => {
  let component: BasicComponent;
  let fixture: ComponentFixture<BasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientModule, HttpClientTestingModule],
      declarations: [ BasicComponent, InlineFormComponent, DynamicFormComponent, SdrcTableComponent ],
      providers: [FormFieldsService],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
