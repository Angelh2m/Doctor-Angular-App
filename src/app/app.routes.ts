import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AuthGuardService } from './services/auth-guard.service';


const APP_ROUTES: Routes = [
  {path: '', component: HomePageComponent },
  // {path: 'admin', component: AdminComponent, canActivate: [AuthGuardService] },
  {path: 'admin', component: AdminComponent },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
