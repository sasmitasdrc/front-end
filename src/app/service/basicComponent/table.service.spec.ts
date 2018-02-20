import { TestBed, inject, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpParams } from '@angular/common/http';

import { TableService } from './table.service';

describe('TableService', () => {
  let injector;
  let service: TableService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TableService]
    });
    injector = getTestBed();
    service = injector.get(TableService);
    httpMock = injector.get(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  })
  /*
  Test getTableData() returns correct data 
  */
  describe('getTableData(): ', () => {
    it('returns correct tableData', () => {
      let dummyData = [{"rowId":"3","District":"Bastar","Number of PHC covered(Total)":"23.0","Availability of ambulance driver at PHC(Total)":"1.0","PHC providing 24x7 delivery facilities(Total)":"9.0","102 ambulance located at PHC(Total)":"1.0","102 ambulance located at PHC on call(Total)":"21.0","Ambulance at PHC functional(Total)":"1.0","Number of PHC covered(PNC)":"2.0"}];
      service.getTableData().subscribe(data => {
        expect(data[0].rowId).toBe("3");
        expect(data).toEqual(dummyData);
      });

      const req = httpMock.expectOne(`assets/tableData.json`);
      expect(req.request.method).toBe('GET');
      // req.flush(dummyUsers);
      req.flush( dummyData);

    });
  });

});
