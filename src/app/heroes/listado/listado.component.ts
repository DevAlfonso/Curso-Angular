import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {
  heroes: string[]= ['spiderman', 'thor', 'ironman', 'hulk'];
  heroeBorrado: string = '';

  borrar(){
    this.heroeBorrado = this.heroes.shift() || "";
    
  }
}