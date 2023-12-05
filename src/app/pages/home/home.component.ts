import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParamMap } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  activate: boolean = false
  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    const route = this.route.snapshot.url.join('/')
    if (route === "home") {
      this.activate = true
    } else {
      this.activate = false
    }

    // console.log(route, this.activate)
  }
}
