
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { SearchJobRequest } from '../_models/interfaces/search-job';

@Injectable()
export class ProfessionalService {

    constructor(private http: Http) { }

    searchJobs(searchJobs: SearchJobRequest) {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers, params: searchJobs });
        this.http.get('http://localhost:2730/api/jobs/getJobsByCriteria/', options);
    }
}
