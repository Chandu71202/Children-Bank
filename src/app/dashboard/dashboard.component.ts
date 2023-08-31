import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { UserService } from '../user.service';
import { account } from '../account';

import { DepositComponent } from '../deposit/deposit.component';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { WithdrawpopComponent } from '../withdrawpop/withdrawpop.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  isApproved = true;
}
