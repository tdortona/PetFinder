webpackJsonp([1],{

/***/ 110:
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
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/titan/titan.module": [
		273,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 151;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelloIonicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__titan_titan__ = __webpack_require__(198);
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
    function HelloIonicPage(camera, domSanitizer, navCtrl, navParams) {
        this.camera = camera;
        this.domSanitizer = domSanitizer;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
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
    HelloIonicPage.prototype.goToTitan = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__titan_titan__["a" /* TitanPage */]);
    };
    HelloIonicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hello-ionic',template:/*ion-inline-start:"C:\Users\tomasdo\Desktop\Proyecto Final\PetFinder\PetFinder\src\pages\hello-ionic\hello-ionic.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>PetFinder</ion-title>\n    <ion-buttons end>\n      <button ion-button tappable> <!-- (click)="presentNotifications($event)" -->\n        <ion-icon name="notifications"></ion-icon>\n      </button>\n      <button ion-button tappable> <!-- (click)="goToAccount()" -->\n        <ion-icon name="cog"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <h3>¡Bienvenidos a PetFinder!</h3>\n\n  <p>\n    This starter project is our way of helping you get a functional app running in record time.\n  </p>\n  <p>\n    Follow along on the tutorial section of the Ionic docs!\n  </p>\n  <p>\n    <button ion-button color="primary" menuToggle>Toggle Menu</button>\n  </p>\n  <p>\n    <button ion-button color="primary" (click)="goToTitan();">Go to Titan</button>\n  </p>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\tomasdo\Desktop\Proyecto Final\PetFinder\PetFinder\src\pages\hello-ionic\hello-ionic.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], HelloIonicPage);
    return HelloIonicPage;
}());

//# sourceMappingURL=hello-ionic.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__item_details_item_details__ = __webpack_require__(194);
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
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\tomasdo\Desktop\Proyecto Final\PetFinder\PetFinder\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Perros perdidos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="trips detail-bg">\n  <div class="trip card" tappable margin-bottom> <!-- (click)="viewDetail(trip.id)" -->\n    <div class="background border-bottom" [ngStyle]="{\'background-image\': \'url(assets/imgs/trip/trip_1.jpg)\'}">\n      <div class="background-filter rlt">\n        <div class="align-bottom" padding-left padding-right>\n          <h6 class="pull-left text-white" ion-text>Copacabana</h6>\n          <h6 class="pull-right text-white" ion-text>$90.00</h6>\n          <div class="clear"></div>\n        </div>\n      </div>\n    </div>\n    <div class="padding-sm primary-bg">\n      <ion-icon name="time" class="text-white"></ion-icon>\n      <span ion-text class="text-white">12h</span>\n      <span class="pull-right" ion-text color="light"><strong>per adult</strong> (childs has <span ion-text  class="text-green bold">50% OFF</span>)</span>\n    </div>\n  </div>\n  <div class="trip card" tappable margin-bottom> <!-- (click)="viewDetail(trip.id)" -->\n    <div class="background border-bottom" [ngStyle]="{\'background-image\': \'url(assets/imgs/trip/trip_1.jpg)\'}">\n      <div class="background-filter rlt">\n        <div class="align-bottom" padding-left padding-right>\n          <h6 class="pull-left text-white" ion-text>Copacabana</h6>\n          <h6 class="pull-right text-white" ion-text>$90.00</h6>\n          <div class="clear"></div>\n        </div>\n      </div>\n    </div>\n    <div class="padding-sm primary-bg">\n      <ion-icon name="time" class="text-white"></ion-icon>\n      <span ion-text class="text-white">12h</span>\n      <span class="pull-right" ion-text color="light"><strong>per adult</strong> (childs has <span ion-text  class="text-green bold">50% OFF</span>)</span>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\tomasdo\Desktop\Proyecto Final\PetFinder\PetFinder\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
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
            selector: 'page-item-details',template:/*ion-inline-start:"C:\Users\tomasdo\Desktop\Proyecto Final\PetFinder\PetFinder\src\pages\item-details\item-details.html"*/'<ion-header>\n  <ion-navbar>\n    <button menuToggle *ngIf="!selectedItem">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Item Details</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <h3 text-center *ngIf="selectedItem">\n    {{selectedItem.title}}\n    <ion-icon [name]="selectedItem.icon"></ion-icon>\n  </h3>\n  <h4 text-center *ngIf="selectedItem">\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </h4>\n</ion-content>\n'/*ion-inline-end:"C:\Users\tomasdo\Desktop\Proyecto Final\PetFinder\PetFinder\src\pages\item-details\item-details.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ItemDetailsPage);
    return ItemDetailsPage;
}());

//# sourceMappingURL=item-details.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EncontrePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(98);
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



var EncontrePage = /** @class */ (function () {
    function EncontrePage(camera, domSanitizer) {
        this.camera = camera;
        this.domSanitizer = domSanitizer;
        this.base64Image = "";
    }
    EncontrePage.prototype.takePicture = function () {
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
    EncontrePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-encontre',template:/*ion-inline-start:"C:\Users\tomasdo\Desktop\Proyecto Final\PetFinder\PetFinder\src\pages\encontre\encontre.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>¡Encontre un perro!</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-card>\n        <ion-card-content>\n          <button ion-button color="danger" icon-rigth block (click)="takePicture();">\n            Sacar Foto!\n            <ion-icon name="camera"></ion-icon>\n          </button>\n          <img (show)="base64Image !== \'\'" [src]="domSanitizer.bypassSecurityTrustUrl(base64Image)" />\n        </ion-card-content>\n      </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\tomasdo\Desktop\Proyecto Final\PetFinder\PetFinder\src\pages\encontre\encontre.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], EncontrePage);
    return EncontrePage;
}());

//# sourceMappingURL=encontre.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TitanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
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
 * Generated class for the TitanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TitanPage = /** @class */ (function () {
    function TitanPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TitanPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TitanPage');
    };
    TitanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-titan',template:/*ion-inline-start:"C:\Users\tomasdo\Desktop\Proyecto Final\PetFinder\PetFinder\src\pages\titan\titan.html"*/'<!--\n  Generated template for the TitanPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Titan</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <label>HOLA MUNDO!</label>\n</ion-content>\n'/*ion-inline-end:"C:\Users\tomasdo\Desktop\Proyecto Final\PetFinder\PetFinder\src\pages\titan\titan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], TitanPage);
    return TitanPage;
}());

//# sourceMappingURL=titan.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_hello_ionic_hello_ionic__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_item_details_item_details__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_encontre_encontre__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_titan_titan__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_camera__ = __webpack_require__(98);
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
                __WEBPACK_IMPORTED_MODULE_8__pages_titan_titan__["a" /* TitanPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/titan/titan.module#TitanPageModule', name: 'TitanPage', segment: 'titan', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_item_details_item_details__["a" /* ItemDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_encontre_encontre__["a" /* EncontrePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_titan_titan__["a" /* TitanPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_camera__["a" /* Camera */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_hello_ionic_hello_ionic__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_list_list__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_encontre_encontre__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(197);
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
    function MyApp(platform, menu, statusBar, splashScreen) {
        this.platform = platform;
        this.menu = menu;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        // make HelloIonicPage the root (or first) page
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */];
        this.initializeApp();
        // set our app's pages
        this.pages = [
            { title: 'Pet Finder', component: __WEBPACK_IMPORTED_MODULE_2__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */] },
            { title: 'Lista de perros', component: __WEBPACK_IMPORTED_MODULE_3__pages_list_list__["a" /* ListPage */] },
            { title: 'Encontre un perro', component: __WEBPACK_IMPORTED_MODULE_4__pages_encontre_encontre__["a" /* EncontrePage */] }
        ];
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\tomasdo\Desktop\Proyecto Final\PetFinder\PetFinder\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n      <ion-toolbar class="user-profile">\n\n          <ion-grid>\n            <ion-row>\n              <ion-col col-4>\n                  <div class="user-avatar">\n                    <img src="../assets/imgs/avatar.jpeg">\n                  </div>\n              </ion-col>\n              <ion-col padding-top col-8>\n                <h2 ion-text class="no-margin bold text-white">\n                  Tomás D\'Ortona\n                </h2>\n                <span ion-text color="light">Customer</span>\n              </ion-col>\n            </ion-row>\n    \n            <ion-row no-padding class="other-data">\n              <ion-col no-padding class="column">\n                <button ion-button icon-left small full color="light" menuClose disabled>\n                  <ion-icon name="contact"></ion-icon>\n                  Edit Profile\n                </button>\n              </ion-col>\n              <ion-col no-padding class="column">\n                <button ion-button icon-left small full color="light" menuClose> <!-- (click)="logout()" -->\n                  <ion-icon name="log-out"></ion-icon>\n                  Log Out\n                </button>\n              </ion-col>\n            </ion-row>\n    \n          </ion-grid>\n    \n        </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list class="user-list">\n      <button ion-item menuClose class="text-1x" *ngFor="let p of pages" (click)="openPage(p)">\n          <span ion-text color="primary">{{p.title}}</span>\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"C:\Users\tomasdo\Desktop\Proyecto Final\PetFinder\PetFinder\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map