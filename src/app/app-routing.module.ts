import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SigninComponent} from "./auth/signin/signin.component";
import {SignupComponent} from "./auth/signup/signup.component";
import {ExpenseComponent} from "./expense/expense.component";
import {AuthGuardService} from "./auth/auth-guard.service";
import {NewExpenseComponent} from "./expense/new-expense/new-expense.component";
import {EditExpenseComponent} from "./expense/edit-expense/edit-expense.component";
import {IncomeComponent} from "./income/income.component";
import {NewIncomeComponent} from "./income/new-income/new-income.component";

const routes: Routes = [
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'expenses', component: ExpenseComponent, canActivate: [AuthGuardService]},
  { path: 'incomes', component: IncomeComponent, canActivate: [AuthGuardService]},
  {path: 'expenses/add', component: NewExpenseComponent, canActivate: [AuthGuardService]},
  {path: 'incomes/add', component: NewIncomeComponent, canActivate: [AuthGuardService]},
  {path: 'expenses/edit/:id', component: EditExpenseComponent, canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
