import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, IonItem, IonInput, IonButton, IonIcon, IonCheckbox, IonRow, IonCol, IonGrid, IonText, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { mailOutline, lockClosedOutline, eyeOutline, logoGoogle, logoApple } from 'ionicons/icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonContent, IonItem, IonInput, IonButton, IonIcon,IonText]
})
export class LoginPage {

  constructor(private router: Router) {
    // Registramos los íconos necesarios
    addIcons({ mailOutline, lockClosedOutline, eyeOutline, logoGoogle, logoApple });
  }

  ingresar() {
    this.router.navigate(['/tabs/inicio']);
  }
}