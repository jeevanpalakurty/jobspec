import { ApplyJobService } from './../../_services/apply-job.service';
import { MdlDialogReference } from '@angular-mdl/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit, HostListener, Inject } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-apply-job',
  templateUrl: 'apply-job.component.html'
})
export class ApplyJobComponent implements OnInit {
    public form: FormGroup;
    public username = new FormControl('',  Validators.required);
    public password = new FormControl('', Validators.required);

    constructor(
      private dialog: MdlDialogReference,
      private fb: FormBuilder,
      private ApplyJobService: ApplyJobService) {
    }

    public ngOnInit() {
      this.form = this.fb.group({
        'username':  this.username,
        'password':   this.password
      });
    }

    public login() {
      // do the business logic
    }

    @HostListener('keydown.esc')
    public onEsc(): void {
      this.dialog.hide();
    }

}
