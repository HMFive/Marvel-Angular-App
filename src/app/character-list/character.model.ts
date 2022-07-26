import {Thumbnail, Url} from "../common.model";

interface SeriesSummary {
  resourceURI: string;
  name: string;
}

interface SeriesList {
  available: number;
  collectionURI: string;
  items: SeriesSummary[];
}

interface EventSummary {
  resourceURI: string;
  name: string;
}

interface EventList {
  available: number;
  collectionURI: string;
  items: EventSummary[];
}

export class Character {
  public id: number;
  public name: string;
  public description: string;
  public urls: Url[];
  public thumbnail: Thumbnail;
  public comics: ComicList;
  public stories: StoryList;
  public series: SeriesList;
  public events: EventList;


  constructor(id: number, name: string, description: string, urls: Url[], thumbnail: Thumbnail, comics: ComicList, stories: StoryList) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.urls = urls;
    this.thumbnail = thumbnail;
    this.comics = comics;
    this.stories = stories;
  }
}


interface StorySummary {
  resourceURI: string;
  name: string;
  type: string;
}

interface StoryList {
  available: number;
  returned: number;
  collectionURI: string;
  items: StorySummary;
}

interface ComicSummary {
  resourceURI: string;
  name: string;
}

interface ComicList {
  available: number;
  returned: number;
  collectionURI: string;
  items: ComicSummary;
}

