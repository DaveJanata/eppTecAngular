import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PostComponent } from './components/post/post.component';
import { ButtonComponent } from './components/button/button.component';
import { PostItemComponent } from './components/post-item/post-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    ButtonComponent,
    PostItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
