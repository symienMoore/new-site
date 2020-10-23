import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { PostsComponent } from './pages/posts/posts.component';
import { InfoComponent } from './pages/info/info.component';

const routes: Routes = [
  { component: LoginComponent, path: 'login' },
  { component: ProfileComponent, path: 'profile'},
  { component: HomeComponent, path: '' },
  { component: PostsComponent, path: 'posts' },
  { component: InfoComponent, path: 'info'},
  { component: PagenotfoundComponent, path: '**'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

