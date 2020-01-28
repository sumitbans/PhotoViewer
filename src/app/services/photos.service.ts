import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/Http';
import { Album } from '../album';
import { map, filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})

export class PhotosService {

  constructor(
    private http: HttpClient
  ) {  }

  getAlbums() {
    return this.http.get('https://jsonplaceholder.typicode.com/albums');
  }

  getPhotosByAlbumId(albumId) {
    return this.http.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
  }

  public getAlbumById(albumId): Observable<Album[]> {
    return this.http.get<Album[]>(`https://jsonplaceholder.typicode.com/albums?id=${albumId}`).pipe(map((data: Album[]) => {return data;}));
  }

  

}
