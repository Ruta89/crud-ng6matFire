import { PostService } from './post.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostDashboardComponent } from './post-dashboard/post-dashboard.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostListComponent } from './post-list/post-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PostDashboardComponent, PostDetailComponent, PostListComponent],
  providers: [PostService]
})
export class PostsModule { }
