import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular_Login';

  constructor(private router: Router) {}

  iniciarS() {
    this.router.navigate(['/home']);
  }
  
  registrar() {
    this.router.navigate(['/home']);
  }
  
}