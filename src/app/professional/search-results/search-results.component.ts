import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Job } from 'app/_models/interfaces/job';
import { SearchResultsService } from '../../_services/index';

@Component({
    moduleId: module.id,
    selector: 'app-search-results',
    templateUrl: 'search-results.component.html',
    styleUrls: ['./search-results.component.css']
})

export class SearchResultsComponent implements OnInit {
    searchResults: any = [];
    constructor(private route: ActivatedRoute, private searchResultsService: SearchResultsService) {
        searchResultsService.searchResultAnnounced$.subscribe(
            jobs => {
            this.searchResults = jobs;
        });
  }

    ngOnInit() {
    }
}
