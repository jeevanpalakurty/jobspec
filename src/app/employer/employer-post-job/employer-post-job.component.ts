import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Job } from '../../_models/interfaces/job';
import { EmployerService } from '../../_services/index';

@Component({
  selector: 'app-employer-post-job',
  templateUrl: './employer-post-job.component.html'
})
export class EmployerPostJobComponent implements OnInit {

 private job: FormGroup;
 skills = [
       {id: 1, name: "Java"},
       {id: 2, name: "Javascript"},
       {id: 3, name: ".net"},
       {id: 4, name: "hadoop"},
       {id: 5, name: "css"}
     ];
 trainingCourses = [
       {id: 1, name: "Java"},
       {id: 2, name: "Javascript"},
       {id: 3, name: ".net"},
       {id: 4, name: "hadoop"},
       {id: 5, name: "css"}
     ];
  projectTypes = [
       {id: 1, name: "fixed term"},
       {id: 2, name: "perm"},
       {id: 3, name: "contract"}
     ];

  constructor(private fb: FormBuilder, private employerService: EmployerService) {
  }

  ngOnInit() {
    this.job = this.fb.group({
      employerId: ['', [Validators.required, Validators.minLength(1)]],
      startDate: ['', [Validators.required]],
      skillsId: [''],
      trainingCourses: '',
      projectTypeId: '',
      projectDuration: '',
      jobDescription: '',
      jobTitleId: '',
      projectLocation: '',
      salary: '',
      experience: '',
      applicationDeadline: '',
      projectValue: ''
    });
  }
  // tslint:disable-next-line:no-trailing-whitespace
  
  onSubmit({ value, valid }: { value: Job, valid: boolean }) {
      console.log(valid);
      this.employerService.postjob(value);
  }

}
