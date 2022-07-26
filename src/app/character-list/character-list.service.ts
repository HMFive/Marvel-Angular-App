import {HttpClient, HttpParams} from "@angular/common/http";
import {Character} from "./character.model";
import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {MarvelResponse, MarvelResponseData} from "../marvel-response.model";
import {Comic} from "../comic-list/comic.model";

@Injectable({
  providedIn: 'root'
})
export class CharacterListService {

  constructor(private http: HttpClient){

  }

  getCharacters(offset: number): Observable<MarvelResponse<Character>> {
    const options = new HttpParams().set('offset',offset)
    return this.http.get<MarvelResponse<Character>>(
      'https://gateway.marvel.com:443/v1/public/characters?', {params: options}
  )
  }

  getCharactersById(id: number): Observable<MarvelResponse<Character>> {
    return this.http.get<MarvelResponse<Character>>(
      `https://gateway.marvel.com:443/v1/public/characters/${id}?`
    )
  }

  getCharacterComicsById(id: number): Observable<MarvelResponse<Comic>> {
    return this.http.get<MarvelResponse<Comic>>(
      `https://gateway.marvel.com:443/v1/public/characters/${id}/comics?`
    )
  }

}
