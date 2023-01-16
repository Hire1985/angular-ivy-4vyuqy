import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { resultsPokemon } from '../models/pokemon.module';

@Injectable({
  providedIn: 'root',
})
export class PokeapiService {
  constructor(private http: HttpClient) {}

  getPokemons() {
    return this.http.get<resultsPokemon[]>(
      'https://pokeapi.co/api/v2/pokemon/'
    );
  }
}
