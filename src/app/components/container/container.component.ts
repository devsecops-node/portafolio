import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  encender = false


  ngOnInit(): void {
    this.encender = true
    setTimeout(() => {
      this.encender = !this.encender
      console.log(this.encender)
    }, 1000)
  }

}
