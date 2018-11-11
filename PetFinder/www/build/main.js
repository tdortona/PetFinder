webpackJsonp([0],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelloIonicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_servicio_servicio__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HelloIonicPage = /** @class */ (function () {
    function HelloIonicPage(camera, service, domSanitizer, navCtrl, navParams, http) {
        this.camera = camera;
        this.service = service;
        this.domSanitizer = domSanitizer;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.base64Image = "";
    }
    HelloIonicPage.prototype.takePicture = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            _this.base64Image = imageData;
        }, function (err) {
            // Handle error
        });
    };
    HelloIonicPage.prototype.pegarleAWatson = function () {
        this.service.pegarleAWatson();
    };
    HelloIonicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hello-ionic',template:/*ion-inline-start:"C:\Users\tomasdo\Desktop\Universidad\Proyecto Final\PetFinder\PetFinder\src\pages\hello-ionic\hello-ionic.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>IAshley</ion-title>\n    <ion-buttons end>\n      <button ion-button tappable> <!-- (click)="presentNotifications($event)" -->\n        <ion-icon name="notifications"></ion-icon>\n      </button>\n      <button ion-button tappable> <!-- (click)="goToAccount()" -->\n        <ion-icon name="cog"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <h3>¡Bienvenidos a IAshley!</h3>\n\n  <p>\n    This starter project is our way of helping you get a functional app running in record time.\n  </p>\n  <p>\n    Follow along on the tutorial section of the Ionic docs!\n  </p>\n  <p>\n    <button ion-button color="primary" menuToggle>Toggle Menu</button>\n  </p>\n  <p>\n    <button ion-button color="primary" (click)="pegarleAWatson()">Pegarle a Watson</button>\n  </p>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\tomasdo\Desktop\Universidad\Proyecto Final\PetFinder\PetFinder\src\pages\hello-ionic\hello-ionic.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_5__providers_servicio_servicio__["a" /* ServicioProvider */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]])
    ], HelloIonicPage);
    return HelloIonicPage;
}());

//# sourceMappingURL=hello-ionic.js.map

/***/ }),

/***/ 116:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 158:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 158;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicioProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ServicioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ServicioProvider = /** @class */ (function () {
    // private URL_PROD: string  = "";
    function ServicioProvider(http) {
        this.http = http;
        this.URL_DEV = "http://localhost:62605";
    }
    ServicioProvider.prototype.pegarleAWatson = function () {
        this.http.get(this.URL_DEV + '/api/values')
            .subscribe(function (result) {
            debugger;
            console.log(result);
            console.log("Le pegamos a watson");
        }, function (error) {
            console.error(error);
        });
    };
    ServicioProvider.prototype.enviarFotoEncontradoAWatson = function () {
        // this.http.post(this.URL_DEV + '/api/ImagenMascota/FotoEncontrado', )
    };
    ServicioProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ServicioProvider);
    return ServicioProvider;
}());

//# sourceMappingURL=servicio.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__item_details_item_details__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams, domSanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.domSanitizer = domSanitizer;
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__item_details_item_details__["a" /* ItemDetailsPage */], {
            item: item
        });
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\tomasdo\Desktop\Universidad\Proyecto Final\PetFinder\PetFinder\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Perros perdidos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="trips detail-bg">\n  <div class="trip card" tappable margin-bottom> <!-- (click)="viewDetail(trip.id)" -->\n    <div class="background border-bottom" [ngStyle]="{\'background-image\': \'url(assets/imgs/trip/trip_1.jpg)\'}">\n      <div class="background-filter rlt">\n        <div class="align-bottom" padding-left padding-right>\n          <h6 class="pull-left text-white" ion-text>Copacabana</h6>\n          <h6 class="pull-right text-white" ion-text>$90.00</h6>\n          <div class="clear"></div>\n        </div>\n      </div>\n    </div>\n    <div class="padding-sm primary-bg">\n      <ion-icon name="time" class="text-white"></ion-icon>\n      <span ion-text class="text-white">12h</span>\n      <span class="pull-right" ion-text color="light"><strong>per adult</strong> (childs has <span ion-text  class="text-green bold">50% OFF</span>)</span>\n    </div>\n  </div>\n  <div class="trip card" tappable margin-bottom> <!-- (click)="viewDetail(trip.id)" -->\n    <div class="background border-bottom" [ngStyle]="{\'background-image\': \'url(assets/imgs/trip/trip_1.jpg)\'}">\n      <div class="background-filter rlt">\n        <div class="align-bottom" padding-left padding-right>\n          <h6 class="pull-left text-white" ion-text>Copacabana</h6>\n          <h6 class="pull-right text-white" ion-text>$90.00</h6>\n          <div class="clear"></div>\n        </div>\n      </div>\n    </div>\n    <div class="padding-sm primary-bg">\n      <ion-icon name="time" class="text-white"></ion-icon>\n      <span ion-text class="text-white">12h</span>\n      <span class="pull-right" ion-text color="light"><strong>per adult</strong> (childs has <span ion-text  class="text-green bold">50% OFF</span>)</span>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\tomasdo\Desktop\Universidad\Proyecto Final\PetFinder\PetFinder\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemDetailsPage = /** @class */ (function () {
    function ItemDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
    }
    ItemDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-item-details',template:/*ion-inline-start:"C:\Users\tomasdo\Desktop\Universidad\Proyecto Final\PetFinder\PetFinder\src\pages\item-details\item-details.html"*/'<ion-header>\n  <ion-navbar>\n    <button menuToggle *ngIf="!selectedItem">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Item Details</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <h3 text-center *ngIf="selectedItem">\n    {{selectedItem.title}}\n    <ion-icon [name]="selectedItem.icon"></ion-icon>\n  </h3>\n  <h4 text-center *ngIf="selectedItem">\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </h4>\n</ion-content>\n'/*ion-inline-end:"C:\Users\tomasdo\Desktop\Universidad\Proyecto Final\PetFinder\PetFinder\src\pages\item-details\item-details.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ItemDetailsPage);
    return ItemDetailsPage;
}());

//# sourceMappingURL=item-details.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EncontrePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__confirmar_foto_confirmar_foto__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EncontrePage = /** @class */ (function () {
    function EncontrePage(camera, nav) {
        this.camera = camera;
        this.nav = nav;
        this.base64Image = "";
    }
    EncontrePage.prototype.takePicture = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            targetWidth: 720,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            _this.base64Image = imageData;
            _this.nav.push(__WEBPACK_IMPORTED_MODULE_3__confirmar_foto_confirmar_foto__["a" /* ConfirmarFotoPage */], {
                data: _this.base64Image
            });
        }, function (err) {
            // Handle error
        });
    };
    EncontrePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-encontre',template:/*ion-inline-start:"C:\Users\tomasdo\Desktop\Universidad\Proyecto Final\PetFinder\PetFinder\src\pages\encontre\encontre.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>¡Encontre un perro!</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-card>\n        <ion-card-content>\n          <button ion-button color="danger" icon-rigth block (click)="takePicture();">\n            Sacar Foto!\n            <ion-icon name="camera"></ion-icon>\n          </button>\n        </ion-card-content>\n      </ion-card>\n      Tips:\n        <ul>\n          <li>Tip 1</li> <!-- nGfor -->\n          <li>Tip 2</li>\n          <li>Tip 3</li>\n        </ul>\n</ion-content>\n'/*ion-inline-end:"C:\Users\tomasdo\Desktop\Universidad\Proyecto Final\PetFinder\PetFinder\src\pages\encontre\encontre.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */]])
    ], EncontrePage);
    return EncontrePage;
}());

//# sourceMappingURL=encontre.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmarFotoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ConfirmarFotoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConfirmarFotoPage = /** @class */ (function () {
    function ConfirmarFotoPage(navCtrl, navParams, domSanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.domSanitizer = domSanitizer;
        debugger;
        this.base64Image = navParams.get('data');
    }
    ConfirmarFotoPage.prototype.confirmarFoto = function () {
    };
    ConfirmarFotoPage.prototype.cancelarFoto = function () {
        this.navCtrl.pop();
    };
    ConfirmarFotoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-confirmar-foto',template:/*ion-inline-start:"C:\Users\tomasdo\Desktop\Universidad\Proyecto Final\PetFinder\PetFinder\src\pages\confirmar-foto\confirmar-foto.html"*/'<!--\n  Generated template for the ConfirmarFotoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Confirmar Foto</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <img (show)="base64Image !== \'\'" [src]="domSanitizer.bypassSecurityTrustUrl(base64Image)" />\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-icon class="pull-right confirm-button" (click)="confirmarFoto()" name="checkmark-circle"></ion-icon>\n      </ion-col>\n      <ion-col>\n        <ion-icon class="cancel-button" (click)="cancelarFoto()" name="close-circle"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\tomasdo\Desktop\Universidad\Proyecto Final\PetFinder\PetFinder\src\pages\confirmar-foto\confirmar-foto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], ConfirmarFotoPage);
    return ConfirmarFotoPage;
}());

//# sourceMappingURL=confirmar-foto.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hello_ionic_hello_ionic__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_models_UserFbData__ = __webpack_require__(286);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginPage = /** @class */ (function () {
    function LoginPage(nav, forgotCtrl, menu, toastCtrl, fb, storage, http) {
        this.nav = nav;
        this.forgotCtrl = forgotCtrl;
        this.menu = menu;
        this.toastCtrl = toastCtrl;
        this.fb = fb;
        this.storage = storage;
        this.http = http;
        this.fbUser = new __WEBPACK_IMPORTED_MODULE_6__app_models_UserFbData__["a" /* UserFbData */]();
        this.menu.swipeEnable(false);
    }
    // login and go to home page
    LoginPage.prototype.login = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__hello_ionic_hello_ionic__["a" /* HelloIonicPage */]);
    };
    LoginPage.prototype.loginFb = function () {
        var _this = this;
        this.fb.login(['public_profile', 'email'])
            .then(function (res) {
            if (res.status === 'connected') {
                _this.storage.set('UserImg', 'https://graph.facebook.com/' + res.authResponse.userID + '/picture?type=square');
                _this.getFbData(res.authResponse.accessToken);
            }
            else {
                alert("Error en login con Facebook");
            }
            console.log('Logged into Facebook!', res);
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__hello_ionic_hello_ionic__["a" /* HelloIonicPage */]);
        })
            .catch(function (e) { return console.log('Error logging into Facebook', e); });
    };
    LoginPage.prototype.getFbData = function (access_token) {
        var _this = this;
        var url = 'https://graph.facebook.com/me?fields=id,name,first_name,last_name,email&access_token=' + access_token;
        this.http.get(url).subscribe(function (data) {
            _this.fbUser = data;
            console.log(_this.fbUser);
            _this.storage.set('UserName', _this.fbUser.name);
        });
    };
    LoginPage.prototype.forgotPass = function () {
        var _this = this;
        var forgot = this.forgotCtrl.create({
            title: 'Forgot Password?',
            message: "Enter you email address to send a reset link password.",
            inputs: [
                {
                    name: 'email',
                    placeholder: 'Email',
                    type: 'email'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Send',
                    handler: function (data) {
                        console.log('Send clicked');
                        var toast = _this.toastCtrl.create({
                            message: 'Email was sended successfully',
                            duration: 3000,
                            position: 'top',
                            cssClass: 'dark-trans',
                            closeButtonText: 'OK',
                            showCloseButton: true
                        });
                        toast.present();
                    }
                }
            ]
        });
        forgot.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\tomasdo\Desktop\Universidad\Proyecto Final\PetFinder\PetFinder\src\pages\login\login.html"*/'<ion-content padding class="animated fadeIn login auth-page">\n  <div class="login-content">\n\n    <!-- Logo -->\n    <div padding-horizontal text-center class="animated fadeInDown">\n      <div class="logo"></div>\n      <h2 ion-text class="text-primary">\n        <strong>IAshley</strong>\n      </h2>\n    </div>\n\n    <div>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-12>\n            <button ion-button icon-only block class="btn-facebook" (click)="loginFb();">Iniciar sesión con Facebook \n              <ion-icon name="logo-facebook"></ion-icon>\n            </button>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12>\n            <button ion-button icon-only block class="btn-twitter" (click)="login();">Iniciar sesión con Twitter \n              <ion-icon name="logo-twitter"></ion-icon>\n            </button>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12>\n            <button ion-button icon-only block class="btn-gplus" (click)="login();">Iniciar sesión con Google \n              <ion-icon name="logo-googleplus"></ion-icon>\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\tomasdo\Desktop\Universidad\Proyecto Final\PetFinder\PetFinder\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditProfilePage = /** @class */ (function () {
    function EditProfilePage(navCtrl, navParams, toastC) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastC = toastC;
        this.userName = "";
    }
    EditProfilePage.prototype.submitForm = function () {
        console.log(this.userName);
        var toast = this.toastC.create({
            message: "Hola " + this.userName,
            duration: 1000
        });
        toast.present();
    };
    EditProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-profile',template:/*ion-inline-start:"C:\Users\tomasdo\Desktop\Universidad\Proyecto Final\PetFinder\PetFinder\src\pages\edit-profile\edit-profile.html"*/'<!--\n  Generated template for the EditProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>edit-profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <input type="text" [(ngModel)]="userName" />\n  <button ion-button (click)="submitForm()">Guardar</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\tomasdo\Desktop\Universidad\Proyecto Final\PetFinder\PetFinder\src\pages\edit-profile\edit-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], EditProfilePage);
    return EditProfilePage;
}());

//# sourceMappingURL=edit-profile.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(230);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_hello_ionic_hello_ionic__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_item_details_item_details__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_encontre_encontre__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_edit_profile_edit_profile__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_confirmar_foto_confirmar_foto__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_camera__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_servicio_servicio__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_facebook__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_storage__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_item_details_item_details__["a" /* ItemDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_encontre_encontre__["a" /* EncontrePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_edit_profile_edit_profile__["a" /* EditProfilePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_confirmar_foto_confirmar_foto__["a" /* ConfirmarFotoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_item_details_item_details__["a" /* ItemDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_encontre_encontre__["a" /* EncontrePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_edit_profile_edit_profile__["a" /* EditProfilePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_confirmar_foto_confirmar_foto__["a" /* ConfirmarFotoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_facebook__["a" /* Facebook */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_15__providers_servicio_servicio__["a" /* ServicioProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_hello_ionic_hello_ionic__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_list_list__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_encontre_encontre__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_facebook__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_edit_profile_edit_profile__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MyApp = /** @class */ (function () {
    function MyApp(platform, menu, statusBar, splashScreen, storage, fb) {
        var _this = this;
        this.platform = platform;
        this.menu = menu;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.storage = storage;
        this.fb = fb;
        // make HelloIonicPage the root (or first) page
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        // set our app's pages
        this.pages = [
            { title: 'Pet Finder', component: __WEBPACK_IMPORTED_MODULE_2__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */] },
            { title: 'Lista de perros', component: __WEBPACK_IMPORTED_MODULE_3__pages_list_list__["a" /* ListPage */] },
            { title: 'Encontre un perro', component: __WEBPACK_IMPORTED_MODULE_4__pages_encontre_encontre__["a" /* EncontrePage */] }
        ];
        this.storage.get('UserImg').then(function (img) {
            _this.UserImg = img;
        });
        this.storage.get('UserName').then(function (name) {
            _this.UserName = name;
        });
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.logout = function () {
        debugger;
        this.storage.set('UserImg', '');
        this.storage.set('UserName', '');
        console.log('deslogueado(?)');
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */]);
    };
    MyApp.prototype.editProfile = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_10__pages_edit_profile_edit_profile__["a" /* EditProfilePage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\tomasdo\Desktop\Universidad\Proyecto Final\PetFinder\PetFinder\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n      <ion-toolbar class="user-profile">\n\n          <ion-grid>\n            <ion-row>\n              <ion-col col-4>\n                  <div class="user-avatar">\n                    <img [src]="UserImg">\n                  </div>\n              </ion-col>\n              <ion-col padding-top col-8>\n                <h2 ion-text class="no-margin bold text-white">\n                  {{ UserName }}\n                </h2>\n                <span ion-text color="light">Customer</span>\n              </ion-col>\n            </ion-row>\n    \n            <ion-row no-padding class="other-data">\n              <ion-col no-padding class="column">\n                <button ion-button icon-left small full color="light" menuClose (click)="editProfile()">\n                  <ion-icon name="contact"></ion-icon>\n                  Edit Profile\n                </button>\n              </ion-col>\n              <ion-col no-padding class="column">\n                <button ion-button icon-left small full color="light" menuClose (click)="logout()">\n                  <ion-icon name="log-out"></ion-icon>\n                  Log Out\n                </button>\n              </ion-col>\n            </ion-row>\n    \n          </ion-grid>\n    \n        </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list class="user-list">\n      <button ion-item menuClose class="text-1x" *ngFor="let p of pages" (click)="openPage(p)">\n          <span ion-text color="primary">{{p.title}}</span>\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"C:\Users\tomasdo\Desktop\Universidad\Proyecto Final\PetFinder\PetFinder\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_facebook__["a" /* Facebook */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserFbData; });
var UserFbData = /** @class */ (function () {
    function UserFbData() {
    }
    return UserFbData;
}());

//# sourceMappingURL=UserFbData.js.map

/***/ })

},[209]);
//# sourceMappingURL=main.js.map