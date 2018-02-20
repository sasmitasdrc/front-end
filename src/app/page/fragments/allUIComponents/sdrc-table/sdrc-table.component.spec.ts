import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SdrcTableComponent } from './sdrc-table.component';

import {TableService} from '../../../../service/basicComponent/table.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SdrcTableComponent', () => {
  let component: SdrcTableComponent;
  let fixture: ComponentFixture<SdrcTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ SdrcTableComponent ],
      providers: [TableService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SdrcTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
