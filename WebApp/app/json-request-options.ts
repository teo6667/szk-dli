import { Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class JsonRequestOptions extends RequestOptions {
    constructor() {
        super();
        let jsonHeader = new Headers({ 'Content-Type': 'application/json' });
        this.headers = jsonHeader;
        this.withCredentials = true;
    }
} 