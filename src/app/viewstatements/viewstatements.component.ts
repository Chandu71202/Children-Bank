import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-viewstatements',
  templateUrl: './viewstatements.component.html',
  styleUrls: ['./viewstatements.component.css']
})
export class ViewstatementsComponent implements OnInit{
  account_data :any;
  user_id = sessionStorage.getItem('id');
  constructor(public dialogRef: MatDialogRef<ViewstatementsComponent>,private accountservice:AccountService) {}
  ngOnInit(): void {
    let resp = this.accountservice.getAccount(this.user_id);
    resp.subscribe((data) => {this.account_data = data;console.log(this.account_data)});
  }

  viewStatements(): void {
      this.dialogRef.close();
  }
}