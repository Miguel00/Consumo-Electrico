import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css']
})
export class GestionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public polarAreaChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
  public polarAreaChartData:number[] = [300, 500, 100, 40, 120];
  public polarAreaLegend:boolean = true;
 
  public polarAreaChartType:string = 'polarArea';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
  public onChangeSemanal(){
   this.polarAreaChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
   this.polarAreaChartData = [100, 200, 300, 400, 500];
   this.polarAreaLegend = true;
 
   this.polarAreaChartType = 'polarArea';
 
  }
}
