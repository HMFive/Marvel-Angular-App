import {Component, Input, OnInit} from '@angular/core';
import {Comic} from "../comic.model";
import {ActivatedRoute, Params} from "@angular/router";
import {ComicListService} from "../comic-list.service";
import {Character} from "../../character-list/character.model";

@Component({
  selector: 'app-comic-detail',
  templateUrl: './comic-detail.component.html',
  styleUrls: ['./comic-detail.component.sass']
})
export class ComicDetailComponent implements OnInit {
  @Input() comic: Comic;
  id: number;
  characters: Character[];
  constructor(private route: ActivatedRoute, private comicListService: ComicListService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.comicListService.getComicById(this.id).subscribe(
          data => {
            this.comic = data.data.results[0];
            console.log(this.comic)

          }
        );
        this.comicListService.getComicCharactersById(this.id).subscribe(
          data => {
            this.characters = data.data.results;
          }
        )
      }
    );
  }

}
