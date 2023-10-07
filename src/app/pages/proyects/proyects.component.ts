import { Component } from '@angular/core';
import { ProvideProyectsService, ProyectsUI } from 'src/app/services/provide-proyects.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent {
  proyects: Array<ProyectsUI> = []
  activar = false

  constructor(private provideProyects: ProvideProyectsService) {
    this.proyects = this.provideProyects.getAllProyects()
  }

  activatePopup() {
    this.activar = true
  }
  asignProyect(proyect:ProyectsUI){
    this.provideProyects.setCurrentProyect(proyect)
  }
  closePopUp(event:boolean){
    this.activar = event
  }
}
