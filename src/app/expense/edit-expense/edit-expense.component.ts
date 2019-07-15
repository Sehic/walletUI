import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ExpenseService} from "../../expense.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-expense',
  templateUrl: './edit-expense.component.html',
  styleUrls: ['./edit-expense.component.css']
})
export class EditExpenseComponent implements OnInit {

  expenseEditForm: FormGroup;
  categoryList: any;
  id;
  expense: any;

  constructor(private expenseService: ExpenseService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    this.expenseEditForm = new FormGroup({
      amounte : new FormControl("", Validators.required),
      categorye: new FormControl("", Validators.required),
      remindere: new FormControl(""),
      notee: new FormControl("")
    });

    this.id = this.route.snapshot.paramMap.get("id");

    this.expenseService.getById(this.id).subscribe(response => {
        this.expense = response;

      },
      () => {},
      () => {
        this.expenseEditForm = new FormGroup({
          amounte : new FormControl(this.expense.amount, Validators.required),
          categorye: new FormControl(this.expense.category.id, Validators.required),
          remindere: new FormControl(this.expense.reminder),
          notee: new FormControl(this.expense.note)
        })
      }
    )

    this.expenseService.getCategories().subscribe(response => {
      this.categoryList = response;
    })



  }

  onSubmit(form) {
    if (this.expenseEditForm.valid) {
      const data = {
        "amount": form.amounte,
        "note": form.notee,
        "reminder": form.remindere,
        "categoryId": form.categorye
      }

      this.expenseService.editExpense(data, this.id).subscribe(response => {
        this.router.navigateByUrl("/expenses")
      })

    }

    this.expenseEditForm.reset();
  }

}
