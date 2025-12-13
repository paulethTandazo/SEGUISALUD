import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { DataService } from '../services/data'; 
import { 
  calendarNumberOutline, mapOutline, medkitOutline, 
  heartCircleOutline, notificationsOutline, flame // Importar FLAME
} from 'ionicons/icons';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class Tab1Page implements OnInit {

  cantidadPendientes: number = 0;
  rachaActual: number = 0; // Nueva variable

  constructor(
    private router: Router,
    private dataService: DataService 
  ) {
    addIcons({ 
      calendarNumberOutline, mapOutline, medkitOutline, 
      heartCircleOutline, notificationsOutline, flame // Registrar FLAME
    });
  }

  ngOnInit() {
    this.dataService.recordatorios$.subscribe(lista => {
      this.cantidadPendientes = lista.length;
    });

    // Suscribirse a la Racha
    this.dataService.racha$.subscribe(valor => {
      this.rachaActual = valor;
    });
  }

  irA(ruta: string) {
    this.router.navigate([ruta]);
  }
}