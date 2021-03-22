import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Animal } from '../animal';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-details-animals',
  templateUrl: './details-animals.component.html',
  styleUrls: ['./details-animals.component.css']
})
export class DetailsAnimalsComponent implements OnInit {
  id: number;
  animal: Animal;

  constructor(
    private animalService: RegistrationService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.animal = new Animal();

    this.id = this.route.snapshot.params['id'];
    this.animalService.getAnimalById(this.id).subscribe(
      data => {
        console.log(data);
        this.animal = data;
      },
      error => {
        console.log(error);
      }
    )
  }

  

  updateAnimals():void{
    this.animalService.updateAnimal(this.id, this.animal).subscribe(
      data => {
        console.log(data);
        this.animal = new Animal();
        this.router.navigate(['/animal']);
      },
      error => {
        console.log(error);
      }
    )
  }

}
