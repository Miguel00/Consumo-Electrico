import { Injectable } from '@angular/core';
import { Http,RequestOptions,Headers} from '@angular/http'; 

import { Observable } from 'rxjs/Observable';
import { Project } from '../models/project.model';
import 'rxjs/add/operator/map';
import {AuthenticationService} from '../../../common/services/authentication.service';
import {HttpService} from '../../../common/services/http.service';

@Injectable()
export class ProjectListService extends HttpService {
    constructor(public _http: Http, public authService: AuthenticationService){
        super(_http)
    }
    getAll() : Observable<Array<Project>> {
        const url = `${this.apiBaseURL}/projects`;
        const token = this.authService.user.api_token;

        return this.get(url,token);
    }
    deleteProject(project: Project)   {
        const url = `${this.apiBaseURL}/projects/${project.id}`;
        const token = this.authService.user.api_token;
    
        return this.delete(url, token);

    }
}
