import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {InvoiceService} from '../invoice.service';
import {Router} from "@angular/router";
import {ActivatedRoute} from '@angular/router';
import {Subscription} from "rxjs";
import {Invoice} from '../invoice';
import {CustomerService} from '../../customer/customer.service';
import {ProductService} from '../../product/product.service';
import * as _ from 'underscore';

declare let jsPDF;
declare let html2canvas;

@Component({
  selector: 'app-invoice-html',
  templateUrl: './invoice-html.component.html',
  styleUrls: ['./invoice-html.component.css']
})
export class InvoiceHtmlComponent implements OnInit {

  @ViewChild('invoiceBox') invoiceBox: ElementRef;

  private id: any;
  private subscription: Subscription;
  public invoice: Invoice;
  private type = '';
  private finalTotal;
  private finalTotalWords;


  constructor(private productService: ProductService, private customerService: CustomerService, private invoiceService: InvoiceService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.type = params['type'];
      this.getInvoiceById(params['id']);
    });

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  downloadPDF() {
    html2canvas(document.getElementById('invoice_body'), {
      onrendered: (canvas) => {
        var imgData = canvas.toDataURL("image/jpeg", 1.0);
        var pdf = new jsPDF("p", "mm", "a4");
        pdf.addImage(imgData, 'JPEG', 0, 0, 210, 200);
        pdf.save(this.invoice.customerData.username + "_" + this.id + ".pdf");
      }
    });
  }


  getInvoiceById(id: string) {
    this.invoiceService.getInvoiceById(this.type, id)
      .subscribe(
        (res) => {
          this.invoice = res;
          this.invoice.total = 0;
          this.invoice.productData = [];
          // get product data
          _.each(this.invoice.productList, (item) => {
            this.productService.getProductById(item)
              .subscribe(
                (res) => {
                  res['amount_with_vat'] = res['rate'] + (res['rate'] * (res['vat'] / 100));
                  this.invoice.productData.push(res);
                  this.invoice.total = this.invoice.total + res['amount_with_vat'];
                  this.invoice.amount_due = this.invoice.total;
                }, (err) => {

                }, () => {
                  if (this.invoice.amount_partially_paid.length > 0) {
                    _.each(this.invoice.amount_partially_paid, (data) => {
                      this.invoice.amount_due = this.invoice.amount_due - data['amount'];
                    });
                  }
                  if(this.invoice.status == 'Paid'){
                    this.invoice.amount_due = 0;
                  }
                  this.finalTotal = this.invoice.amount_due - this.invoice.discount;
                  this.finalTotalWords = this.numberToEnglish(this.invoice.total,'');
                }
              )
          });


          //get customer data
          this.customerService.getCustomerDetails(this.invoice.customer_id)
            .subscribe(
              (res) => {
                this.invoice.customerData = res;
              },
              (err) => {

              },
              () => {
                console.log(this.invoice);
              }
            )
        },
        (err) => {
          console.log(err);
        }
      )
  }

  numberToEnglish(n, custom_join_character) {

    var string = n.toString(),
      units, tens, scales, start, end, chunks, chunksLen, chunk, ints, i, word, words;

    var and = custom_join_character || 'and';

    /* Is number zero? */
    if (parseInt(string) === 0) {
      return 'zero';
    }

    /* Array of units as words */
    units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    /* Array of tens as words */
    tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    /* Array of scales as words */
    scales = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion', 'decillion', 'undecillion', 'duodecillion', 'tredecillion', 'quatttuor-decillion', 'quindecillion', 'sexdecillion', 'septen-decillion', 'octodecillion', 'novemdecillion', 'vigintillion', 'centillion'];

    /* Split user arguemnt into 3 digit chunks from right to left */
    start = string.length;
    chunks = [];
    while (start > 0) {
      end = start;
      chunks.push(string.slice((start = Math.max(0, start - 3)), end));
    }

    /* Check if function has enough scale words to be able to stringify the user argument */
    chunksLen = chunks.length;
    if (chunksLen > scales.length) {
      return '';
    }

    /* Stringify each integer in each chunk */
    words = [];
    for (i = 0; i < chunksLen; i++) {

      chunk = parseInt(chunks[i]);

      if (chunk) {

        /* Split chunk into array of individual integers */
        ints = chunks[i].split('').reverse().map(parseFloat);

        /* If tens integer is 1, i.e. 10, then add 10 to units integer */
        if (ints[1] === 1) {
          ints[0] += 10;
        }

        /* Add scale word if chunk is not zero and array item exists */
        if ((word = scales[i])) {
          words.push(word);
        }

        /* Add unit word if array item exists */
        if ((word = units[ints[0]])) {
          words.push(word);
        }

        /* Add tens word if array item exists */
        if ((word = tens[ints[1]])) {
          words.push(word);
        }

        /* Add 'and' string after units or tens integer if: */
        if (ints[0] || ints[1]) {

          /* Chunk has a hundreds integer or chunk is the first of multiple chunks */
          if (ints[2] || !i && chunksLen) {
            words.push(and);
          }

        }

        /* Add hundreds word if array item exists */
        if ((word = units[ints[2]])) {
          words.push(word + ' hundred');
        }

      }

    }

    return words.reverse().join(' ');

  }


}
