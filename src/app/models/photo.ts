import { JsonApiModelConfig, JsonApiModel, Attribute, HasMany, BelongsTo } from 'angular2-jsonapi';

@JsonApiModelConfig(
    {
        type: 'photos'
    }
)
export class Photo extends JsonApiModel{
    
    @Attribute()
    title: string;

    @Attribute()
    uri: string;
}
