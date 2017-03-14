import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

enum Gender {
    Male = 0,
    Female = 1
}

interface Selectable {
    selected: boolean;
}

interface InterestsDetails {
    id: number;
    Name: string;
    selected: boolean;
}

class Interests implements Selectable, InterestsDetails {
    id: number;
    Name: string;
    selected: boolean;

    constructor(interest: InterestsDetails) {
        this.id = interest.id;
        this.Name = interest.Name;
        this.selected = interest.selected;
    }
}

class User {
    id: number;
    firstName: string;
    lastName: string;
    gender: Gender;
    email: string;
    password: string;
    activeAccount: Boolean;

}

@Component({
    selector: 'registration',
    templateUrl: 'app/Views/Registration.html'
})

export class RegistrationComponent {
    interestsData: Array<InterestsDetails> =
    [
        {
            "id": 1,
            "Name": "Túrázás",
            "selected": true
        },
        {
            "id": 2,
            "Name": "Kerékpározás",
            "selected": false
        },
        {
            "id": 3,
            "Name": "Lan Party",
            "selected": false
        },
        {
            "id": 4,
            "Name": "Sakk",
            "selected": true
        },
        {
            "id": 5,
            "Name": "Olvasás",
            "selected": true
        },
        {
            "id": 6,
            "Name": "Egyéb1",
            "selected": false
        },
        {
            "id": 7,
            "Name": "Egyéb2",
            "selected": false
        },
        {
            "id": 8,
            "Name": "Egyéb3",
            "selected": false
        },
        {
            "id": 9,
            "Name": "Egyéb4",
            "selected": false
        },
        {
            "id": 10,
            "Name": "Egyéb5",
            "selected": false
        },
        {
            "id": 11,
            "Name": "Egyéb6",
            "selected": false
        },
        {
            "id": 12,
            "Name": "Egyéb7",
            "selected": false
        }
    ];


    interestsCollection: Array<Interests> = this.interestsData.map(r => new Interests(r));


    intCount: number = this.interestsData.filter(r => r.selected).length;

    interestsClick() {
        this.intCount = this.interestsData.filter(r => r.selected).length;
    }

}