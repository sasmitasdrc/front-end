import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiderChartComponent } from './spider-chart.component';

describe('SpiderChartComponent', () => {
  let component: SpiderChartComponent;
  let fixture: ComponentFixture<SpiderChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpiderChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpiderChartComponent);
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
