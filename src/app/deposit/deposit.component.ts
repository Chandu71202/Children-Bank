import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent {
  depositAmount: number | undefined;

  constructor(public dialogRef: MatDialogRef<DepositComponent>) {}

  deposit(): void {
    if (this.depositAmount) {
      this.dialogRef.close(this.depositAmount);

}
  }
}

