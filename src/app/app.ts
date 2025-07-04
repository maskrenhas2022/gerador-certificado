import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected title = 'gerador-certificado';

  exibeNavbar:boolean = true;
  ngOnInit(): void {
   this.mensagem();
  }
    mensagem(){
      console.log('Start Components now (Inside in the function)')
    }
}
