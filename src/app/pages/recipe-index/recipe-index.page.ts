import {Component, inject, OnInit, signal, Signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {ActionSheetController, IonContent, IonHeader, IonItem, IonTitle, IonToolbar} from '@ionic/angular/standalone';
import {RecipeService} from "../../services/recipe.service";
import {RecipeIndexDtoModel} from "../../models/recipe-index-dto.model";
import {addIcons} from "ionicons";
import {trash} from "ionicons/icons";

@Component({
  selector: 'app-recipe-index',
  templateUrl: './recipe-index.page.html',
  styleUrls: ['./recipe-index.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonItem]
})
export class RecipeIndexPage {

  private readonly _recipeService: RecipeService = inject(RecipeService);
  private readonly _asCtrl: ActionSheetController = inject(ActionSheetController);

  recipes: RecipeIndexDtoModel[] = [];

  constructor() {
    addIcons({trash})
  }

  ionViewWillEnter() {
    this._recipeService.get().subscribe(r => {
      this.recipes = r;
    });
  }

  async diplayAction() {
    const as = await this._asCtrl.create({
      header: 'Actions',
      buttons: [
        {
          text: 'Ajouter en favoris',
          handler: () => {
            alert('Ajouté au favoris');
            as.dismiss();
          },
        },
        {
          text: 'Delete',
          icon: trash,
          handler: () => as.dismiss(),
          disabled: true,
        },
      ],
    });
    await as.present();
  }
}
