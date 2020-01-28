import { Component, OnInit } from '@angular/core';
import { PhotosService } from './../../services/photos.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/Http'
import { Album } from '../../album';

interface Album {
  id: number;
  title:string;
}

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})

export class PhotosComponent implements OnInit {

  photos; albumId; title; 
  albums = new Array<Album>();
  constructor(
    private photosService: PhotosService,
    private route: ActivatedRoute,
    private http: HttpClient    
  ) {   

   }

  ngOnInit() {
    this.albumId = this.route.snapshot.params.albumId;   

    this.photosService.getAlbumById(this.albumId).subscribe((data: Album[]) => {
      this.albums = data;
      this.title = data[0].title;
    })
    
    this.photos = this.photosService.getPhotosByAlbumId(this.albumId); 
  }

}
