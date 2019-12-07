(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{title}}</h1>\n<app-weather-widget></app-weather-widget>\n<div class=\"copy-right\">\n  <p>© {{date | date: 'yyyy'}} {{copyright}}</p>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/loader/loader.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/loader/loader.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loader\">\n  <mat-spinner class=\"loader__spin\"></mat-spinner>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/weather-widget/components/weather-widget-hotels/weather-widget-hotel/weather-widget-hotel.component.html":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/weather-widget/components/weather-widget-hotels/weather-widget-hotel/weather-widget-hotel.component.html ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"activity-row\">\n  <div class=\"activity-desc\">\n    <h5>{{title}}</h5>\n    <p>{{address}}</p>\n    <h6>{{phone | phone}}</h6>\n  </div>\n  <div class=\"activity-img\">\n    <ul>\n      <li><img [src]=\"img | image\" alt=\"\"></li>\n      <li><img [src]=\"socialInfoImg | image\" alt=\"\"></li>\n    </ul>\n  </div>\n  <div class=\"clear\"></div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/weather-widget/components/weather-widget-hotels/weather-widget-hotels.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/weather-widget/components/weather-widget-hotels/weather-widget-hotels.component.html ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"village\">\n  <h3>{{type}}</h3>\n  <span class=\"line\"></span>\n  <div class=\"activity_box\">\n    <div class=\"scrollbar\"\n         id=\"style-2\"\n    >\n      <app-weather-widget-hotel *ngFor=\"let hotel of hotels\"\n                                [hotel]=\"hotel\"\n                                (click)=\"select(hotel)\"\n      >\n      </app-weather-widget-hotel>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/weather-widget/components/weather-widget-image/weather-widget-image.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/weather-widget/components/weather-widget-image/weather-widget-image.component.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"element-bg-img\">\n  <img *ngIf=\"img\"\n       [src]=\"img | image\"\n       alt=\"\"\n       class=\"img-responsive\"\n  />\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/weather-widget/components/weather-widget-social/weather-widget-social.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/weather-widget/components/weather-widget-social/weather-widget-social.component.html ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"teddy-bear\">\n  <ng-container *ngIf=\"socialInfo\">\n    <div class=\"teddy-text\">\n      <h4>{{title}}</h4>\n      <span class=\"w-line\"> </span>\n      <img [src]=\"socialInfo.img | image\"\n           [alt]=\"title\"\n           class=\"img-responsive\"\n      >\n    </div>\n    \n    <div class=\"teddy-follow\">\n      <ul>\n        <li class=\"folw-h\">\n          <h3>{{followers}}</h3>\n          <p>Followers</p>\n        </li>\n        <li>\n          <h3>{{following}}</h3>\n          <p>Following</p>\n        </li>\n      </ul>\n    </div>\n  </ng-container>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/weather-widget/components/weather-widget-switcher/weather-widget-switcher.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/weather-widget/components/weather-widget-switcher/weather-widget-switcher.component.html ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"element-left-bottom\">\n  <div class=\"ele-strip\">\n    <ul>\n      <li *ngFor=\"let value of values; trackBy: trackByValue\">\n        <a href=\"javascript:void(0)\"\n           [class.selected]=\"currentValue === value\"\n           (click)=\"switch(value)\"\n        >\n          {{value}}\n        </a>\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/weather-widget/components/weather-widget-weather/weather-widget-weather.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/weather-widget/components/weather-widget-weather/weather-widget-weather.component.html ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"temperatur\">\n  <ng-container *ngIf=\"weather\">\n    <h5>{{title}}</h5>\n    <span class=\"w-line\"> </span>\n    <span class=\"icon\" [style.background-image]=\"icon | image | backgroundImageUrl\"> </span>\n    <h2>\n      {{temperature}}<sup class=\"degree\">°</sup>\n    </h2>\n    <h6>\n      Water {{waterTemperature}}<sup class=\"degree\">°</sup>\n    </h6>\n  </ng-container>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/weather-widget/weather-widget.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/weather-widget/weather-widget.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"hotels; else loader\"\r\n     class=\"element\"\r\n>\r\n  <div class=\"element-left\">\r\n    <app-weather-widget-image [img]=\"selectedHotel?.img\"></app-weather-widget-image>\r\n      \r\n    <app-weather-widget-switcher [values]=\"hotels | hotelsTypes\"\r\n                                 [current-value]=\"selectedType\"\r\n                                 (onSwitch)=\"switchType($event)\"\r\n    >\r\n    </app-weather-widget-switcher>\r\n    \r\n    <app-weather-widget-hotels [hotels]=\"hotels | filter : 'type' : selectedType\"\r\n                               [type]=\"selectedType\"\r\n                               (onSelect)=\"selectHotel($event)\"\r\n    >\r\n    </app-weather-widget-hotels>\r\n  </div>\r\n  \r\n  <div class=\"element-right\">\r\n    <app-weather-widget-weather [weather]=\"selectedHotel?.weather\"></app-weather-widget-weather>\r\n    <app-weather-widget-social [social-info]=\"selectedHotel?.social_info\"></app-weather-widget-social>\r\n  </div>\r\n  \r\n  <div class=\"clear\"></div>\r\n</div>\r\n\r\n<ng-template #loader>\r\n  <app-loader></app-loader>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");



let AppComponent = class AppComponent {
    constructor() {
        this.copyright = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].copyright;
        this.title = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].title;
        this.date = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].date;
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _weather_widget_weather_widget_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./weather-widget/weather-widget.module */ "./src/app/weather-widget/weather-widget.module.ts");





let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _weather_widget_weather_widget_module__WEBPACK_IMPORTED_MODULE_4__["WeatherWidgetModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/mock/hotels.mock.ts":
/*!*************************************!*\
  !*** ./src/app/mock/hotels.mock.ts ***!
  \*************************************/
/*! exports provided: hotels, getHotels$ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hotels", function() { return hotels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHotels$", function() { return getHotels$; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/observable/of */ "./node_modules/rxjs/internal/observable/of.js");
/* harmony import */ var rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_1__);


const hotels = [
    {
        img: '2/n1.jpeg',
        address: '939 Box Street, Saddlebrooke, California, 1068',
        phone: 841888255190,
        weather: {
            title: 'rain',
            icon: 'icons/rain.svg',
            water: 23,
            temperature: 31
        },
        social_info: {
            title: 'Ovolo Assitia',
            img: '1/a1.jpeg',
            followers: 999,
            following: 155
        },
        type: 'California'
    },
    {
        img: '2/n2.jpeg',
        address: '166 Jay Street, Gardiner, California, 4635',
        phone: 984628463963,
        weather: {
            title: 'rain',
            icon: 'icons/rain.svg',
            water: 21,
            temperature: 27
        },
        social_info: {
            title: 'Eschoir Kneedles',
            img: '1/a2.jpeg',
            followers: 748,
            following: 103
        },
        type: 'California'
    },
    {
        img: '2/n3.jpeg',
        address: '393 Barwell Terrace, Windsor, Arizona, 9829',
        phone: 774064903360,
        weather: {
            title: 'rain',
            icon: 'icons/rain.svg',
            water: 22,
            temperature: 32
        },
        social_info: {
            title: 'Pivitol Caxt',
            img: '1/a3.jpeg',
            followers: 949,
            following: 116
        },
        type: 'Arizona'
    },
    {
        img: '2/n4.jpeg',
        address: '574 Montague Terrace, Bancroft, California, 5697',
        phone: 853431203778,
        weather: {
            title: 'sun',
            icon: 'icons/sun.svg',
            water: 21,
            temperature: 29
        },
        social_info: {
            title: 'Immunics Fortean',
            img: '1/a4.jpeg',
            followers: 710,
            following: 172
        },
        type: 'California'
    },
    {
        img: '2/n5.jpeg',
        address: '645 Irvington Place, Waterloo, California, 6126',
        phone: 313673008682,
        weather: {
            title: 'sun',
            icon: 'icons/sun.svg',
            water: 23,
            temperature: 28
        },
        social_info: {
            title: 'Eyeris Grok',
            img: '1/a5.jpeg',
            followers: 745,
            following: 72
        },
        type: 'California'
    },
    {
        img: '2/n6.jpeg',
        address: '166 Terrace Place, Salix, Tennessee, 5084',
        phone: 768189437926,
        weather: {
            title: 'rain',
            icon: 'icons/rain.svg',
            water: 24,
            temperature: 27
        },
        social_info: {
            title: 'Zilch Scenty',
            img: '1/a6.jpeg',
            followers: 853,
            following: 123
        },
        type: 'Tennessee'
    },
    {
        img: '2/n7.jpeg',
        address: '303 Sullivan Place, Mooresburg, Connecticut, 6071',
        phone: 816371972760,
        weather: {
            title: 'sun',
            icon: 'icons/sun.svg',
            water: 22,
            temperature: 29
        },
        social_info: {
            title: 'Farmex Sybixtex',
            img: '1/a7.jpeg',
            followers: 612,
            following: 127
        },
        type: 'Connecticut'
    },
    {
        img: '2/n8.jpeg',
        address: '211 Lyme Avenue, Freeburn, Arizona, 6760',
        phone: 944619170242,
        weather: {
            title: 'sun',
            icon: 'icons/sun.svg',
            water: 21,
            temperature: 31
        },
        social_info: {
            title: 'Eventex Xth',
            img: '1/a8.jpeg',
            followers: 631,
            following: 90
        },
        type: 'Arizona'
    },
    {
        img: '2/n9.jpeg',
        address: '970 Thomas Street, Fairforest, Connecticut, 9098',
        phone: 728683474491,
        weather: {
            title: 'sun',
            icon: 'icons/sun.svg',
            water: 24,
            temperature: 28
        },
        social_info: {
            title: 'Snips Idego',
            img: '1/a9.jpeg',
            followers: 634,
            following: 127
        },
        type: 'Connecticut'
    },
    {
        img: '2/n10.jpeg',
        address: '468 Commerce Street, Jugtown, California, 9143',
        phone: 564184690840,
        weather: {
            title: 'sun',
            icon: 'icons/sun.svg',
            water: 24,
            temperature: 27
        },
        social_info: {
            title: 'Uberlux Overplex',
            img: '1/a10.jpeg',
            followers: 906,
            following: 124
        },
        type: 'California'
    },
    {
        img: '2/n11.jpeg',
        address: '593 Garden Street, Rosine, Arizona, 2047',
        phone: 299492631493,
        weather: {
            title: 'rain',
            icon: 'icons/rain.svg',
            water: 22,
            temperature: 31
        },
        social_info: {
            title: 'Netropic Tsunamia',
            img: '1/a11.jpeg',
            followers: 501,
            following: 128
        },
        type: 'Arizona'
    },
    {
        img: '2/n12.jpeg',
        address: '745 Bowne Street, Crenshaw, California, 9082',
        phone: 810757140950,
        weather: {
            title: 'sun',
            icon: 'icons/sun.svg',
            water: 24,
            temperature: 30
        },
        social_info: {
            title: 'Norsul Daycore',
            img: '1/a12.jpeg',
            followers: 905,
            following: 157
        },
        type: 'California'
    },
    {
        img: '2/n13.jpeg',
        address: '198 Cook Street, Kingstowne, Connecticut, 134',
        phone: 566524265219,
        weather: {
            title: 'sun',
            icon: 'icons/sun.svg',
            water: 19,
            temperature: 31
        },
        social_info: {
            title: 'Biotica Geeky',
            img: '1/a13.jpeg',
            followers: 618,
            following: 53
        },
        type: 'Connecticut'
    },
    {
        img: '2/n14.jpeg',
        address: '680 Hastings Street, Davenport, Tennessee, 6254',
        phone: 567429920662,
        weather: {
            title: 'sun',
            icon: 'icons/sun.svg',
            water: 19,
            temperature: 32
        },
        social_info: {
            title: 'Cuizine Artworlds',
            img: '1/a14.jpeg',
            followers: 670,
            following: 176
        },
        type: 'Tennessee'
    },
    {
        img: '2/n15.jpeg',
        address: '241 McKibben Street, Lupton, Tennessee, 8801',
        phone: 747806576148,
        weather: {
            title: 'clouds',
            icon: 'icons/clouds.svg',
            water: 25,
            temperature: 27
        },
        social_info: {
            title: 'Applica Earthplex',
            img: '1/a15.jpeg',
            followers: 821,
            following: 177
        },
        type: 'Tennessee'
    },
    {
        img: '2/n16.jpeg',
        address: '253 Bath Avenue, Lewis, Arizona, 2271',
        phone: 191886384143,
        weather: {
            title: 'rain',
            icon: 'icons/rain.svg',
            water: 25,
            temperature: 30
        },
        social_info: {
            title: 'Quiltigen Imant',
            img: '1/a16.jpeg',
            followers: 778,
            following: 162
        },
        type: 'Arizona'
    },
    {
        img: '2/n17.jpeg',
        address: '845 Moore Place, Groveville, Arizona, 7607',
        phone: 710863369771,
        weather: {
            title: 'clouds',
            icon: 'icons/clouds.svg',
            water: 25,
            temperature: 28
        },
        social_info: {
            title: 'Flyboyz Gynk',
            img: '1/a17.jpeg',
            followers: 727,
            following: 167
        },
        type: 'Arizona'
    },
    {
        img: '2/n18.jpeg',
        address: '688 Henderson Walk, Comptche, California, 6386',
        phone: 349534850023,
        weather: {
            title: 'clouds',
            icon: 'icons/clouds.svg',
            water: 22,
            temperature: 32
        },
        social_info: {
            title: 'Aquasseur Rockyard',
            img: '1/a18.jpeg',
            followers: 788,
            following: 118
        },
        type: 'California'
    },
    {
        img: '2/n19.jpeg',
        address: '317 Garfield Place, Barclay, Arizona, 5541',
        phone: 306601947959,
        weather: {
            title: 'sun',
            icon: 'icons/sun.svg',
            water: 23,
            temperature: 31
        },
        social_info: {
            title: 'Elpro Kaggle',
            img: '1/a19.jpeg',
            followers: 929,
            following: 171
        },
        type: 'Arizona'
    },
    {
        img: '2/n20.jpeg',
        address: '236 Flatlands Avenue, Eden, Missouri, 7837',
        phone: 484372221403,
        weather: {
            title: 'sun',
            icon: 'icons/sun.svg',
            water: 20,
            temperature: 31
        },
        social_info: {
            title: 'Imageflow Translink',
            img: '1/a20.jpeg',
            followers: 804,
            following: 186
        },
        type: 'Missouri'
    }
];
function getHotels$() {
    return Object(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_1__["of"])(hotels)
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["delay"])(2000));
}


/***/ }),

/***/ "./src/app/shared/loader/loader.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/loader/loader.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loader {\r\n  height: 400px;\r\n}\r\n\r\n.loader__spin {\r\n  left: calc(50% - 50px);\r\n  top: calc(50% - 50px);\r\n  -webkit-animation: mat-progress-spinner-linear-rotate 2s linear infinite !important;\r\n          animation: mat-progress-spinner-linear-rotate 2s linear infinite !important;\r\n}\r\n\r\n/* Добавляем это, ибо по невдомым причинам спиннер не крутится из коробки */\r\n\r\n/deep/ .loader__spin circle {\r\n  -webkit-animation-name: mat-progress-spinner-stroke-rotate-100 !important;\r\n          animation-name: mat-progress-spinner-stroke-rotate-100 !important;\r\n  transition-property: stroke !important;\r\n  -webkit-animation-duration: 4s !important;\r\n          animation-duration: 4s !important;\r\n  -webkit-animation-timing-function: cubic-bezier(.35, 0, .25, 1) !important;\r\n          animation-timing-function: cubic-bezier(.35, 0, .25, 1) !important;\r\n  -webkit-animation-iteration-count: infinite !important;\r\n          animation-iteration-count: infinite !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsbUZBQTJFO1VBQTNFLDJFQUEyRTtBQUM3RTs7QUFFQSwyRUFBMkU7O0FBQzNFO0VBQ0UseUVBQWlFO1VBQWpFLGlFQUFpRTtFQUNqRSxzQ0FBc0M7RUFDdEMseUNBQWlDO1VBQWpDLGlDQUFpQztFQUNqQywwRUFBa0U7VUFBbEUsa0VBQWtFO0VBQ2xFLHNEQUE4QztVQUE5Qyw4Q0FBOEM7QUFDaEQiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvYWRlciB7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxufVxyXG5cclxuLmxvYWRlcl9fc3BpbiB7XHJcbiAgbGVmdDogY2FsYyg1MCUgLSA1MHB4KTtcclxuICB0b3A6IGNhbGMoNTAlIC0gNTBweCk7XHJcbiAgYW5pbWF0aW9uOiBtYXQtcHJvZ3Jlc3Mtc3Bpbm5lci1saW5lYXItcm90YXRlIDJzIGxpbmVhciBpbmZpbml0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiDQlNC+0LHQsNCy0LvRj9C10Lwg0Y3RgtC+LCDQuNCx0L4g0L/QviDQvdC10LLQtNC+0LzRi9C8INC/0YDQuNGH0LjQvdCw0Lwg0YHQv9C40L3QvdC10YAg0L3QtSDQutGA0YPRgtC40YLRgdGPINC40Lcg0LrQvtGA0L7QsdC60LggKi9cclxuL2RlZXAvIC5sb2FkZXJfX3NwaW4gY2lyY2xlIHtcclxuICBhbmltYXRpb24tbmFtZTogbWF0LXByb2dyZXNzLXNwaW5uZXItc3Ryb2tlLXJvdGF0ZS0xMDAgIWltcG9ydGFudDtcclxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBzdHJva2UgIWltcG9ydGFudDtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDRzICFpbXBvcnRhbnQ7XHJcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKC4zNSwgMCwgLjI1LCAxKSAhaW1wb3J0YW50O1xyXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/shared/loader/loader.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/loader/loader.component.ts ***!
  \***************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoaderComponent = class LoaderComponent {
};
LoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loader',
        template: __webpack_require__(/*! raw-loader!./loader.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/loader/loader.component.html"),
        styles: [__webpack_require__(/*! ./loader.component.css */ "./src/app/shared/loader/loader.component.css")]
    })
], LoaderComponent);



/***/ }),

/***/ "./src/app/shared/pipes/background-image-url.pipe.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/pipes/background-image-url.pipe.ts ***!
  \***********************************************************/
/*! exports provided: BackgroundImageUrlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundImageUrlPipe", function() { return BackgroundImageUrlPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BackgroundImageUrlPipe = class BackgroundImageUrlPipe {
    transform(img) {
        return `url(${img})`;
    }
};
BackgroundImageUrlPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'backgroundImageUrl'
    })
], BackgroundImageUrlPipe);



/***/ }),

/***/ "./src/app/shared/pipes/filter.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/pipes/filter.pipe.ts ***!
  \*********************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FilterPipe = class FilterPipe {
    transform(items, key, value) {
        const stringedSearchValue = String(value).toLowerCase();
        return items.filter((item) => {
            const stringedItemValue = String(item[key]).toLowerCase();
            return item[key] === value || stringedItemValue.includes(stringedSearchValue);
        });
    }
};
FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filter'
    })
], FilterPipe);



/***/ }),

/***/ "./src/app/shared/pipes/image.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/shared/pipes/image.pipe.ts ***!
  \********************************************/
/*! exports provided: ImagePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagePipe", function() { return ImagePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");



let ImagePipe = class ImagePipe {
    constructor() {
        this.imagesPath = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].imagesPath;
    }
    transform(img) {
        return `${this.imagesPath}${img}`;
    }
};
ImagePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'image'
    })
], ImagePipe);



/***/ }),

/***/ "./src/app/shared/pipes/phone.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/shared/pipes/phone.pipe.ts ***!
  \********************************************/
/*! exports provided: PhonePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhonePipe", function() { return PhonePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var phone_formatter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! phone-formatter */ "./node_modules/phone-formatter/index.js");
/* harmony import */ var phone_formatter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(phone_formatter__WEBPACK_IMPORTED_MODULE_2__);



let PhonePipe = class PhonePipe {
    transform(sourcePhone) {
        const phoneNumber = phone_formatter__WEBPACK_IMPORTED_MODULE_2__["format"](String(sourcePhone), '(NNN) NNN-NNNN');
        return `+1 ${phoneNumber}`;
    }
};
PhonePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'phone'
    })
], PhonePipe);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loader/loader.component */ "./src/app/shared/loader/loader.component.ts");
/* harmony import */ var _pipes_phone_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipes/phone.pipe */ "./src/app/shared/pipes/phone.pipe.ts");
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipes/filter.pipe */ "./src/app/shared/pipes/filter.pipe.ts");
/* harmony import */ var _pipes_image_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pipes/image.pipe */ "./src/app/shared/pipes/image.pipe.ts");
/* harmony import */ var _pipes_background_image_url_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipes/background-image-url.pipe */ "./src/app/shared/pipes/background-image-url.pipe.ts");









let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _loader_loader_component__WEBPACK_IMPORTED_MODULE_4__["LoaderComponent"],
            _pipes_phone_pipe__WEBPACK_IMPORTED_MODULE_5__["PhonePipe"],
            _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_6__["FilterPipe"],
            _pipes_image_pipe__WEBPACK_IMPORTED_MODULE_7__["ImagePipe"],
            _pipes_background_image_url_pipe__WEBPACK_IMPORTED_MODULE_8__["BackgroundImageUrlPipe"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"]
        ],
        exports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _loader_loader_component__WEBPACK_IMPORTED_MODULE_4__["LoaderComponent"],
            _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_6__["FilterPipe"],
            _pipes_image_pipe__WEBPACK_IMPORTED_MODULE_7__["ImagePipe"],
            _pipes_background_image_url_pipe__WEBPACK_IMPORTED_MODULE_8__["BackgroundImageUrlPipe"],
            _pipes_phone_pipe__WEBPACK_IMPORTED_MODULE_5__["PhonePipe"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "./src/app/weather-widget/components/weather-widget-hotels/weather-widget-hotel/weather-widget-hotel.component.css":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/weather-widget/components/weather-widget-hotels/weather-widget-hotel/weather-widget-hotel.component.css ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".activity-row {\r\n  margin: -8px -16px 8px;\r\n  padding: 8px 16px;\r\n}\r\n\r\n.activity-row:hover {\r\n  background: #f0f0f0;\r\n  cursor: pointer;\r\n}\r\n\r\nimg {\r\n  height: 50px;\r\n  width: 50px;\r\n  margin: 0 3px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VhdGhlci13aWRnZXQvY29tcG9uZW50cy93ZWF0aGVyLXdpZGdldC1ob3RlbHMvd2VhdGhlci13aWRnZXQtaG90ZWwvd2VhdGhlci13aWRnZXQtaG90ZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvd2VhdGhlci13aWRnZXQvY29tcG9uZW50cy93ZWF0aGVyLXdpZGdldC1ob3RlbHMvd2VhdGhlci13aWRnZXQtaG90ZWwvd2VhdGhlci13aWRnZXQtaG90ZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3Rpdml0eS1yb3cge1xyXG4gIG1hcmdpbjogLThweCAtMTZweCA4cHg7XHJcbiAgcGFkZGluZzogOHB4IDE2cHg7XHJcbn1cclxuXHJcbi5hY3Rpdml0eS1yb3c6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmMGYwZjA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5pbWcge1xyXG4gIGhlaWdodDogNTBweDtcclxuICB3aWR0aDogNTBweDtcclxuICBtYXJnaW46IDAgM3B4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/weather-widget/components/weather-widget-hotels/weather-widget-hotel/weather-widget-hotel.component.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/weather-widget/components/weather-widget-hotels/weather-widget-hotel/weather-widget-hotel.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: WeatherWidgetHotelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherWidgetHotelComponent", function() { return WeatherWidgetHotelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WeatherWidgetHotelComponent = class WeatherWidgetHotelComponent {
    constructor() {
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    get address() {
        return this.hotel.address;
    }
    get img() {
        return this.hotel.img;
    }
    get phone() {
        return this.hotel.phone;
    }
    get socialInfoImg() {
        return this.hotel.social_info.img;
    }
    get title() {
        return this.hotel.social_info.title;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], WeatherWidgetHotelComponent.prototype, "hotel", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], WeatherWidgetHotelComponent.prototype, "onSelect", void 0);
WeatherWidgetHotelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-weather-widget-hotel',
        template: __webpack_require__(/*! raw-loader!./weather-widget-hotel.component.html */ "./node_modules/raw-loader/index.js!./src/app/weather-widget/components/weather-widget-hotels/weather-widget-hotel/weather-widget-hotel.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./weather-widget-hotel.component.css */ "./src/app/weather-widget/components/weather-widget-hotels/weather-widget-hotel/weather-widget-hotel.component.css")]
    })
], WeatherWidgetHotelComponent);



/***/ }),

/***/ "./src/app/weather-widget/components/weather-widget-hotels/weather-widget-hotels.component.css":
/*!*****************************************************************************************************!*\
  !*** ./src/app/weather-widget/components/weather-widget-hotels/weather-widget-hotels.component.css ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYXRoZXItd2lkZ2V0L2NvbXBvbmVudHMvd2VhdGhlci13aWRnZXQtaG90ZWxzL3dlYXRoZXItd2lkZ2V0LWhvdGVscy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/weather-widget/components/weather-widget-hotels/weather-widget-hotels.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/weather-widget/components/weather-widget-hotels/weather-widget-hotels.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: WeatherWidgetHotelsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherWidgetHotelsComponent", function() { return WeatherWidgetHotelsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WeatherWidgetHotelsComponent = class WeatherWidgetHotelsComponent {
    constructor() {
        this.hotels = [];
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
    }
    set inputHotels(hotels) {
        this.hotels = hotels;
        if (hotels.length > 0) {
            this.select(hotels[0]);
        }
    }
    select(hotel) {
        this.onSelect.emit(hotel);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('hotels')
], WeatherWidgetHotelsComponent.prototype, "inputHotels", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], WeatherWidgetHotelsComponent.prototype, "type", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], WeatherWidgetHotelsComponent.prototype, "onSelect", void 0);
WeatherWidgetHotelsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-weather-widget-hotels',
        template: __webpack_require__(/*! raw-loader!./weather-widget-hotels.component.html */ "./node_modules/raw-loader/index.js!./src/app/weather-widget/components/weather-widget-hotels/weather-widget-hotels.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./weather-widget-hotels.component.css */ "./src/app/weather-widget/components/weather-widget-hotels/weather-widget-hotels.component.css")]
    })
], WeatherWidgetHotelsComponent);



/***/ }),

/***/ "./src/app/weather-widget/components/weather-widget-image/weather-widget-image.component.css":
/*!***************************************************************************************************!*\
  !*** ./src/app/weather-widget/components/weather-widget-image/weather-widget-image.component.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".element-bg-img {\r\n  height: 170px;\r\n  overflow: hidden;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VhdGhlci13aWRnZXQvY29tcG9uZW50cy93ZWF0aGVyLXdpZGdldC1pbWFnZS93ZWF0aGVyLXdpZGdldC1pbWFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3dlYXRoZXItd2lkZ2V0L2NvbXBvbmVudHMvd2VhdGhlci13aWRnZXQtaW1hZ2Uvd2VhdGhlci13aWRnZXQtaW1hZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lbGVtZW50LWJnLWltZyB7XHJcbiAgaGVpZ2h0OiAxNzBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/weather-widget/components/weather-widget-image/weather-widget-image.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/weather-widget/components/weather-widget-image/weather-widget-image.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: WeatherWidgetImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherWidgetImageComponent", function() { return WeatherWidgetImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WeatherWidgetImageComponent = class WeatherWidgetImageComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], WeatherWidgetImageComponent.prototype, "img", void 0);
WeatherWidgetImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-weather-widget-image',
        template: __webpack_require__(/*! raw-loader!./weather-widget-image.component.html */ "./node_modules/raw-loader/index.js!./src/app/weather-widget/components/weather-widget-image/weather-widget-image.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./weather-widget-image.component.css */ "./src/app/weather-widget/components/weather-widget-image/weather-widget-image.component.css")]
    })
], WeatherWidgetImageComponent);



/***/ }),

/***/ "./src/app/weather-widget/components/weather-widget-social/weather-widget-social.component.css":
/*!*****************************************************************************************************!*\
  !*** ./src/app/weather-widget/components/weather-widget-social/weather-widget-social.component.css ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-responsive {\r\n  height: 70px;\r\n  width: 70px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VhdGhlci13aWRnZXQvY29tcG9uZW50cy93ZWF0aGVyLXdpZGdldC1zb2NpYWwvd2VhdGhlci13aWRnZXQtc29jaWFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvd2VhdGhlci13aWRnZXQvY29tcG9uZW50cy93ZWF0aGVyLXdpZGdldC1zb2NpYWwvd2VhdGhlci13aWRnZXQtc29jaWFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLXJlc3BvbnNpdmUge1xyXG4gIGhlaWdodDogNzBweDtcclxuICB3aWR0aDogNzBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/weather-widget/components/weather-widget-social/weather-widget-social.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/weather-widget/components/weather-widget-social/weather-widget-social.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: WeatherWidgetSocialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherWidgetSocialComponent", function() { return WeatherWidgetSocialComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WeatherWidgetSocialComponent = class WeatherWidgetSocialComponent {
    get title() {
        return this.socialInfo.title;
    }
    get img() {
        return this.socialInfo.img;
    }
    get followers() {
        return this.socialInfo.followers;
    }
    get following() {
        return this.socialInfo.following;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('social-info')
], WeatherWidgetSocialComponent.prototype, "socialInfo", void 0);
WeatherWidgetSocialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-weather-widget-social',
        template: __webpack_require__(/*! raw-loader!./weather-widget-social.component.html */ "./node_modules/raw-loader/index.js!./src/app/weather-widget/components/weather-widget-social/weather-widget-social.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./weather-widget-social.component.css */ "./src/app/weather-widget/components/weather-widget-social/weather-widget-social.component.css")]
    })
], WeatherWidgetSocialComponent);



/***/ }),

/***/ "./src/app/weather-widget/components/weather-widget-switcher/weather-widget-switcher.component.css":
/*!*********************************************************************************************************!*\
  !*** ./src/app/weather-widget/components/weather-widget-switcher/weather-widget-switcher.component.css ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ele-strip ul li a.selected {\r\n  font-weight: bold;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VhdGhlci13aWRnZXQvY29tcG9uZW50cy93ZWF0aGVyLXdpZGdldC1zd2l0Y2hlci93ZWF0aGVyLXdpZGdldC1zd2l0Y2hlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvd2VhdGhlci13aWRnZXQvY29tcG9uZW50cy93ZWF0aGVyLXdpZGdldC1zd2l0Y2hlci93ZWF0aGVyLXdpZGdldC1zd2l0Y2hlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVsZS1zdHJpcCB1bCBsaSBhLnNlbGVjdGVkIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/weather-widget/components/weather-widget-switcher/weather-widget-switcher.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/weather-widget/components/weather-widget-switcher/weather-widget-switcher.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: WeatherWidgetSwitcherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherWidgetSwitcherComponent", function() { return WeatherWidgetSwitcherComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WeatherWidgetSwitcherComponent = class WeatherWidgetSwitcherComponent {
    constructor() {
        this.values = [];
        this.onSwitch = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
    }
    set inputValues(values) {
        this.values = values;
        if (values.length > 0) {
            this.onSwitch.emit(values[0]);
        }
    }
    switch(value) {
        this.onSwitch.emit(value);
    }
    trackByValue(index, value) {
        return value;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('current-value')
], WeatherWidgetSwitcherComponent.prototype, "currentValue", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('values')
], WeatherWidgetSwitcherComponent.prototype, "inputValues", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], WeatherWidgetSwitcherComponent.prototype, "onSwitch", void 0);
WeatherWidgetSwitcherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-weather-widget-switcher',
        template: __webpack_require__(/*! raw-loader!./weather-widget-switcher.component.html */ "./node_modules/raw-loader/index.js!./src/app/weather-widget/components/weather-widget-switcher/weather-widget-switcher.component.html"),
        styles: [__webpack_require__(/*! ./weather-widget-switcher.component.css */ "./src/app/weather-widget/components/weather-widget-switcher/weather-widget-switcher.component.css")]
    })
], WeatherWidgetSwitcherComponent);



/***/ }),

/***/ "./src/app/weather-widget/components/weather-widget-weather/weather-widget-weather.component.css":
/*!*******************************************************************************************************!*\
  !*** ./src/app/weather-widget/components/weather-widget-weather/weather-widget-weather.component.css ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon {\r\n  background-size: 72px;\r\n  background-repeat: no-repeat;\r\n  background-position: 50%;\r\n  display: inline-block;\r\n  height: 80px;\r\n  margin-right: 10px;\r\n  width: 80px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VhdGhlci13aWRnZXQvY29tcG9uZW50cy93ZWF0aGVyLXdpZGdldC13ZWF0aGVyL3dlYXRoZXItd2lkZ2V0LXdlYXRoZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQiw0QkFBNEI7RUFDNUIsd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3dlYXRoZXItd2lkZ2V0L2NvbXBvbmVudHMvd2VhdGhlci13aWRnZXQtd2VhdGhlci93ZWF0aGVyLXdpZGdldC13ZWF0aGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvbiB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiA3MnB4O1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIHdpZHRoOiA4MHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/weather-widget/components/weather-widget-weather/weather-widget-weather.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/weather-widget/components/weather-widget-weather/weather-widget-weather.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: WeatherWidgetWeatherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherWidgetWeatherComponent", function() { return WeatherWidgetWeatherComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WeatherWidgetWeatherComponent = class WeatherWidgetWeatherComponent {
    get title() {
        return this.weather.title;
    }
    get icon() {
        return this.weather.icon;
    }
    get temperature() {
        return this.weather.temperature;
    }
    get waterTemperature() {
        return this.weather.water;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], WeatherWidgetWeatherComponent.prototype, "weather", void 0);
WeatherWidgetWeatherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-weather-widget-weather',
        template: __webpack_require__(/*! raw-loader!./weather-widget-weather.component.html */ "./node_modules/raw-loader/index.js!./src/app/weather-widget/components/weather-widget-weather/weather-widget-weather.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./weather-widget-weather.component.css */ "./src/app/weather-widget/components/weather-widget-weather/weather-widget-weather.component.css")]
    })
], WeatherWidgetWeatherComponent);



/***/ }),

/***/ "./src/app/weather-widget/pipes/hotels-types.pipe.ts":
/*!***********************************************************!*\
  !*** ./src/app/weather-widget/pipes/hotels-types.pipe.ts ***!
  \***********************************************************/
/*! exports provided: HotelsTypesPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelsTypesPipe", function() { return HotelsTypesPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HotelsTypesPipe = class HotelsTypesPipe {
    transform(hotels) {
        const types = hotels.map(hotel => hotel.type);
        return Array.from(new Set(types));
    }
};
HotelsTypesPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'hotelsTypes'
    })
], HotelsTypesPipe);



/***/ }),

/***/ "./src/app/weather-widget/weather-widget.component.css":
/*!*************************************************************!*\
  !*** ./src/app/weather-widget/weather-widget.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYXRoZXItd2lkZ2V0L3dlYXRoZXItd2lkZ2V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/weather-widget/weather-widget.component.ts":
/*!************************************************************!*\
  !*** ./src/app/weather-widget/weather-widget.component.ts ***!
  \************************************************************/
/*! exports provided: WeatherWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherWidgetComponent", function() { return WeatherWidgetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _mock_hotels_mock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mock/hotels.mock */ "./src/app/mock/hotels.mock.ts");



let WeatherWidgetComponent = class WeatherWidgetComponent {
    selectHotel(selectedHotel) {
        this.selectedHotel = selectedHotel;
    }
    switchType(selectedType) {
        this.selectedType = selectedType;
    }
    ngOnInit() {
        Object(_mock_hotels_mock__WEBPACK_IMPORTED_MODULE_2__["getHotels$"])().subscribe(hotels => this.hotels = hotels);
    }
};
WeatherWidgetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-weather-widget',
        template: __webpack_require__(/*! raw-loader!./weather-widget.component.html */ "./node_modules/raw-loader/index.js!./src/app/weather-widget/weather-widget.component.html"),
        styles: [__webpack_require__(/*! ./weather-widget.component.css */ "./src/app/weather-widget/weather-widget.component.css")]
    })
], WeatherWidgetComponent);



/***/ }),

/***/ "./src/app/weather-widget/weather-widget.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/weather-widget/weather-widget.module.ts ***!
  \*********************************************************/
/*! exports provided: WeatherWidgetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherWidgetModule", function() { return WeatherWidgetModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _components_weather_widget_hotels_weather_widget_hotels_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/weather-widget-hotels/weather-widget-hotels.component */ "./src/app/weather-widget/components/weather-widget-hotels/weather-widget-hotels.component.ts");
/* harmony import */ var _components_weather_widget_switcher_weather_widget_switcher_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/weather-widget-switcher/weather-widget-switcher.component */ "./src/app/weather-widget/components/weather-widget-switcher/weather-widget-switcher.component.ts");
/* harmony import */ var _components_weather_widget_weather_weather_widget_weather_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/weather-widget-weather/weather-widget-weather.component */ "./src/app/weather-widget/components/weather-widget-weather/weather-widget-weather.component.ts");
/* harmony import */ var _components_weather_widget_social_weather_widget_social_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/weather-widget-social/weather-widget-social.component */ "./src/app/weather-widget/components/weather-widget-social/weather-widget-social.component.ts");
/* harmony import */ var _weather_widget_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./weather-widget.component */ "./src/app/weather-widget/weather-widget.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _pipes_hotels_types_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipes/hotels-types.pipe */ "./src/app/weather-widget/pipes/hotels-types.pipe.ts");
/* harmony import */ var _components_weather_widget_image_weather_widget_image_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/weather-widget-image/weather-widget-image.component */ "./src/app/weather-widget/components/weather-widget-image/weather-widget-image.component.ts");
/* harmony import */ var _components_weather_widget_hotels_weather_widget_hotel_weather_widget_hotel_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/weather-widget-hotels/weather-widget-hotel/weather-widget-hotel.component */ "./src/app/weather-widget/components/weather-widget-hotels/weather-widget-hotel/weather-widget-hotel.component.ts");











let WeatherWidgetModule = class WeatherWidgetModule {
};
WeatherWidgetModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _weather_widget_component__WEBPACK_IMPORTED_MODULE_6__["WeatherWidgetComponent"],
            _components_weather_widget_hotels_weather_widget_hotels_component__WEBPACK_IMPORTED_MODULE_2__["WeatherWidgetHotelsComponent"],
            _components_weather_widget_switcher_weather_widget_switcher_component__WEBPACK_IMPORTED_MODULE_3__["WeatherWidgetSwitcherComponent"],
            _components_weather_widget_weather_weather_widget_weather_component__WEBPACK_IMPORTED_MODULE_4__["WeatherWidgetWeatherComponent"],
            _components_weather_widget_social_weather_widget_social_component__WEBPACK_IMPORTED_MODULE_5__["WeatherWidgetSocialComponent"],
            _pipes_hotels_types_pipe__WEBPACK_IMPORTED_MODULE_8__["HotelsTypesPipe"],
            _components_weather_widget_image_weather_widget_image_component__WEBPACK_IMPORTED_MODULE_9__["WeatherWidgetImageComponent"],
            _components_weather_widget_hotels_weather_widget_hotel_weather_widget_hotel_component__WEBPACK_IMPORTED_MODULE_10__["WeatherWidgetHotelComponent"]
        ],
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ],
        exports: [
            _weather_widget_component__WEBPACK_IMPORTED_MODULE_6__["WeatherWidgetComponent"]
        ]
    })
], WeatherWidgetModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    imagesPath: './assets/images/',
    production: false,
    title: 'Weather Widget',
    copyright: 'Weather Widget. All rights reserved | Released by Alexander Baranchugov',
    date: new Date()
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\learning\angular_07.11\home-works\hw-one-weather-widget\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map