import { AuthGuard } from './login-page/auth.guard';
import { DbclippingComponent } from './dbclipping/dbclipping.component';
import { Routes } from '@angular/router'
import { LoginPageComponent } from './login-page/login-page.component';

export const ROUTES: Routes = [
    {path: '', component: LoginPageComponent},
    {path: 'dbcliping', component: DbclippingComponent, canActivate: [ AuthGuard ]}
    
]