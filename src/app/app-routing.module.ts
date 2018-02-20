import { AuthGuard } from './guard/auth.guard';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }      from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppRoutingModule {}