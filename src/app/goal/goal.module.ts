import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { GoalComponent } from '../goal/goal.component';
import { GoalDetailComponent } from '../goal-detail/goal-detail.component';
import { StrikethroughDirective } from '../strikethrough.directive';
import { DateCountPipe } from '../date-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GoalComponent,
    GoalDetailComponent,
    StrikethroughDirective,
    DateCountPipe
  ],
  imports: [
    CommonModule,
    AppRoutingModule

  ]
})
export class AppModule { }
