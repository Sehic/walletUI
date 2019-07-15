import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ExpenseService} from "../../expense.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-expense',
  templateUrl: './new-expense.component.html',
  styleUrls: ['./new-expense.component.css']
})
export class NewExpenseComponent implements OnInit {

  expenseForm: FormGroup;
  categoryList: any;

  constructor(private expenseService: ExpenseService, private router: Router) { }

  ngOnInit() {
    this.expenseForm = new FormGroup({
      amount : new FormControl("", Validators.required),
      category: new FormControl("", Validators.required),
      reminder: new FormControl(""),
      note: new FormControl("")
    })

    this.expenseService.getCategories().subscribe(response => {
      this.categoryList = response;
    })

  }

  onSubmit(form) {
    if (this.expenseForm.valid) {
      const data = {
        "amount": form.amount,
        "note": form.note,
        "reminder": form.reminder,
        "categoryId": form.category
      }

      this.expenseService.saveExpense(data).subscribe(response => {
        this.router.navigateByUrl("/expenses")
      })

    }

    this.expenseForm.reset();
  }

}
