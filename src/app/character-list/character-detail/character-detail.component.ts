import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Character} from "../character.model";
import {CharacterListService} from "../character-list.service";
import {Comic} from "../../comic-list/comic.model";

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.sass']
})
export class CharacterDetailComponent implements OnInit {
  @Input() character: Character;
  comics: Comic[]

  id: number;
  constructor(private route: ActivatedRoute, private characterListService: CharacterListService) { }

  ngOnInit(): void {

    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.characterListService.getCharactersById(this.id).subscribe(
          data => {
            this.character = data.data.results[0];
          }
        );
        this.characterListService.getCharacterComicsById(this.id).subscribe(
          data => {
            this.comics = data.data.results;
          }
        )
      }
    );
  }

}
