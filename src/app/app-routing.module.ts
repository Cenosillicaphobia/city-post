import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './features/users-list/users-list.component';
import { UserDataComponent } from './features/user-data/user-data.component';
import { PostsListComponent } from './features/posts-list/posts-list.component';

const routes: Routes = [
  { path: '', component: UsersListComponent },
  { path: 'user-data', component: UserDataComponent},
  { path: 'user-data/:id', component: UserDataComponent},
  { path: 'posts-list', component: PostsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
