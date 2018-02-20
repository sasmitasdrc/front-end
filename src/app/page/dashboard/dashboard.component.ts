import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../service/dashboard/dashboard.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DashboardService]
})
export class DashboardComponent implements OnInit {
  spiderData: any;
  mapData: any;
  lineChartData:any;
  barChartData: any;
  progressCircleData: any;
  constructor(private dashboardService: DashboardService) { }
  ngOnInit() {
    this.dashboardService.getSpiderChart().subscribe(data=>{
      this.spiderData = data;
      // console.log(this.spiderData)
    })
    this.dashboardService.getBarChartData().subscribe(data=>{
      this.barChartData = data;
      // console.log(this.barChartData)
    })
    this.dashboardService.getLineChartData().subscribe(data=>{
      this.lineChartData = data;
    })
    this.dashboardService.getCircleProgressData().subscribe(data=>{
      this.progressCircleData = data;
    })
  }

}
