import { Injectable } from '@angular/core';
import { CustomHttpService } from '../custom-http.service';
import { environment } from '../../../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class InvoiceService {

  private invoiceUrl = environment.api_server + 'invoice/';

  constructor(private http: CustomHttpService) {
  }

  getAllInvoice() {
    const url = this.invoiceUrl + 'all';
    return this.http.get(url).map((res) => res.json());
  }

  getRecentInvoice() {
    const url = this.invoiceUrl + 'recent';
    return this.http.get(url).map((res) => res.json());
  }

  storeInvoice(data: any) {
    const url = this.invoiceUrl + 'create';
    return this.http.post(url, data).map((res) => res.json());
  }

  downloadPDF(data: any) {
    const url = this.invoiceUrl + 'generate/pdf';
    return this.http.post(url, data).map((res) => res.json());
  }

  getInvoiceById(type: string, id: string) {
    const url = this.invoiceUrl + type + '/id/' + id;
    return this.http.get(url).map((res) => res.json());
  }

  searchByUsername(data: any) {
    const url = this.invoiceUrl + 'search/username/';
    return this.http.post(url, data).map((res) => res.json());
  }

  saveRecentInvoice(data: any) {
    const url = this.invoiceUrl + 'recent/save';
    return this.http.post(url, data).map((res) => res.json());
  }

  dropRecentInvoice() {
    const url = this.invoiceUrl + 'drop/recent/all';
    return this.http.get(url).map(res => res.json());
  }

  checkIfRecentInvoiceExists() {
    const url = this.invoiceUrl + 'recent_invoice/exists';
    return this.http.get(url).map(res => res.json());
  }

  getRecentInvoiceDB() {
    const url = this.invoiceUrl + 'recent_invoice_db';
    return this.http.get(url).map(res => res.json());
  }

  cleanInvoice() {
    const url = this.invoiceUrl + 'clean_invoice';
    return this.http.get(url).map(res => res.json());
  }

  changeInvoiceStatus(data: any) {
    const url = this.invoiceUrl + 'change_status';
    return this.http.put(url, data).map((res) => res.json());
  }

  //get total of all products in product list
  getTotal(data: any) {
    const url = this.invoiceUrl + 'product_list/total';
    return this.http.post(url, data).map((res) => res.json());
  }

  buildAndSaveRecentInvoice() {
    const url = this.invoiceUrl + 'recent/build_and_save';
    return this.http.get(url).map((res) => res.json());
  }

  savePartialPay(data: any) {
    const url = this.invoiceUrl + 'recent/partial_pay/save';
    return this.http.post(url, data).map((res) => res.json());
  }

  preGenerateInvoiceUpdate(data: any) {
    const url = this.invoiceUrl + 'pre_generate_update';
    return this.http.post(url, data).map((res) => res.json());
  }

  deleteById(id) {
    const url = this.invoiceUrl + 'delete/id/' + id;
    return this.http.delete(url).map((res) => res.json());
  }

  setPaidDateCounter(invoice) {
    const url = this.invoiceUrl + 'set_paid_date_counter/' + invoice['_id'];
    return this.http.get(url).map((res) => res.json());
  }

  getPaidDateCounter() {
    const url = this.invoiceUrl + 'get_paid_date_counter';
    return this.http.get(url).map((res) => res.json());
  }
}
