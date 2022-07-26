import {Component, Input, OnInit} from '@angular/core';
import {Comic} from "../comic.model";

@Component({
  selector: 'app-comic-item',
  templateUrl: './comic-item.component.html',
  styleUrls: ['./comic-item.component.sass']
})
export class ComicItemComponent implements OnInit {
  @Input() comic: Comic;

  constructor() { }

  ngOnInit(): void {
  }

}
