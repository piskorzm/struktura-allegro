import {Component, OnInit, Input} from '@angular/core';
import {Member} from '../models/member.model';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  @Input() name: string;
  @Input() members: Member[];
  public membersExpanded: boolean;

  constructor() {
    this.membersExpanded = false;
  }

  ngOnInit() {
  }

  setExpandedMembers() {
    this.membersExpanded = !this.membersExpanded;
  }

}
