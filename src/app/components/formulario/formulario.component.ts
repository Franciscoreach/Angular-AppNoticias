import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  @Output() parametrosSeleccionados = new EventEmitter<any>()

  categoriaSeleccionada='general';
  paisSeleccionado='us';
  
  categorias : any[] = [
    {value: 'general', nombre: 'General'},
    {value: 'business', nombre: 'Negocios'},
    {value: 'sports', nombre: 'Deportes'},
    {value: 'technology', nombre: 'Tecnologia'},
  ]

  paises : any[] = [
    {value: 'us', nombre: 'Estados Unidos'},
    {value: 'uk', nombre: 'Reino Unido'},
    {value: 'cl', nombre: 'Chile'},
    {value: 'br', nombre: 'Brasil'},
    {value: 'fr', nombre: 'Francia'},
    {value: 'mx', nombre: 'Mexico'},

  ]

  constructor(){

  }

  buscarNoticia(){
    const PARAMETROS = {
      categoria: this.categoriaSeleccionada,
      pais: this.paisSeleccionado
    }

    this.parametrosSeleccionados.emit(PARAMETROS)
  }

}
