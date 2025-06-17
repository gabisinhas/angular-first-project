import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './components/home/HomeComponent';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'meu-primeiro-app';
  
  logar(event:string){
    console.log(event)
  }
}
