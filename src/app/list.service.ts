import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ListService {
  url="https://reqres.in/api/users"

  constructor(private http:HttpClient) { }
  getList()
  {
    return this.http.get("https://reqres.in/api/users?page=2");
  }
}
