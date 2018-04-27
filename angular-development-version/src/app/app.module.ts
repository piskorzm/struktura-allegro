import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DepartmentComponent} from './department/department.component';
import {TeamComponent} from './team/team.component';
import {MainService} from './main.service';
import {MemberComponent} from './member/member.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    TeamComponent,
    MemberComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
