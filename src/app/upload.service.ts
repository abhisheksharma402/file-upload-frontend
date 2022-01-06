import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class UploadService {
  // apiUrl = environment.apiUrl;

  // constructor(private http:HttpClient) { }

  // fileUpload(file_data){
  //   console.log(file_data);
  //   return this.http.post(this.apiUrl+'upload/', file_data);
  // }

}
