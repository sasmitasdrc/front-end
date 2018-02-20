import { AuthGuard } from './guard/auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


import { AppComponent } from './app.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { HeaderComponent } from './page/fragments/header/header.component';
import { FooterComponent } from './page/fragments/footer/footer.component';
import { LoginComponent } from './page/login/login.component';
import { HomeComponent } from './page/home/home.component';
import { SpiderChartComponent } from './page/fragments/charts/spider-chart/spider-chart.component';
import { GoogleMapComponent } from './page/fragments/charts/google-map/google-map.component';
import { BarChartComponent } from './page/fragments/charts/bar-chart/bar-chart.component';
import { LineChartComponent } from './page/fragments/charts/line-chart/line-chart.component';
import { UserDetailComponent } from './page/fragments/user-detail/user-detail.component';
import { UserListComponent } from './page/fragments/user-list/user-list.component';
import { User } from './interface/form-model';
import { AppRoutingModule } from './/app-routing.module';
import { UserService } from './service/user/user.service';
import { DataService } from './service/data/data.service';
import { BasicComponent } from './page/basic/basic.component';
import { BasicFormComponent } from './page/fragments/allUIComponents/basic-form/basic-form.component';
import { InlineFormComponent } from './page/fragments/allUIComponents/inline-form/inline-form.component';
import { SliderComponent } from './page/fragments/allUIComponents/slider/slider.component';
import { SdrcTableComponent } from './page/fragments/allUIComponents/sdrc-table/sdrc-table.component';
import { RemoveElementPipe } from './filters/remove-from-array/remove-element.pipe';
import { FormControlService } from './service/form-control.service';
import { DynamicFormComponent } from './page/fragments/allUIComponents/dynamic-form/dynamic-form.component';
import { FormFieldsService } from './service/form-fields.service';
import { DynamicFormFieldsComponent } from './page/fragments/allUIComponents/dynamic-form-fields/dynamic-form-fields.component';
import { CircleProgressComponent } from './page/fragments/charts/circle-progress/circle-progress.component';
import { ChartDirectiveDirective } from './directives/line-chart/chart-directive.directive';
import { BarchartDirective } from './directives/bar-chart/barchart.directive';
import { SpiderchartDirective } from './directives/spider-chart/spiderchart.directive';
import { CircleProgressDirective } from './directives/circle-progress/circle-progress.directive';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    pathMatch: 'full'
  },
  {
    path: 'form',
    component: UserListComponent,
    pathMatch: 'full'
  },
  {
    path: 'basic-components',
    component: BasicComponent,
    pathMatch: 'full'
  }

]

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    AppComponent,
    LoginComponent,
    HomeComponent,
    SpiderChartComponent,
    GoogleMapComponent,
    BarChartComponent,
    LineChartComponent,
    UserDetailComponent,
    UserListComponent,
    BasicComponent,
    BasicFormComponent,
    InlineFormComponent,
    SliderComponent,
    SdrcTableComponent,
    RemoveElementPipe,
    DynamicFormComponent,
    DynamicFormFieldsComponent,
    CircleProgressComponent,
    ChartDirectiveDirective,
    BarchartDirective,
    SpiderchartDirective,    
    CircleProgressDirective,
    ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAhzl6qzvh6FdIIkDviVE39feBkLiBa6Bo'
    }),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmSnazzyInfoWindowModule,
    ReactiveFormsModule,
    FormsModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [UserService, AuthGuard, DataService, User, HttpClientModule, FormControlService, FormFieldsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
