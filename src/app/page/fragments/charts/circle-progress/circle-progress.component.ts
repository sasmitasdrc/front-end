import { Component, OnInit, ViewEncapsulation, Input, ViewChild, ElementRef } from '@angular/core';
import * as d3 from 'd3';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { forEach } from '@angular/router/src/utils/collection';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-circle-progress',
  templateUrl: './circle-progress.component.html',
  styleUrls: ['./circle-progress.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CircleProgressComponent implements OnInit {
 @ViewChild('circleProgress') private chartAccess: ElementRef;
 @Input() private data: any;
  constructor() { }

  ngOnInit() {
    if(this.data){
      this.createChart(this.data);
    }
  }
  ngOnChanges(changes) {
    if (this.data && changes.data.previousValue) {
      this.createChart(this.data);
    }
  }
  createChart(data){
   console.log(data);
   let el = this.chartAccess.nativeElement;
    var radius = 100,
    border = 10,
    width = 300,
    height = 300,
		colors = {
			'yellow' : '#38685c',
		};
    var color = colors.yellow;
    
    var totalCount = 112;		
    
		var arc = d3.arc()
    	.outerRadius(radius - 10)
    	.innerRadius(100);

		var pie = d3.pie()
	    .sort(null)
	    .value(function(d) {
	        return d.planData;
	    });

		var svg = d3.select('body').append("svg")
	    .attr("width", width)
	    .attr("height", height)
	    .append("g")
	    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var g = svg.selectAll(".arc")
      .data(pie(data))
      .enter().append("g");    

   	g.append("path")
    	.attr("d", arc)
      .style("fill", function(d,i) {
      	return d.color;
      });

    g.append("text")
    	.attr("transform", function(d) {
        var _d = arc.centroid(d);
        return "translate(" + _d + ")";
      })
      .attr("dy", ".50em")
      .style("text-anchor", "middle")
      .text(function(d) {
        return d.data.visitPercentage + '%';
      });
        
    g.append("text")
	   .attr("text-anchor", "middle")
		 .attr('font-size', '4em')
		 .attr('y', 20)
	   .text(totalCount);
  }

}
