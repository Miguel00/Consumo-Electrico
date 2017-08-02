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
