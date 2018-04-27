import {Component, OnInit} from '@angular/core';
import {Department} from './models/department.model';
import {MainService} from './main.service';
import {Team} from './models/team.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public departments: Department[];
  public displayedDepartment: string;
  public displayedTeams: Team[];

  constructor(private mainService: MainService) {
    this.displayedDepartment = '';
  }

  ngOnInit() {
      this.mainService.getDepartments()
        .subscribe(data => this.departments = data['departments']);

  }

  updateDisplayedDepartment(department) {
    this.displayedDepartment = department.name;
    this.displayedTeams = department.teams.slice();
  }
}
