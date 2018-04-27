import {Member} from './member.model';

export class Team {
  public name: string;
  public members: Member[];

  constructor(name: string, members: Member[]) {
    this.name = name;
    this.members = members;
  }
}
