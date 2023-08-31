import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AccountService } from '../account.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-viewstatements',
  templateUrl: './viewstatements.component.html',
  styleUrls: ['./viewstatements.component.css'],
  imports: [CommonModule],
  standalone: true,
})
export class ViewstatementsComponent implements OnInit {
  account_data: any;
  user_id = sessionStorage.getItem('id');
  constructor(
    private dialogRef: MatDialogRef<ViewstatementsComponent>,
    private accountservice: AccountService,
  ) {}
  ngOnInit(): void {
    let resp = this.accountservice.getAccount(this.user_id);
    resp.subscribe((data) => {
      this.account_data = data.transactions;
      console.log(this.account_data);
    });
  }

  closeBtn(): void {
    this.dialogRef.close();
  }
}
