import { Injectable } from '@angular/core';
import { JsonApiDatastoreConfig, JsonApiDatastore, DatastoreConfig } from 'angular2-jsonapi';
import { Photo } from '../models/photo';
import { Book } from '../models/book';
import { HttpClient } from '@angular/common/http';
import { Author } from '../models/author';


const config: DatastoreConfig = {
  baseUrl: 'https://jsonapiplayground.reyesoft.com/v2',
  models: {
    authors: Author,
    photos: Photo,
    books: Book

  }
}




@Injectable({
  providedIn: 'root'
})
@JsonApiDatastoreConfig(config)
export class DatastoreService extends JsonApiDatastore{

  constructor(http: HttpClient) {
    super(http);
   }
}
