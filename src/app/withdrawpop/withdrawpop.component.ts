import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialogRef,
  MatDialogModule,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

export interface ModalData {
  name: string;
  color: string;
}

@Component({
  selector: 'app-withdrawpop',
  templateUrl: './withdrawpop.component.html',
  styleUrls: ['./withdrawpop.component.css']
})
export class WithdrawpopComponent implements OnInit{
  constructor(
    public dialogRef: MatDialogRef<WithdrawpopComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(){
    
  }

}
