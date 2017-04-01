
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { SearchJobRequest } from '../_models/interfaces/search-job';

@Injectable()
export class ProfessionalService {

    constructor(private http: Http) { }

    searchJob(searchJobs: SearchJobRequest) {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        this.http.post('http://localhost:59476/api/SearchJobRequest', JSON.stringify(searchJobs), options);
    }
}
