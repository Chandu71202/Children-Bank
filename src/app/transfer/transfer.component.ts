import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit{
  constructor(private dialogRef: MatDialogRef<TransferComponent>,private builder: FormBuilder) { }

  transferForm!: FormGroup

  ngOnInit() {
    this.transferForm= this.builder.group({
      sender_account_number: [''],
      receiver_account_number: [''],
      amount: ['']
    })
  }


  onNoClick(): void {
    this.dialogRef.close();
  }
}
