import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { Animal } from '../animal';
import { RegistrationService } from '../registration.service';
import { UploadService } from '../upload.service';

@Component({
  selector: 'app-list-animals',
  templateUrl: './list-animals.component.html',
  styleUrls: ['./list-animals.component.css']
})
export class ListAnimalsComponent implements OnInit {
  animals?: Animal[];
  currentAnimal ?: Animal;
  currentIndex = -1;
  name='';
  
  constructor(
    private animalService: RegistrationService, 
    private router: Router,
    private imageService: UploadService,
    private afStorage: AngularFireStorage
    ) { }
 
  ngOnInit(): void {
    //this.reloadData();
    this.imageService.getImageDetailsList();
  }
  reloadData(){

    this.animalService.getAllListAnimal().subscribe(
      data => {
        this.animals = data;
       // this.firebase = this.afStorage.ref('/image_1.png');
        this.animals?.forEach(animal => {
          animal.image = 'https://firebasestorage.googleapis.com/v0/b/upload-150eb.appspot.com/o/image_1.png'
        });
        console.log(data)
      },
      error => console.log('ERROR: '+error)
    );
  }

  setActiveAnimal(animal: Animal, index: number): void{
    this.currentAnimal = animal;
    this.currentIndex = index;
  }

  deleteAnimal(id: number){
    this.animalService.deleteAnimal(id).subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error)
    );
  }
  searchName():void{
    this.currentAnimal = undefined;
    this.currentIndex = -1;

    this.animalService.findByName(this.name).subscribe(
      data => {
        this.animals = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }
  selectUpdate(id: number){
    this.router.navigate(['edit', id])
  }
}
