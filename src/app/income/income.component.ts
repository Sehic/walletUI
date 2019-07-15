import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {Router} from "@angular/router";
import {IncomeService} from "../income.service";

export interface Income {
  id: string;
  amount: string;
  name: string;
  }

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {
  displayedColumns: string[] = ['amount', 'name'];
  incomeInfoTable : Income[] = [];
  dataSource = new MatTableDataSource(this.incomeInfoTable);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private incomeService: IncomeService, private route: Router) {
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.incomeService.getIncomes().subscribe(response => {
      this.incomeInfoTable = response;
      this.dataSource.data = this.incomeInfoTable;
    });

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
