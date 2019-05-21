import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { BillComponent } from './components/bill/bill.component';
import { BillGuard } from './guard/bill.guard';
import { ResultComponent } from './components/result/result.component';

const routes: Routes = [
  {path: 'auth', component: AuthComponent},
  {path: 'result', component: ResultComponent, canActivate: [BillGuard]},
  {path: 'bill', component: BillComponent, canActivate: [BillGuard]},
  {path: '**', redirectTo: 'auth'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
