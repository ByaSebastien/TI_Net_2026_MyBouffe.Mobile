import { Component } from '@angular/core';
import {IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs} from '@ionic/angular/standalone';
import {addIcons} from "ionicons";
import {bookOutline, home, scan} from "ionicons/icons";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, RouterLink, IonIcon, IonLabel],
})
export class AppComponent {
  constructor() {
    addIcons({home, scan, bookOutline});
  }
}
