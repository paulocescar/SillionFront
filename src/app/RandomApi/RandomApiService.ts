import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { RandomDataModel } from "./Model/RandomDataModel";
import { environment } from '../../environments/environment';

@Injectable()
export class RandomApiService {
    baseUrl: string;

    constructor(private http: HttpClient) {
        this.baseUrl = environment.urlApi
    }
    getData(): Observable<any> {
        return this.http.get(this.baseUrl + "random");
    }
}