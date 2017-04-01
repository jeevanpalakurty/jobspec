
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Job } from '../_models/interfaces/job';

@Injectable()
export class EmployerService {

    constructor(private http: Http) { }

     getReferenceData() {
        return this.http.get('http://localhost/2730/api/refData').map((response: Response) => response.json());
    }

    postjob(job: any) {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        // tslint:disable-next-line:whitespace
        this.http.post('http://localhost:2730/api/PostAJob',JSON.stringify(job), options);
    }
}

