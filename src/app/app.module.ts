import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

// Angular Material Modules
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

// Components
import { AppComponent } from './app.component';
import { AddPostComponent } from './add-post/add-post.component';
import { PostListComponent } from './post-list/post-list.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NavbarComponent } from './navbar/navbar.component';

// Services
import { PostService } from './post.service';

// Define the routes for your application
const routes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: 'add-post', component: AddPostComponent },
  { path: 'posts', component: PostListComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'edit-post/:id', component: AddPostComponent }, // Assuming you will use the same AddPostComponent for editing
];

@NgModule({
  declarations: [
    AppComponent,
    AddPostComponent,
    PostListComponent,
    ContactUsComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
  ],
  providers: [PostService],
  bootstrap: [AppComponent],
})
export class AppModule {}
