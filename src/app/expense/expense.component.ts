import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {ExpenseService} from "../expense.service";
import {Router} from "@angular/router";

export interface Expense {
  id: string;
  amount: string;
  note: string;
  reminder: any;
  categoryId: any;
  categoryName : string;
}

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {
  displayedColumns: string[] = ['amount', 'category', 'reminder', 'note', 'options'];
  expenseInfoTable : Expense[] = [];
  dataSource = new MatTableDataSource(this.expenseInfoTable);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private expenseService: ExpenseService, private route: Router) {
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.expenseService.getExpenses().subscribe(response => {
      this.expenseInfoTable = response;
      this.dataSource.data = this.expenseInfoTable;
    });

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  edit(id: any){
    this.route.navigateByUrl("/expenses/edit/" + id);
  }

  delete(row){
    this.expenseService.deleteExpense(row.id).subscribe();
    
    this.dataSource.data = this.dataSource.data
    .filter(i => i !== row)
    .map((i, idx) => (row.id = (idx + 1), i));
  }

}

