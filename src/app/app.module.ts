import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AllPostComponent } from './all-post/all-post.component';
import { AddPostComponent } from './add-post/add-post.component';
import { AllCommentsComponent } from './all-comments/all-comments.component';
import { WaitingForApprovalComponent } from './waiting-for-approval/waiting-for-approval.component';
import { AllCategoriesComponent } from './all-categories/all-categories.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { UploadImagesComponent } from './upload-images/upload-images.component';
import { ViewAllComponent } from './view-all/view-all.component';
import { UplaodComponent } from './uplaod/uplaod.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AllPostComponent,
    AddPostComponent,
    AllCommentsComponent,
    WaitingForApprovalComponent,
    AllCategoriesComponent,
    AddCategoryComponent,
    UploadImagesComponent,
    ViewAllComponent,
    UplaodComponent,
    HeaderComponent,
    LoginComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
