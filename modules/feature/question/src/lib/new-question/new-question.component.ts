import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'lib-new-question',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.scss'],
})
export class NewQuestionComponent {
  acertos = 0;
  erros = 0;
  nomeContador = '';
  disciplinaSelecionada = '';
  observacao = '';
  disciplinas = [
    'Matemática',
    'Português',
    'História',
    'Geografia',
    'Biologia',
    'Física',
    'Química',
    'Inglês',
    'Outra',
  ];

  incrementarAcertos() {
    this.acertos++;
  }

  incrementarErros() {
    this.erros++;
  }

  salvarContador() {
    // Aqui você pode implementar a lógica para salvar o contador
    console.log({
      nome: this.nomeContador,
      disciplina: this.disciplinaSelecionada,
      observacao: this.observacao,
      acertos: this.acertos,
      erros: this.erros,
    });
  }
}
