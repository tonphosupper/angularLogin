import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Animal } from './animal';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
   
  constructor(private http: HttpClient) { }
  loginUserFromRemote(user: User): Observable<any>{
    return this.http.post("http://localhost:8080/login",user,{responseType: "text" as "json"});
  }
  loginUser(): Observable<any>{
    return this.http.get(`${environment}`);
  }
  getAllListUser():Observable<any>{
    return this.http.get("http://localhost:8080/user");
  }
  registerUserFromRemote(user: User): Observable<any>{
    console.log(user);
    return this.http.post("http://localhost:8080/registeruser",user);
  }
  deleteUser(id: number): Observable<any> {
    return this.http.delete("http://localhost:8080/deleteuser/"+`${id}`, { responseType: 'text' });
  }
  getAllListAnimal():Observable<any>{
    return this.http.get("http://localhost:8080/animal/getAnimal");
  }
  getAnimalById(id: any):Observable<Animal>{
    return this.http.get<Animal>("http://localhost:8080/animal/getAnimal/"+`${id}`);
  }
  deleteAnimal(id: number): Observable<any> {
    return this.http.delete("http://localhost:8080/animal/delete/"+`${id}`, { responseType: 'text' });
  }
  updateAnimal(id: number, data: any): Observable<any> {
    return this.http.put("http://localhost:8080/animal/update/"+`${id}`,data);
  }
  createAnimalFromRemote(animal: Animal): Observable<any>{
    return this.http.post("http://localhost:8080/animal/create",animal);
  }
  findByName(name:any): Observable<Animal[]>{
    return this.http.get<Animal[]>("http://localhost:8080/animal/getAnimal?name="+`${name}`);
  }
  logOut(){
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('roles');
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem('user')
    console.log(!(user === null))
    return !(user === null)
  }
  isAdmin(){
    let admin = sessionStorage.getItem('roles')
    console.log((admin === "admin"))
    return (admin === "admin")
  }

}
