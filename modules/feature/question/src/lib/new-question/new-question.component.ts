import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'lib-new-question',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.scss'],
})
export class NewQuestionComponent {
  acertos = 0;
  erros = 0;

  incrementarAcertos() {
    this.acertos++;
  }

  incrementarErros() {
    this.erros++;
  }
}
