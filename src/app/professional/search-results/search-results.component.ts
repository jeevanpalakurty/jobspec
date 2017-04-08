import { ApplyJobComponent } from './../apply-job/apply-job.component';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Job } from 'app/_models/interfaces/job';
import { SearchResultsService } from '../../_services/index';
import {MdlDialogService, MdlDialogReference} from 'angular2-mdl';

@Component({
    moduleId: module.id,
    selector: 'app-search-results',
    templateUrl: 'search-results.component.html',
    styleUrls: ['./search-results.component.css']
})

export class SearchResultsComponent implements OnInit {
    searchResults: any = [];
    constructor(private route: ActivatedRoute, private searchResultsService: SearchResultsService, private dialogService: MdlDialogService,
                private viewContainerRef: ViewContainerRef) {
        searchResultsService.searchResultAnnounced$.subscribe(
            jobs => {
            this.searchResults = jobs;
        });
  }

    ngOnInit() {
    }

    public editDocument() {

        let pDialog = this.dialogService.showCustomDialog({
            component: ApplyJobComponent,
            isModal: true
        });
        pDialog.subscribe( (dialogReference: MdlDialogReference) => {
            console.log('dialog visible', dialogReference);
        });
    }

}
