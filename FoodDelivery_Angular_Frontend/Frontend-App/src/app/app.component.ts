import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { HelpcontactComponent } from './helpcontact/helpcontact.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
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
