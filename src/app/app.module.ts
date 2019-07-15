import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavigationComponent} from "./navigation/navigation.component";
import {SigninComponent} from "./auth/signin/signin.component";
import {SignupComponent} from "./auth/signup/signup.component";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./material/material.module";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthService} from "./auth/auth.service";
import {ConfigService} from "./config/config.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ExpenseComponent} from "./expense/expense.component";
import {ExpenseService} from "./expense.service";
import {TokenInterceptor} from "./auth/token.interceptor";
import {AuthGuardService} from "./auth/auth-guard.service";
import { NewExpenseComponent } from './expense/new-expense/new-expense.component';
import { EditExpenseComponent } from './expense/edit-expense/edit-expense.component';
import { IncomeComponent } from './income/income.component';
import { NewIncomeComponent } from './income/new-income/new-income.component';
import {IncomeService} from "./income.service";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SigninComponent,
    SignupComponent,
    ExpenseComponent,
    NewExpenseComponent,
    EditExpenseComponent,
    IncomeComponent,
    NewIncomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    ConfigService,
    ExpenseService,
    IncomeService,
    AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
