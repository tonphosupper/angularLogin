import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database'
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  imageDetailsList: AngularFireList<any>

  constructor(private firebase: AngularFireDatabase, private afS: AngularFireStorage) { }

  getImageDetailsList(){
    this.imageDetailsList = this.firebase.list('imageDetails');
  }

  insertImageDetails(imageDetails: any){
    this.imageDetailsList.push(imageDetails)
  }

}
