import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {
    constructor(private http: Http) {
    }

    hasPrivilege(componentName: string): Observable<boolean> {
        return this.http.get("api/guard?componentName=" + componentName)
            .map(res => res.json());
    }
}