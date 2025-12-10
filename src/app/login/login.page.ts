import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

// 1. IMPORTAR addIcons y los iconos específicos
import { addIcons } from 'ionicons';
import { 
  logoGoogle, 
  logoApple, 
  mailOutline, 
  lockClosedOutline, 
  eyeOutline 
} from 'ionicons/icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage {

  email: string = '';
  password: string = '';

  constructor(private router: Router) {
    // 2. REGISTRARLOS AQUÍ PARA QUE SE VEAN EN EL HTML
    addIcons({ 
      logoGoogle, 
      logoApple, 
      mailOutline, 
      lockClosedOutline, 
      eyeOutline 
    });
  }

  ingresar() {
    console.log('Ingresando directo...');
    this.router.navigate(['/tabs/tab1']);
  }

}