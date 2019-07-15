import {Injectable} from "@angular/core";
import {ConfigService} from "./config/config.service";
import {HttpClient} from "@angular/common/http";
import {Income} from "./income/income.component";

@Injectable()
export class IncomeService {

  constructor(private config: ConfigService, private http: HttpClient) {
  }

  getIncomes() {
    return this.http.get<Income[]>(this.config.getApiUrl()  + '/api/income/get');
  }

  saveIncome(data){
    return this.http.post(this.config.getApiUrl() + '/api/income/save', data);
  }
}
