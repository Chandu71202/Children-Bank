import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-viewstatements',
  templateUrl: './viewstatements.component.html',
  styleUrls: ['./viewstatements.component.css']
})
export class ViewstatementsComponent {

 

  constructor(public dialogRef: MatDialogRef<ViewstatementsComponent>) {}

  viewStatements(): void {
      this.dialogRef.close();
  }
}