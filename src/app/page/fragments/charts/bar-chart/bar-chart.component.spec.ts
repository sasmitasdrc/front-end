import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartComponent } from './bar-chart.component';

describe('BarChartComponent', () => {
  let component: BarChartComponent;
  let fixture: ComponentFixture<BarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /**
   * tests whether createChart() is working
   */
  describe('createChart(): ', () => {
    it('working well', () => {
      let dummyData = {
        "dataCollection": [
          [
            {
              "axis": "B. Basic Services",
              "value": "49.1"
            },
            {
              "axis": "D. Infrastructure of CHC",
              "value": "65.4"
            },
            {
              "axis": "E. Ideal Labour room gap analysis checklist",
              "value": "56.9"
            }
          ]
        ]
      }
      expect(component.createChart(dummyData.dataCollection)).toBe(true);

    });
  });
});
