import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslocoRootModule } from '../transloco-root.module';


@NgModule({
  declarations: [
    LogInComponent,
    SignUpComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpClientModule,
    TranslocoRootModule,
    
  ]
})
export class AuthModule { }
