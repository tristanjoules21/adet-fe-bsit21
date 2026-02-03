import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Post {
  id: number;
  title: string;
  description: string;
}

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  posts: Post[] = [
    { id: 1, title: 'First Post', description: 'This is the first post in the feed.' },
    { id: 2, title: 'Angular Practice', description: 'Learning how to build a simple posts list UI.' },
    { id: 3, title: 'College Life', description: 'Sharing updates from BSIT 2-1 activities.' }
  ];

  deletePost(id: number): void {
    this.posts = this.posts.filter(post => post.id !== id);
  } }