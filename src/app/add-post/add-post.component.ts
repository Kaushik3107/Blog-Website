import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent implements OnInit {
  postForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private postService: PostService,
    private router: Router
  ) {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required], // New category field
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.postForm.valid) {
      this.postService.addPost(this.postForm.value);
      this.postForm.reset();
      this.router.navigate(['/posts']); // Navigate to the post list
    }
  }
}
