(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/selphy/projects/frontend-challenge/frontend-challenge/src/main.ts */"zUnb");


/***/ }),

/***/ "7e2C":
/*!*********************************!*\
  !*** ./src/app/shared/posts.ts ***!
  \*********************************/
/*! exports provided: posts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "posts", function() { return posts; });
const posts = [
    {
        userFullName: "Yoda",
        date: new Date(2020, 7, 22, 17, 33),
        userImg: "https://i.ytimg.com/vi/p938cWkHmRA/hqdefault.jpg",
        message: "Fear is the path to the dark side. Fear leads to anger; anger leads to hate; hate leads to suffering. I sense much fear in you."
    },
    {
        userFullName: "Darth Vader",
        date: new Date(2021, 8, 11, 22, 55),
        userImg: "https://images-na.ssl-images-amazon.com/images/I/81XjqZbx3oL._AC_UX466_.jpg",
        message: "Don’t be too proud of this technological terror you’ve constructed. The ability to destroy a planet is insignificant next to the power of the Force."
    },
    {
        userFullName: "Anakin Skywalker",
        date: new Date(2021, 2, 4, 11, 20),
        userImg: "https://e.rpp-noticias.io/normal/2020/12/12/375437_1034276.jpg",
        message: "Attachment is forbidden. Possession is forbidden. Compassion, which I would define as unconditional love, is essential to a Jedi’s life. So you might say, that we are encouraged to love."
    },
    {
        userFullName: "Obi-Wan Kenobi",
        date: new Date(2020, 12, 30, 9, 42),
        userImg: "https://nerdmovieproductions.it/wp-content/uploads/2021/04/obi-wan.jpg",
        message: "If you define yourself by your power to take life, your desire to dominate, to possess, then you have nothing."
    },
    {
        userFullName: "Han Solo",
        date: new Date(2021, 3, 12, 5, 46),
        userImg: "https://cdn.bestmovie.it/wp-content/uploads/2020/02/1422267778_Harrison-Ford-han-solo1-696x392.jpg",
        message: "I’ve been running scams on the streets since I was ten. I was kicked out of the flight academy for having a mind of my own. I’m gonna be a pilot. The best in the galaxy."
    },
    {
        userFullName: "John Doe",
        date: new Date(2019, 7, 18, 16, 33),
        userImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait_%28cropped%29.jpg/1200px-Outdoors-man-portrait_%28cropped%29.jpg",
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
];


/***/ }),

/***/ "AytR":
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
    production: false
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

/***/ "EthR":
/*!****************************************!*\
  !*** ./src/app/shared/post.service.ts ***!
  \****************************************/
/*! exports provided: LOCAL_STORAGE_KEY, PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCAL_STORAGE_KEY", function() { return LOCAL_STORAGE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _localStorage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localStorage.service */ "uKma");




const LOCAL_STORAGE_KEY = 'my-local-posts';
class PostService {
    constructor(localStorage) {
        this.localStorage = localStorage;
        this._localStoragePosts = [];
        this.localStoragePost = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.filterText = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    addPost(post) {
        this._localStoragePosts.push(post);
        this.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this._localStoragePosts));
        this.localStoragePost.next(this._localStoragePosts);
    }
    getPosts() {
        return this._localStoragePosts;
    }
    deleteAll() {
        this.localStorage.clear();
        this._localStoragePosts = [];
        this.localStoragePost.next(this._localStoragePosts);
    }
    retrievePostFromLocalStorage() {
        this._localStoragePosts = JSON.parse(this.localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
        this.localStoragePost.next(this._localStoragePosts);
    }
    setFilter(filter) {
        this.filterText.next(filter);
    }
}
PostService.ɵfac = function PostService_Factory(t) { return new (t || PostService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_localStorage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"])); };
PostService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PostService, factory: PostService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _localStorage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"] }]; }, null); })();


/***/ }),

/***/ "H1a5":
/*!************************************************!*\
  !*** ./src/app/add-post/add-post.component.ts ***!
  \************************************************/
/*! exports provided: AddPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPostComponent", function() { return AddPostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_post_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/post.model */ "NOFl");
/* harmony import */ var _shared_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/post.service */ "EthR");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");





class AddPostComponent {
    constructor(postService) {
        this.postService = postService;
    }
    ngOnInit() {
    }
    publish() {
        let post = new _shared_post_model__WEBPACK_IMPORTED_MODULE_1__["Post"]("You", new Date(), this.postText, "/assets/img/photo.png");
        this.postService.addPost(post);
        this.postText = '';
    }
    deleteAll() {
        this.postService.deleteAll();
    }
}
AddPostComponent.ɵfac = function AddPostComponent_Factory(t) { return new (t || AddPostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"])); };
AddPostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddPostComponent, selectors: [["app-add-post"]], decls: 4, vars: 1, consts: [[1, "add-post"], ["type", "text", "placeholder", "Enter note about the process", 1, "add-post-input", 3, "ngModel", "ngModelChange"], [1, "sendButton", 3, "click"]], template: function AddPostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddPostComponent_Template_input_ngModelChange_1_listener($event) { return ctx.postText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddPostComponent_Template_button_click_2_listener() { return ctx.publish(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Publish");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.postText);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: [".add-post[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  background-color: #EFF2F7;\n}\n\n.add-post[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  align-self: flex-end;\n  width: 100%;\n  height: 48px;\n  border: 1px solid #C2CDDD;\n  border-radius: 3px;\n  margin-bottom: 20px;\n  box-sizing: border-box;\n  padding-left: 20px;\n}\n\n.add-post[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder, .add-post[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder, .add-post[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  margin-left: 20px;\n  font-size: 16px;\n}\n\n.add-post[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  align-self: flex-end;\n  background-color: #D3135A;\n  border-radius: 4px;\n  padding: 11px 17px 8px 17px;\n  text-align: center;\n  font-family: Univers;\n  letter-spacing: 0px;\n  color: #FFFFFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLXBvc3QvYWRkLXBvc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFFQTtFQUNJLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7OztFQUlJLGlCQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUdBO0VBQ0ksb0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBQUoiLCJmaWxlIjoic3JjL2FwcC9hZGQtcG9zdC9hZGQtcG9zdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGQtcG9zdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VGRjJGNztcbn1cblxuLmFkZC1wb3N0IGlucHV0IHtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0MyQ0RERDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuLmFkZC1wb3N0IGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyLFxuLmFkZC1wb3N0IGlucHV0OjotbW96LXBsYWNlaG9sZGVyLFxuLmFkZC1wb3N0IGlucHV0OjpwbGFjZWhvbGRlclxuIHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5hZGQtcG9zdCBidXR0b24ge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNEMzEzNUE7XG4gICAgYm9yZGVyLXJhZGl1czo0cHg7XG4gICAgcGFkZGluZzogMTFweCAxN3B4IDhweCAxN3B4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogVW5pdmVycztcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xuICAgIGNvbG9yOiAjRkZGRkZGO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddPostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-post',
                templateUrl: './add-post.component.html',
                styleUrls: ['./add-post.component.scss']
            }]
    }], function () { return [{ type: _shared_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] }]; }, null); })();


/***/ }),

/***/ "NOFl":
/*!**************************************!*\
  !*** ./src/app/shared/post.model.ts ***!
  \**************************************/
/*! exports provided: Post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
class Post {
    constructor(userFullName, date, message, userImg) {
        this.userFullName = userFullName;
        this.date = date;
        this.message = message;
        this.userImg = userImg;
    }
}


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _shared_posts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/posts */ "7e2C");
/* harmony import */ var _shared_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/post.service */ "EthR");
/* harmony import */ var _filter_post_filter_post_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filter-post/filter-post.component */ "iuT1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _add_post_add_post_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-post/add-post.component */ "H1a5");
/* harmony import */ var _text_message_text_message_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./text-message/text-message.component */ "tWvv");









function AppComponent_app_text_message_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-text-message", 6);
} if (rf & 2) {
    const post_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("post", post_r2);
} }
function AppComponent_app_text_message_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-text-message", 7);
} if (rf & 2) {
    const localPost_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("post", localPost_r3)("isOther", false);
} }
class AppComponent {
    constructor(postService) {
        this.postService = postService;
        this.title = 'frontend-challenge';
        this.posts = _shared_posts__WEBPACK_IMPORTED_MODULE_2__["posts"];
        this.localStoragePosts = [];
        this.sub = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.subFilter = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
    }
    ngOnInit() {
        this.filteredPosts = this.getSortedArray(_shared_posts__WEBPACK_IMPORTED_MODULE_2__["posts"]);
        this.postService.retrievePostFromLocalStorage();
        this.sub = this.postService.localStoragePost.subscribe((data) => {
            this.localStoragePosts = this.getSortedArray(data);
        });
        this.subFilter = this.postService.filterText.subscribe((filterString) => {
            let search = new RegExp(filterString, 'i');
            this.filteredPosts = this.getSortedArray(this.posts.filter((item) => search.test(item.userFullName.toLowerCase())));
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
        this.subFilter.unsubscribe();
    }
    getSortedArray(array) {
        return array.sort((a, b) => (new Date(a.date).getTime()) - (new Date(b.date).getTime()));
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 8, vars: 2, consts: [[1, "main-container"], [1, "header"], [1, "main"], [3, "post", 4, "ngFor", "ngForOf"], [3, "post", "isOther", 4, "ngFor", "ngForOf"], [1, "footer"], [3, "post"], [3, "post", "isOther"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-filter-post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_app_text_message_4_Template, 1, 1, "app-text-message", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_app_text_message_5_Template, 1, 2, "app-text-message", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-add-post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filteredPosts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.localStoragePosts);
    } }, directives: [_filter_post_filter_post_component__WEBPACK_IMPORTED_MODULE_4__["FilterPostComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _add_post_add_post_component__WEBPACK_IMPORTED_MODULE_6__["AddPostComponent"], _text_message_text_message_component__WEBPACK_IMPORTED_MODULE_7__["TextMessageComponent"]], styles: [".main-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.main[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.header[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.footer[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLm1haW4ge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uaGVhZGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmZvb3RlciB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4gICBcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _shared_post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _text_message_text_message_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./text-message/text-message.component */ "tWvv");
/* harmony import */ var _add_post_add_post_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-post/add-post.component */ "H1a5");
/* harmony import */ var _filter_post_filter_post_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filter-post/filter-post.component */ "iuT1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "s7LF");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _text_message_text_message_component__WEBPACK_IMPORTED_MODULE_4__["TextMessageComponent"],
        _add_post_add_post_component__WEBPACK_IMPORTED_MODULE_5__["AddPostComponent"],
        _filter_post_filter_post_component__WEBPACK_IMPORTED_MODULE_6__["FilterPostComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _text_message_text_message_component__WEBPACK_IMPORTED_MODULE_4__["TextMessageComponent"],
                    _add_post_add_post_component__WEBPACK_IMPORTED_MODULE_5__["AddPostComponent"],
                    _filter_post_filter_post_component__WEBPACK_IMPORTED_MODULE_6__["FilterPostComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "iuT1":
/*!******************************************************!*\
  !*** ./src/app/filter-post/filter-post.component.ts ***!
  \******************************************************/
/*! exports provided: FilterPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPostComponent", function() { return FilterPostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/post.service */ "EthR");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");




class FilterPostComponent {
    constructor(postService) {
        this.postService = postService;
    }
    ngOnInit() {
    }
    filterPosts(data) {
        this.postService.setFilter(data);
    }
}
FilterPostComponent.ɵfac = function FilterPostComponent_Factory(t) { return new (t || FilterPostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"])); };
FilterPostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FilterPostComponent, selectors: [["app-filter-post"]], decls: 2, vars: 1, consts: [[1, "search-post"], ["type", "text", "placeholder", "Search...", 3, "ngModel", "ngModelChange"]], template: function FilterPostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FilterPostComponent_Template_input_ngModelChange_1_listener($event) { return ctx.filter = $event; })("ngModelChange", function FilterPostComponent_Template_input_ngModelChange_1_listener($event) { return ctx.filterPosts($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.filter);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: [".search-post[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  margin-bottom: 20px;\n  background-color: #EFF2F7;\n}\n\n.search-post[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  align-self: flex-end;\n  width: 100%;\n  height: 48px;\n  border: 1px solid #C2CDDD;\n  border-radius: 3px;\n  margin-bottom: 20px;\n  box-sizing: border-box;\n  padding-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsdGVyLXBvc3QvZmlsdGVyLXBvc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUVBO0VBQ0ksb0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2ZpbHRlci1wb3N0L2ZpbHRlci1wb3N0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaC1wb3N0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRkYyRjc7XG59XG5cbi5zZWFyY2gtcG9zdCBpbnB1dCB7XG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNDMkNEREQ7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterPostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-filter-post',
                templateUrl: './filter-post.component.html',
                styleUrls: ['./filter-post.component.scss']
            }]
    }], function () { return [{ type: _shared_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"] }]; }, null); })();


/***/ }),

/***/ "tWvv":
/*!********************************************************!*\
  !*** ./src/app/text-message/text-message.component.ts ***!
  \********************************************************/
/*! exports provided: TextMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextMessageComponent", function() { return TextMessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = function (a0) { return { "background-image": a0 }; };
function TextMessageComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, "url(" + ctx_r0.post.userImg + ")"));
} }
function TextMessageComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, "url(" + ctx_r1.post.userImg + ")"));
} }
const _c1 = function (a0, a1) { return { "alignRight": a0, "alignLeft": a1 }; };
const _c2 = function (a0) { return { "truncated": a0 }; };
class TextMessageComponent {
    constructor() {
        this.isOther = true;
        this.isChecked = false;
    }
    ngOnInit() {
        const ps = document.querySelectorAll('p');
        const observer = new window.ResizeObserver(entries => {
            for (let entry of entries) {
                entry.target.classList[entry.target.scrollHeight > entry.contentRect.height ? 'add' : 'remove']('truncated');
            }
        });
        ps.forEach(p => {
            observer.observe(p);
        });
    }
    onCheck() {
        this.isChecked = !this.isChecked;
    }
}
TextMessageComponent.ɵfac = function TextMessageComponent_Factory(t) { return new (t || TextMessageComponent)(); };
TextMessageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TextMessageComponent, selectors: [["app-text-message"]], inputs: { post: "post", isOther: "isOther" }, decls: 20, vars: 16, consts: [[1, "container"], [1, "post-container", 3, "ngClass"], ["class", "img-container", 4, "ngIf"], [1, "post-row"], [1, "info-row"], [1, "user_name"], [1, "post_date"], [1, "text-container"], ["type", "checkbox", "id", "expanded", 3, "checked"], [3, "ngClass"], [3, "click"], ["class", "img-container right-img", 4, "ngIf"], [1, "img-container"], [3, "ngStyle"], [1, "img-container", "right-img"]], template: function TextMessageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TextMessageComponent_div_2_Template, 2, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TextMessageComponent_Template_a_click_17_listener() { return ctx.onCheck(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Read more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, TextMessageComponent_div_19_Template, 2, 3, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](11, _c1, ctx.isOther === false, ctx.isOther !== false));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isOther);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.post.userFullName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 8, ctx.post.date, "dd/MM/yyyy HH:mm"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.isChecked);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c2, ctx.isChecked === true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.post.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isOther);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], styles: [".container[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n  font-family: Univers;\n}\n\n.post-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.post-container.alignRight[_ngcontent-%COMP%] {\n  display: flex;\n  margin-left: 30%;\n}\n\n.post-container.alignLeft[_ngcontent-%COMP%] {\n  display: flex;\n  margin-right: 30%;\n}\n\n.info-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.post-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.alignLeft[_ngcontent-%COMP%]   .post-row[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 25px 40px;\n  background-color: #EFF2F7;\n  margin-left: 12px;\n}\n\n.alignLeft[_ngcontent-%COMP%]   .post-row[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  margin-top: -6px;\n  margin-right: -5px;\n  border-left: 12px solid transparent;\n  border-right: 12px solid transparent;\n  border-bottom: 12px solid #EFF2F7;\n  transform: rotate(45deg);\n  left: -15px;\n  top: 4px;\n}\n\n.post-row.alignRight[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n\n.alignRight[_ngcontent-%COMP%]   .post-row[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 25px 40px;\n  background-color: #C2CDDD;\n  font-family: Univers;\n  margin-right: 12px;\n}\n\n.alignRight[_ngcontent-%COMP%]   .post-row[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  margin-top: -6px;\n  margin-left: -5px;\n  border-left: 12px solid transparent;\n  border-right: 12px solid transparent;\n  border-bottom: 12px solid #C2CDDD;\n  transform: rotate(-45deg);\n  right: -15px;\n  top: 4px;\n}\n\n.alignRight[_ngcontent-%COMP%]   .post-row[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  width: 90%;\n}\n\n.img-container[_ngcontent-%COMP%] {\n  margin: 10px;\n  margin-top: 30px;\n}\n\n.alignRight[_ngcontent-%COMP%]   .post-row[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%] {\n  width: 10%;\n}\n\n.img-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 20px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n\n.img-container.right-img[_ngcontent-%COMP%] {\n  align-self: flex-start;\n}\n\n.post-date[_ngcontent-%COMP%] {\n  align-self: flex-end;\n}\n\n.text-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  position: absolute;\n  pointer-events: none;\n}\n\n.text-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n.text-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  cursor: pointer;\n  text-decoration: none;\n  color: #2d2d2e;\n}\n\n.text-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: rgba(45, 45, 46, 0.6);\n}\n\n.text-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + p[_ngcontent-%COMP%] {\n  -webkit-line-clamp: unset;\n}\n\n.text-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ a[_ngcontent-%COMP%], .text-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(.truncated)    ~ a[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGV4dC1tZXNzYWdlL3RleHQtbWVzc2FnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUNBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBRUo7O0FBQ0E7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFDQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtBQUVKOztBQUNBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FBRUo7O0FBQ0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUFFSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FBRU47O0FBQ0M7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxvQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtBQUVGOztBQUVBO0VBQ0ksOEJBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFDQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0FBRUY7O0FBQ0E7RUFDSSw4QkFBQTtFQUNBLFVBQUE7QUFFSjs7QUFDQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUNBO0VBQ0ksVUFBQTtBQUVKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBQUNKOztBQUVBO0VBQ0ksc0JBQUE7QUFDSjs7QUFFQTtFQUNJLG9CQUFBO0FBQ0o7O0FBSUk7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQUROOztBQUlJO0VBQ0Usb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7QUFGTjs7QUFLSTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUFITjs7QUFNSTtFQUVFLDRCQUFBO0FBTE47O0FBUUk7RUFDRSx5QkFBQTtBQU5OOztBQVNJOztFQUVFLGFBQUE7QUFQTiIsImZpbGUiOiJzcmMvYXBwL3RleHQtbWVzc2FnZS90ZXh0LW1lc3NhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBVbml2ZXJzO1xufVxuLnBvc3QtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgXG59XG4ucG9zdC1jb250YWluZXIuYWxpZ25SaWdodCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xuICAgIFxufVxuLnBvc3QtY29udGFpbmVyLmFsaWduTGVmdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tcmlnaHQ6IDMwJTtcbiAgICBcbn1cbi5pbmZvLXJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5wb3N0LXJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uYWxpZ25MZWZ0IC5wb3N0LXJvdyAudGV4dC1jb250YWluZXJ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgcGFkZGluZzogMjVweCA0MHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VGRjJGNztcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xuIH1cblxuIC5hbGlnbkxlZnQgLnBvc3Qtcm93IC50ZXh0LWNvbnRhaW5lcjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246YWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6LTZweDtcbiAgbWFyZ2luLXJpZ2h0Oi01cHg7XG4gIGJvcmRlci1sZWZ0OiAxMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDEycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDEycHggc29saWQgI0VGRjJGNztcbiAgdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7XG4gIGxlZnQ6IC0xNXB4OyBcbiAgdG9wOiA0cHg7XG59XG5cbiAgXG4ucG9zdC1yb3cuYWxpZ25SaWdodCB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmFsaWduUmlnaHQgLnBvc3Qtcm93IC50ZXh0LWNvbnRhaW5lcntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMjVweCA0MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNDMkNEREQ7XG4gICAgZm9udC1mYW1pbHk6IFVuaXZlcnM7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xufVxuXG4uYWxpZ25SaWdodCAucG9zdC1yb3cgLnRleHQtY29udGFpbmVyOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOmFic29sdXRlO1xuICBtYXJnaW4tdG9wOi02cHg7XG4gIG1hcmdpbi1sZWZ0Oi01cHg7XG4gIGJvcmRlci1sZWZ0OiAxMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDEycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDEycHggc29saWQgI0MyQ0RERDtcbiAgdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO1xuICByaWdodDogLTE1cHg7IFxuICB0b3A6IDRweDtcbn1cblxuLmFsaWduUmlnaHQgLnBvc3Qtcm93IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgd2lkdGg6IDkwJTtcbn1cblxuLmltZy1jb250YWluZXJ7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5hbGlnblJpZ2h0IC5wb3N0LXJvdyAuaW1nLWNvbnRhaW5lcntcbiAgICB3aWR0aDogMTAlO1xufVxuXG5cbi5pbWctY29udGFpbmVyIGRpdntcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG4uaW1nLWNvbnRhaW5lci5yaWdodC1pbWcge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG59XG5cbi5wb3N0LWRhdGUge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xufVxuXG4udGV4dC1jb250YWluZXIge1xuICBcbiAgICBpbnB1dCB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgfVxuICAgIFxuICAgIHAge1xuICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XG4gICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsOyAgXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIH1cbiAgICBcbiAgICBhIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGNvbG9yOiByZ2IoNDUsIDQ1LCA0Nik7XG4gICAgfVxuXG4gICAgYTpob3ZlciB7XG4gICAgICBcbiAgICAgIGNvbG9yOiByZ2JhKDQ1LCA0NSwgNDYsIDAuNik7XG4gICAgfVxuICAgIFxuICAgIGlucHV0OmNoZWNrZWQgKyBwIHtcbiAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogdW5zZXQ7XG4gICAgfVxuICAgIFxuICAgIGlucHV0OmNoZWNrZWQgfiBhLFxuICAgIHA6bm90KC50cnVuY2F0ZWQpIH4gYXtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIFxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TextMessageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-text-message',
                templateUrl: './text-message.component.html',
                styleUrls: ['./text-message.component.scss']
            }]
    }], function () { return []; }, { post: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isOther: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "uKma":
/*!************************************************!*\
  !*** ./src/app/shared/localStorage.service.ts ***!
  \************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LocalStorageService {
    constructor() { }
    setItem(key, value) {
        localStorage.setItem(key, value);
    }
    getItem(key) {
        return localStorage.getItem(key);
    }
    removeItem(key) {
        localStorage.removeItem(key);
    }
    clear() {
        localStorage.clear();
    }
}
LocalStorageService.ɵfac = function LocalStorageService_Factory(t) { return new (t || LocalStorageService)(); };
LocalStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocalStorageService, factory: LocalStorageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocalStorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map