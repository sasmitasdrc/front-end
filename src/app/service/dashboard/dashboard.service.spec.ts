import { TestBed, getTestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpParams } from '@angular/common/http';

import { DashboardService } from './dashboard.service';


describe('DashboardService', () => {
  let injector;
  let service: DashboardService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DashboardService]
    });
    injector = getTestBed();
    service = injector.get(DashboardService);
    httpMock = injector.get(HttpTestingController);
  })
  afterEach(() => {
    httpMock.verify();
  })

  /*
  Test spiderData() returns correct data 
  */
  describe('getSpiderData(): ', () => {
    it('returns correct spiderData', () => {
      let dummyData = {
        "dataCollection": [
          [
            {
              "axis": "A. Total score for CHC",
              "value": "50.5",
              "timePeriod": "Phase 1"
            },
            {
              "axis": "B. Basic Services",
              "value": "49.1",
              "timePeriod": "Phase 1"
            },
            {
              "axis": "D. Infrastructure of CHC",
              "value": "65.4",
              "timePeriod": "Phase 1"
            }
          ]
        ]
      }
      service.getSpiderChart().subscribe(data => {
        expect(data.dataCollection[0].length).toBe(3);
        expect(data).toEqual(dummyData);
      });

      const req = httpMock.expectOne(`assets/spiderData.json`);
      expect(req.request.method).toBe('GET');
      // req.flush(dummyUsers);
      req.flush( dummyData);
  
      httpMock.verify();
    });
  });

/*
tests google map data
*/
  describe('getMapData(): ', () => {
    it('returns correct google map data', () => {
      let dummyData = [{"id":137,"areaID":"853","dataValue":"53.7","longitude":"83.0379","latitude":"22.983170000000005","images":"resources/images/facilities/1478586210571.jpg,resources/images/facilities/1478586485599.jpg,resources/images/facilities/1478586697841.jpg","title":"CHC Lakhanpur","showWindow":false,"icon":"resources/images/pushpins/CHC_red.png","dateOfVisit":"2016-11-08"}]
      service.getMapData().subscribe(data => {
        expect(data[0].id).toBe(137);
        expect(data).toEqual(dummyData);
      });

      const req = httpMock.expectOne(`assets/mapData.json`);
      expect(req.request.method).toBe('GET');
      // req.flush(dummyUsers);
      req.flush( dummyData);
  
      httpMock.verify();
    });
  });

  /*
    tests barchart data
  */
  describe('getBarChartData(): ', () => {
    it('returns correct spiderData', () => {
      let dummyData = {
        "dataCollection": [
          [
            {
              "axis": "A. Total score for CHC",
              "value": "50.5",
              "timePeriod": "Phase 1"
            },
            {
              "axis": "B. Basic Services",
              "value": "49.1",
              "timePeriod": "Phase 1"
            },
            {
              "axis": "D. Infrastructure of CHC",
              "value": "65.4",
              "timePeriod": "Phase 1"
            }
          ]
        ]
      }
      service.getBarChartData().subscribe(data => {
        expect(data.dataCollection[0].length).toBe(3);
        expect(data).toEqual(dummyData);
      });

      const req = httpMock.expectOne(`assets/spiderData.json`);
      expect(req.request.method).toBe('GET');
      // req.flush(dummyUsers);
      req.flush( dummyData);
  
      httpMock.verify();
    });
  });

  /*
    tests barchart data
  */
  describe('getLineChartData(): ', () => {
    it('returns correct Line chart data', () => {
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
      service.getLineChartData().subscribe(data => {
        expect(data[0].timeNid).toBe(27);
        expect(data).toEqual(dummyData);
      });

      const req = httpMock.expectOne(`assets/lineChartData.json`);
      expect(req.request.method).toBe('GET');
      // req.flush(dummyUsers);
      req.flush( dummyData);
  
      httpMock.verify();
    });
  });
});

