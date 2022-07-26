import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {MarvelResponse} from "../marvel-response.model";
import {Character} from "../character-list/character.model";
import {Comic} from "./comic.model";

@Injectable({
  providedIn: 'root'
})
export class ComicListService {

  constructor(private http: HttpClient){

  }

  getComics(keyword: string = '', offset: number = 0): Observable<MarvelResponse<Comic>> {
    const options = new HttpParams().set('titleStartsWith',keyword).set('offset',offset)
    //console.log(options)

    return this.http.get<MarvelResponse<Comic>>(
      'https://gateway.marvel.com:443/v1/public/comics', {params : options}
    )
  }

  getComicById(id: number): Observable<MarvelResponse<Comic>> {
    return this.http.get<MarvelResponse<Comic>>(
      `https://gateway.marvel.com:443/v1/public/comics/${id}?`
    )
  }

  getComicCharactersById(id: number): Observable<MarvelResponse<Character>> {
    return this.http.get<MarvelResponse<Character>>(
      `https://gateway.marvel.com:443/v1/public/comics/${id}/characters?`
    )
  }

}
