import { PostService } from './../post.service';
import { AuthService } from './../../core/auth.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireStorage } from 'angularfire2/storage';
import { finalize } from 'rxjs/internal/operators/finalize';

@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.css']
})
export class PostDashboardComponent implements OnInit {
  title: string;
  image: string = null;
  content: string;

  bottomText = 'Utworz post';

  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;

  constructor(
    private auth: AuthService,
    private postService: PostService,
    private storage: AngularFireStorage
  ) {}

  ngOnInit() {}
  createPost() {
    const data = {
      author: this.auth.authState.displayName || this.auth.authState.email,
      authorId: this.auth.currentUserId,
      content: this.content,
      image: this.image,
      published: new Date(),
      title: this.title
    };
    this.postService.create(data);
    this.title = '';
    this.content = '';
    this.bottomText = 'Post stworzony';
    setTimeout(() => {
      this.bottomText = 'Utworz post';
    }, 3000);
  }

  uploadImage(event) {
    const file = event.target.files[0];
    const path = `posts/${file.name}`;
    const fileRef = this.storage.ref(path);

    if (file.type.split('/')[0] !== 'image') {
      return alert('tylko plik ze zdjeciem');
    } else {
      const task = this.storage.upload(path, file);

      this.uploadPercent = task.percentageChanges();
      console.log('zaladowano');
      fileRef.getDownloadURL().subscribe(url => {
        this.downloadURL = url;
      });
    }
  }
}
