import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../Service/Auth/auth.service';
import { agentRegisterModel } from '../../../Models/agentRegister';

@Component({
  selector: 'app-agent-register',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    FormsModule,
    CommonModule
  ],
  templateUrl: './agent-register.component.html',
  styleUrl: './agent-register.component.css'
})
export class AgentRegisterComponent {
  agentregisterModelObj: any = new agentRegisterModel();

  constructor(private router: Router, private regServ: AuthService) {
  
    }

    onSubmit(form: NgForm) {
        console.log("agentRegisterModelObj: ", this.agentregisterModelObj);
    
        if (!form.invalid) {
          // API Call
          //this.agentregisterModelObj.name = this.agentregisterModelObj.agentname
          this.regServ.agentRegistration(this.agentregisterModelObj).subscribe(q => {
            console.log('Registration response', q);
    
            if (q && q.message === 'Agent Registration Successful') {
              alert('Registration Successful');
              this.router.navigate(['agent/login']);
            }
            else {
              alert('Unable to register!');
            }
          })
        }
        else {
          // Navigate
          console.log('Error');
          this.router.navigate(['agent/register']);
        }
      }

}
