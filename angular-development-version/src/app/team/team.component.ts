import {Component, OnInit, Input, HostBinding} from '@angular/core';
import {Member} from '../models/member.model';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  @Input() name: string;
  @Input() members: Member[];
  @HostBinding('class.expanded') membersExpanded: boolean = false;

  constructor() {
    this.membersExpanded = false;
  }

  ngOnInit() {
  }

  setExpandedMembers(e) {
    if(e.target.className === "block" || e.target.className ==="team-name")
    this.membersExpanded = !this.membersExpanded;
  }

}
