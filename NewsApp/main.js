(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");
/* harmony import */ var _components_news_news_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/news/news.component */ "./src/app/components/news/news.component.ts");
/* harmony import */ var _components_big_piece_of_news_big_piece_of_news_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/big-piece-of-news/big-piece-of-news.component */ "./src/app/components/big-piece-of-news/big-piece-of-news.component.ts");







var routes = [
    // { path: '', redirectTo: env.paths.home, pathMatch: 'full' },
    { path: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].paths.home, component: _components_news_news_component__WEBPACK_IMPORTED_MODULE_5__["NewsComponent"] },
    { path: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].paths.pieceOfNews, component: _components_big_piece_of_news_big_piece_of_news_component__WEBPACK_IMPORTED_MODULE_6__["BigPieceOfNewsComponent"] },
    { path: '**', component: _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body {\n    padding: 0 5vw;\n    min-height: 100vh;\n}\n\n.navigation {\n    min-height: 5vh;\n    padding: 2vh 0;\n    display: block;\n}\n\n.content {\n    display: block;\n}\n\n.footer {\n    min-height: 5vh;\n    display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keSB7XG4gICAgcGFkZGluZzogMCA1dnc7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbi5uYXZpZ2F0aW9uIHtcbiAgICBtaW4taGVpZ2h0OiA1dmg7XG4gICAgcGFkZGluZzogMnZoIDA7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jb250ZW50IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmZvb3RlciB7XG4gICAgbWluLWhlaWdodDogNXZoO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body bg-dark\">\n  <app-navigation class=\"navigation\"></app-navigation>\n  <div class=\"content\">\n      <router-outlet></router-outlet>\n  </div>\n  <app-footer class=\"footer\"></app-footer>\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'NewsApp';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/navigation/navigation.component */ "./src/app/components/navigation/navigation.component.ts");
/* harmony import */ var _components_news_news_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/news/news.component */ "./src/app/components/news/news.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_sources_sources_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/sources/sources.component */ "./src/app/components/sources/sources.component.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");
/* harmony import */ var _components_big_piece_of_news_big_piece_of_news_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/big-piece-of-news/big-piece-of-news.component */ "./src/app/components/big-piece-of-news/big-piece-of-news.component.ts");
/* harmony import */ var _components_small_piece_of_news_small_piece_of_news_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/small-piece-of-news/small-piece-of-news.component */ "./src/app/components/small-piece-of-news/small-piece-of-news.component.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__["NavigationComponent"],
                _components_news_news_component__WEBPACK_IMPORTED_MODULE_7__["NewsComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _components_sources_sources_component__WEBPACK_IMPORTED_MODULE_9__["SourcesComponent"],
                _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__["NotFoundComponent"],
                _components_big_piece_of_news_big_piece_of_news_component__WEBPACK_IMPORTED_MODULE_11__["BigPieceOfNewsComponent"],
                _components_small_piece_of_news_small_piece_of_news_component__WEBPACK_IMPORTED_MODULE_12__["SmallPieceOfNewsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/big-piece-of-news/big-piece-of-news.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/big-piece-of-news/big-piece-of-news.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmlnLXBpZWNlLW9mLW5ld3MvYmlnLXBpZWNlLW9mLW5ld3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/big-piece-of-news/big-piece-of-news.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/big-piece-of-news/big-piece-of-news.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card my-3\">\n  <div class='card-header'>\n    <h3></h3>\n  </div>\n\n  <div class=\"row no-gutters align-items-center\">\n    <div class=\"col-12 col-md-5 col-xl-4 text-center\">\n      <!-- url2img -->\n      <img class=\"card-img p-sm-3 newsImg\" src=\"\" alt=\"image\">\n    </div>\n\n    <div class=\"col-12 col-md-7 col-xl-8\">\n      <div class=\"card-body\">\n        <blockquote class=\"blockquote mb-0\">\n          <!-- description -->\n          <p class=\"newsDescription\"></p>\n          <!-- author + sourceName-->\n          <footer class=\"blockquote-footer\"><p class=\"newsAuthor\"></p> - <cite class=\"newsSourceName\"></cite></footer>\n        </blockquote>\n        <!-- url -->\n        <a class=\"btn btn-outline-success btn-lg btn-block newsUrl\" href=\"\">Read more</a>\n      </div>\n    </div>\n  </div>\n  <div class=\"card-footer text-muted text-center\">\n    <!-- published at -->\n    <h5 class=\"newsPublishedAt\"></h5>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/big-piece-of-news/big-piece-of-news.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/big-piece-of-news/big-piece-of-news.component.ts ***!
  \*****************************************************************************/
/*! exports provided: BigPieceOfNewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BigPieceOfNewsComponent", function() { return BigPieceOfNewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BigPieceOfNewsComponent = /** @class */ (function () {
    function BigPieceOfNewsComponent() {
    }
    BigPieceOfNewsComponent.prototype.ngOnInit = function () {
    };
    BigPieceOfNewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-big-piece-of-news',
            template: __webpack_require__(/*! ./big-piece-of-news.component.html */ "./src/app/components/big-piece-of-news/big-piece-of-news.component.html"),
            styles: [__webpack_require__(/*! ./big-piece-of-news.component.css */ "./src/app/components/big-piece-of-news/big-piece-of-news.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BigPieceOfNewsComponent);
    return BigPieceOfNewsComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"w-100 py-2\">\n  <a class=\"btn btn-outline-secondary btn-lg btn-block py-2\" href=\"https://newsapi.org\">powered by NewsAPI.org</a>\n</div>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/navigation/navigation.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark p-0\">\n  <div class=\"rounded-lg shadow\" (click)=\"OnClear()\">\n      <!-- <a class=\"btn btn-outline-success btn-lg btn-block\" href=\"{{news.url}}\">Read more</a> -->\n    <a class=\"m-0 navbar-brand btn btn-outline-secondary\" routerLink=\"{{paths.home}}\">{{title}}</a>\n  </div>\n  \n  <div class=\"d-flex flex-row\">\n    <input #searchInput (keyup.enter)=\"OnSearch(searchInput.value)\" class=\"form-control mr-sm-2 bg-dark text-light\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n    <button class=\"btn btn-outline-success my-2 my-sm-0 shadow\" (click)=\"OnSearch(searchInput.value)\"><i class=\"fas fa-search\"></i></button>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.ts ***!
  \***************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_services_controllers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/controllers.service */ "./src/app/services/controllers.service.ts");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_4__);





var log = debug__WEBPACK_IMPORTED_MODULE_4___default()('app-navigationComponent');
var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(controllersService) {
        this.controllersService = controllersService;
        this.title = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].siteTitle;
        this.paths = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].paths;
        this.currentParams = {};
    }
    NavigationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.controllersService.currentParams.subscribe(function (params) {
            _this.currentParams = params;
            log('got new params');
            _this.UpdateNavigation();
        });
    };
    NavigationComponent.prototype.UpdateNavigation = function () {
        log('Updating nav with new params:', this.currentParams);
    };
    NavigationComponent.prototype.OnSearch = function (value) {
        log('searching the value:', value);
        if (value.length >= _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].search.minLength)
            this.controllersService.SetParams({ q: value });
    };
    NavigationComponent.prototype.OnClear = function () {
        this.controllersService.SetParams(undefined);
    };
    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/components/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/components/navigation/navigation.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_controllers_service__WEBPACK_IMPORTED_MODULE_3__["ControllersService"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/components/news/news.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/news/news.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sources {\n    min-height: 5vh;\n    display: block;\n    padding: 2vh 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uZXdzL25ld3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmV3cy9uZXdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc291cmNlcyB7XG4gICAgbWluLWhlaWdodDogNXZoO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDJ2aCAwO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/news/news.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/news/news.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-sources class=\"sources\"></app-sources>\n<div class=\"card-columns\">\n  <div *ngFor=\"let pieceOfNews of news\">\n    <app-small-piece-of-news [news]='pieceOfNews'></app-small-piece-of-news>\n  </div>\n</div>\n\n<div *ngIf=\"errorEnabled\" class=\"alert alert-danger\">{{error.message}}</div>\n\n<button type=\"button\" class=\"btn btn-outline-primary btn-dark btn-lg btn-block\" (click)='LoadMore()'>Load more</button>\n"

/***/ }),

/***/ "./src/app/components/news/news.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/news/news.component.ts ***!
  \***************************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/news.service */ "./src/app/services/news.service.ts");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_services_controllers_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/controllers.service */ "./src/app/services/controllers.service.ts");






var log = debug__WEBPACK_IMPORTED_MODULE_3___default()('app-newsComponent');
var NewsComponent = /** @class */ (function () {
    function NewsComponent(newsService, controllerService) {
        this.newsService = newsService;
        this.controllerService = controllerService;
        this.errorEnabled = false;
        this.currentParams = {};
    }
    NewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.controllerService.currentParams.subscribe(function (params) {
            log("got new params. Reloading with params:", _this.currentParams);
            _this.currentParams = params;
            _this.LoadNews(_this.currentParams);
        });
        // this.LoadNews();
    };
    NewsComponent.prototype.TriggerError = function (message) {
        var _this = this;
        if (message) {
            this.error = new Error(message);
        }
        this.errorEnabled = true;
        setTimeout(function () {
            _this.errorEnabled = false;
        }, src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].alerts.timeout);
    };
    NewsComponent.prototype.LoadNews = function (params) {
        var _this = this;
        log('loading news with params ', params);
        this.newsService.GetTopHeadlines(function (news, error) {
            if (news && news.length) {
                _this.news = news;
            }
            else {
                if (error) {
                    _this.error = error;
                }
                else {
                    _this.error = new Error(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].alerts.noNews);
                }
                _this.TriggerError();
            }
            log("Loaded news ", news, " with errors: ", error);
        }, params);
    };
    NewsComponent.prototype.LoadMore = function () {
        var _this = this;
        this.newsService.LoadMore(function (news, error) {
            if (news && news.length) {
                _this.news = _this.news.concat(news);
            }
            else {
                if (error) {
                    _this.error = error;
                }
                else {
                    _this.error = new Error(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].alerts.noMewsLeft);
                }
                _this.TriggerError();
            }
            log("Loaded extra news ", news, " with errors: ", error);
        });
    };
    NewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-news',
            template: __webpack_require__(/*! ./news.component.html */ "./src/app/components/news/news.component.html"),
            styles: [__webpack_require__(/*! ./news.component.css */ "./src/app/components/news/news.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"], src_app_services_controllers_service__WEBPACK_IMPORTED_MODULE_5__["ControllersService"]])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "./src/app/components/not-found/not-found.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/not-found/not-found.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/not-found/not-found.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.ts ***!
  \*************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/components/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/components/not-found/not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/small-piece-of-news/small-piece-of-news.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/small-piece-of-news/small-piece-of-news.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a.card {\n    text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zbWFsbC1waWVjZS1vZi1uZXdzL3NtYWxsLXBpZWNlLW9mLW5ld3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc21hbGwtcGllY2Utb2YtbmV3cy9zbWFsbC1waWVjZS1vZi1uZXdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhLmNhcmQge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/small-piece-of-news/small-piece-of-news.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/small-piece-of-news/small-piece-of-news.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div>\n  <div class=\"card my-3 bg-light text-dark shadow\">\n    <div class='card-header'>\n      <h3>{{news.title}}</h3>\n    </div>\n    <div class=\"row no-gutters align-items-center\">\n      <div class=\"col-12 col-md-5 col-xl-4 text-center\">\n        <img class=\"card-img p-sm-3\" src=\"{{news.urlToImage}}\" alt=\"image\">\n      </div>\n      <div class=\"col-12 col-md-7 col-xl-8\">\n        <div class=\"card-body\">\n          <blockquote class=\"blockquote mb-0\">\n            <p>{{news.description}}</p>\n            <footer class=\"blockquote-footer\">{{news.author}} - <cite>{{news.source.name}}</cite></footer>\n          </blockquote>\n          <a class=\"btn btn-outline-success btn-lg btn-block\" href=\"{{news.url}}\">Read more</a>\n        </div>\n      </div>\n    </div>\n    <div class=\"card-footer text-muted text-center\">\n      <h5>{{news.publishedAt}}</h5>\n    </div>\n  </div>\n</div> -->\n\n<!-- <a class=\"card bg-secondary text-light\" href=\"{{path}}\"> -->\n<a class=\"card bg-secondary text-light\" href=\"{{news.url}}\">\n  <div class=\"card-header text-center\">\n      <h5>{{news.title}}</h5>\n  </div>\n  \n  <img class=\"card-img\" src=\"{{news.urlToImage}}\" alt=\"News image\">\n  <div class=\"card-img-overlay\">\n    <!-- <a class=\"btn btn-outline-success btn-lg btn-block\" href=\"{{news.url}}\">Read more</a> -->\n  </div>\n\n  <div class=\"card-footer text-light text-center\">\n    <h5>{{news.publishedAt}}</h5>\n  </div>\n</a>"

/***/ }),

/***/ "./src/app/components/small-piece-of-news/small-piece-of-news.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/small-piece-of-news/small-piece-of-news.component.ts ***!
  \*********************************************************************************/
/*! exports provided: SmallPieceOfNewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmallPieceOfNewsComponent", function() { return SmallPieceOfNewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_piece_of_news__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/piece-of-news */ "./src/app/models/piece-of-news.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_4__);





var SmallPieceOfNewsComponent = /** @class */ (function () {
    function SmallPieceOfNewsComponent() {
    }
    SmallPieceOfNewsComponent.prototype.ngOnInit = function () {
        this.log = debug__WEBPACK_IMPORTED_MODULE_4___default()('app-smallPieceOfNews ' + this.news.id);
        this.log("Piece created");
        this.path = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].paths.news + '/' + this.news.id;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_models_piece_of_news__WEBPACK_IMPORTED_MODULE_2__["PieceOfNews"])
    ], SmallPieceOfNewsComponent.prototype, "news", void 0);
    SmallPieceOfNewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-small-piece-of-news',
            template: __webpack_require__(/*! ./small-piece-of-news.component.html */ "./src/app/components/small-piece-of-news/small-piece-of-news.component.html"),
            styles: [__webpack_require__(/*! ./small-piece-of-news.component.css */ "./src/app/components/small-piece-of-news/small-piece-of-news.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SmallPieceOfNewsComponent);
    return SmallPieceOfNewsComponent;
}());



/***/ }),

/***/ "./src/app/components/sources/sources.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/sources/sources.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n    flex-wrap: nowrap;\n    overflow-x: auto;\n    margin: 0;\n    padding: 2.5vh;\n}\n\n.row::-webkit-scrollbar {\n    display: none;\n}\n\n/* .row > :first-child{\n    padding-left: 0;\n}\n\n.row > :last-child{\n    padding-right: 0;\n} */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zb3VyY2VzL3NvdXJjZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsU0FBUztJQUNULGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBOzs7Ozs7R0FNRyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc291cmNlcy9zb3VyY2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93IHtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAyLjV2aDtcbn1cblxuLnJvdzo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qIC5yb3cgPiA6Zmlyc3QtY2hpbGR7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xufVxuXG4ucm93ID4gOmxhc3QtY2hpbGR7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbn0gKi8iXX0= */"

/***/ }),

/***/ "./src/app/components/sources/sources.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/sources/sources.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"sources && sources.length\" class=\"row px-0 border-right border-left border-secondary\">\n  <div *ngFor=\"let source of sources\" class=\"col-auto\">\n      <div class=\"btn btn-outline-secondary shadow\" id=\"{{source.id}}\" (click)=\"SourceClicked(source);\" [class.btn-light]=\"selectedSourcesIds.includes(source.id)\">\n        <p class=\"my-0\">{{source.name}}</p>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/sources/sources.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sources/sources.component.ts ***!
  \*********************************************************/
/*! exports provided: SourcesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourcesComponent", function() { return SourcesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_source_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/source.service */ "./src/app/services/source.service.ts");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_services_controllers_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/controllers.service */ "./src/app/services/controllers.service.ts");




// import { EventEmitter } from '@angular/core';

var log = debug__WEBPACK_IMPORTED_MODULE_3___default()('app-sourcesComponent');
var SourcesComponent = /** @class */ (function () {
    function SourcesComponent(sourceService, controllersService) {
        this.sourceService = sourceService;
        this.controllersService = controllersService;
        this.selectedSourcesIds = [];
    }
    SourcesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.controllersService.currentParams.subscribe(function (params) {
            if (params && params.sources) {
                _this.selectedSourcesIds = [].concat(params.sources.split(','));
            }
            else {
                _this.selectedSourcesIds = [];
            }
            log("Updating selected sources to: ", _this.selectedSourcesIds);
        });
        this.sourceService.GetServices(function (data, error) {
            _this.sources = data;
            log(_this.sources);
        });
    };
    SourcesComponent.prototype.SourceClicked = function (source) {
        log('Source ' + source.id + ' clicked');
        if (this.selectedSourcesIds.includes(source.id)) {
            this.selectedSourcesIds.splice(this.selectedSourcesIds.indexOf(source.id), 1);
        }
        else {
            this.selectedSourcesIds.push(source.id);
        }
        log('Currently selected sources are:', this.selectedSourcesIds);
        var params = this.selectedSourcesIds.length ?
            { sources: this.selectedSourcesIds.join(',') }
            : undefined;
        this.controllersService.SetParams(params);
        // this.updateNewsEvent.emit(this.selectedSources);
    };
    SourcesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sources',
            template: __webpack_require__(/*! ./sources.component.html */ "./src/app/components/sources/sources.component.html"),
            styles: [__webpack_require__(/*! ./sources.component.css */ "./src/app/components/sources/sources.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_source_service__WEBPACK_IMPORTED_MODULE_2__["SourceService"], src_app_services_controllers_service__WEBPACK_IMPORTED_MODULE_4__["ControllersService"]])
    ], SourcesComponent);
    return SourcesComponent;
}());



/***/ }),

/***/ "./src/app/models/news-response.ts":
/*!*****************************************!*\
  !*** ./src/app/models/news-response.ts ***!
  \*****************************************/
/*! exports provided: NewsResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsResponse", function() { return NewsResponse; });
/* harmony import */ var _piece_of_news__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./piece-of-news */ "./src/app/models/piece-of-news.ts");

var NewsResponse = /** @class */ (function () {
    function NewsResponse(data) {
        this.status = data.status || '';
        this.totalResults = data.totalResults || 0;
        this.articles = data.articles ? data.articles.map(function (article) { return new _piece_of_news__WEBPACK_IMPORTED_MODULE_0__["PieceOfNews"](article); }) : [];
    }
    return NewsResponse;
}());



/***/ }),

/***/ "./src/app/models/piece-of-news.ts":
/*!*****************************************!*\
  !*** ./src/app/models/piece-of-news.ts ***!
  \*****************************************/
/*! exports provided: PieceOfNews */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieceOfNews", function() { return PieceOfNews; });
/* harmony import */ var _source__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./source */ "./src/app/models/source.ts");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid/v4 */ "./node_modules/uuid/v4.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_1__);


var PieceOfNews = /** @class */ (function () {
    function PieceOfNews(data) {
        this.author = '';
        this.title = '';
        this.description = '';
        this.url = '';
        this.urlToImage = '';
        this.publishedAt = '';
        this.content = '';
        this.id = uuid_v4__WEBPACK_IMPORTED_MODULE_1___default()();
        this.source = data.source ? new _source__WEBPACK_IMPORTED_MODULE_0__["Source"](data.source) : new _source__WEBPACK_IMPORTED_MODULE_0__["Source"]();
        this.author = data.author ? data.author : this.author;
        this.title = data.title ? data.title : this.title;
        this.description = data.description ? data.description : this.description;
        this.url = data.url ? data.url : this.url;
        this.urlToImage = data.urlToImage ? data.urlToImage : this.urlToImage;
        this.content = data.content ? data.content : this.content;
        this.publishedAt = data.publishedAt ? new Date(Date.parse(data.publishedAt)).toDateString() : new Date(Date.now()).toDateString();
    }
    return PieceOfNews;
}());



/***/ }),

/***/ "./src/app/models/source-response.ts":
/*!*******************************************!*\
  !*** ./src/app/models/source-response.ts ***!
  \*******************************************/
/*! exports provided: SourceResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourceResponse", function() { return SourceResponse; });
/* harmony import */ var _source__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./source */ "./src/app/models/source.ts");

var SourceResponse = /** @class */ (function () {
    function SourceResponse(data) {
        this.status = data.status || '';
        this.sources = data.sources ? data.sources.map(function (source) { return new _source__WEBPACK_IMPORTED_MODULE_0__["Source"](source); }) : [];
    }
    return SourceResponse;
}());



/***/ }),

/***/ "./src/app/models/source.ts":
/*!**********************************!*\
  !*** ./src/app/models/source.ts ***!
  \**********************************/
/*! exports provided: Source */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Source", function() { return Source; });
var Source = /** @class */ (function () {
    function Source(data) {
        this.id = '';
        this.name = '';
        if (data) {
            this.id = data.id ? data.id : this.id;
            this.name = data.name ? data.name : this.name;
        }
    }
    return Source;
}());



/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var log = debug__WEBPACK_IMPORTED_MODULE_2___default()('app-apiService');
var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.GetRequest = function (apiInfo, params) {
        if (!params) {
            params = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.defaultParams;
        }
        log('request: ', params);
        var queryUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.name + apiInfo.name;
        var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]();
        apiInfo.params.forEach(function (paramName) {
            var paramValue = params[paramName] || src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.defaultQuery[paramName] || '';
            if (paramValue) {
                queryParams = queryParams.append(paramName, paramValue);
            }
        });
        log('query: ', queryParams);
        return this.http.get(queryUrl, { params: queryParams });
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/services/controllers.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/controllers.service.ts ***!
  \*************************************************/
/*! exports provided: ControllersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControllersService", function() { return ControllersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_3__);




var log = debug__WEBPACK_IMPORTED_MODULE_3___default()('app-controllersService');
var ControllersService = /** @class */ (function () {
    function ControllersService() {
        this.paramsSource = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
        this.currentParams = this.paramsSource.asObservable();
    }
    ControllersService.prototype.SetParams = function (params) {
        log("setting the params to:", params);
        this.paramsSource.next(params);
    };
    ControllersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ControllersService);
    return ControllersService;
}());



/***/ }),

/***/ "./src/app/services/news.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/news.service.ts ***!
  \******************************************/
/*! exports provided: NewsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsService", function() { return NewsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _models_news_response__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/news-response */ "./src/app/models/news-response.ts");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api.service */ "./src/app/services/api.service.ts");






var log = debug__WEBPACK_IMPORTED_MODULE_4___default()('app-newsService');
var NewsService = /** @class */ (function () {
    function NewsService(api) {
        this.api = api;
        this.newsAvailable = 0;
        this.pagesLoaded = 0;
        this.pageSize = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api.defaultQuery.pageSize;
    }
    NewsService.prototype.GetPieceOfNews = function (pieceOfNewsId) {
    };
    NewsService.prototype.GetTopHeadlines = function (callback, params) {
        var _this = this;
        if (!params) {
            params = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api.defaultParams;
        }
        log('getting top headlines with params: ', params);
        this.api.GetRequest(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api.topHeadlines, params).subscribe(function (value) {
            var res = new _models_news_response__WEBPACK_IMPORTED_MODULE_3__["NewsResponse"](value);
            _this.newsAvailable = res.totalResults;
            _this.currentNews = res.articles;
            if (res.status === _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api.okStatus) {
                _this.lastParams = params;
                _this.pagesLoaded = 1;
                if (params && params.pageSize) {
                    _this.pageSize = params.pageSize;
                }
                callback(res.articles, null);
            }
            else {
                _this.lastParams = undefined;
                _this.pagesLoaded = 0;
                callback(null, new Error(res.error.message));
            }
        }, function (error) { return callback(null, new Error(error)); });
    };
    NewsService.prototype.LoadMore = function (callback) {
        var _this = this;
        log('load more: ', this.lastParams);
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].maxNewsAllowed <= this.pagesLoaded * this.pageSize) {
            callback(undefined, new Error(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].alerts.noNewsAvailable));
            return;
        }
        if (this.newsAvailable <= this.pagesLoaded * this.pageSize) {
            callback(undefined, new Error(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].alerts.noMewsLeft));
            return;
        }
        if (this.lastParams) {
            this.lastParams.page = this.pagesLoaded + 1;
        }
        else {
            this.lastParams = { page: this.pagesLoaded + 1 };
        }
        this.api.GetRequest(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api.topHeadlines, this.lastParams).subscribe(function (value) {
            var res = new _models_news_response__WEBPACK_IMPORTED_MODULE_3__["NewsResponse"](value);
            _this.currentNews = _this.currentNews.concat(res.articles);
            if (res.status === _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api.okStatus) {
                log('loaded ' + res.articles.length + ' news');
                _this.pagesLoaded = _this.lastParams.page;
                callback(res.articles, undefined);
            }
            else {
                callback(undefined, new Error(res.error.message));
            }
        });
    };
    NewsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]])
    ], NewsService);
    return NewsService;
}());



/***/ }),

/***/ "./src/app/services/source.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/source.service.ts ***!
  \********************************************/
/*! exports provided: SourceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourceService", function() { return SourceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _models_source_response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/source-response */ "./src/app/models/source-response.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api.service */ "./src/app/services/api.service.ts");






var log = debug__WEBPACK_IMPORTED_MODULE_4___default()('app-sourceService');
var SourceService = /** @class */ (function () {
    function SourceService(api) {
        this.api = api;
    }
    SourceService.prototype.GetServices = function (callback) {
        var _this = this;
        this.api.GetRequest(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.sources).subscribe(function (value) {
            var res = new _models_source_response__WEBPACK_IMPORTED_MODULE_1__["SourceResponse"](value);
            _this.currentSources = res.sources;
            if (res.status === _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.okStatus) {
                callback(res.sources, null);
            }
            else {
                callback(null, new Error(res.error.message));
            }
        }, function (error) { return callback(null, new Error(error)); });
    };
    SourceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]])
    ], SourceService);
    return SourceService;
}());



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
var environment = {
    production: false,
    paths: {
        home: '',
        news: 'news',
        pieceOfNews: 'news/:id'
    },
    api: {
        name: 'https://newsapi.org/v2/',
        topHeadlines: {
            name: 'top-headlines',
            params: ['apiKey', 'page', 'pageSize', 'q', 'sources', 'category', 'country'],
            defaultParams: {
                country: 'us'
            }
        },
        sources: {
            name: 'sources',
            params: ['apiKey', 'country', 'language', 'category'],
            defaultParams: {
                language: 'en'
            }
        },
        defaultQuery: {
            apiKey: '7212e3966b5c450fa48c618ebf60d8f0',
            page: 1,
            pageSize: 6
        },
        defaultParams: {
            country: 'us',
        },
        okStatus: 'ok'
    },
    alerts: {
        timeout: 3000,
        noNews: 'There are no news matching your request.',
        noMewsLeft: 'There are no more news left.',
        noNewsAvailable: 'There are no more news available to load due to limitations.',
        loaded: 'Available news are loaded.'
    },
    search: {
        minLength: 3
    },
    maxNewsAllowed: 40,
    siteTitle: 'Latest News'
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
else {
    debug__WEBPACK_IMPORTED_MODULE_4___default.a.enable("app-*");
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/zakhar/university/RPI/Lab5/NewsApp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map