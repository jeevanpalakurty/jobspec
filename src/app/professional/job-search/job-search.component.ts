import { Component, OnInit, HostBinding } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SearchJobRequest } from '../../_models/interfaces/search-job';
import { ProfessionalService, SearchResultsService } from '../../_services/index';
import { slideInDownAnimation } from '../../animations';
import { Job } from 'app/_models/interfaces/job';
import { ActivatedRoute, Router } from '@angular/router';

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

  private jobs: Job[] = [];
  private searchJobRequest: FormGroup;
  constructor(private fb: FormBuilder, private professionalService: ProfessionalService,  private route: ActivatedRoute,
  private router: Router, private searchResultsService: SearchResultsService) { }

  ngOnInit() {
    this.searchJobRequest = this.fb.group({
      skills: ['', [Validators.required]],
      projectLocation: ['', [Validators.required]],
      category: ''
    });
   }

  onSubmit({ value, valid }: { value: SearchJobRequest, valid: boolean }) {
      console.log(valid);
      this.professionalService.searchJobs(value)
      .then((data) => {
         this.searchResultsService.announceSearchResult(data);
         this.router.navigateByUrl('jobsearch/searchresults');
      });
  }
}
