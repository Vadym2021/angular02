import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IUser} from "../interfaces";
import {urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private HttpClient: HttpClient) {
  }

  getAll(): Observable<IUser[]> {
    return this.HttpClient.get<IUser[]>(urls.users)
  }
}

