import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDetailRoutingModule } from './user-detail-routing.module';
import { UserDetailComponent } from './user-detail.component';
import { FollowersPipe } from '../../core/pipes/followers.pipe.';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [UserDetailComponent],
  imports: [
    CommonModule,
    UserDetailRoutingModule,
    FollowersPipe,
  ],
  exports: [UserDetailComponent],
})
export class UserDetailModule{}
