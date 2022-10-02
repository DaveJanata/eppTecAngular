import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PostComponent } from './components/post/post.component';
import { ButtonComponent } from './components/button/button.component';
import { PostItemComponent } from './components/post-item/post-item.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { PostCommentsComponent } from './components/post-detail/post-comments/post-comments.component';

const appRoutes = [
  {path: '', component: PostComponent},
  {path: 'detail/:id', component: PostDetailComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    ButtonComponent,
    PostItemComponent,
    PostDetailComponent,
    PostCommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PostComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
