import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DashboardComponent } from './dashboard.component';
import { GoogleMapComponent } from '../fragments/charts/google-map/google-map.component';
import { SpiderChartComponent } from '../fragments/charts/spider-chart/spider-chart.component';
import { BarChartComponent } from '../fragments/charts/bar-chart/bar-chart.component';
import { LineChartComponent } from '../fragments/charts/line-chart/line-chart.component';

import { DashboardService } from '../../service/dashboard/dashboard.service'
import { NO_ERRORS_SCHEMA } from '@angular/core';
describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ DashboardComponent, GoogleMapComponent, SpiderChartComponent, BarChartComponent, LineChartComponent ],
      providers: [DashboardService],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
