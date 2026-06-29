import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/components/authentication/auth.guard';
import { HomeComponent } from './components/public/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},

  {
    path: '**', pathMatch: 'full', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
