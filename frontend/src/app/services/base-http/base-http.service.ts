import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class BaseHttpService {
    private actionUrl = 'http://localhost:8000/';

    constructor(private http: HttpClient, private urlSerment: string) {
        this.actionUrl = this.actionUrl + this.urlSerment;
    }

    public getAll<T>(): Observable<T[]> {
        return this.http.get<T[]>(this.actionUrl);
    }

    public getByParam<T>(param: any): Observable<T> {
        return this.http.get<T>(this.actionUrl + param);
    }

    public add<T>(itemToAdd: T): Observable<T> {
        return this.http.post<T>(this.actionUrl, itemToAdd);
    }

    public update<T>(id: string, itemToUpdate: T): Observable<T> {
        return this.http.put<T>(this.actionUrl + id, itemToUpdate);
    }

    public delete<T>(id: string): Observable<T> {
        return this.http.delete<T>(this.actionUrl + id);
    }
}
