import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from "src/app/app.component";
import { AllPostComponent } from "src/app/all-post/all-post.component";
import { AddPostComponent } from "src/app/add-post/add-post.component";
import { AllCommentsComponent } from "src/app/all-comments/all-comments.component";
import { WaitingForApprovalComponent } from "src/app/waiting-for-approval/waiting-for-approval.component";
import { AllCategoriesComponent } from "src/app/all-categories/all-categories.component";
import { AddCategoryComponent } from "src/app/add-category/add-category.component";
import { LoginComponent } from "src/app/login/login.component";

const routes: Routes = [
  {path:"",component:AllPostComponent},
  {path:"login",component:LoginComponent},
  {path:"add-post",component:AddPostComponent},
  {path:"all-comments",component:AllCommentsComponent},
  {path:"approvals",component:WaitingForApprovalComponent},
  {path:"all-categories",component:AllCategoriesComponent},
  {path:"add-category",component:AddCategoryComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
