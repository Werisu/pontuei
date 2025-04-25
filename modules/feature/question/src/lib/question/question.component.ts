import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lib-question',
  imports: [CommonModule, RouterModule],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss',
})
export class QuestionComponent {}
