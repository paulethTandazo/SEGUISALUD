import { Component, OnInit } from '@angular/core'; // Agregamos OnInit
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { DataService } from '../services/data'; // <--- IMPORTAR SERVICIO
import { calendarNumberOutline, mapOutline, medkitOutline, heartCircleOutline, notificationsOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class Tab1Page implements OnInit {

  cantidadPendientes: number = 0; // Variable para mostrar en el HTML

  constructor(
    private router: Router,
    private dataService: DataService // Inyectamos el servicio
  ) {
    addIcons({ calendarNumberOutline, mapOutline, medkitOutline, heartCircleOutline, notificationsOutline });
  }

  ngOnInit() {
    // Nos suscribimos a los cambios. 
    // Cada vez que Tab 2 agregue algo, esto se ejecuta automáticamente.
    this.dataService.recordatorios$.subscribe(lista => {
      this.cantidadPendientes = lista.length;
    });
  }

  irA(ruta: string) {
    this.router.navigate([ruta]);
  }
}