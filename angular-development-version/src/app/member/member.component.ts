import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  @Input() firstName: string;
  @Input() surname: string;
  @Input() position: string;
  @Input() email: string;
  @Input() joined: string;
  @Input() about: string;
  @Input() image: string;
  public expanded: boolean;

  constructor() {
    this.expanded = false;
  }

  ngOnInit() {
  }

  expand() {
    this.expanded = true;
  }

  collapse() {
    this.expanded = false;
  }

}
