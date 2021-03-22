import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { Animal } from '../animal';
import { RegistrationService } from '../registration.service';
import { UploadService } from '../upload.service';

@Component({
  selector: 'app-create-animals',
  templateUrl: './create-animals.component.html',
  styleUrls: ['./create-animals.component.css']
})
export class CreateAnimalsComponent implements OnInit {
  animal= new Animal();
  msg='';
  path: String;

  imgSrc: string ;
  selectImage: any;
  isSubmitted: boolean;

  formTemplate = new FormGroup({
   // id: new FormControl(null, Validators.required),
    name: new FormControl('', Validators.required),
    active: new FormControl('',Validators.required),
    bread: new FormControl('', Validators.required),
    image: new FormControl('',Validators.required)
  })

  constructor(
    private animalService: RegistrationService,
    private router: Router,
    private http: HttpClient,
    private af: AngularFireStorage,
    private service: UploadService
    )
  { }

  ngOnInit(): void {
    this.resetForm();
  }

  // createAnimal(){
  //   this.animalService.createAnimalFromRemote(this.animal).subscribe(
  //     data =>{
  //       const formData = new FormData();
  //       formData.append('name',JSON.stringify(this.animal.name));
  //       console.log(data);
  //       this.router.navigate(['/animal'])

  //       var filePath = `${this.selectImage.name}`
  //       console.log(filePath);
  //       this.af.upload(filePath,this.selectImage)
  //     },
  //     error =>{
  //       console.log("exception occured");
  //       this.msg=error.console.error();   
  //     }
  //   )
  // }
  upload(event:any){
    if(event.target.files && event.target.files[0]){
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectImage = event.target.files[0];
    }else{
      this.imgSrc = '/assets/images/click_image.png';
      this.selectImage = null;
    }
  }
  onSubmit(formValue:any){
    this.isSubmitted = true;
    var filePath = `${formValue.name}/${this.selectImage.name.split('.').slice(0,-1).join('.')}_${new Date().getTime()}`;
    const fileRef = this.af.ref(filePath);
    this.af.upload(filePath,this.selectImage).snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe(
          (url) => {
              formValue['image']=url;
              this.service.insertImageDetails(formValue);
              this.resetForm();
          }
        )
      })
    ).subscribe();
  }

  get formControls(){
    return this.formTemplate['controls'];
  }
  resetForm(){
    this.formTemplate.reset();
    this.formTemplate.setValue({
      name:'',
      image:'',
      active:'',
      bread:''
    })
    this.imgSrc = '/assets/images/click_image.png';
    this.selectImage = null;
    this.isSubmitted = false;
  }
}
