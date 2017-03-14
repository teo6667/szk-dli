"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var Interests = (function () {
    function Interests(interest) {
        this.id = interest.id;
        this.Name = interest.Name;
        this.selected = interest.selected;
    }
    return Interests;
}());
var User = (function () {
    function User() {
    }
    return User;
}());
var RegistrationComponent = (function () {
    function RegistrationComponent() {
        this.interestsData = [
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
        this.interestsCollection = this.interestsData.map(function (r) { return new Interests(r); });
        this.intCount = this.interestsData.filter(function (r) { return r.selected; }).length;
    }
    RegistrationComponent.prototype.interestsClick = function () {
        this.intCount = this.interestsData.filter(function (r) { return r.selected; }).length;
    };
    RegistrationComponent = __decorate([
        core_1.Component({
            selector: 'registration',
            templateUrl: 'app/Views/Registration.html'
        }), 
        __metadata('design:paramtypes', [])
    ], RegistrationComponent);
    return RegistrationComponent;
}());
exports.RegistrationComponent = RegistrationComponent;
//# sourceMappingURL=registration.component.js.map