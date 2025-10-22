import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { HomeComponent } from './home/home.component';
import {HeaderComponent} from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  constructor(public authService: AuthService) {}

  name: string = '';

  ngOnInit(): void {
    this.name = this.authService.getName();
  }

  updateName(): void {
    this.authService.setName('Mahabub Rahman');
    this.name = this.authService.getName();
  }
}
