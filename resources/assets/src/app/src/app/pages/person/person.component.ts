import { Component, OnInit } from '@angular/core';
import { ApiService } from "@services/api.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-person',
    templateUrl: './person.component.html',
    styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
    person:any;

    constructor(private apiService: ApiService, private route: ActivatedRoute) {
        this.route.params.subscribe(params => this.getPerson(params.name));
    }

    getPerson(name) {
        this.apiService.get(`/person/${name}`).subscribe(data => {
            console.log(data)
            return this.person = data.person
        })
    }

    ngOnInit() {
    }

}
