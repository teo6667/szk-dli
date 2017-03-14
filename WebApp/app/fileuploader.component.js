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
var FileUploder = (function () {
    function FileUploder() {
        this.onSelection = new core_1.EventEmitter();
        this.DisplayedText = "";
    }
    FileUploder.prototype.fileChange = function (event) {
        var fileList = event.target.files;
        var hasFile = fileList.length > 0;
        if (hasFile) {
            var multipleFile = fileList.length > 1;
            if (multipleFile) {
                this.DisplayedText = fileList.length + ' file(s) has been selected';
            }
            else {
                var file = fileList[0];
                this.DisplayedText = file.name;
            }
            this.onSelection.emit(fileList);
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], FileUploder.prototype, "allowMultiple", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], FileUploder.prototype, "onSelection", void 0);
    FileUploder = __decorate([
        core_1.Component({
            selector: 'FileUploder',
            templateUrl: 'app/Views/FileUploder.html'
        }), 
        __metadata('design:paramtypes', [])
    ], FileUploder);
    return FileUploder;
}());
exports.FileUploder = FileUploder;
;
//# sourceMappingURL=fileuploader.component.js.map