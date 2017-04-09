import { ApplyJobService } from './../../_services/apply-job.service';
import { MdlDialogReference } from '@angular-mdl/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit, HostListener, Inject, ViewContainerRef, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import {MdlDialogService, MdlDialogOutletService } from '@angular-mdl/core';
import { FileSelectDirective, FileUploader } from 'ng2-file-upload';

@Component({
  moduleId: module.id,
  selector: 'app-apply-job',
  templateUrl: 'apply-job.component.html'
})
export class ApplyJobComponent implements OnInit, AfterViewInit {
    file: any;
    applyJobForm: FormGroup;
    public uploader: FileUploader = new FileUploader({});

    constructor(
      private dialog: MdlDialogReference,
      private fb: FormBuilder,
      private applyJobService: ApplyJobService, private dialogOutletService: MdlDialogOutletService,
        private viewContainerRef: ViewContainerRef, private rd: Renderer2) {
        dialogOutletService.setDefaultViewContainerRef(viewContainerRef);
    }

    public ngOnInit() {
      const emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
      this.applyJobForm = this.fb.group({
        email: ['', [Validators.required, Validators.pattern(emailRegex) ]],
        cv: ['', ],
        jobID: [1, [Validators.required]],
        professionalId: [5, [Validators.required]],
        employerlId: [2, [Validators.required]]
      });
    }
    ngAfterViewInit(){
    }
    public onApply(applyData: any) {
        this.applyJobService.applyJob(applyData).subscribe(() => {
           this.dialog.hide();
        });
    }

    public fileChangeEvent(event: any){

      let fileList: FileList = event.target.files;

      if(fileList.length > 0) {
        // /this.applyJobForm.controls['cv'];
      }
  }
    @HostListener('keydown.esc')
    public onEsc(): void {
      this.dialog.hide();
    }

}
