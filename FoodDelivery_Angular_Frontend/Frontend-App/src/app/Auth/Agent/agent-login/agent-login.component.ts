import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { loginModel } from '../../../Models/login';

@Component({
  selector: 'app-agent-login',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    FormsModule,
    CommonModule
  ],
  templateUrl: './agent-login.component.html',
  styleUrl: './agent-login.component.css'
})
export class AgentLoginComponent {

  

}
