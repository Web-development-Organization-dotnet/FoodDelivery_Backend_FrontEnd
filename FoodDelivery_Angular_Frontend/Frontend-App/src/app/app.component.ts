import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { HelpcontactComponent } from './helpcontact/helpcontact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    BasicFormComponent,
    RegisterFormComponent,
    HelpcontactComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Frontend-App';
}
