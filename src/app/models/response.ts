export interface Response {
    status: string;
    error?: ResponseError;
}

export interface ResponseError{
    code: string;
    message: string;
    status: string;
}