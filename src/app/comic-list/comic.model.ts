import {Thumbnail, Url} from "../common.model";

interface CreatorSummary {
  name: string;
  role: string;
}

interface CreatorList {
  available: number;
  items: CreatorSummary[];
}

export class Comic {
  public id: number;
  public title: string;
  public thumbnail: Thumbnail;
  public description: string;
  public pageCount: number;
  public urls: Url[];
  public creators: CreatorList;
}

