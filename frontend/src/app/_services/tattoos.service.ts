import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TattoosService {
  readonly ROOT_URL;
  constructor(private http: HttpClient) { 
    this.ROOT_URL = `${environment.apiUrl}/tattoos`;
  }

  getAll() { 
    return this.http.get(`${this.ROOT_URL}`);
  }

  get(uri: String) { 
    return this.http.get(`${this.ROOT_URL}/${uri}`);
  }

  post(uri: String, payload: Object) { 
    return this.http.post(`${this.ROOT_URL}`, payload);
  }

  patch(uri: String, payload: Object) { 
    return this.http.patch(`${this.ROOT_URL}/${uri}`, payload);
  }

  delete(uri: String) { 
    return this.http.delete(`${this.ROOT_URL}/${uri}`);
  }
}
