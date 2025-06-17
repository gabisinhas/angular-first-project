import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { EnviaFormulario } from '../../services/envia-formulario';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './HomeComponent.html',
  styleUrl: './HomeComponent.css'
})
export class Home {

  name = "Mariana"
  atributo = "meuatributo"
  deveMostrarTitulo = false
  listItems=["Maria", "Mariana",1,"Sofia"]

  private enviaFormularioService = inject(EnviaFormulario)


  @Input() minhaPropsDeFora!: string;

  @Output() emitingValor = new EventEmitter<string>();

  myFunction(event:any){
    console.log("Submeti",event)
  }

  submit(){
    this.emitingValor.emit(this.name)
    this.enviaFormularioService.enviaInformacaoParaBackEnd("enviando informação")
  }

}
