import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class MainService {

  constructor(private httpClient: HttpClient) {
  }

  getDepartments() {
    return this.httpClient.get('https://piskorzm.github.io/struktura-allegro/assets/departments.json');
  }
}
