import { Injectable } from '@angular/core';
import { ApiUrl } from '../../environments/api-url';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BicicletasService {
  private apiUrl: string = ApiUrl.url
  constructor(private http: HttpClient) { }

  private header() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({
      'authorization': `Bearer ${token}`
    });
    return headers;
  }

  getBicis() {
    const headers = this.header()
    return this.http.get(`${this.apiUrl}/bicicletas`, { headers })
  };

  getOneBici(id: any) {
    const headers = this.header();
    return this.http.get(`${this.apiUrl}/bicicleta/one/${id}`, { headers })
  };

  putBici(body: any, id: any) {
    const headers = this.header()
    return this.http.put(`${this.apiUrl}/bicicleta/update/${id}`, body, { headers })
  };

  deleteBici(id: any) {
    const headers = this.header()
    return this.http.delete(`${this.apiUrl}/bicicleta/delete/${id}`, { headers })
  };

  postBici(bodyBici: any) {
    const headers = this.header()
    return this.http.post(`${this.apiUrl}/bicicleta/create`, bodyBici, { headers })
  };

  getBicisPorEstacion(estacionID: string) {
    const headers = this.header()
    return this.http.get(`${this.apiUrl}/bicicleta/estacion/${estacionID}`, {headers})
  }
}
