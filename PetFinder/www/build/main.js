webpackJsonp([0],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserData; });
var UserData = /** @class */ (function () {
    function UserData() {
    }
    return UserData;
}());

//# sourceMappingURL=UserData.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilMascotaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fotos_mascota_fotos_mascota__ = __webpack_require__(205);
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
 * Generated class for the PerfilMascotaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PerfilMascotaPage = /** @class */ (function () {
    function PerfilMascotaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Nombre = navParams.get("nombre"),
            this.FotoPerfil = 'assets\\img\\fotos-' + this.Nombre + '\\' + this.Nombre + '-1.jpeg';
    }
    PerfilMascotaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PerfilMascotaPage');
    };
    PerfilMascotaPage.prototype.IrAFotos = function (Nombre) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__fotos_mascota_fotos_mascota__["a" /* FotosMascotaPage */], {
            nombre: Nombre
        });
    };
    PerfilMascotaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-perfil-mascota',template:/*ion-inline-start:"C:\Users\tomasdo\Desktop\Universidad\Proyecto Final\PetFinder\PetFinder\src\pages\perfil-mascota\perfil-mascota.html"*/'<!--\n\n  Generated template for the PerfilMascotaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="barra">\n\n    <ion-title>Perfil {{ Nombre }}</ion-title>\n\n    <ion-buttons end>\n\n        <img class="imagenLogo" src="{{imagepath || \'assets/imgs/logo.png\'}}" />\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-grid>\n\n    <div id="imagen-perfil" class="row">\n\n      <div class="col">\n\n        <h1>{{ Nombre }}</h1>\n\n        <span>Raza: raza</span><br>\n\n        <span>Edad: edad</span>\n\n      </div>\n\n      <div class="col">\n\n        <img src="{{ FotoPerfil }}" />\n\n      </div>\n\n\n\n    </div>\n\n    <div id="botones">\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <button ion-button icon block color="danger" class="button" (click)="perdido();">Perdido\n\n            <ion-icon name="perdido"></ion-icon>\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <button ion-button icon block class="button" (click)="IrAFotos(Nombre)">Fotos\n\n            <ion-icon name="fotos"></ion-icon>\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <button ion-button icon block class="button" (click)="consultar();">Consultar\n\n            <ion-icon name="consultar"></ion-icon>\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <button ion-button icon block class="button" (click)="compartir();">Compartir\n\n            <ion-icon name="compartir"></ion-icon>\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </div>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\tomasdo\Desktop\Universidad\Proyecto Final\PetFinder\PetFinder\src\pages\perfil-mascota\perfil-mascota.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], PerfilMascotaPage);
    return PerfilMascotaPage;
}());

//# sourceMappingURL=perfil-mascota.js.map

/***/ }),

/***/ 117:
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
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 159:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
<<<<<<< HEAD
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 161;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Usuario; });
var Usuario = /** @class */ (function () {
    function Usuario() {
    }
    return Usuario;
}());

//# sourceMappingURL=Usuario.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FotosMascotaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_servicio_servicio__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(32);
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
 * Generated class for the FotosMascotaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FotosMascotaPage = /** @class */ (function () {
    function FotosMascotaPage(navCtrl, service, camera, storage, navParams) {
        this.navCtrl = navCtrl;
        this.service = service;
        this.camera = camera;
        this.storage = storage;
        this.navParams = navParams;
        this.fotos = [];
        this.base64Image = "";
        this.idMascota = navParams.get("idMascota");
        this.mascota = navParams.get("nombreMascota");
        this.entrenado = navParams.get("entrenado");
        this.claseEntrenada = navParams.get("claseEntrenada");
        this.traerImagenesMascotas(this.idMascota);
    }
    FotosMascotaPage.prototype.traerImagenesMascotas = function (idMascota) {
        var _this = this;
        this.service.traerImagenMascota(idMascota)
            .subscribe(function (result) {
            _this.fotos = result;
            console.log(result);
        }, function (error) {
            console.log(error);
        });
    };
    FotosMascotaPage.prototype.agregarFotoMascota = function () {
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
            _this.storage.get("idUsuarioLogueado").then(function (idUsuario) {
                _this.service.agregarFotoMascota(_this.base64Image, _this.idMascota, idUsuario)
                    .then(function (result) {
                    if (result == "ok") {
                        _this.traerImagenesMascotas(_this.idMascota);
                    }
                }).catch(function (err) {
                    console.log(err);
                });
            });
        }, function (err) {
            // Handle error
            console.log(err);
        });
    };
    FotosMascotaPage.prototype.entrenarIA = function () {
        var imageUris = [];
        this.fotos.forEach(function (value) {
            imageUris.push('http://criaderononthue.com/img/canfind/controllers/resources/Img/Mascotas/' + value + '.jpg');
        });
        this.service.crearClaseWatson(this.idMascota, this.mascota, imageUris)
            .subscribe(function (result) {
            console.log(result);
        }, function (error) {
            console.log(error);
        });
    };
    FotosMascotaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fotos-mascota',template:/*ion-inline-start:"C:\Users\tomasdo\Desktop\Universidad\Proyecto Final\PetFinder\PetFinder\src\pages\fotos-mascota\fotos-mascota.html"*/'<!--\n\n  Generated template for the FotosMascotaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-header>\n\n  <ion-navbar color="barra">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Fotos de {{ mascota }}</ion-title>\n\n    <ion-buttons end>\n\n        <img class="imagenLogo" src="{{imagepath || \'assets/imgs/logo.png\'}}" />\n\n      </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="backgroundGeneral">\n\n    <ion-card *ngFor="let item of fotos">\n\n          <ion-card-content>\n\n            <img src="http://criaderononthue.com/img/canfind/controllers/resources/Img/Mascotas/{{ item }}.jpg" />\n\n          </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-12>\n\n            <button *ngIf="fotos.length < 10" round ion-button block color="secondary" (click)="agregarFotoMascota();"> Agregar Foto\n\n            </button>\n\n            <button *ngIf="fotos.length == 10 && !claseEntrenada" round ion-button block color="primary" (click)="entrenarIA();"> Entrenar IA\n\n            </button>\n\n          </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n\n\n      <!-- <ion-grid *ngIf="fotos.length < 10">\n\n        <ion-row>\n\n          <ion-col col-12>\n\n            <p>Total de fotos para completar el perfil:</p>\n\n            <h1><span>{{10 - fotos.length}}</span></h1>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid> -->\n\n\n\n    <ion-card *ngIf="fotos.length < 10">\n\n        <ion-card-header>\n\n          <h1 color="canfind">{{10 - fotos.length}}</h1>\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n            <p>Fotos restantes para completar el perfil.</p>\n\n        </ion-card-content>\n\n\n\n    </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\tomasdo\Desktop\Universidad\Proyecto Final\PetFinder\PetFinder\src\pages\fotos-mascota\fotos-mascota.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_servicio_servicio__["a" /* ServicioProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], FotosMascotaPage);
    return FotosMascotaPage;
}());

//# sourceMappingURL=fotos-mascota.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerConsultaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_servicio_servicio__ = __webpack_require__(22);
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
 * Generated class for the VerConsultaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VerConsultaPage = /** @class */ (function () {
    function VerConsultaPage(navCtrl, navParams, servicio, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.servicio = servicio;
        this.alertCtrl = alertCtrl;
        this.filtroScore = 0;
        this.filtroNombre = "";
        this.filtroRaza = "";
        this.chkNombre = false;
        this.chkRaza = false;
        this.resultados = [];
        this.consultaRealizada = false;
    }
    VerConsultaPage.prototype.ionViewDidLoad = function () {
        this.filtroNombre = this.navParams.get("nombre");
    };
    VerConsultaPage.prototype.consultar = function () {
        var _this = this;
        if (this.chkNombre) {
            this.filtroNombre = this.navParams.get("nombre");
        }
        else {
            this.filtroNombre = "";
        }
        if (this.chkRaza) {
            this.filtroRaza = this.navParams.get("raza");
        }
        else {
            this.filtroRaza = "";
        }
        this.servicio.verConsulta(this.filtroRaza, this.filtroNombre, this.filtroScore)
            .subscribe(function (result) {
            console.log(result);
            _this.resultados = result;
        }, function (error) {
            console.log(error);
            _this.resultados = [];
        });
        this.consultaRealizada = true;
    };
    VerConsultaPage.prototype.contactarUsuario = function (idUsuario) {
        var _this = this;
        this.servicio.contactarUsuario(idUsuario)
            .subscribe(function (result) {
            _this.usuarioContacto = result;
            _this.showAlertContacto(_this.usuarioContacto.nombre, _this.usuarioContacto.email, _this.usuarioContacto.telefonoContacto);
        }, function (error) {
            console.log(error);
        });
    };
    VerConsultaPage.prototype.showAlertContacto = function (nombre, email, telefonoContacto) {
        var alert = this.alertCtrl.create({
            title: 'Foto enviada por ' + nombre,
            subTitle: 'Podes contactarlo mediante<br>Email: ' + email + '<br>Telefono: ' + telefonoContacto,
            buttons: [{
                    text: 'OK',
                    handler: function () {
                    }
                }]
        });
        alert.present();
    };
    VerConsultaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ver-consulta',template:/*ion-inline-start:"C:\Users\tomasdo\Desktop\Universidad\Proyecto Final\PetFinder\PetFinder\src\pages\ver-consulta\ver-consulta.html"*/'<!--\n\n  Generated template for the VerConsultaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="barra">\n\n    <ion-title>Perros encontrados</ion-title>\n\n    <ion-buttons end>\n\n      <img class="imagenLogo" src="{{imagepath || \'assets/imgs/logo.png\'}}" />\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="backgroundGeneral">\n\n    <ion-row>\n\n        <ion-col col-12>\n\n            Precisión: {{ filtroScore }}%\n\n            <ion-item>\n\n              <ion-range min="0" max="100" step="1" [(ngModel)]="filtroScore" color="primary" pin="true">\n\n                <ion-label range-left>0</ion-label>\n\n                <ion-label range-right>100</ion-label>\n\n              </ion-range>\n\n            </ion-item>\n\n        </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n        <ion-col col-12>\n\n            <ion-item>\n\n              <ion-label>Por Raza</ion-label>\n\n              <ion-checkbox [(ngModel)]="chkRaza"></ion-checkbox>\n\n            </ion-item>\n\n            \n\n            <ion-item>\n\n              <ion-label>Por Nombre</ion-label>\n\n              <ion-checkbox [(ngModel)]="chkNombre"></ion-checkbox>\n\n            </ion-item>\n\n        </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n        <ion-col col-12>\n\n            <button round ion-button icon block class="button" (click)="consultar();">Consultar</button>\n\n        </ion-col>\n\n    </ion-row>\n\n    <ng-container *ngIf="resultados.length > 0">\n\n        <ion-card *ngFor="let item of resultados">\n\n            <ion-card-content>\n\n              <ion-card-title>\n\n                <h1>{{ item.clase }} - {{ item.score }} %</h1> \n\n              </ion-card-title>\n\n              <div class="imagenFondo">\n\n                <img class="imagenFrame" img-fluid src="{{ item.imagen }}" />\n\n              </div>\n\n              <div>\n\n                La foto fue tomada en: {{ item.localizacion }}\n\n              </div>\n\n              <div>\n\n                <button round ion-button icon block class="button" (click)="contactarUsuario(item.idUsuario);">Contactar usuario</button>\n\n              </div>\n\n            </ion-card-content>\n\n        </ion-card>\n\n    </ng-container>\n\n\n\n    <ion-card *ngIf="consultaRealizada && resultados.length == 0">\n\n        <ion-card-content>\n\n          No se encontraron resultados!\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\tomasdo\Desktop\Universidad\Proyecto Final\PetFinder\PetFinder\src\pages\ver-consulta\ver-consulta.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_servicio_servicio__["a" /* ServicioProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], VerConsultaPage);
    return VerConsultaPage;
}());

//# sourceMappingURL=ver-consulta.js.map
=======
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 159;
>>>>>>> 856bd23f10432767e2f9c77bbf3ffb1d228eb395

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EncontrePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__confirmar_foto_confirmar_foto__ = __webpack_require__(201);
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
            selector: 'page-encontre',template:/*ion-inline-start:"C:\Users\tomasdo\Desktop\Universidad\Proyecto Final\PetFinder\PetFinder\src\pages\encontre\encontre.html"*/'<ion-header>\n\n  <ion-navbar color="barra">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>¡Encontre un perro!</ion-title>\n\n    <ion-buttons end>\n\n      <img class="imagenLogo" src="{{imagepath || \'assets/imgs/logo.png\'}}" />\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-card>\n\n        <ion-card-content>\n\n          <button ion-button color="danger" icon-rigth block (click)="takePicture();">\n\n            Sacar Foto!\n\n            <ion-icon name="camera"></ion-icon>\n\n          </button>\n\n        </ion-card-content>\n\n      </ion-card>\n\n      Tips:\n\n        <ul>\n\n          <h3>\n\n            <li>Sacale fotos de la siguiente manera:</li> <!-- nGfor -->\n\n          </h3>\n\n            <li>De frente</li>\n\n            <li>De costado</li>\n\n            <li>De arriba</li>\n\n            <li>De atrás</li>\n\n        </ul>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\tomasdo\Desktop\Universidad\Proyecto Final\PetFinder\PetFinder\src\pages\encontre\encontre.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */]])
    ], EncontrePage);
    return EncontrePage;
}());

//# sourceMappingURL=encontre.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmarFotoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_servicio_servicio__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConfirmarFotoPage = /** @class */ (function () {
    function ConfirmarFotoPage(navCtrl, navParams, domSanitizer, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.domSanitizer = domSanitizer;
        this.service = service;
        this.base64Image = navParams.get('data');
    }
    ConfirmarFotoPage.prototype.confirmarFoto = function () {
<<<<<<< HEAD
        var _this = this;
        this.storage.get("idUsuarioLogueado").then(function (data) {
            _this.service.enviarFotoEncontradoAWatson(_this.base64Image, data, _this.direccion);
        });
    };
    ConfirmarFotoPage.prototype.getPosition = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Localizando...",
            dismissOnPageChange: true
        });
        loader.present();
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.location = resp.coords.latitude + "," + resp.coords.longitude;
            _this.direccionError = "";
            _this.getLocation(_this.location)
                .subscribe(function (result) {
                console.log(result);
                _this.localizacionResult = result;
                console.log(_this.localizacionResult);
                if (_this.localizacionResult.status == "OK") {
                    _this.direccion = _this.localizacionResult.results[0].address_components[1].long_name + " " + _this.localizacionResult.results[0].address_components[0].long_name + ", " + _this.localizacionResult.results[0].address_components[2].long_name;
                }
                else {
                    _this.direccion = "No se pudo obtener la localización.";
                }
                loader.dismiss();
            }, function (error) {
                console.log(error);
                loader.dismiss();
            });
        }).catch(function (error) {
            _this.direccionError = "Por favor, activá la ubicación del dispositivo.";
            console.log('Error getting location', error);
            loader.dismiss();
        });
=======
        this.service.enviarFotoEncontradoAWatson(this.base64Image);
>>>>>>> 856bd23f10432767e2f9c77bbf3ffb1d228eb395
    };
    ConfirmarFotoPage.prototype.cancelarFoto = function () {
        this.navCtrl.pop();
    };
<<<<<<< HEAD
    ConfirmarFotoPage.prototype.getLocation = function (pos) {
        return this.service.getLocation(pos);
    };
    ConfirmarFotoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-confirmar-foto',template:/*ion-inline-start:"C:\Users\tomasdo\Desktop\Universidad\Proyecto Final\PetFinder\PetFinder\src\pages\confirmar-foto\confirmar-foto.html"*/'<!--\n\n  Generated template for the ConfirmarFotoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="barra">\n\n    <ion-title>Confirmar Foto</ion-title>\n\n    <ion-buttons end>\n\n        <img class="imagenLogo" src="{{imagepath || \'assets/imgs/logo.png\'}}" />\n\n      </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="backgroundGeneral">\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col>\n\n        <img (show)="base64Image !== \'\'" [src]="domSanitizer.bypassSecurityTrustUrl(base64Image)" />\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-card *ngIf="direccion != \'\'">\n\n        <ion-card-content>\n\n          La foto fue tomada en: <br />\n\n          {{ direccion }}\n\n        </ion-card-content>\n\n      </ion-card>\n\n      <ion-card *ngIf="direccionError != \'\'">\n\n        <ion-card-content>\n\n          {{ direccion }}\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col>\n\n        <ion-icon class="pull-right confirm-button" (click)="confirmarFoto()" name="checkmark-circle"></ion-icon>\n\n      </ion-col>\n\n      <ion-col>\n\n        <ion-icon class="cancel-button" (click)="cancelarFoto()" name="close-circle"></ion-icon>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\tomasdo\Desktop\Universidad\Proyecto Final\PetFinder\PetFinder\src\pages\confirmar-foto\confirmar-foto.html"*/,
=======
    ConfirmarFotoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-confirmar-foto',template:/*ion-inline-start:"C:\Users\tomasdo\Desktop\Universidad\Proyecto Final\PetFinder\PetFinder\src\pages\confirmar-foto\confirmar-foto.html"*/'<!--\n\n  Generated template for the ConfirmarFotoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="barra">\n\n    <ion-title>Confirmar Foto</ion-title>\n\n    <ion-buttons end>\n\n        <img class="imagenLogo" src="{{imagepath || \'assets/imgs/logo.png\'}}" />\n\n      </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col>\n\n        <img (show)="base64Image !== \'\'" [src]="domSanitizer.bypassSecurityTrustUrl(base64Image)" />\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col>\n\n        <ion-icon class="pull-right confirm-button" (click)="confirmarFoto()" name="checkmark-circle"></ion-icon>\n\n      </ion-col>\n\n      <ion-col>\n\n        <ion-icon class="cancel-button" (click)="cancelarFoto()" name="close-circle"></ion-icon>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\tomasdo\Desktop\Universidad\Proyecto Final\PetFinder\PetFinder\src\pages\confirmar-foto\confirmar-foto.html"*/,
>>>>>>> 856bd23f10432767e2f9c77bbf3ffb1d228eb395
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_3__providers_servicio_servicio__["a" /* ServicioProvider */]])
    ], ConfirmarFotoPage);
    return ConfirmarFotoPage;
}());

//# sourceMappingURL=confirmar-foto.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hello_ionic_hello_ionic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_plus__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_models_UserData__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_servicio_servicio__ = __webpack_require__(51);
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
    function LoginPage(nav, forgotCtrl, menu, toastCtrl, fb, googlePlus, storage, http, service) {
        this.nav = nav;
        this.forgotCtrl = forgotCtrl;
        this.menu = menu;
        this.toastCtrl = toastCtrl;
        this.fb = fb;
        this.googlePlus = googlePlus;
        this.storage = storage;
        this.http = http;
        this.service = service;
        this.rdUser = new __WEBPACK_IMPORTED_MODULE_7__app_models_UserData__["a" /* UserData */]();
        this.menu.swipeEnable(false);
    }
    // login and go to home page
    LoginPage.prototype.login = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__hello_ionic_hello_ionic__["a" /* HelloIonicPage */]);
    };
    //Facebook
    LoginPage.prototype.loginFb = function () {
        var _this = this;
        this.fb.login(['public_profile', 'email'])
            .then(function (res) {
            if (res.status === 'connected') {
                _this.storage.set('UserImg', 'https://graph.facebook.com/' + res.authResponse.userID + '/picture?type=square');
                _this.getFbData(res.authResponse.accessToken, res.authResponse.userID);
            }
            else {
                alert("Error en login con Facebook");
            }
            console.log('Logged into Facebook!', res);
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__hello_ionic_hello_ionic__["a" /* HelloIonicPage */]);
        })
            .catch(function (e) { return console.log('Error logging into Facebook', e); });
    };
    LoginPage.prototype.getFbData = function (access_token, userID) {
        var _this = this;
        var url = 'https://graph.facebook.com/me?fields=id,name,first_name,last_name,email&access_token=' + access_token;
        this.http.get(url)
            .subscribe(function (data) {
            _this.rdUser = data;
            _this.rdUser.idRedSocial = 1;
            _this.rdUser.avatar = 'https://graph.facebook.com/' + userID + '/picture?type=square';
            console.log(_this.rdUser);
            _this.storage.set('UserName', _this.rdUser.name);
        }, function (error) {
            console.log(error);
        });
    };
    LoginPage.prototype.loginGoogle = function () {
        var _this = this;
        this.googlePlus.login({})
            .then(function (res) {
            console.log(res);
            _this.rdUser.email = res.email;
            _this.rdUser.first_name = res.givenName;
            _this.rdUser.id = res.userId;
            _this.rdUser.last_name = res.familyName;
            _this.rdUser.name = res.displayName;
            _this.rdUser.idRedSocial = 2;
            _this.rdUser.avatar = res.imageUrl;
            _this.storage.set('UserName', _this.rdUser.name);
            _this.storage.set('UserImg', _this.rdUser.avatar);
            _this.service.enviarRdUser(_this.rdUser);
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__hello_ionic_hello_ionic__["a" /* HelloIonicPage */]);
        })
            .catch(function (err) {
            console.error(err);
        });
    };
    LoginPage.prototype.enviarRdUser = function (rdUser) {
        this.service.enviarRdUser(rdUser);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\tomasdo\Desktop\Universidad\Proyecto Final\PetFinder\PetFinder\src\pages\login\login.html"*/'<ion-content padding class="animated fadeIn login auth-page">\n\n  <div class="login-content">\n\n\n\n    <!-- Logo -->\n\n    <div padding-horizontal text-center class="animated fadeInDown">\n\n      <div class="logo"></div>\n\n    </div>\n\n\n\n    <div>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-12>\n\n            <button round ion-button icon-only block class="btn-facebook" (click)="loginFb();">Iniciar sesión con Facebook \n\n              <ion-icon name="logo-facebook"></ion-icon>\n\n            </button>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-12>\n\n            <button round ion-button icon-only block class="btn-twitter" (click)="login();">Iniciar sesión con Twitter \n\n              <ion-icon name="logo-twitter"></ion-icon>\n\n            </button>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-12>\n\n            <button round ion-button icon-only block class="btn-gplus" (click)="loginGoogle();">\n\n              &nbsp;Iniciar sesión con Google\n\n              <ion-icon name="logo-googleplus"></ion-icon> \n\n            </button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\tomasdo\Desktop\Universidad\Proyecto Final\PetFinder\PetFinder\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_plus__["a" /* GooglePlus */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_8__providers_servicio_servicio__["a" /* ServicioProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelloIonicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_servicio_servicio__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__perfil_mascota_perfil_mascota__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_models_UserData__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_models_Usuario__ = __webpack_require__(290);
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
        this.prueba = new __WEBPACK_IMPORTED_MODULE_7__app_models_UserData__["a" /* UserData */];
        this.usuarioAgregado = new __WEBPACK_IMPORTED_MODULE_8__app_models_Usuario__["a" /* Usuario */];
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
    HelloIonicPage.prototype.verPerfilMascota = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__perfil_mascota_perfil_mascota__["a" /* PerfilMascotaPage */]);
    };
    HelloIonicPage.prototype.pruebaPost = function () {
        this.service.pruebaPost();
    };
    HelloIonicPage.prototype.agregarUsuario = function () {
        var _this = this;
        this.prueba.email = 'pruebanuevomail@gmail.com';
        this.prueba.first_name = 'Usuario';
        this.prueba.id = 'nosequeid';
        this.prueba.last_name = 'Prueba';
        this.prueba.name = 'ALOHA';
        this.prueba.idRedSocial = 1;
        this.prueba.avatar = 'algo';
        this.service.agregarUsuario(this.prueba)
            .subscribe(function (result) {
            _this.usuarioAgregado = result;
            console.log(result);
        }, function (error) {
            console.log(error);
        });
        ;
    };
    HelloIonicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hello-ionic',template:/*ion-inline-start:"C:\Users\tomasdo\Desktop\Universidad\Proyecto Final\PetFinder\PetFinder\src\pages\hello-ionic\hello-ionic.html"*/'<ion-header>\n\n  <ion-navbar color="barra">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>CanFind</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button tappable> <!-- (click)="presentNotifications($event)" -->\n\n        <ion-icon name="notifications"></ion-icon>\n\n      </button>\n\n      <button ion-button tappable> <!-- (click)="goToAccount()" -->\n\n        <ion-icon name="cog"></ion-icon>\n\n      </button>\n\n      <img class="imagenLogo" src="{{imagepath || \'assets/imgs/logo.png\'}}" />\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <h3>¡Bienvenidos a CanFind!</h3>\n\n\n\n  <p>\n\n    This starter project is our way of helping you get a functional app running in record time.\n\n  </p>\n\n  <p>\n\n    Follow along on the tutorial section of the Ionic docs!\n\n  </p>\n\n  <p>\n\n    <button ion-button color="primary" menuToggle>Toggle Menu</button>\n\n  </p>\n\n  <p>\n\n    <button ion-button color="primary" (click)="pegarleAWatson()">Pegarle a Watson</button>\n\n  </p>\n\n  <p>\n\n    <button ion-button color="primary" (click)="verPerfilMascota()">Ver perfil mascota</button>\n\n  </p>\n\n  <p>\n\n    <button ion-button color="primary" (click)="pruebaPost()">Hacer una Prueba</button>\n\n  </p>\n\n  <p>\n\n    <button ion-button color="primary" (click)="agregarUsuario()">Agregar Usuario</button>\n\n    <label>Se agrego al usuario "{{ usuarioAgregado.nombre }}"</label>\n\n  </p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\tomasdo\Desktop\Universidad\Proyecto Final\PetFinder\PetFinder\src\pages\hello-ionic\hello-ionic.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_5__providers_servicio_servicio__["a" /* ServicioProvider */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]])
    ], HelloIonicPage);
    return HelloIonicPage;
}());

//# sourceMappingURL=hello-ionic.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FotosMascotaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the FotosMascotaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FotosMascotaPage = /** @class */ (function () {
    function FotosMascotaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fotos = [];
        this.mascota = navParams.get("nombre"),
            this.fotos = [
                'assets\\img\\fotos-' + this.mascota + '\\' + this.mascota + '-1.jpeg',
                'assets\\img\\fotos-' + this.mascota + '\\' + this.mascota + '-2.jpeg'
            ];
    }
    FotosMascotaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fotos-mascota',template:/*ion-inline-start:"C:\Users\tomasdo\Desktop\Universidad\Proyecto Final\PetFinder\PetFinder\src\pages\fotos-mascota\fotos-mascota.html"*/'<!--\n\n  Generated template for the FotosMascotaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n\n\n<ion-header>\n\n  <ion-navbar color="barra">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Fotos de {{ mascota }}</ion-title>\n\n    <ion-buttons end>\n\n        <img class="imagenLogo" src="{{imagepath || \'assets/imgs/logo.png\'}}" />\n\n      </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <ion-card *ngFor="let item of fotos">\n\n          <ion-card-content>\n\n            <img src="{{ item }}" />\n\n          </ion-card-content>\n\n      </ion-card>\n\n\n\n    <ion-icon name="add-circle"></ion-icon>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\tomasdo\Desktop\Universidad\Proyecto Final\PetFinder\PetFinder\src\pages\fotos-mascota\fotos-mascota.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], FotosMascotaPage);
    return FotosMascotaPage;
}());

//# sourceMappingURL=fotos-mascota.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
            selector: 'page-edit-profile',template:/*ion-inline-start:"C:\Users\tomasdo\Desktop\Universidad\Proyecto Final\PetFinder\PetFinder\src\pages\edit-profile\edit-profile.html"*/'<!--\n\n  Generated template for the EditProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="barra">\n\n    <ion-title>edit-profile</ion-title>\n\n    <ion-buttons end>\n\n      <img class="imagenLogo" src="{{imagepath || \'assets/imgs/logo.png\'}}" />\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <input type="text" [(ngModel)]="userName" />\n\n  <button ion-button (click)="submitForm()">Guardar</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\tomasdo\Desktop\Universidad\Proyecto Final\PetFinder\PetFinder\src\pages\edit-profile\edit-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], EditProfilePage);
    return EditProfilePage;
}());

//# sourceMappingURL=edit-profile.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MisMascotasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__perfil_mascota_perfil_mascota__ = __webpack_require__(105);
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
 * Generated class for the MisMascotasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MisMascotasPage = /** @class */ (function () {
    function MisMascotasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.mascota = [];
        this.mascota.push({ Nombre: "titan", FotoPerfil: "assets\\img\\fotos-titan\\titan-1.jpeg" }, { Nombre: "francisco", FotoPerfil: "assets\\img\\fotos-francisco\\francisco-1.jpeg" });
    }
    MisMascotasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MisMascotasPage');
    };
    MisMascotasPage.prototype.irAPerfil = function (Nombre) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__perfil_mascota_perfil_mascota__["a" /* PerfilMascotaPage */], {
            nombre: Nombre
        });
    };
    MisMascotasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mis-mascotas',template:/*ion-inline-start:"C:\Users\tomasdo\Desktop\Universidad\Proyecto Final\PetFinder\PetFinder\src\pages\mis-mascotas\mis-mascotas.html"*/'<!--\n\n  Generated template for the MisMascotasPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-header>\n\n    <ion-navbar color="barra">\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>Mis mascotas</ion-title>\n\n      <ion-buttons end>\n\n          <img class="imagenLogo" src="{{imagepath || \'assets/imgs/logo.png\'}}" />\n\n      </ion-buttons>\n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-card *ngFor="let item of mascota">\n\n      <ion-card-content>\n\n        <ion-card-title>\n\n        <h1>{{ item.Nombre }}</h1> \n\n        </ion-card-title>\n\n          <div class="imagenFondo">\n\n            <img class="imagenFrame" img-fluid src="{{ item.FotoPerfil }}" (click)=\'irAPerfil(item.Nombre)\' />\n\n          </div>\n\n        </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-icon name="add-circle" color="secondary" class="buttonPlus"></ion-icon>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\tomasdo\Desktop\Universidad\Proyecto Final\PetFinder\PetFinder\src\pages\mis-mascotas\mis-mascotas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], MisMascotasPage);
    return MisMascotasPage;
}());

//# sourceMappingURL=mis-mascotas.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
            selector: 'page-item-details',template:/*ion-inline-start:"C:\Users\tomasdo\Desktop\Universidad\Proyecto Final\PetFinder\PetFinder\src\pages\item-details\item-details.html"*/'<ion-header>\n\n  <ion-navbar color="barra">\n\n    <button menuToggle *ngIf="!selectedItem">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Item Details</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <h3 text-center *ngIf="selectedItem">\n\n    {{selectedItem.title}}\n\n    <ion-icon [name]="selectedItem.icon"></ion-icon>\n\n  </h3>\n\n  <h4 text-center *ngIf="selectedItem">\n\n    You navigated here from <b>{{selectedItem.title}}</b>\n\n  </h4>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\tomasdo\Desktop\Universidad\Proyecto Final\PetFinder\PetFinder\src\pages\item-details\item-details.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ItemDetailsPage);
    return ItemDetailsPage;
}());

//# sourceMappingURL=item-details.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(234);


<<<<<<< HEAD
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ServicioProvider = /** @class */ (function () {
    function ServicioProvider(http, loadingCtrl, alertCtrl, base64, app, storage) {
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.base64 = base64;
        this.app = app;
        this.storage = storage;
        this.URL_SERVER = "http://canfind.herokuapp.com";
        this.pbaPost = new __WEBPACK_IMPORTED_MODULE_2__app_models_UserData__["a" /* UserData */]();
        this.resultadoWatson = new __WEBPACK_IMPORTED_MODULE_4__app_models_ResultadoWatson__["a" /* ResultadoWatson */]();
        this.usuarioLogueado = new __WEBPACK_IMPORTED_MODULE_6__app_models_Usuario__["a" /* Usuario */]();
    }
    ServicioProvider.prototype.pegarleAWatson = function () {
        this.http.get(this.URL_SERVER + '/api/values')
            .subscribe(function (result) {
            console.log(result);
            console.log("Le pegamos a watson");
        }, function (error) {
            console.error(error);
        });
    };
    ServicioProvider.prototype.enviarFotoEncontradoAWatson = function (imageURI, idUsuario, localizacion) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var loader;
            return __generator(this, function (_a) {
                loader = this.loadingCtrl.create({
                    content: "Cargando...",
                    dismissOnPageChange: true
                });
                loader.present();
                //para el browser
                // this.http.post(this.URL_SERVER + '/api/ImagenMascota/FotoEncontrado', {
                //   idUsuario: idUsuario,
                //   imageURI: imageURI,
                //   localizacion: localizacion
                // })
                // .subscribe((response) => {
                //   loader.dismiss();
                //   this.resultadoWatson = response as ResultadoWatson;
                //   if(this.resultadoWatson.images[0].classifiers[0].classes.length > 0) {
                //     this.showAlertExito();
                //   }
                //   else {
                //     this.showAlertError();
                //   }
                // }, (error) => {
                //   loader.dismiss();
                //   console.log(error);
                // });
                //para el celular
                this.base64.encodeFile(imageURI).then(function (base64File) {
                    base64File = base64File.split(',')[1];
                    _this.http.post(_this.URL_SERVER + '/api/ImagenMascota/FotoEncontrado', {
                        idUsuario: idUsuario,
                        imageURI: base64File,
                        localizacion: localizacion
                    })
                        .subscribe(function (response) {
                        loader.dismiss();
                        _this.resultadoWatson = response;
                        if (_this.resultadoWatson.images[0].classifiers[0].classes.length > 0) {
                            _this.showAlertExito();
                        }
                        else {
                            _this.showAlertError();
                        }
                    }, function (error) {
                        loader.dismiss();
                        console.log(error);
                    });
                }, function (err) {
                    console.log(err);
                });
                return [2 /*return*/];
            });
        });
    };
    ServicioProvider.prototype.prueba = function () {
        this.http.get(this.URL_SERVER + '/api/Usuario/id1')
            .subscribe(function (result) {
            console.log("Todo Bien");
            console.log(result);
        }, function (error) {
            console.log("Todo Mal");
        });
    };
    ServicioProvider.prototype.enviarRdUser = function (rdUser) {
        var _this = this;
        this.http.post(this.URL_SERVER + '/api/Usuario/ValidarUsuario', rdUser)
            .subscribe(function (response) {
            console.log("usuario logueado");
            console.log(response);
            _this.usuarioLogueado = response;
            _this.storage.set('UserName', _this.usuarioLogueado.nombre);
            _this.storage.set('UserImg', _this.usuarioLogueado.avatar);
            _this.storage.set('idUsuarioLogueado', _this.usuarioLogueado.idUsuario);
        }, function (error) {
            console.log("no se pudo loguear");
        });
    };
    ServicioProvider.prototype.pruebaPost = function () {
        this.http.post(this.URL_SERVER + '/api/Values/Prueba', { "Value": "hola" })
            .subscribe(function (result) {
            console.log(result);
        }, function (error) {
            console.log(error);
        });
    };
    ServicioProvider.prototype.agregarUsuario = function (data) {
        return this.http.post(this.URL_SERVER + '/api/Usuario/ValidarUsuario', data);
    };
    ServicioProvider.prototype.verConsulta = function (claseRaza, claseNombre, score) {
        claseRaza = claseRaza == null || claseRaza == "" ? "n|o" : claseRaza;
        claseNombre = claseNombre == null || claseNombre == "" ? "n|o" : claseNombre;
        return this.http.get(this.URL_SERVER + '/api/ConsultasWatson/ConsultarEncontrados/' + claseNombre + '/' + claseRaza + '/' + score);
    };
    ServicioProvider.prototype.contactarUsuario = function (idUsuario) {
        return this.http.get(this.URL_SERVER + '/api/Usuario/GetUsuarioContacto/' + idUsuario);
    };
    ServicioProvider.prototype.showAlertExito = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '¡Ya recibimos tu foto!',
            subTitle: 'Gracias por colaborar con CanFind.',
            buttons: [{
                    text: 'OK',
                    handler: function () {
                        var nav = _this.app.getActiveNav();
                        nav.pop();
                    }
                }]
        });
        alert.present();
    };
    ServicioProvider.prototype.showAlertError = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '¡Ya recibimos tu foto!',
            subTitle: 'Gracias por colaborar con CanFind. Por el momento no encontramos un resultado, podés probar con otra foto.',
            buttons: [{
                    text: 'OK',
                    handler: function () {
                        var nav = _this.app.getActiveNav();
                        nav.pop();
                    }
                }]
        });
        alert.present();
    };
    ServicioProvider.prototype.agregarFotoMascota = function (imageURI, idMascota, idUsuario) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var loader = _this.loadingCtrl.create({
                content: "Agregando foto...",
                dismissOnPageChange: true
            });
            loader.present();
            //esto es para el browser
            // this.http.post(this.URL_SERVER + '/api/ImagenMascota/AgregarFoto', { 
            //   imageURI: imageURI,
            //   idMascota: idMascota,
            //   localizacion: "",
            //   idUsuario: idUsuario
            //  })
            //   .subscribe((response) => {
            //     loader.dismiss();
            //      let nav = this.app.getActiveNav();
            //      nav.pop();
            //   }, (error) => {
            //      loader.dismiss();
            //      this.showAlertErrorGenerico();
            //      console.log(error);
            //   });
            //esto es para el celu
            _this.base64.encodeFile(imageURI).then(function (base64File) {
                base64File = base64File.split(',')[1];
                _this.http.post(_this.URL_SERVER + '/api/ImagenMascota/AgregarFoto', {
                    imageURI: base64File,
                    idMascota: idMascota,
                    localizacion: "",
                    idUsuario: idUsuario
                })
                    .subscribe(function (response) {
                    loader.dismiss();
                    _this.showAlertFotoAgregada();
                }, function (error) {
                    loader.dismiss();
                    _this.showAlertErrorGenerico();
                    console.log(error);
                });
            }, function (err) {
                console.log(err);
            });
        });
    };
    ServicioProvider.prototype.showAlertErrorGenerico = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Ocurrió un error :(',
            subTitle: '',
            buttons: [{
                    text: 'OK',
                    handler: function () {
                        var nav = _this.app.getActiveNav();
                        nav.pop();
                    }
                }]
        });
        alert.present();
    };
    ServicioProvider.prototype.showAlertFotoAgregada = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '¡Foto agregada con éxito!',
            subTitle: '',
            buttons: [{
                    text: 'OK',
                    handler: function () {
                        var nav = _this.app.getActiveNav();
                        nav.pop();
                    }
                }]
        });
        alert.present();
    };
    ServicioProvider.prototype.traerMascotas = function (id) {
        return this.http.get(this.URL_SERVER + '/api/Usuario/TraerMisMascotas/' + id);
    };
    ServicioProvider.prototype.traerMascota = function (id) {
        return this.http.get(this.URL_SERVER + '/api/Mascota/TraerMascota/' + id);
    };
    ServicioProvider.prototype.reportarPerdido = function (idMascota) {
        return this.http.post(this.URL_SERVER + '/api/Mascota/ReportarPerdida', { "IdMascota": idMascota });
    };
    ServicioProvider.prototype.reportarEncontrada = function (idMascota) {
        return this.http.post(this.URL_SERVER + '/api/Mascota/ReportarEncontrada', { "IdMascota": idMascota });
    };
    ServicioProvider.prototype.traerImagenMascota = function (idMascota) {
        return this.http.get(this.URL_SERVER + '/api/ImagenMascota/TraerFotos/' + idMascota);
    };
    ServicioProvider.prototype.agregaMascota = function (mascota) {
        return this.http.post(this.URL_SERVER + '/api/Mascota/AgregarMascotaNueva', { "IdUsuario": mascota.idUsuario,
            "Nombre": mascota.nombre,
            "IdRaza": mascota.raza
        });
    };
    ServicioProvider.prototype.traerRazas = function () {
        return this.http.get(this.URL_SERVER + '/api/Mascota/TraerRazas/');
    };
    ServicioProvider.prototype.getLocation = function (pos) {
        return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + pos + '&key=AIzaSyDR4UkFnDchql4WRvuv48FFS9X7A0mXsjw');
    };
    ServicioProvider.prototype.crearClaseWatson = function (idMascota, nombreMascota, imagenes) {
        return this.http.post(this.URL_SERVER + '/api/ImagenMascota/CrearClaseWatson', {
            "IdMascota": idMascota,
            "NombreMascota": nombreMascota,
            "ImagesUris": imagenes
        });
    };
    ServicioProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_base64__["a" /* Base64 */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */]])
    ], ServicioProvider);
    return ServicioProvider;
}());

//# sourceMappingURL=servicio.js.map
=======
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map
>>>>>>> 856bd23f10432767e2f9c77bbf3ffb1d228eb395

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_hello_ionic_hello_ionic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_item_details_item_details__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_encontre_encontre__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_edit_profile_edit_profile__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_confirmar_foto_confirmar_foto__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_mis_mascotas_mis_mascotas__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_perfil_mascota_perfil_mascota__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_fotos_mascota_fotos_mascota__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_camera__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_base64__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_common_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_servicio_servicio__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_facebook__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_storage__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_google_plus__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_file_transfer__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_file__ = __webpack_require__(294);
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
                __WEBPACK_IMPORTED_MODULE_10__pages_confirmar_foto_confirmar_foto__["a" /* ConfirmarFotoPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_mis_mascotas_mis_mascotas__["a" /* MisMascotasPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_perfil_mascota_perfil_mascota__["a" /* PerfilMascotaPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_fotos_mascota_fotos_mascota__["a" /* FotosMascotaPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_17__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_item_details_item_details__["a" /* ItemDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_encontre_encontre__["a" /* EncontrePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_edit_profile_edit_profile__["a" /* EditProfilePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_confirmar_foto_confirmar_foto__["a" /* ConfirmarFotoPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_mis_mascotas_mis_mascotas__["a" /* MisMascotasPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_perfil_mascota_perfil_mascota__["a" /* PerfilMascotaPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_fotos_mascota_fotos_mascota__["a" /* FotosMascotaPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_base64__["a" /* Base64 */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_facebook__["a" /* Facebook */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_18__providers_servicio_servicio__["a" /* ServicioProvider */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_google_plus__["a" /* GooglePlus */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_file_transfer__["b" /* FileTransferObject */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_file__["a" /* File */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_encontre_encontre__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_edit_profile_edit_profile__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_mis_mascotas_mis_mascotas__ = __webpack_require__(211);
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
    function MyApp(platform, menu, splashScreen, storage) {
        var _this = this;
        this.platform = platform;
        this.menu = menu;
        this.splashScreen = splashScreen;
        this.storage = storage;
        // make HelloIonicPage the root (or first) page
        this.rootPage = __WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        // set our app's pages
        this.pages = [
            { title: 'Mis mascotas', component: __WEBPACK_IMPORTED_MODULE_7__pages_mis_mascotas_mis_mascotas__["a" /* MisMascotasPage */] },
            { title: 'Encontre un perro', component: __WEBPACK_IMPORTED_MODULE_2__pages_encontre_encontre__["a" /* EncontrePage */] }
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
        this.storage.set('UserImg', '');
        this.storage.set('UserName', '');
        console.log('deslogueado(?)');
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */]);
    };
    MyApp.prototype.editProfile = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__pages_edit_profile_edit_profile__["a" /* EditProfilePage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\tomasdo\Desktop\Universidad\Proyecto Final\PetFinder\PetFinder\src\app\app.html"*/'<ion-menu [content]="content">\n\n\n\n  <ion-header>\n\n      <ion-toolbar class="user-profile">\n\n\n\n          <ion-grid>\n\n            <ion-row>\n\n              <ion-col col-4>\n\n                  <div class="user-avatar">\n\n                    <img [src]="UserImg">\n\n                  </div>\n\n              </ion-col>\n\n              <ion-col padding-top col-8>\n\n                <h2 ion-text class="no-margin bold text-white">\n\n                  {{ UserName }}\n\n                </h2>\n\n                <span ion-text color="light">Customer</span>\n\n              </ion-col>\n\n            </ion-row>\n\n    \n\n            <ion-row no-padding class="other-data">\n\n              <ion-col no-padding class="column">\n\n                <button ion-button icon-left small full color="light" menuClose (click)="editProfile()">\n\n                  <ion-icon name="contact"></ion-icon>\n\n                  Edit Profile\n\n                </button>\n\n              </ion-col>\n\n              <ion-col no-padding class="column">\n\n                <button ion-button icon-left small full color="light" menuClose (click)="logout()">\n\n                  <ion-icon name="log-out"></ion-icon>\n\n                  Log Out\n\n                </button>\n\n              </ion-col>\n\n            </ion-row>\n\n    \n\n          </ion-grid>\n\n    \n\n        </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list class="user-list">\n\n      <button ion-item menuClose class="text-1x" *ngFor="let p of pages" (click)="openPage(p)">\n\n          <span ion-text color="primary">{{p.title}}</span>\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\tomasdo\Desktop\Universidad\Proyecto Final\PetFinder\PetFinder\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultadoWatson; });
var ResultadoWatson = /** @class */ (function () {
    function ResultadoWatson() {
    }
    return ResultadoWatson;
}());

//# sourceMappingURL=ResultadoWatson.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Usuario; });
var Usuario = /** @class */ (function () {
    function Usuario() {
    }
    return Usuario;
}());

//# sourceMappingURL=Usuario.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__item_details_item_details__ = __webpack_require__(212);
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
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\tomasdo\Desktop\Universidad\Proyecto Final\PetFinder\PetFinder\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar color="barra">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Perros perdidos</ion-title>\n\n    <ion-buttons end>\n\n        <img class="imagenLogo" src="{{imagepath || \'assets/imgs/logo.png\'}}" />\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="trips detail-bg">\n\n\n\n  <div class="trip card" tappable margin-bottom> <!-- (click)="viewDetail(trip.id)" -->\n\n    <div class="background border-bottom" [ngStyle]="{\'background-image\': \'url(assets/imgs/trip/trip_1.jpg)\'}">\n\n      <div class="background-filter rlt">\n\n        <div class="align-bottom" padding-left padding-right>\n\n          <h6 class="pull-left text-white" ion-text>Copacabana</h6>\n\n          <h6 class="pull-right text-white" ion-text>$90.00</h6>\n\n          <div class="clear"></div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n    <div class="padding-sm primary-bg">\n\n      <ion-icon name="time" class="text-white"></ion-icon>\n\n      <span ion-text class="text-white">12h</span>\n\n      <span class="pull-right" ion-text color="light"><strong>per adult</strong> (childs has <span ion-text  class="text-green bold">50% OFF</span>)</span>\n\n    </div>\n\n  </div>\n\n    \n\n  <div class="trip card" tappable margin-bottom> <!-- (click)="viewDetail(trip.id)" -->\n\n    <div class="background border-bottom" [ngStyle]="{\'background-image\': \'url(assets/imgs/trip/trip_1.jpg)\'}">\n\n      <div class="background-filter rlt">\n\n        <div class="align-bottom" padding-left padding-right>\n\n          <h6 class="pull-left text-white" ion-text>Copacabana</h6>\n\n          <h6 class="pull-right text-white" ion-text>$90.00</h6>\n\n          <div class="clear"></div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n    <div class="padding-sm primary-bg">\n\n      <ion-icon name="time" class="text-white"></ion-icon>\n\n      <span ion-text class="text-white">12h</span>\n\n      <span class="pull-right" ion-text color="light"><strong>per adult</strong> (childs has <span ion-text  class="text-green bold">50% OFF</span>)</span>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\tomasdo\Desktop\Universidad\Proyecto Final\PetFinder\PetFinder\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicioProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_models_UserData__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_models_ResultadoWatson__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_base64__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







/*
  Generated class for the ServicioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ServicioProvider = /** @class */ (function () {
    function ServicioProvider(http, loadingCtrl, alertCtrl, base64, app) {
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.base64 = base64;
        this.app = app;
        this.URL_SERVER = "http://canfind.herokuapp.com";
        this.pbaPost = new __WEBPACK_IMPORTED_MODULE_2__app_models_UserData__["a" /* UserData */]();
        this.resultadoWatson = new __WEBPACK_IMPORTED_MODULE_4__app_models_ResultadoWatson__["a" /* ResultadoWatson */]();
    }
    ServicioProvider.prototype.pegarleAWatson = function () {
        this.http.get(this.URL_SERVER + '/api/values')
            .subscribe(function (result) {
            console.log(result);
            console.log("Le pegamos a watson");
        }, function (error) {
            console.error(error);
        });
    };
    ServicioProvider.prototype.enviarFotoEncontradoAWatson = function (imageURI) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var loader;
            return __generator(this, function (_a) {
                loader = this.loadingCtrl.create({
                    content: "Cargando...",
                    dismissOnPageChange: true
                });
                loader.present();
                this.base64.encodeFile(imageURI).then(function (base64File) {
                    base64File = base64File.split(',')[1];
                    _this.http.post(_this.URL_SERVER + '/api/ImagenMascota/FotoEncontrado', { imageURI: base64File })
                        .subscribe(function (response) {
                        loader.dismiss();
                        _this.resultadoWatson = response;
                        if (_this.resultadoWatson.images[0].classifiers[0].classes.length > 0) {
                            _this.showAlertExito(_this.resultadoWatson.images[0].classifiers[0].classes[0].class, _this.resultadoWatson.images[0].classifiers[0].classes[0].score);
                        }
                        else {
                            _this.showAlertError();
                        }
                    }, function (error) {
                        loader.dismiss();
                        console.log(error);
                    });
                }, function (err) {
                    console.log(err);
                });
                return [2 /*return*/];
            });
        });
    };
    ServicioProvider.prototype.prueba = function () {
        this.http.get(this.URL_SERVER + '/api/Usuario/id1')
            .subscribe(function (result) {
            console.log("Todo Bien");
            console.log(result);
        }, function (error) {
            console.log("Todo Mal");
        });
    };
    ServicioProvider.prototype.enviarRdUser = function (rdUser) {
        this.http.post(this.URL_SERVER + '/api/Usuario/ValidarUsuario', rdUser)
            .subscribe(function (result) {
            console.log("usuario logueado");
            console.log(result);
        }, function (error) {
            console.log("no se pudo loguear");
        });
    };
<<<<<<< HEAD
    MisMascotasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mis-mascotas',template:/*ion-inline-start:"C:\Users\tomasdo\Desktop\Universidad\Proyecto Final\PetFinder\PetFinder\src\pages\mis-mascotas\mis-mascotas.html"*/'<!--\n\n  Generated template for the MisMascotasPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-header>\n\n    <ion-navbar color="barra">\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>Mis mascotas</ion-title>\n\n      <ion-buttons end>\n\n          <img class="imagenLogo" src="{{imagepath || \'assets/imgs/logo.png\'}}" />\n\n      </ion-buttons>\n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n\n\n<ion-content padding class="backgroundGeneral">\n\n  <ion-card *ngFor="let item of misMascotas">\n\n      <ion-card-content (click)=\'irAPerfil(item.idMascota)\'>\n\n        <ion-card-title>\n\n        <h1>{{ item.nombre }} - <small>{{ item.descripcionRaza }}</small></h1> \n\n        <ion-badge *ngIf="item.entrenado < 10" color="danger">perfil incompleto</ion-badge>\n\n        </ion-card-title>\n\n          <div class="imagenFondo">\n\n            <img class="imagenFrame" img-fluid *ngIf="item.avatar != null" src="http://criaderononthue.com/img/canfind/controllers/resources/Img/Mascotas/{{ item.avatar }}.jpg" />\n\n            <img class="imagenFrame" img-fluid *ngIf="item.avatar == null" src="assets/img/avatarPerro.png" />\n\n          </div>\n\n        </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <button round ion-button block color="secondary" (click)="agregarMascota();"> Agregar Mascota\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  \n\n\n\n  \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\tomasdo\Desktop\Universidad\Proyecto Final\PetFinder\PetFinder\src\pages\mis-mascotas\mis-mascotas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_servicio_servicio__["a" /* ServicioProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], MisMascotasPage);
    return MisMascotasPage;
}());

//# sourceMappingURL=mis-mascotas.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilMascotaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fotos_mascota_fotos_mascota__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ver_consulta_ver_consulta__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_servicio_servicio__ = __webpack_require__(22);
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
 * Generated class for the PerfilMascotaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PerfilMascotaPage = /** @class */ (function () {
    function PerfilMascotaPage(navCtrl, navParams, service, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.alertCtrl = alertCtrl;
    }
    PerfilMascotaPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.idMascota = this.navParams.get("idMascota");
        this.service.traerMascota(this.idMascota)
=======
    ServicioProvider.prototype.pruebaPost = function () {
        this.http.post(this.URL_SERVER + '/api/Values/Prueba', { "Value": "hola" })
>>>>>>> 856bd23f10432767e2f9c77bbf3ffb1d228eb395
            .subscribe(function (result) {
            console.log(result);
        }, function (error) {
            console.log(error);
        });
    };
    ServicioProvider.prototype.agregarUsuario = function (data) {
        return this.http.post(this.URL_SERVER + '/api/Usuario/ValidarUsuario', data);
    };
    ServicioProvider.prototype.showAlertExito = function (clase, score) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Gracias por colaborar!',
            subTitle: 'Resultado:<ul><li>Clase: ' + clase + '</li><li>Probabilidad: ' + score * 100 + '%</li></ul>',
            buttons: [{
                    text: 'OK',
                    handler: function () {
                        var nav = _this.app.getActiveNav();
                        nav.pop();
                    }
                }]
        });
        alert.present();
    };
    ServicioProvider.prototype.showAlertError = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Gracias por colaborar!',
            subTitle: 'Por el momento no encontramos un resultado aproximado. Podes intentar con otra foto.',
            buttons: [{
                    text: 'OK',
                    handler: function () {
                        var nav = _this.app.getActiveNav();
                        nav.pop();
                    }
                }]
        });
        alert.present();
    };
    ServicioProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_base64__["a" /* Base64 */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* App */]])
    ], ServicioProvider);
    return ServicioProvider;
}());

//# sourceMappingURL=servicio.js.map

/***/ })

},[213]);
//# sourceMappingURL=main.js.map