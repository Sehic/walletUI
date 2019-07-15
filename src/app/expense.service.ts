import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConfigService} from "./config/config.service";
import {Expense} from "./expense/expense.component";


@Injectable()
export class ExpenseService {

  constructor(private config: ConfigService, private http: HttpClient) {
  }

  getExpenses() {
    return this.http.get<Expense[]>(this.config.getApiUrl()  + '/api/expense/get');
  }

  getCategories() {
    return this.http.get(this.config.getApiUrl()  + '/api/category/all');
  }

  saveExpense(data){
    return this.http.post(this.config.getApiUrl() + '/api/expense/save', data);
  }

  editExpense(data, id: number){
    return this.http.put(this.config.getApiUrl() + '/api/expense/edit/' + id, data);
  }

  deleteExpense(id){
    return this.http.delete(this.config.getApiUrl() + "/api/expense/delete/" + id)
  }

  getById(id){
    return this.http.get(this.config.getApiUrl() + "/api/expense/get/" + id);
  }
}
