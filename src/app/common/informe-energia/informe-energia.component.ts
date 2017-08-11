import { Component, OnInit } from '@angular/core';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';

import * as JSPdf from 'jspdf'; 
declare var jsPDF: any; // Important
@Component({
  selector: 'app-informe-energia',
  templateUrl: './informe-energia.component.html',
  styleUrls: ['./informe-energia.component.css']
})
export class InformeEnergiaComponent implements OnInit {
  model;
  public devices;
  public item;
  date: DateModel;
  date_to: DateModel;
  from: DatePickerOptions;
  to: DatePickerOptions;

  constructor() {
    this.devices = ['diario','mes','año'];
    this.item = this.devices[0];
    this.from = new DatePickerOptions();
    this.to = new DatePickerOptions();
   }
  options;
  data ;
  chartType;
  ngOnInit() {
    this.options = {
            chart: {
                type: 'boxPlotChart',
                height: 450,
                margin : {
                    top: 20,
                    right: 20,
                    bottom: 60,
                    left: 40
                },
                color:['black', '#9CFF33', '#3BDEFF', 'red', '#FCF33E'],
                x: function(d){return d.label;},
                // y: function(d){return d.values.Q3;},
                maxBoxWidth: 75,
                yDomain: [0, 500]
            }
        };
    this.data = [
            {
                label: "Enero",
                values: {
                    Q1: 180,
                    Q2: 200,
                    Q3: 250,
                    whisker_low: 115,
                    whisker_high: 400,
                    outliers: [50, 100, 425]
                }
            },
            {
                label: "Febrero",
                values: {
                    Q1: 300,
                    Q2: 350,
                    Q3: 400,
                    whisker_low: 225,
                    whisker_high: 425,
                    outliers: [175, 450, 480]
                }
            },
            {
                label: "Marzo",
                values: {
                    Q1: 100,
                    Q2: 200,
                    Q3: 300,
                    whisker_low: 25,
                    whisker_high: 400,
                    outliers: [450, 475]
                }
            },
            {
                label: "Abril",
                values: {
                    Q1: 75,
                    Q2: 100,
                    Q3: 125,
                    whisker_low: 50,
                    whisker_high: 300,
                    outliers: [450]
                }
            },
            {
                label: "Mayo",
                values: {
                    Q1: 325,
                    Q2: 400,
                    Q3: 425,
                    whisker_low: 225,
                    whisker_high: 475,
                    outliers: [50, 100, 200]
                }
            }
        ];
  }
  
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
 
  public randomize():void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }
  onChange(deviceValue) {
    console.log(deviceValue);
    this.item = deviceValue;
  }
  //STARTDONUT
    // Doughnut
  public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';
  //ENDDONUT
  
  convert(){

      let doc = new JSPdf();
      
      doc.text(75, 20, 'CONSUMO ELECTRICO');
      doc.text(20, 30, ' ');
      doc.text(20, 30, 'CO2: 24.00 kg');

      doc.text(20, 40, 'COSTE:  15.00 KG');
      
      doc.text(20, 50, 'HISTORICO: 80.00 KG');

      doc.text(20, 60, 'INFORME TOTAL: 119.00 KG');
      
      doc.setFont("times");
      doc.setFontType("normal");
      doc.text(105, 80, 'Todos los derechos reversados', null, null, 'center');
      doc.text(105, 90, 'Consumo electrico 2017', null, null, 'center');
      doc.save('Test.pdf');
  }
}
