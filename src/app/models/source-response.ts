import { Source } from './source';
import { Response, ResponseError } from './response';

export class SourceResponse implements Response {
    error?: ResponseError;
    status: string;
    sources: Source[];

    constructor(data?: any) {
        this.status = data.status || '';
        this.sources = data.sources ? data.sources.map(source =>  new Source(source)) : [];
    }
}
