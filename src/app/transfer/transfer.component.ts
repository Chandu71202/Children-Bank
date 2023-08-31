import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit{
  constructor(private dialogRef: MatDialogRef<TransferComponent>,private accountservice:AccountService) { }

  user_id = sessionStorage.getItem('id');
  sender_account_number !:number;
  receiver_account_number !:number;
  transferring_amount!: number;
  res: any;
  account: any;
  result: any;

  ngOnInit() { 
    this.accountservice.getAccount(this.user_id).subscribe((res) => {this.sender_account_number=res.accountNumber});
  }

  transfer_amount(): void {
    this.accountservice.getAccount(this.user_id).subscribe((res) => {
      this.account = res;
      if (this.account.balance < this.transferring_amount) {
        alert(`Insufficient Balance, your current balance is ${this.account.balance}`);
        return;
      }
      const newBalance = this.account.balance - this.transferring_amount;
      this.accountservice.updateBalance(this.user_id, newBalance)
        .subscribe(response => {
          this.result = response;
          alert(`Transfer Successful, to ${this.receiver_account_number} you current balance is ${this.result.balance}`);
        });
    });
    this.dialogRef.close();
  }
}
