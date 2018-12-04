webpackJsonp([1],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgregaMascotaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_models_MascotaNueva__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_servicio_servicio__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mis_mascotas_mis_mascotas__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(32);
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
 * Generated class for the AgregaMascotaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AgregaMascotaPage = /** @class */ (function () {
    function AgregaMascotaPage(navCtrl, navParams, service, storage, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.mascota = new __WEBPACK_IMPORTED_MODULE_2__app_models_MascotaNueva__["a" /* MascotaNueva */];
        this.service.traerRazas()
            .subscribe(function (result) {
            _this.razas = result;
            console.log(result);
        }, function (error) {
            console.log(error);
        });
    }
    AgregaMascotaPage.prototype.logForm = function () {
        var _this = this;
        this.storage.get("idUsuarioLogueado").then(function (data) {
            _this.idUsuarioLogueado = data;
            _this.mascota.idUsuario = _this.idUsuarioLogueado;
            _this.service.agregaMascota(_this.mascota)
                .subscribe(function (result) {
                console.log(result);
                var alert = _this.alertCtrl.create({
                    title: 'Gracias por registrar a ' + _this.mascota.nombre + '!',
                    subTitle: 'Agregá fotos en el perfil de ' + _this.mascota.nombre + ' para poder reconocerla',
                    buttons: [{
                            text: 'Ver mis mascotas',
                            handler: function () {
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__mis_mascotas_mis_mascotas__["a" /* MisMascotasPage */]);
                            }
                        }]
                });
                alert.present();
            }, function (error) {
                var alert = _this.alertCtrl.create({
                    title: 'Ups!',
                    subTitle: 'Hubo un problema, intentalo más tarde.',
                    buttons: [{
                            text: 'Ok',
                            handler: function () {
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__mis_mascotas_mis_mascotas__["a" /* MisMascotasPage */]);
                            }
                        }]
                });
                alert.present();
                console.log(error);
                alert.present();
            });
        });
    };
    AgregaMascotaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AgregaMascotaPage');
    };
    AgregaMascotaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-agrega-mascota',template:/*ion-inline-start:"C:\Users\tomasdo\Desktop\Universidad\Proyecto Final\PetFinder\PetFinder\src\pages\agrega-mascota\agrega-mascota.html"*/'<!--\n\n  Generated template for the AgregaMascotaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="barra">\n\n    <ion-title>Agregá una mascota nueva</ion-title>\n\n    <ion-buttons end>\n\n        <img class="imagenLogo" src="{{imagepath || \'assets/imgs/logo.png\'}}" />\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="backgroundGeneral">\n\n  <form (ngSubmit)="logForm()">\n\n    <ion-item>\n\n      <ion-label color="primary">Nombre</ion-label>\n\n      <ion-input [(ngModel)]="mascota.nombre" name="nombre" placeholder="Nombre"></ion-input>\n\n    </ion-item>\n\n    <br/>\n\n    <ion-item>\n\n      <ion-label>Raza</ion-label>\n\n      <ion-select [(ngModel)]="mascota.raza" name="raza">\n\n        <ion-option *ngFor="let item of razas" value="{{ item.idRaza }}">{{ item.descripcion }}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <br/>\n\n    <button round ion-button block type="submit" block>Agregar</button>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\tomasdo\Desktop\Universidad\Proyecto Final\PetFinder\PetFinder\src\pages\agrega-mascota\agrega-mascota.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_servicio_servicio__["a" /* ServicioProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AgregaMascotaPage);
    return AgregaMascotaPage;
}());

//# sourceMappingURL=agrega-mascota.js.map

/***/ }),

/***/ 119:
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
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/agrega-mascota/agrega-mascota.module": [
		299,
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
            selector: 'page-fotos-mascota',template:/*ion-inline-start:"C:\Users\tomasdo\Desktop\Universidad\Proyecto Final\PetFinder\PetFinder\src\pages\fotos-mascota\fotos-mascota.html"*/'<!--\n\n  Generated template for the FotosMascotaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-header>\n\n  <ion-navbar color="barra">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Fotos de {{ mascota }}</ion-title>\n\n    <ion-buttons end>\n\n        <img class="imagenLogo" src="{{imagepath || \'assets/imgs/logo.png\'}}" />\n\n      </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="backgroundGeneral">\n\n    <ion-card *ngFor="let item of fotos">\n\n          <ion-card-content>\n\n            <img src="http://criaderononthue.com/img/canfind/controllers/resources/Img/Mascotas/{{ item }}.jpg" />\n\n          </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-12>\n\n            <button *ngIf="fotos.length < 10" round ion-button block color="secondary" (click)="agregarFotoMascota();"> Agregar Foto\n\n            </button>\n\n            <button *ngIf="fotos.length >= 10 && !claseEntrenada" round ion-button block color="secondary" (click)="entrenarIA();"> Entrenar IA\n\n            </button>\n\n          </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n\n\n      <!-- <ion-grid *ngIf="fotos.length < 10">\n\n        <ion-row>\n\n          <ion-col col-12>\n\n            <p>Total de fotos para completar el perfil:</p>\n\n            <h1><span>{{10 - fotos.length}}</span></h1>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid> -->\n\n\n\n    <ion-card *ngIf="fotos.length < 10">\n\n        <ion-card-header>\n\n          <h1 color="canfind">{{10 - fotos.length}}</h1>\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n            <p>Fotos restantes para completar el perfil.</p>\n\n        </ion-card-content>\n\n\n\n    </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\tomasdo\Desktop\Universidad\Proyecto Final\PetFinder\PetFinder\src\pages\fotos-mascota\fotos-mascota.html"*/,
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

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EncontrePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__confirmar_foto_confirmar_foto__ = __webpack_require__(208);
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
        //Slide
        this.slides = [
            {
                title: "Frente",
                image: 'assets/img/frente.jpg'
            },
            {
                title: "Costado",
                image: 'assets/img/costado.jpg'
            },
            {
                title: "Arriba",
                image: 'assets/img/arriba.jpg'
            },
            {
                title: "Atras",
                image: 'assets/img/atras.jpg'
            },
        ];
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
            selector: 'page-encontre',template:/*ion-inline-start:"C:\Users\tomasdo\Desktop\Universidad\Proyecto Final\PetFinder\PetFinder\src\pages\encontre\encontre.html"*/'<ion-header>\n\n  <ion-navbar color="barra">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>¡Encontre un perro!</ion-title>\n\n    <ion-buttons end>\n\n      <img class="imagenLogo" src="{{imagepath || \'assets/imgs/logo.png\'}}" />\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="backgroundGeneral">\n\n    <ion-card>\n\n        <ion-card-content>\n\n          <button ion-button color="danger" icon-rigth block (click)="takePicture();">\n\n            Sacar Foto!\n\n            <ion-icon name="camera"></ion-icon>\n\n          </button>\n\n        </ion-card-content>\n\n\n\n        <h2 class="titulo">Tips para sacarle una foto</h2>\n\n        <ion-label>(Deslizá hacia la izquierda)</ion-label>\n\n        <ion-slides>\n\n            <ion-slide *ngFor = "let slide of slides">\n\n              <ion-card>\n\n              <p [innerHTML]="slide.title"></p>\n\n              <img [src]="slide.image" />\n\n              </ion-card>\n\n            </ion-slide>\n\n        </ion-slides> \n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\tomasdo\Desktop\Universidad\Proyecto Final\PetFinder\PetFinder\src\pages\encontre\encontre.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */]])
    ], EncontrePage);
    return EncontrePage;
}());

//# sourceMappingURL=encontre.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmarFotoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_servicio_servicio__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(209);
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
    function ConfirmarFotoPage(navCtrl, navParams, domSanitizer, service, storage, geolocation, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.domSanitizer = domSanitizer;
        this.service = service;
        this.storage = storage;
        this.geolocation = geolocation;
        this.loadingCtrl = loadingCtrl;
        this.direccion = "";
        this.direccionError = "";
        this.base64Image = navParams.get('data');
        this.loading = this.loadingCtrl.create({
            content: 'Localizando...',
            dismissOnPageChange: true
        });
    }
    ConfirmarFotoPage.prototype.ionViewDidLoad = function () {
        this.getPosition();
    };
    ConfirmarFotoPage.prototype.confirmarFoto = function () {
        var _this = this;
        this.storage.get("idUsuarioLogueado").then(function (data) {
            _this.service.enviarFotoEncontradoAWatson(_this.base64Image, data, _this.direccion);
        });
    };
    ConfirmarFotoPage.prototype.getPosition = function () {
        var _this = this;
        this.loading.present();
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.location = resp.coords.latitude + "," + resp.coords.longitude;
            _this.direccionError = "";
            _this.getLocation(_this.location);
        }).catch(function (error) {
            _this.direccionError = "Por favor, activá la ubicación del dispositivo.";
            console.log('Error getting location', error);
            _this.loading.dismiss();
        });
    };
    ConfirmarFotoPage.prototype.cancelarFoto = function () {
        this.navCtrl.pop();
    };
    ConfirmarFotoPage.prototype.getLocation = function (pos) {
        var _this = this;
        this.service.getLocation(pos)
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
            _this.loading.dismiss();
        }, function (error) {
            console.log(error);
            _this.loading.dismiss();
        });
    };
    ConfirmarFotoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-confirmar-foto',template:/*ion-inline-start:"C:\Users\tomasdo\Desktop\Universidad\Proyecto Final\PetFinder\PetFinder\src\pages\confirmar-foto\confirmar-foto.html"*/'<!--\n\n  Generated template for the ConfirmarFotoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="barra">\n\n    <ion-title>Confirmar Foto</ion-title>\n\n    <ion-buttons end>\n\n        <img class="imagenLogo" src="{{imagepath || \'assets/imgs/logo.png\'}}" />\n\n      </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="backgroundGeneral">\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col>\n\n        <img (show)="base64Image !== \'\'" [src]="domSanitizer.bypassSecurityTrustUrl(base64Image)" />\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-card *ngIf="direccion != \'\'">\n\n        <ion-card-content>\n\n          La foto fue tomada en: <br />\n\n          {{ direccion }}\n\n        </ion-card-content>\n\n      </ion-card>\n\n      <ion-card *ngIf="direccionError != \'\'">\n\n        <ion-card-content>\n\n          La foto fue tomada en: <br />\n\n          {{ direccion }}\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col>\n\n        <ion-icon class="pull-right confirm-button" (click)="confirmarFoto()" name="checkmark-circle"></ion-icon>\n\n      </ion-col>\n\n      <ion-col>\n\n        <ion-icon class="cancel-button" (click)="cancelarFoto()" name="close-circle"></ion-icon>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\tomasdo\Desktop\Universidad\Proyecto Final\PetFinder\PetFinder\src\pages\confirmar-foto\confirmar-foto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_3__providers_servicio_servicio__["a" /* ServicioProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], ConfirmarFotoPage);
    return ConfirmarFotoPage;
}());

//# sourceMappingURL=confirmar-foto.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hello_ionic_hello_ionic__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_plus__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_models_UserData__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_servicio_servicio__ = __webpack_require__(22);
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
    function LoginPage(nav, forgotCtrl, menu, toastCtrl, googlePlus, service) {
        this.nav = nav;
        this.forgotCtrl = forgotCtrl;
        this.menu = menu;
        this.toastCtrl = toastCtrl;
        this.googlePlus = googlePlus;
        this.service = service;
        this.rdUser = new __WEBPACK_IMPORTED_MODULE_4__app_models_UserData__["a" /* UserData */]();
        this.menu.swipeEnable(false);
    }
    // login and go to home page
    LoginPage.prototype.login = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__hello_ionic_hello_ionic__["a" /* HelloIonicPage */]);
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
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\tomasdo\Desktop\Universidad\Proyecto Final\PetFinder\PetFinder\src\pages\login\login.html"*/'<ion-content padding class="animated fadeIn login auth-page">\n\n  <div class="login-content">\n\n\n\n    <!-- Logo -->\n\n    <div padding-horizontal text-center class="animated fadeInDown">\n\n      <div class="logo"></div>\n\n    </div>\n\n\n\n    <div>\n\n    <ion-grid>\n\n <!--  <ion-row>\n\n          <ion-col col-12>\n\n            <button round ion-button icon-only block class="btn-facebook" (click)="loginFb();">Iniciar sesión con Facebook \n\n              <ion-icon name="logo-facebook"></ion-icon>\n\n            </button>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-12>\n\n            <button round ion-button icon-only block class="btn-twitter" (click)="login();">Iniciar sesión con Twitter \n\n              <ion-icon name="logo-twitter"></ion-icon>\n\n            </button>\n\n          </ion-col>\n\n        </ion-row>  -->\n\n        <ion-row>\n\n          <ion-col col-12>\n\n            <button round ion-button icon-only block class="btn-gplus" (click)="loginGoogle();">\n\n              &nbsp;Iniciar sesión con Google\n\n              <ion-icon name="logo-googleplus"></ion-icon> \n\n            </button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\tomasdo\Desktop\Universidad\Proyecto Final\PetFinder\PetFinder\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_plus__["a" /* GooglePlus */],
            __WEBPACK_IMPORTED_MODULE_5__providers_servicio_servicio__["a" /* ServicioProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelloIonicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_servicio_servicio__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__perfil_mascota_perfil_mascota__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_models_UserData__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_models_Usuario__ = __webpack_require__(164);
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
        this.imagenesPrueba = [];
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
            selector: 'page-hello-ionic',template:/*ion-inline-start:"C:\Users\tomasdo\Desktop\Universidad\Proyecto Final\PetFinder\PetFinder\src\pages\hello-ionic\hello-ionic.html"*/'<ion-header>\n\n  <ion-navbar color="barra">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>CANFIND</ion-title>\n\n    <ion-buttons end>\n\n      <img class="imagenLogo" src="{{imagepath || \'assets/imgs/logo.png\'}}" />\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="backgroundGeneral">\n\n  <div>\n\n      <ion-grid>\n\n        <ion-card>\n\n            <ion-card-content>\n\n            <br/>  \n\n              <span>\n\n                <h1 class="titulo">¡Bienvenidos a CANFIND!</h1>\n\n              </span>\n\n            <br/>\n\n              <img src="{{imagepath || \'assets/imgs/reencuentro.jpg\'}}" />   \n\n            </ion-card-content>\n\n            <br/>\n\n            <div> <!--contenedor de los tips-->\n\n              <ion-row>\n\n                <ion-col col-12>\n\n                  <div>\n\n                    <div class="tipImagen">\n\n                      <img src="{{imagepath || \'assets/imgs/perro.png\'}}"/>\n\n                    </div>\n\n                    <div class="tipTexto">\n\n                      <h2>\n\n                        <p><b>En esta comunidad nos solidarizamos para que las mascotas regresen lo antes posible a sus hogares.</b></p>\n\n                      </h2>\n\n                    </div>\n\n                  </div>\n\n                </ion-col>\n\n              </ion-row>\n\n              <br/>\n\n              <ion-row>\n\n                <ion-col col-12>\n\n                  <div>\n\n                    <div class="tipImagen">\n\n                      <img src="{{imagepath || \'assets/imgs/binoculares.png\'}}"/>\n\n                    </div>\n\n                  <div class="tipTexto">\n\n                    <h2>\n\n                      <p><b>CANFIND te ayuda a encontrar a tu mascota mediante el reconocimiento de imágenes.</b></p>\n\n                    </h2>\n\n                  </div>\n\n                  </div>\n\n                </ion-col>\n\n              </ion-row>\n\n            </div> <!--contenedor de los tips-->\n\n          <br/>            \n\n        </ion-card>\n\n      </ion-grid>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\tomasdo\Desktop\Universidad\Proyecto Final\PetFinder\PetFinder\src\pages\hello-ionic\hello-ionic.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_5__providers_servicio_servicio__["a" /* ServicioProvider */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]])
    ], HelloIonicPage);
    return HelloIonicPage;
}());

//# sourceMappingURL=hello-ionic.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
            selector: 'page-edit-profile',template:/*ion-inline-start:"C:\Users\tomasdo\Desktop\Universidad\Proyecto Final\PetFinder\PetFinder\src\pages\edit-profile\edit-profile.html"*/'<!--\n\n  Generated template for the EditProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="barra">\n\n    <ion-title>edit-profile</ion-title>\n\n    <ion-buttons end>\n\n      <img class="imagenLogo" src="{{imagepath || \'assets/imgs/logo.png\'}}" />\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="backgroundGeneral">\n\n  <input type="text" [(ngModel)]="userName" />\n\n  <button ion-button (click)="submitForm()">Guardar</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\tomasdo\Desktop\Universidad\Proyecto Final\PetFinder\PetFinder\src\pages\edit-profile\edit-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], EditProfilePage);
    return EditProfilePage;
}());

//# sourceMappingURL=edit-profile.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
            selector: 'page-item-details',template:/*ion-inline-start:"C:\Users\tomasdo\Desktop\Universidad\Proyecto Final\PetFinder\PetFinder\src\pages\item-details\item-details.html"*/'<ion-header>\n\n  <ion-navbar color="barra">\n\n    <button menuToggle *ngIf="!selectedItem">\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Item Details</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="backgroundGeneral">\n\n  <h3 text-center *ngIf="selectedItem">\n\n    {{selectedItem.title}}\n\n    <ion-icon [name]="selectedItem.icon"></ion-icon>\n\n  </h3>\n\n  <h4 text-center *ngIf="selectedItem">\n\n    You navigated here from <b>{{selectedItem.title}}</b>\n\n  </h4>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\tomasdo\Desktop\Universidad\Proyecto Final\PetFinder\PetFinder\src\pages\item-details\item-details.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ItemDetailsPage);
    return ItemDetailsPage;
}());

//# sourceMappingURL=item-details.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(237);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicioProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_models_UserData__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_models_ResultadoWatson__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_base64__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_models_Usuario__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(32);
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
    function ServicioProvider(http, loadingCtrl, alertCtrl, base64, app, storage) {
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.base64 = base64;
        this.app = app;
        this.storage = storage;
        // private URL_SERVER: string = "http://canfind.herokuapp.com";
        this.URL_SERVER = "https://localhost:44357";
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
                this.http.post(this.URL_SERVER + '/api/ImagenMascota/FotoEncontrado', {
                    idUsuario: idUsuario,
                    imageURI: imageURI,
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
            _this.http.post(_this.URL_SERVER + '/api/ImagenMascota/AgregarFoto', {
                imageURI: imageURI,
                idMascota: idMascota,
                localizacion: "",
                idUsuario: idUsuario
            })
                .subscribe(function (response) {
                loader.dismiss();
                var nav = _this.app.getActiveNav();
                nav.pop();
            }, function (error) {
                loader.dismiss();
                _this.showAlertErrorGenerico();
                console.log(error);
            });
            //esto es para el celu
            // this.base64.encodeFile(imageURI).then((base64File: string) => {
            //   base64File = base64File.split(',')[1];
            //   this.http.post(this.URL_SERVER + '/api/ImagenMascota/AgregarFoto', { 
            //     imageURI: base64File,
            //     idMascota: idMascota,
            //     localizacion: "",
            //     idUsuario: idUsuario
            //   })
            //   .subscribe((response) => {
            //     loader.dismiss();
            //     this.showAlertFotoAgregada();
            //   }, (error) => {
            //     loader.dismiss();
            //     this.showAlertErrorGenerico();
            //     console.log(error);
            //   });
            // }, (err) => {
            //   console.log(err);
            // });
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

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_hello_ionic_hello_ionic__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_item_details_item_details__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_encontre_encontre__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_edit_profile_edit_profile__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_confirmar_foto_confirmar_foto__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_mis_mascotas_mis_mascotas__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_perfil_mascota_perfil_mascota__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_fotos_mascota_fotos_mascota__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_ver_consulta_ver_consulta__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_agrega_mascota_agrega_mascota__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_camera__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_base64__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_common_http__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_servicio_servicio__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_facebook__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_storage__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_google_plus__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_file_transfer__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_file__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_geolocation__ = __webpack_require__(209);
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
                __WEBPACK_IMPORTED_MODULE_13__pages_fotos_mascota_fotos_mascota__["a" /* FotosMascotaPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_ver_consulta_ver_consulta__["a" /* VerConsultaPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_agrega_mascota_agrega_mascota__["a" /* AgregaMascotaPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/agrega-mascota/agrega-mascota.module#AgregaMascotaPageModule', name: 'AgregaMascotaPage', segment: 'agrega-mascota', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_19__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_storage__["a" /* IonicStorageModule */].forRoot()
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
                __WEBPACK_IMPORTED_MODULE_13__pages_fotos_mascota_fotos_mascota__["a" /* FotosMascotaPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_ver_consulta_ver_consulta__["a" /* VerConsultaPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_agrega_mascota_agrega_mascota__["a" /* AgregaMascotaPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_base64__["a" /* Base64 */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_facebook__["a" /* Facebook */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_20__providers_servicio_servicio__["a" /* ServicioProvider */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_google_plus__["a" /* GooglePlus */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_file_transfer__["b" /* FileTransferObject */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_geolocation__["a" /* Geolocation */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MascotaNueva; });
var MascotaNueva = /** @class */ (function () {
    function MascotaNueva() {
    }
    return MascotaNueva;
}());

//# sourceMappingURL=MascotaNueva.js.map

/***/ }),

/***/ 268:
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

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_encontre_encontre__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_edit_profile_edit_profile__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_mis_mascotas_mis_mascotas__ = __webpack_require__(85);
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
        this.storage.get('UserImg').then(function (img) {
            _this.UserImg = img;
        });
        this.storage.get('UserName').then(function (name) {
            _this.UserName = name;
        });
        this.initializeApp();
        // set our app's pages
        this.pages = [
            { title: 'Mis mascotas', component: __WEBPACK_IMPORTED_MODULE_7__pages_mis_mascotas_mis_mascotas__["a" /* MisMascotasPage */] },
            { title: 'Encontre un perro', component: __WEBPACK_IMPORTED_MODULE_2__pages_encontre_encontre__["a" /* EncontrePage */] }
        ];
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\tomasdo\Desktop\Universidad\Proyecto Final\PetFinder\PetFinder\src\app\app.html"*/'<ion-menu [content]="content">\n\n\n\n  <ion-header>\n\n      <ion-toolbar class="user-profile">\n\n\n\n          <ion-grid>\n\n            <ion-row>\n\n              <ion-col col-4>\n\n                  <div class="user-avatar">\n\n                    <img [src]="UserImg">\n\n                  </div>\n\n              </ion-col>\n\n              <ion-col padding-top col-8>\n\n                <h2 ion-text class="no-margin bold text-white">\n\n                  {{ UserName }}\n\n                </h2>\n\n              </ion-col>\n\n            </ion-row>\n\n    \n\n            <ion-row no-padding class="other-data">\n\n              <ion-col no-padding class="column">\n\n                <!--button ion-button icon-left small full color="light" menuClose (click)="editProfile()">\n\n                  <ion-icon name="contact"></ion-icon>\n\n                  Editar Perfil\n\n                </button-->\n\n              </ion-col>\n\n              <ion-col no-padding class="column">\n\n                <button ion-button icon-left small full color="light" menuClose (click)="logout()">\n\n                  <ion-icon name="log-out"></ion-icon>\n\n                  Salir\n\n                </button>\n\n              </ion-col>\n\n            </ion-row>\n\n    \n\n          </ion-grid>\n\n    \n\n        </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list class="user-list">\n\n      <button ion-item menuClose class="text-1x" *ngFor="let p of pages" (click)="openPage(p)">\n\n          <span ion-text color="primary">{{p.title}}</span>\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\tomasdo\Desktop\Universidad\Proyecto Final\PetFinder\PetFinder\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__item_details_item_details__ = __webpack_require__(215);
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
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\tomasdo\Desktop\Universidad\Proyecto Final\PetFinder\PetFinder\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar color="barra">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Perros perdidos</ion-title>\n\n    <ion-buttons end>\n\n        <img class="imagenLogo" src="{{imagepath || \'assets/imgs/logo.png\'}}" />\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="backgroundGeneral">\n\n\n\n  <div class="trip card" tappable margin-bottom> <!-- (click)="viewDetail(trip.id)" -->\n\n    <div class="background border-bottom" [ngStyle]="{\'background-image\': \'url(assets/imgs/trip/trip_1.jpg)\'}">\n\n      <div class="background-filter rlt">\n\n        <div class="align-bottom" padding-left padding-right>\n\n          <h6 class="pull-left text-white" ion-text>Copacabana</h6>\n\n          <h6 class="pull-right text-white" ion-text>$90.00</h6>\n\n          <div class="clear"></div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n    <div class="padding-sm primary-bg">\n\n      <ion-icon name="time" class="text-white"></ion-icon>\n\n      <span ion-text class="text-white">12h</span>\n\n      <span class="pull-right" ion-text color="light"><strong>per adult</strong> (childs has <span ion-text  class="text-green bold">50% OFF</span>)</span>\n\n    </div>\n\n  </div>\n\n    \n\n  <div class="trip card" tappable margin-bottom> <!-- (click)="viewDetail(trip.id)" -->\n\n    <div class="background border-bottom" [ngStyle]="{\'background-image\': \'url(assets/imgs/trip/trip_1.jpg)\'}">\n\n      <div class="background-filter rlt">\n\n        <div class="align-bottom" padding-left padding-right>\n\n          <h6 class="pull-left text-white" ion-text>Copacabana</h6>\n\n          <h6 class="pull-right text-white" ion-text>$90.00</h6>\n\n          <div class="clear"></div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n    <div class="padding-sm primary-bg">\n\n      <ion-icon name="time" class="text-white"></ion-icon>\n\n      <span ion-text class="text-white">12h</span>\n\n      <span class="pull-right" ion-text color="light"><strong>per adult</strong> (childs has <span ion-text  class="text-green bold">50% OFF</span>)</span>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\tomasdo\Desktop\Universidad\Proyecto Final\PetFinder\PetFinder\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 83:
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

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MisMascotasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__perfil_mascota_perfil_mascota__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_servicio_servicio__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__agrega_mascota_agrega_mascota__ = __webpack_require__(108);
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
    function MisMascotasPage(navCtrl, navParams, service, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.storage = storage;
        this.storage.get("idUsuarioLogueado").then(function (data) {
            _this.idUsuarioLogueado = data;
            _this.service.traerMascotas(_this.idUsuarioLogueado)
                .subscribe(function (result) {
                _this.misMascotas = result;
                console.log(result);
            }, function (error) {
                console.log(error);
            });
        });
    }
    MisMascotasPage.prototype.irAPerfil = function (idMascota) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__perfil_mascota_perfil_mascota__["a" /* PerfilMascotaPage */], {
            idMascota: idMascota
        });
    };
    MisMascotasPage.prototype.agregarMascota = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__agrega_mascota_agrega_mascota__["a" /* AgregaMascotaPage */], {});
    };
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
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.alertCtrl = alertCtrl;
        this.idMascota = this.navParams.get("idMascota");
        this.service.traerMascota(this.idMascota)
            .subscribe(function (result) {
            var mascotaResult = result;
            _this.nombre = mascotaResult.nombre;
            _this.descripcionRaza = mascotaResult.descripcionRaza;
            _this.idMascota = mascotaResult.idMascota;
            _this.perdida = mascotaResult.perdida;
            _this.avatar = mascotaResult.avatar;
            _this.entrenado = mascotaResult.entrenado;
            _this.claseEntrenada = mascotaResult.claseEntrenada;
            console.log(result);
        }, function (error) {
            console.log(error);
        });
    }
    PerfilMascotaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PerfilMascotaPage');
    };
    PerfilMascotaPage.prototype.IrAFotos = function (idMascota) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__fotos_mascota_fotos_mascota__["a" /* FotosMascotaPage */], {
            idMascota: idMascota,
            nombreMascota: this.nombre,
            entrenado: this.entrenado,
            claseEntrenada: this.claseEntrenada
        });
    };
    PerfilMascotaPage.prototype.showAlertPerdido = function (idMascota) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '¿Queres reportarlo perdido?',
            subTitle: 'Se iniciara la busqueda de tu mascota',
            buttons: [{
                    text: 'Si',
                    handler: function () {
                        _this.service.reportarPerdido(idMascota).subscribe(function (result) {
                            console.log(result);
                            _this.perdida = true;
                        }, function (error) {
                            console.log(error);
                        });
                    }
                }, {
                    text: 'No',
                    handler: function () {
                    }
                }]
        });
        alert.present();
    };
    PerfilMascotaPage.prototype.consultar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__ver_consulta_ver_consulta__["a" /* VerConsultaPage */], {
            nombre: this.nombre,
            raza: "canichetoyclass"
        });
    };
    PerfilMascotaPage.prototype.showAlertEncontrado = function (idMascota) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: '¿Encontraste a tu mascota?',
            subTitle: 'Se cancelará la busqueda actual.',
            buttons: [{
                    text: 'Si',
                    handler: function () {
                        _this.service.reportarEncontrada(idMascota).subscribe(function (result) {
                            console.log(result);
                            _this.perdida = false;
                        }, function (error) {
                            console.log(error);
                        });
                    }
                }, {
                    text: 'No',
                    handler: function () {
                    }
                }]
        });
        alert.present();
    };
    PerfilMascotaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-perfil-mascota',template:/*ion-inline-start:"C:\Users\tomasdo\Desktop\Universidad\Proyecto Final\PetFinder\PetFinder\src\pages\perfil-mascota\perfil-mascota.html"*/'<!--\n\n  Generated template for the PerfilMascotaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="barra">\n\n    <ion-title>Perfil {{ Nombre }}</ion-title>\n\n    <ion-buttons end>\n\n        <img class="imagenLogo" src="{{imagepath || \'assets/imgs/logo.png\'}}" />\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="backgroundGeneral">\n\n  <ion-grid>\n\n    <ion-card>\n\n      <div id="imagen-perfil" class="row">\n\n        <div class="col">\n\n          <h1>{{ nombre }}</h1>\n\n          <span>Raza: {{ descripcionRaza }}</span><br>\n\n          <br>\n\n          <div *ngIf="entrenado < 10">\n\n            <h3><ion-badge color="danger">Perfil incompleto</ion-badge></h3>\n\n            <p>Debes agregar fotos de tu mascota para mejorar las probabilidades de reconocerla por la I.A.</p>\n\n          </div>\n\n        </div>\n\n        <div class="col">\n\n            <img *ngIf="avatar != null" src="http://criaderononthue.com/img/canfind/controllers/resources/Img/Mascotas/{{ avatar }}.jpg" />\n\n            <img *ngIf="avatar == null" src="assets/img/avatarPerro.png " />\n\n        </div>\n\n      </div>\n\n  </ion-card>\n\n    <div id="botones">\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <button *ngIf="!perdida" round ion-button icon block color="danger" class="button" (click)="showAlertPerdido(idMascota);">Perdido\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <button round ion-button icon block class="button" color="primary"  (click)="IrAFotos(idMascota)">Fotos -&nbsp;<ion-badge color="light">{{entrenado}}</ion-badge>\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n  <!--<ion-row>\n\n        <ion-col col-12>\n\n          <button round ion-button icon block class="button" (click)="compartir();">Compartir\n\n          </button>\n\n        </ion-col>\n\n      </ion-row> -->\n\n        <ion-row>\n\n          <ion-col col-12>\n\n            <button *ngIf="perdida" round ion-button icon block color="energized" class="button" (click)="consultar();">Consultar\n\n            </button>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col col-12>\n\n              <button *ngIf="perdida"  round ion-button icon block color="secondary" class="button" (click)="showAlertEncontrado(idMascota);">Ya la encontré\n\n              </button>\n\n            </ion-col>\n\n          </ion-row>\n\n    </div>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\tomasdo\Desktop\Universidad\Proyecto Final\PetFinder\PetFinder\src\pages\perfil-mascota\perfil-mascota.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_servicio_servicio__["a" /* ServicioProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], PerfilMascotaPage);
    return PerfilMascotaPage;
}());

//# sourceMappingURL=perfil-mascota.js.map

/***/ })

},[216]);
//# sourceMappingURL=main.js.map