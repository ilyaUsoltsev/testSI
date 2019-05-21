import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BillService } from './bill.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
  balance: Number;
  bill: Number;
  enough: Boolean;
  constructor(private router: Router, private billService: BillService) { }

  ngOnInit() {
    this.balance = Math.floor(Math.random() * 500);
    this.bill = Math.floor(Math.random() * 100);
    this.enough = this.balance >= this.bill;
  }

  onPay() {
    this.billService.pay().subscribe((res) => {
      this.billService.resultSub.next(true);
      this.router.navigate(['/result'], { skipLocationChange: true });
    });
  }

  onReject() {
    this.billService.reject().subscribe((res) => {
      this.billService.resultSub.next(false);
      this.router.navigate(['/result'], { skipLocationChange: true });
    });
  }

}
