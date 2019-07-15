import { Source } from './source';
import UUID from 'uuid/v4';

export class PieceOfNews {
    source: Source;
    author = '';
    title = '';
    description = '';
    url = '';
    urlToImage = '';
    publishedAt = '';
    content = '';
    id: string = UUID();

    constructor(data: any){
        this.source = data.source ? new Source( data.source ) : new Source();
        this.author = data.author ? data.author : this.author;
        this.title = data.title ? data.title : this.title;
        this.description = data.description ? data.description : this.description;
        this.url = data.url ? data.url : this.url;
        this.urlToImage = data.urlToImage ? data.urlToImage : this.urlToImage;
        this.content = data.content ? data.content : this.content;
        this.publishedAt = new Date(data.publishedAt ? Date.parse(data.publishedAt) :  Date.now()).toLocaleString();
    }
}
