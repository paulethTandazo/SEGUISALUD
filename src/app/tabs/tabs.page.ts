import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  homeOutline, 
  calendarOutline, 
  personOutline,
  medkitOutline, 
  map,                    
  medkit,                
  navigateCircleOutline,  
  star,                   
  appsOutline,            
  add,                    
  removeCircleOutline,
  heartCircle,        
  sadOutline,         
  alertCircleOutline, 
  happyOutline,      
  starOutline,        
  waterOutline,       
  documentTextOutline,
  documentAttachOutline, 
  
  ellipse, square } from 'ionicons/icons';
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);

  constructor() {
    addIcons({homeOutline,calendarOutline,map,medkit,heartCircle,personOutline,ellipse,square,medkitOutline,navigateCircleOutline,star,appsOutline,add,removeCircleOutline,sadOutline,
    alertCircleOutline,happyOutline,starOutline,waterOutline,documentTextOutline,documentAttachOutline
    });
  }
}
