import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {RecipeIndexDtoModel} from "../models/recipe-index-dto.model";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class RecipeService {

  private readonly _http : HttpClient = inject(HttpClient);

  get() {
    const headers = new HttpHeaders({
      'ngrok-skip-browser-warning': 'true'
    });
    return this._http.get<RecipeIndexDtoModel[]>(environment.API_URL + "recipe",{headers});
  }
}
