import { Component, OnInit } from '@angular/core';
import { ProjectListService } from './services/project-list.service';
import { Project } from './models/project.model';
import { Http,RequestOptions,Headers} from '@angular/http'; 

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  isLoading = true;
  projects: Array<Project>;
  constructor(private _projectListService: ProjectListService,private _http: Http) { }

  ngOnInit() {
    this.getAllProjects();
  }
  //startchart
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
  // endchart


  getAllProjects() {
    this._projectListService.getAll().subscribe(
      (data: Project[]) => {
        //next
        this.projects = data;
        this.isLoading = false;
      },
      err => {
        console.error(err);
      },
      () => {
        console.log('Finished!');
      }
    );
  }

  onDeleteProject(project: Project){
    const url = `http://172.104.91.187/projects/${project.id}`;
    const headers = new Headers({'Content-Type': 'application/json','Api-Token': 'jJHGtk3IoZ84CmKlDz5N206w46yaj6v4mk0vXdTDl5w80iqnk0skp9Jp6NQ3'});
    const options = new RequestOptions({headers: headers});

    return this._http.delete(url,options).map((response)=> {
            console.log(response);
            return response.json();
    }).subscribe((data)=>{
      console.log(data);
      this.getAllProjects();
    });
  }

  onCreateProject(){
    this.isLoading = true;
    const url = `http://172.104.91.187/projects`;
    const headers = new Headers({'Content-Type': 'application/json','Api-Token': 'jJHGtk3IoZ84CmKlDz5N206w46yaj6v4mk0vXdTDl5w80iqnk0skp9Jp6NQ3'});
    const options = new RequestOptions({headers: headers});

    return this._http.post(url, {
      "title": "Creando projectos",
      "slug": "SIE",
      "description": "Utilizando el boton de 'Nuevo proyecto'",
      "user_id": 2
    },options).subscribe((data)=>{
      this.getAllProjects();
    },err=>{
      console.log(err)
    }); 
  }
}
