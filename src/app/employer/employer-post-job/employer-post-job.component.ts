import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Job } from '../../_models/interfaces/job';

@Component({
  selector: 'app-employer-post-job',
  templateUrl: './employer-post-job.component.html'
})
export class EmployerPostJobComponent implements OnInit {

 user: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.user = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      account: this.fb.group({
        email: ['', Validators.required],
        confirm: ['', Validators.required]
      })
    });
  }
  onSubmit({ value, valid }: { value: Job, valid: boolean }) {
    console.log(value, valid);
  }

}
