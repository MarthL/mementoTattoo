import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TattoosService {
  readonly ROOT_URL;
  constructor(private http: HttpClient) { 
    this.ROOT_URL = 'http://localhost:3000/tattoos';
  }

  getAll() { 
    return this.http.get(`${this.ROOT_URL}`);
  }

  get(uri: String) { 
    return this.http.get(`${this.ROOT_URL}/${uri}`);
  }

  post(uri: String, payload: Object) { 
    return this.http.post(`${this.ROOT_URL}/${uri}`, payload);
  }

  patch(uri: String, payload: Object) { 
    return this.http.patch(`${this.ROOT_URL}/${uri}`, payload);
  }

  delete(uri: String) { 
    return this.http.delete(`${this.ROOT_URL}/${uri}`);
  }
}
