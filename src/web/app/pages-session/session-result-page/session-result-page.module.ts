import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SingleStatisticsModule } from '../../components/question-responses/single-statistics/single-statistics.module';
import {
  StudentViewResponsesModule,
} from '../../components/question-responses/student-view-responses/student-view-responses.module';
import { QuestionTextWithInfoModule } from '../../components/question-text-with-info/question-text-with-info.module';
import { SessionResultPageComponent } from './session-result-page.component';

/**
 * Module for feedback session result page.
 */
@NgModule({
  imports: [
    CommonModule,
    QuestionTextWithInfoModule,
    StudentViewResponsesModule,
    SingleStatisticsModule,
  ],
  declarations: [
    SessionResultPageComponent,
  ],
  exports: [
    SessionResultPageComponent,
  ],
})
export class SessionResultPageModule { }
