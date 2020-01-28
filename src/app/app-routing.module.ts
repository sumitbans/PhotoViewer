import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotoViewerComponent } from './components/photo-viewer/photo-viewer.component';
import { PhotosComponent } from './components/photos/photos.component';

const routes: Routes = [
  { path: '', component: PhotoViewerComponent },
  { path: 'album/:albumId', component: PhotosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
