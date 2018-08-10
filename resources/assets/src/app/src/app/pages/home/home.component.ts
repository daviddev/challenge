import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    topFive: Array<string> = ["GrahamCampbell", "fabpot", "weierophinney", "rkh", "josh"];

    constructor() {
    }

    ngOnInit() {
    }

}
