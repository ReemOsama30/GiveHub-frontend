import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharityService {

  constructor(private _httpClient:HttpClient) { }
  getAllCharities():Observable<any>
  {
    return this._httpClient.get(`https://localhost:44377/api/charity`);

  }

  getCharityByID(IdInt:Number):Observable<any>
  {
    return this._httpClient.get(`https://localhost:44377/api/charity/getByCharityId/${IdInt}`);

  }
}
