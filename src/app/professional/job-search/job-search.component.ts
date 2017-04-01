import { Component, OnInit, HostBinding } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SearchJobRequest } from '../../_models/interfaces/search-job';
import { ProfessionalService } from '../../_services/index';
import { slideInDownAnimation } from '../../animations';

@Component({
  moduleId: module.id,
  selector: 'app-job-search',
  templateUrl: 'job-search.component.html',
  animations: [ slideInDownAnimation ]
})

export class JobSearchComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';

  private searchJobRequest: FormGroup;
  constructor(private fb: FormBuilder, private professionalService: ProfessionalService) { }

  ngOnInit() {
    this.searchJobRequest = this.fb.group({
      skills: ['', [Validators.required]],
      projectLocation: ['', [Validators.required]],
      category: ''
    });
   }

  onSubmit({ value, valid }: { value: SearchJobRequest, valid: boolean }) {
      console.log(valid);
      this.professionalService.searchJobs(value);
  }
}
