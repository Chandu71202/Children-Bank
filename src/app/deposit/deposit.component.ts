import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css'],
})
export class DepositComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DepositComponent>,
    private accountservice: AccountService,
  ) {}
  ngOnInit() {}
  depositAmount!: number;
  res: any;
  account: any;
  result: any;
  user_id = sessionStorage.getItem('id');

  // Deposit function which works on clicking the deposit button
  deposit(): void {
    this.accountservice.getAccount(this.user_id).subscribe((res) => {
      this.account = res;
      if (this.depositAmount <= 0) {
        alert('Please enter a valid amount greater than 0');
        return;
      }
      const newBalance = this.account.balance + this.depositAmount;
      this.accountservice
        .updateBalance(this.user_id, newBalance)
        .subscribe((response) => {
          this.result = response;
          alert(
            `Deposit Successful, you current balance is ${this.result.balance}`,
          );
          // To save the transaction in the transaction array
          const date = new Date();
          const transaction_msg = `Deposit Successful, you current balance is ${this.result.balance} at ${date}`;
          this.account.transactions.push(transaction_msg);
          this.accountservice
            .updateTransaction(this.user_id, this.account.transactions)
            .subscribe((res) => {
              this.result = res;
            });
        });
    });
    this.dialogRef.close();
  }
}
