import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const sharedRoutes: Routes = [
];

@NgModule({
  imports: [RouterModule.forChild(sharedRoutes)],
  exports: [RouterModule],
})
export class NameRoutingModule { }

