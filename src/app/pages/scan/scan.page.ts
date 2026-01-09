import {Component, inject, OnInit, signal, Signal, WritableSignal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonButton, IonContent, IonHeader, IonIcon, IonImg, IonTitle, IonToolbar} from '@ionic/angular/standalone';
import {addIcons} from "ionicons";
import {scan} from "ionicons/icons";
import {BarcodeScanner} from "@capacitor-mlkit/barcode-scanning";
import {FoodService} from "../../services/food.service";
import {toSignal} from "@angular/core/rxjs-interop";
import {FoodResultModel} from "../../models/food-result.model";

@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonIcon, IonImg]
})
export class ScanPage {

  private readonly _foodService: FoodService = inject(FoodService);

  foodResult: WritableSignal<FoodResultModel | undefined> = signal(undefined);

  constructor() {
    addIcons({scan});
  }

  async scan() {

    const granted = await BarcodeScanner.requestPermissions();

    if(!granted) {
      console.log('Scan not granted');
      return;
    }

    const {barcodes} = await BarcodeScanner.scan();

    this._foodService.get(barcodes[0].displayValue).subscribe((r) => this.foodResult.set(r));
  }
}
