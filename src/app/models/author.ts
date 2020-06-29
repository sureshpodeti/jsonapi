import { JsonApiModelConfig, JsonApiModel, Attribute, HasMany, BelongsTo } from 'angular2-jsonapi';
import { Book } from './book';
import { Photo } from './photo';

@JsonApiModelConfig(
    {
        type: 'authors'
    }
)
export class Author extends JsonApiModel{

    @Attribute()
    name: string;

    @Attribute()
    birthplace:string;

    @Attribute()
    date_of_birth:string;

    @Attribute()
    date_of_death:string;

    @HasMany()
    books: Book[]

    @HasMany()
    photos: Photo[]
}
