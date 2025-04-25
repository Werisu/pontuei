import { Route } from '@angular/router';
import { NewQuestionComponent } from './new-question/new-question.component';
import { QuestionComponent } from './question/question.component';

export const questionRoutes: Route[] = [
  { path: '', component: QuestionComponent },
  { path: 'new', component: NewQuestionComponent },
];
