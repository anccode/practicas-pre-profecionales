import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './components/posts/post/post.component';


const routes: Routes = [
  {
    path: '',redirectTo:'/Inicio',pathMatch:'full'
  },
  { 
    path: 'post', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule) 
  },
  {
    path:'post/:id',component: PostComponent
  },
  { path: 'Inicio', loadChildren: () => import('./components/pages/about/about.module').then(m => m.AboutModule) },
  { path: 'admin', loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule) },
  { path: 'login', loadChildren: () => import('./components/auth/login/login.module').then(m => m.LoginModule) }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
