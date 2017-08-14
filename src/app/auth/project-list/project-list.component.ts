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
  public itemsTarifa;
  constructor(private _projectListService: ProjectListService,private _http: Http) {
    this.itemsTarifa = ['','',''];
  }

  ngOnInit() {
    this.getAllProjects();
  }
  // lineChart
  public lineChartData:Array<any> = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartType:string = 'line';
  public pieChartType:string = 'pie';
 
  // Pie
  public pieChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public pieChartData:number[] = [300, 500, 100];
 
  public randomizeType():void {
    this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
    this.pieChartType = this.pieChartType === 'doughnut' ? 'pie' : 'doughnut';
  }
 
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
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
  itemTarifa(){
    this.itemsTarifa = ['Miami','New York','Julio'];
  }
  heroes = [];
  addHero(newHero1: string,newHero2: string,newHero3: string) {
    if (newHero1 && newHero2 && newHero3) {
      this.heroes.push(newHero1);
      this.heroes.push(newHero2);
      this.heroes.push(newHero3);
      
    }
  }
}
