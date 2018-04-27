import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import {Team} from '../models/team.model';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  @Input() name: string;
  @Input() teams: Team[];
  @Output() onSelect: EventEmitter<any> = new EventEmitter<any>();
  public selected: boolean;

  constructor() { }

  ngOnInit() {
  }

  onDepartmentSelect() {
    this.onSelect.emit(this);
  }

}
