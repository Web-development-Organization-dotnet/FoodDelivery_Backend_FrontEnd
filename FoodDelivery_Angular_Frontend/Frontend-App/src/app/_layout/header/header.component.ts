import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  userName:any;
  constructor() {
    const userDetailStr=localStorage.getItem('userDetails');
    var userDetailObj=userDetailStr!==null ? JSON.parse(userDetailStr) : "not found"; 
    if(userDetailObj!=="not found"){
      this.userName=userDetailObj.name;
    }
     else{
       this.userName=null; 
     }
  }
   
}
