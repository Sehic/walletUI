import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {IncomeService} from "../../income.service";

@Component({
  selector: 'app-new-income',
  templateUrl: './new-income.component.html',
  styleUrls: ['./new-income.component.css']
})
export class NewIncomeComponent implements OnInit {

  incomeForm: FormGroup;

  constructor(private incomeService: IncomeService, private router: Router) { }

  ngOnInit() {
    this.incomeForm = new FormGroup({
      amount : new FormControl("", Validators.required),
      name: new FormControl("", Validators.required)
    })
  }

  onSubmit(form) {
    if (this.incomeForm.valid) {
      const data = {
        "amount": form.amount,
        "name": form.name
      }

      this.incomeService.saveIncome(data).subscribe(response => {
        this.router.navigateByUrl("/incomes")
      })

    }

    this.incomeForm.reset();
  }

}
