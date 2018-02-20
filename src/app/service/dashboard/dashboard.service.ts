import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DashboardService {
  spiderData: any;
  barchartData: any;
  constructor(private httpClient: HttpClient) { }
  getSpiderChart(){
    this.spiderData = this.httpClient.get('assets/spiderData.json');
    return  this.spiderData;
  }
  getMapData(){
    return this.httpClient.get('assets/mapData.json')
  }
  getBarChartData(){
    this.barchartData = this.httpClient.get('assets/spiderData.json');
    return this.barchartData;
  }
  getLineChartData(){
    return this.httpClient.get('assets/lineChartData.json');
  }
  getCircleProgressData(){
    return this.httpClient.get('assets/circleProgressData.json');
  }
}
