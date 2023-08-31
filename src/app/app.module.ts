import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DepositComponent } from './deposit/deposit.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WithdrawpopComponent } from './withdrawpop/withdrawpop.component';

import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from 'src/material.module';
import { TransferComponent } from './transfer/transfer.component';
import { CheckBalanceComponent } from './check-balance/check-balance.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DepositComponent,
    WithdrawpopComponent,
    TransferComponent,
    CheckBalanceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
sessionStorage.setItem('id', '123456');
