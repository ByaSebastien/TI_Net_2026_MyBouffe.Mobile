import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FoodResultModel} from "../models/food-result.model";

@Injectable({
  providedIn: 'root',
})
export class FoodService {

  private readonly _http: HttpClient = inject(HttpClient);

  get(barcode: string) {
    return this._http.get<FoodResultModel>(`https://world.openfoodfacts.org/api/v2/product/${barcode}.json`);
  }
}
