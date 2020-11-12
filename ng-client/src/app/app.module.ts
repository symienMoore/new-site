import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { HttpInterceptorService } from './services/http-interceptor.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { InfoComponent } from './pages/info/info.component';
import { LoginComponent } from './pages/login/login.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { PostsComponent } from './pages/posts/posts.component';
import { EditPostComponent } from './pages/edit-post/edit-post.component';
import { AddPostComponent } from './pages/add-post/add-post.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InvalidComponent } from './components/alerts/invalid/invalid.component';
import { ButtonComponent } from './components/button/button.component';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    InfoComponent,
    LoginComponent,
    PagenotfoundComponent,
    PostsComponent,
    EditPostComponent,
    AddPostComponent,
    NavbarComponent,
    InvalidComponent,
    ButtonComponent,
    PostDetailComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
