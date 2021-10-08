import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectionsRoutingModule } from './projections-routing.module';
import { ProjectionsComponent } from './projections.component';


@NgModule({
  declarations: [
    ProjectionsComponent
  ],
  imports: [
    CommonModule,
    ProjectionsRoutingModule
  ]
})
export class ProjectionsModule { }
