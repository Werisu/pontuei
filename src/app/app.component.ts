import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '@pontuei/layout';
import { NxWelcomeComponent } from './nx-welcome.component';
@Component({
  imports: [NxWelcomeComponent, RouterModule, HeaderComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'pontuei';
}
