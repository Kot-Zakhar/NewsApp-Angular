import { PieceOfNews } from './piece-of-news';
import { Response, ResponseError } from './response';

export class NewsResponse implements Response {
    error?: ResponseError;
    status: string;
    totalResults: number;
    articles: PieceOfNews[];

    constructor(data?: any) {
        this.status = data.status || '';
        this.totalResults = data.totalResults || 0;
        this.articles = data.articles ? data.articles.map(article =>  new PieceOfNews(article)) : {};
    }
}
