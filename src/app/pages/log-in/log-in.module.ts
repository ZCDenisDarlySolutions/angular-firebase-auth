import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '@shared';

import { LogInRoutingModule } from './log-in-routing.module';
import { LogInComponent } from './log-in.component';

@NgModule({
  declarations: [LogInComponent],
  imports: [
    CommonModule,
    LogInRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class LogInModule {
  constructor() {}
}
