import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit{
  activate: boolean = false
  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    const route = this.route.snapshot.url.join('/')
    console.log(route, this.activate)
    if (route === "info") {
      this.activate = true
    } else {
      this.activate = false
    }

    // console.log(route, this.activate)
  }
}
