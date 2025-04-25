import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ExercisesCardComponent } from '@pontuei/exercises-ui';

@Component({
  selector: 'lib-home',
  imports: [CommonModule, ExercisesCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
