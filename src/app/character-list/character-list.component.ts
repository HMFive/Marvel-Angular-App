import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CharacterListService} from "./character-list.service";
import {Character} from "./character.model";
import {ComicListService} from "../comic-list/comic-list.service";

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.sass']
})
export class CharacterListComponent implements OnInit {
  characters: Character[];
  offset: number = 0;

  constructor(private http: HttpClient,private characterListService: CharacterListService, private comicListService: ComicListService) { }

  ngOnInit(): void {
    this.characterListService.getCharacters(this.offset).subscribe(data => {
      this.characters = data.data.results;
      console.log(data.data)

    },
      err => {
      console.log(err);
      });

  }

  onClick(offset) {
    this.characterListService.getCharacters(offset).subscribe(data => {
      this.characters = data.data.results;
    })
  }
}
