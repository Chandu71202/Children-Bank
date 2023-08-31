import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialogRef,
  MatDialogModule,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { AccountService } from '../account.service';
import { DashboardComponent } from '../dashboard/dashboard.component';

export interface ModalData {
  name: string;
  color: string;
}

@Component({
  selector: 'app-withdrawpop',
  templateUrl: './withdrawpop.component.html',
  styleUrls: ['./withdrawpop.component.css'],
})
export class WithdrawpopComponent implements OnInit {
  withdrawAmount!: number;
  res: any;
  account: any;
  user_id = sessionStorage.getItem('id');
  result: any;
  updating: any;
  tarray: any;

  constructor(
    public dialogRef: MatDialogRef<WithdrawpopComponent>,
    private accountservice: AccountService,
  ) {}
  ngOnInit() {}

  // withdraw functions that work on submitting the withdraw button
  withdraw(): void {
    this.accountservice.getAccount(this.user_id).subscribe((res) => {
      this.account = res;
      if (this.account.balance < this.withdrawAmount) {
        alert(
          `Insufficient Balance, your current balance is ${this.account.balance}`,
        );
        return;
      }
      const newBalance = this.account.balance - this.withdrawAmount;
      this.accountservice
        .updateBalance(this.user_id, newBalance)
        .subscribe((response) => {
          this.result = response;
          alert(
            `Withdraw Successful, you current balance is ${this.result.balance}`,
          );
          // transaction message to add in the transaction array
          const date = new Date();
          const transaction_msg = `Withdraw ${this.withdrawAmount} from your account  at ${date}`;
          this.account.transactions.push(transaction_msg);
          this.accountservice
            .updateTransaction(this.user_id, this.account.transactions)
            .subscribe((res) => {
              this.result = res;
            });
          this.tarray = res.transactions;
          this.tarray.push(
            `Withdraw Successful, you current balance is ${this.result.balance}`,
          );
          console.log(this.tarray);
        });
    });
    this.dialogRef.close();
  }
}
