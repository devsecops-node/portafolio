import { Component } from '@angular/core';
import { ProvideProyectsService, ProyectsUI } from 'src/app/services/provide-proyects.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent {
  proyects: Array<ProyectsUI> = []
  activar = false
  activate: boolean = false
  ngOnInit(): void {
    const route = this.route.snapshot.url.join('/')
    // console.log(route, this.activate)
    if (route === "proyects") {
      this.activate = true
    } else {
      this.activate = false
    }

    console.log(route, this.activate)
  }

  constructor(private provideProyects: ProvideProyectsService, private route: ActivatedRoute) {
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
