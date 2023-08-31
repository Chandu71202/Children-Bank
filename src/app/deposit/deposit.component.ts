import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<DepositComponent>, private accountservice: AccountService) { }
  ngOnInit() {}
  depositAmount!: number;
  res: any;
  account: any;
  result: any;
  user_id = sessionStorage.getItem('id');

  deposit(): void {
    this.accountservice.getAccount(this.user_id).subscribe((res) => {
      this.account = res;
      if (this.depositAmount <= 0) {
        alert("Please enter a valid amount greater than 0");
        return;
      }
      const newBalance = this.account.balance + this.depositAmount;
      this.accountservice.updateBalance(this.user_id, newBalance)
        .subscribe(response => {
          this.result = response;
          alert(`Deposit Successful, you current balance is ${this.result.balance}`);
        });
    });
    this.dialogRef.close();
  }

}

