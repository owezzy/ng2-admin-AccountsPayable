import { Injectable } from '@angular/core';
import { CustomHttpService } from '../custom-http.service';
import { environment } from '../../../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class CustomerService {

  private customerUrl = environment.api_server + 'customer/';

  constructor(private http: CustomHttpService) {
  }

  getAllCustomers() {
    const url = this.customerUrl + 'all/';
    return this.http.get(url).map((res) => res.json());
  }

  setStatus(data: any) {
    const url = this.customerUrl + 'status_change/';
    return this.http.put(url, data).map((res) => res.json());
  }

  getCustomerDetails(id) {
    const url = this.customerUrl + 'details/' + id;
    return this.http.get(url).map((res) => res.json());
  }

  updateCustomer(data: any) {
    const url = this.customerUrl + 'details/update';
    return this.http.put(url, data).map((res) => res.json());
  }

  createNewCustomer(data: any) {
    const url = this.customerUrl + 'create/';
    return this.http.post(url, data).map((res) => res.json());
  }

  searchByUsername(data: any) {
    const url = this.customerUrl + 'search/username/';
    return this.http.post(url, data).map((res) => res.json());
  }

  searchByMobileNumber(data: any) {
    const url = this.customerUrl + 'search/mobile_number/';
    return this.http.post(url, data).map((res) => res.json());
  }

  searchByArea(data: any) {
    const url = this.customerUrl + 'search/area/';
    return this.http.post(url, data).map((res) => res.json());
  }

  getCustomerByArea(data: any) {
    const url = this.customerUrl + 'search/customerByArea/';
    return this.http.post(url, data).map((res) => res.json());
  }

  setCheckGenerateInvoice(data: any) {
    const url = this.customerUrl + 'check_change_generate_invoice_monthly';
    return this.http.post(url, data).map((res) => res.json());
  }
}
