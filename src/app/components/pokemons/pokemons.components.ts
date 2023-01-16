import { Component } from '@angular/core';
import { arrayPokemon } from 'models/pokemon.module';
import { PokeapiService } from './services/pokeapi.services';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss'],
})
export class PokemonsComponent {
  pokemons: arrayPokemon[] = [];

  constructor(private pokeapiService: PokeapiService) {}

  ngOnInit() {
    this.pokeapiService.getPokemons().subscribe((data) => {
      this.pokemons = data.results;
    });
  }
}
