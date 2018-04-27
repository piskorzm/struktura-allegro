import {Team} from './team.model';

export class Department {
  public name: string;
  public teams: Team[];

  constructor(name: string, teams: Team[]) {
    this.name = name;
    this.teams = teams;
  }
}
