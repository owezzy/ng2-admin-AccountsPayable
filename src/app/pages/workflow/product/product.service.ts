import { Injectable } from '@angular/core';
import { CustomHttpService } from '../custom-http.service';
import { environment } from '../../../../environments/environment';
import 'rxjs/add/operator/map';


@Injectable()
export class ProductService {

  private productUrl = environment.api_server + 'product/';

  constructor(private http: CustomHttpService) { }

  createProduct(data: any) {
    const url = this.productUrl + 'create/';
    return this.http.post(url, data).map((res) => res.json());
  }

  getAllProduct() {
    const url = this.productUrl + 'all';
    return this.http.get(url).map((res) => res.json());
  }

  setStatus(data: any) {
    const url = this.productUrl + 'status_change/';
    return this.http.put(url, data).map((res) => res.json());
  }

  getProductById(id: any) {
    const url = this.productUrl + 'id/' + id;
    return this.http.get(url).map((res) => res.json());
  }

  updateProduct(data: any) {
    const url = this.productUrl + 'update/';
    return this.http.put(url, data).map((res) => res.json());
  }

  searchByName(data: any) {
    const url = this.productUrl + 'search/name/';
    return this.http.post(url, data).map((res) => res.json());
  }

}
