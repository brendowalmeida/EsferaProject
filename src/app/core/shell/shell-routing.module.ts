
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellComponent } from './shell.component';
import { NotFoundComponent } from 'src/app/shared/components/not-found/not-found.component';


const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: '',
        redirectTo: '/users',
        pathMatch: 'full'
      },
      {
        path: 'users',
        loadChildren: () => 
          import('../../modules/users/users.module').then(m => m.UsersModule)
      },
      { 
        path: '404', component: NotFoundComponent 
      },
      { 
        path: '**', 
        redirectTo: '404' 
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShellRoutingModule { }