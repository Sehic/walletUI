import {OnInit} from '@angular/core';

export class ConfigService {

  private apiUrl = 'https://fast-chamber-58004.herokuapp.com';

  // private apiUrl = 'http://localhost:8080';

  getApiUrl() {
    return this.apiUrl;
  }

}
