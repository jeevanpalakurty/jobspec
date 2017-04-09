import { Injectable } from '@angular/core';
import { RequestOptions, Http, Headers } from '@angular/http';

@Injectable()
export class ApplyJobService {

  constructor(private http: Http) {

   }

   applyJob(jobDetails: any) {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        // tslint:disable-next-line:whitespace
        return this.http.post('http://localhost:2730/api/jobs/applyJob',JSON.stringify(jobDetails), options);
   }

}
