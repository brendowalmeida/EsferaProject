import { NgModule } from '@angular/core';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UsersService } from './users.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    UsersRoutingModule,
    HttpClientModule
  ],
  providers: [
    UsersService
  ]
})
export class UsersModule { }
