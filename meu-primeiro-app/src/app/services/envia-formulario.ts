import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnviaFormulario {

  constructor() { }

  enviaInformacaoParaBackEnd(info:string){
    console.log("Enviando para Back End!")
  }
}
