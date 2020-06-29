import { JsonApiModelConfig, JsonApiModel, Attribute, HasMany, BelongsTo } from 'angular2-jsonapi';
import { Author } from './author';

@JsonApiModelConfig(
    {
        type: 'books'
    }
)
export class Book extends JsonApiModel {
    
    @Attribute()
    title:string;

    @Attribute()
    date_published: string

    @Attribute()
    isbn: number

    @BelongsTo()
    author: Author
}

