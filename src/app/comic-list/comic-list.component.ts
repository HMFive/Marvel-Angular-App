import {Component, Input, OnInit} from '@angular/core';
import {Comic} from "./comic.model";
import {ComicListService} from "./comic-list.service";

@Component({
  selector: 'app-comic-list',
  templateUrl: './comic-list.component.html',
  styleUrls: ['./comic-list.component.sass']
})
export class ComicListComponent implements OnInit {
  comics: Comic[]
  keyword: string;
  offset: number = 20;

  constructor(private comicListService: ComicListService) { }

  ngOnInit(): void {
    this.getData('');
  }

  onSearch(keyword) {
    this.getData(keyword);
  }

  getData(keyword) {
    this.comicListService.getComics(this.keyword,this.offset).subscribe(data => {
      this.comics = data.data.results;
    })
  }

  onClick(offset: number) {
    this.getData(offset);
  }
}
