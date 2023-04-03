import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './features/users-list/users-list.component';
import { UserDataComponent } from './features/user-data/user-data.component';
import { PostsListComponent } from './features/posts-list/posts-list.component';
import { CreateUserComponent } from './features/create-user/create-user.component';
import { LoginComponent } from './features/login/login.component';
import { DeleteUserComponent } from './features/delete-user/delete-user.component';
import { CreatePostComponent } from './features/create-post/create-post.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'users-list', canActivate: [AuthGuard] ,component: UsersListComponent },
  { path: 'user-data', canActivate: [AuthGuard] ,component: UserDataComponent},
  { path: 'user-data/:id', canActivate: [AuthGuard] ,component: UserDataComponent},
  { path: 'posts-list', canActivate: [AuthGuard] ,component: PostsListComponent },
  { path: 'create-user', canActivate: [AuthGuard] ,component: CreateUserComponent},
  { path: 'delete-user', canActivate: [AuthGuard] ,component: DeleteUserComponent},
  { path: 'create-post', canActivate: [AuthGuard] ,component: CreatePostComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
