import { Component, Input, Output,EventEmitter } from '@angular/core';
import { ProvideProyectsService, ProyectsUI } from 'src/app/services/provide-proyects.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
  @Output() closePopUP = new EventEmitter<boolean>()
  currentProyect!: ProyectsUI

  constructor(private provideProyectService: ProvideProyectsService) {
    this.currentProyect = this.provideProyectService.getCurrentProyect()
  }
  close(){
    this.provideProyectService.setCurrentProyect(null)
    this.closePopUP.emit(false)
  }
}
