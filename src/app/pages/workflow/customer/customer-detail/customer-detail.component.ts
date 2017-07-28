import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import * as _ from 'underscore';
import { Customer } from '../customer';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from "rxjs";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { ProductService } from '../../product/product.service';
import { AreaService } from '../../area/area.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  public customer: Customer;
  private subscription: Subscription;
  public customerDetailForm: FormGroup;
  private id: any;
  public productList: any[] = [];
  public areaList: any[] = [];
  showSuccess: boolean = false;
  showError: boolean = false;
  public allProductCounter;

  constructor(private areaService: AreaService, private productService: ProductService, private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private customerService: CustomerService) { }

  ngOnInit() {
    this.getProductList();
    this.getAreaList();
    this.subscription = this.route.params.subscribe(params => {
      this.getCustomerDetails(params['id']);
      this.id = params['id'];
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getCustomerDetails(id) {
    this.customerService.getCustomerDetails(id)
      .subscribe(
      (res) => {
        this.customer = res;
        this.allProductCounter = this.customer.productList.length;
        console.log(this.allProductCounter);
        this.buildForm();
      },
      (err) => {
        console.log(err);
      }
      )
  }

  buildForm() {
    let productId = '';
    if (this.customer.productList.length > 0) {
      productId = this.customer.productList[0]["_id"];
    }
    this.customerDetailForm = this.fb.group({
      username: [this.customer.username],
      nid: [this.customer.nid],
      email: [this.customer.email],
      fullname: [this.customer.fullname],
      customer_currency: [this.customer.customer_currency],
      mobile_primary: [this.customer.mobile_primary],
      mobile_secondary: [this.customer.mobile_secondary],
      website: [this.customer.website],
      country: [this.customer.country],
      location: [this.customer.location],
      area: [this.customer.area],
      city: [this.customer.city],
      postal_code: [this.customer.postal_code],
      status: [this.customer.status],
      product: ['']
    });
  }

  submitCustomerDetail() {
    this.customer.productList = _.uniq(this.customer.productList);
    let data = {
      id: this.id,
      username: this.customerDetailForm.value.username,
      nid: this.customerDetailForm.value.nid,
      email: this.customerDetailForm.value.email,
      fullname: this.customerDetailForm.value.fullname,
      customer_currency: this.customerDetailForm.value.customer_currency,
      mobile_primary: this.customerDetailForm.value.mobile_primary,
      mobile_secondary: this.customerDetailForm.value.mobile_secondary,
      website: this.customerDetailForm.value.website,
      country: this.customerDetailForm.value.country,
      location: this.customerDetailForm.value.location,
      area: this.customerDetailForm.value.area,
      city: this.customerDetailForm.value.city,
      postal_code: this.customerDetailForm.value.postal_code,
      status: this.customerDetailForm.value.status,
      productList: this.customer.productList
    }

    this.customerService.updateCustomer(data)
      .subscribe(
      (res) => {
        if (res.status) {
          this.showSuccess = true;
        } else {
          this.showError = true;
        }
      },
      (err) => {
        this.showError = true;
      }
      )
  }

  getProductList() {
    this.productList = [];
    this.productService.getAllProduct()
      .subscribe(
      (res) => {
        _.each(res, (item) => {
          if (item['status']) {
            this.productList.push(item);
          }
        });
      },
      (err) => {
        console.log("ERROR from productList");
      }
      )
  }

  getAreaList() {
    this.areaList = [];
    this.areaService.getAllArea()
      .subscribe(
      (res) => {
        _.each(res, (item) => {
          if (item['status']) {
            this.areaList.push(item);
          }
        });
      },
      (err) => {
        console.log("ERROR from getAreaList");
      }
      )
  }

  createRange(number) {
    let items: number[] = [];
    for (let i = 1; i <= number; i++) {
      items.push(i);
    }
    return items;
  }

  onProductChange(event: any, index) {
    this.customer.productList[index] = event.target.value;
  }

  removeProduct(index) {
    this.customer.productList.splice(index, 1);
  }

   addProduct() {
    let newProduct = this.productList[0]._id;
    this.customer.productList.push(newProduct);
  }
}
