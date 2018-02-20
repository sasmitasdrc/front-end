import {  Directive, ElementRef, Input, OnInit, ContentChild } from '@angular/core';
import * as d3 from 'd3';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { forEach } from '@angular/router/src/utils/collection';
declare var jquery:any;
declare var $ :any;

@Directive({
  selector: '[appCircleProgress]'
})
export class CircleProgressDirective implements OnInit{
  @Input() private data : any;
  @Input() private id : any;
  @ContentChild('circleProgress') chartContainer : ElementRef;

  constructor() { }
  ngOnInit(){    
    this.id = document.getElementById("circleChart").id;
    //console.log(this.id);
    if(this.data){
      this.createCircleChart(this.data,this.id);
    }
  }
  createCircleChart(d,id){
    let element = this.chartContainer.nativeElement;
    //d3.select(element).select("svg").remove();   
          var radius;
          var border;
          var colors = {
            'yellow' : '#38685c',
          };
    
          var color = colors.yellow;	
            radius = 90;
            border = 4;
              
          var padding = 30;
          var startPercent = 0;
          var endPercent = d[0].planData / 100;
    
          var twoPi = Math.PI * 2;
          
          var formatPercent = d3.format('.0%');			
          var boxSize = (radius + padding) * 2;
    
          var count = Math.abs((endPercent - startPercent) / 0.01);
          var step = endPercent < startPercent ? -0.01 : 0.01;

          // var arc = d3.arc()
          // .innerRadius(0)
          // .outerRadius(100)
          // .startAngle(0)
          // .endAngle(Math.PI / 2);

          var arc = d3.arc()
          .innerRadius(radius)
          .outerRadius(radius - border)
          .startAngle(0);
    
          var parent = d3.select('#' + id);        
                 
          var svg = parent.append('svg').attr('width', boxSize).attr(
                'height', boxSize + 50);         			
    
          var defs = svg.append('defs');
    
          var filter = defs.append('filter').attr('id', 'blur');
    
          filter.append('feGaussianBlur').attr('in', 'SourceGraphic').attr(
              'stdDeviation', '0');
    
          var g = svg.append('g').attr('transform',
              'translate(' + boxSize / 2 + ',' + boxSize / 2 + ')');
    
          var meter = g.append('g').attr('class', 'progress-meter');
    
          meter.append('path').attr('class', 'background').attr('fill',
              '#f0b569').attr('fill-opacity', 0.5).attr('d',
              arc.endAngle(twoPi));
    
          var foreground = meter.append('path').attr('class', 'foreground')
              .attr('fill', color).attr('fill-opacity', 1).attr('stroke',
                  color).attr('stroke-width', 5).attr(
                  'stroke-opacity', 1).attr('filter', 'url(#blur)');
    
          var front = meter.append('path').attr('class', 'foreground').attr(
              'fill', color).attr('fill-opacity', 1);

            // g.append("text")
            // .attr("text-anchor", "middle")
            // .attr('font-size', '4em')
            // .attr('y', 20)
            // .text("jh");
    
          var numberText = meter.append('text')
                           .attr('fill','#000')
                           .attr('font-size', '2em')
                           .attr('text-anchor', 'middle')
                           .attr('y', 10);
    
          function updateProgress(progress) {						          
              foreground.attr('d', arc.endAngle(twoPi * progress));
              front.attr('d', arc.endAngle(twoPi * progress));
               if(d[0].planData != null || d[0].planData != undefined)
                numberText.text(formatPercent(progress));
               else
                numberText.text('N/A');  				             
          }
    
          var progress = startPercent;
    
          (function loops() {
            updateProgress(progress);
    
            if (count > 0) {
              count--;
              progress += step;
              setTimeout(loops, 10);
            }
          })();
        }    
}
