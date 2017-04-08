import { Component, OnInit, HostBinding  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Job } from '../../_models/interfaces/job';
import { EmployerService } from '../../_services/index';
import { slideInDownAnimation } from '../../animations';

@Component({
  selector: 'app-employer-post-job',
  templateUrl: './employer-post-job.component.html',
  animations: [ slideInDownAnimation ]
})

/**
 * This is a component for employer posting a job through the portal
 * this component uses form builder's reactive stargtegy. 
 */
export class EmployerPostJobComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';

 private job: FormGroup;
 skills: any = [];
 trainingCourses = [
       {id: 1, name: "Java"},
       {id: 2, name: "Javascript"},
       {id: 3, name: ".net"},
       {id: 4, name: "hadoop"},
       {id: 5, name: "css"}
     ];
  projectTypes: any = [];
  jobTitles: any = [];

  constructor(private fb: FormBuilder, private employerService: EmployerService) {
  }

  ngOnInit() {
    this.loadRefData();
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

   loadRefData()  {
    this.employerService.getReferenceData().then((refData: any) => {
      this.skills = refData.skills;
      this.projectTypes = refData.projectTypes;
      this.jobTitles = refData.jobTitle;
    }, (reason: any) => {
        console.log('refdata error');
    });
  }
  onSubmit({ value, valid }: { value: Job, valid: boolean }) {
      console.log(valid);
      this.employerService.postjob(value);
  }

}
