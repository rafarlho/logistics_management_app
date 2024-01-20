import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./auth/login/login.component";
import { HeaderComponent } from './main-page/header/header.component';
import { SideNavComponent } from './main-page/side-nav/side-nav.component';
import { DashboardComponent } from './main-page/dashboard/dashboard.component';
import { MainRequestPageComponent } from './main-page/request-goods/main-request-page/main-request-page.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, RouterOutlet, LoginComponent,HeaderComponent,SideNavComponent,DashboardComponent,MainRequestPageComponent]
})
export class AppComponent {
  title = 'logistics_management_app';
}
