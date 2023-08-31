import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-check-balance',
  templateUrl: './check-balance.component.html',
  styleUrls: ['./check-balance.component.css'],
})
export class CheckBalanceComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<CheckBalanceComponent>,
    private http: HttpClient,
    @Inject(MAT_DIALOG_DATA) private dialogData: any,
  ) {}
  ngOnInit(): void {
    this.checkBalance();
  }
  balance: number | undefined;
  checkBalance() {
    this.balance = this.dialogData.balance;
    return this.balance;
  }
}
