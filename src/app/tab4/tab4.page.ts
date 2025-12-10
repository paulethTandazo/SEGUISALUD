import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, ModalController } from '@ionic/angular'; // Importamos ModalController
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class Tab4Page {

  farmacias: any[] = [];
  cargando: boolean = false;
  ubicacionActual: any = null;
  
  // Variable para el Modal de detalle
  farmaciaSeleccionada: any = null;
  isModalOpen: boolean = false;

  constructor(private http: HttpClient) {}

  compartirUbicacion() {
    this.cargando = true;
    this.farmacias = []; 

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.ubicacionActual = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          // Buscamos a 5km (5000m)
          this.buscarFarmaciasEnOpenStreet(this.ubicacionActual.lat, this.ubicacionActual.lng);
        },
        (error) => {
          console.error('Error', error);
          this.cargando = false;
          alert('Activa tu GPS para encontrar farmacias.');
        }
      );
    } else {
      alert('Navegador no soporta GPS.');
      this.cargando = false;
    }
  }

  buscarFarmaciasEnOpenStreet(lat: number, lng: number) {
    const query = `
      [out:json][timeout:25];
      (
        node["amenity"="pharmacy"](around:10000,${lat},${lng});
        way["amenity"="pharmacy"](around:10000,${lat},${lng});
      );
      out center;
    `;

    const url = 'https://overpass-api.de/api/interpreter';

    this.http.post(url, `data=${encodeURIComponent(query)}`, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
      .subscribe({
        next: (response: any) => {
          this.procesarDatos(response.elements);
          this.cargando = false;
        },
        error: (err) => {
          this.cargando = false;
        }
      });
  }

  procesarDatos(elementos: any[]) {
    this.farmacias = elementos.map((item, index) => {
      const nombre = item.tags.name || `Farmacia #${index + 1}`;
      
      // Intentamos obtener más datos si existen
      const direccion = item.tags['addr:street'] 
        ? `${item.tags['addr:street']} ${item.tags['addr:housenumber'] || ''}` 
        : 'Ver ubicación en mapa';
      
      const horario = item.tags.opening_hours || 'Horario no disponible';
      const telefono = item.tags.phone || 'No registrado';

      const randomRate = (Math.random() * (5.0 - 3.5) + 3.5).toFixed(1);
      
      return {
        id: item.id,
        lat: item.lat || item.center.lat, // OpenStreet devuelve lat/lon directo en nodes o en center en ways
        lng: item.lon || item.center.lon,
        nombre: nombre,
        direccion: direccion,
        horario: horario,
        telefono: telefono,
        rate: randomRate,
        imagen: 'https://cdn-icons-png.flaticon.com/512/3063/3063822.png'
      };
    });

    if (this.farmacias.length === 0) {
      alert('No se encontraron farmacias cerca.');
    }
  }

  // --- NUEVAS FUNCIONES ---

  // 1. Abrir el Modal con la info
  verDetalle(farmacia: any) {
    this.farmaciaSeleccionada = farmacia;
    this.isModalOpen = true;
  }

  // 2. Cerrar el Modal
  cerrarModal() {
    this.isModalOpen = false;
  }

  // 3. Abrir Google Maps con la ruta
  comoLlegar() {
    if (!this.farmaciaSeleccionada) return;
    
    const lat = this.farmaciaSeleccionada.lat;
    const lng = this.farmaciaSeleccionada.lng;
    
    // URL universal para abrir mapas nativos
    const url = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
    window.open(url, '_system');
  }

  getEstrellas(rate: any) {
    return new Array(Math.floor(Number(rate)));
  }
}