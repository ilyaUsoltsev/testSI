import { Component, OnInit, OnDestroy } from '@angular/core';
import { BillService } from '../bill/bill.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit, OnDestroy {
  resultSubscription = new Subscription();
  result: Boolean;
  constructor(private billService: BillService) {
   }

  ngOnInit() {
    this.resultSubscription = this.billService.resultSub.subscribe(res => this.result = res);
  }

  ngOnDestroy() {
    this.resultSubscription.unsubscribe();
  }

}
