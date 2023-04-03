import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './features/users-list/users-list.component';
import { UserDataComponent } from './features/user-data/user-data.component';
import { PostsListComponent } from './features/posts-list/posts-list.component';
import { CreateUserComponent } from './features/create-user/create-user.component';
import { LoginComponent } from './features/login/login.component';

const routes: Routes = [
  { path: '', component: UsersListComponent },
  { path: 'user-data', component: UserDataComponent},
  { path: 'user-data/:id', component: UserDataComponent},
  { path: 'posts-list', component: PostsListComponent },
  { path: 'create-user', component: CreateUserComponent},
  { path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
