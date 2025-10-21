import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  name: string = 'Rayhan';
  name2: string = '';

  getName(): string {
    return this.name;
  }
  setName(name: string): void {
    this.name = name;
    this.UpdateName(this.name);
  }

  UpdateName(param: string): string {

    return this.name2;
  }
  
}
