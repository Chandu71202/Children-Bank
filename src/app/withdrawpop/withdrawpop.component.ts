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
  styleUrls: ['./withdrawpop.component.css']
})
export class WithdrawpopComponent implements OnInit {
  withdrawAmount!: number;
  res: any;
  account: any;
  user_id = sessionStorage.getItem('id');
  result: any;

  constructor(public dialogRef: MatDialogRef<WithdrawpopComponent>, private accountservice: AccountService) { }
  ngOnInit() { }

  withdraw(): void {
    this.accountservice.getAccount(this.user_id).subscribe((res) => {
      this.account = res;
      if (this.account.balance < this.withdrawAmount) {
        alert(`Insufficient Balance, your current balance is ${this.account.balance}`);
        return;
      }
      const newBalance = this.account.balance - this.withdrawAmount;
      this.accountservice.updateBalance(this.user_id, newBalance)
        .subscribe(response => {
          this.result = response;
          alert(`Withdraw Successful, you current balance is ${this.result.balance}`);
        });
    });
    this.dialogRef.close();
  }


}
