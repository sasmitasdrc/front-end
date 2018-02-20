import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartComponent } from './line-chart.component';

describe('LineChartComponent', () => {
  let component: LineChartComponent;
  let fixture: ComponentFixture<LineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /**
   * tests whether createChart() is working
   */
  describe('createChart(): ', () => {
    it('working well', () => {
      let dummyData = [
    
        {
        "timeNid": 27,
        "indicatorOrder": 26,
        "key": "CL",
        "date": "Nov 2016",
        "value": 0.1,
        "andhraValue": null,
        "telanganaValue": null,
        "name": "India",
        "source": "aggreagteArea",
        "pdsas": ""
        }
      ]
      expect(component.createChart(dummyData)).toBe(true);

    });
  });
});
