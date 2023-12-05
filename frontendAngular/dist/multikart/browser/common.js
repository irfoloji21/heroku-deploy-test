"use strict";
(self["webpackChunkmultikart"] = self["webpackChunkmultikart"] || []).push([["common"],{

/***/ 1775:
/*!*************************************************!*\
  !*** ./src/app/shared/services/blog.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlogService: () => (/* binding */ BlogService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 54860);


class BlogService {
  constructor(http) {
    this.http = http;
    this.apiUrl = 'http://localhost:8000/api/v2/blog';
  }
  getBlogs() {
    return this.http.get(`/get-all-blogs`);
  }
  getBlogDetails(slug) {
    return this.http.get(`/${slug}`);
  }
  createBlog(blogData) {
    return this.http.post(`/create-blog`, blogData);
  }
  getAllShopBlogs(shopId) {
    return this.http.get(`/get-all-blogs-shop/${shopId}`);
  }
  deleteBlog(blogId) {
    return this.http.delete(`/delete-shop-blog/${blogId}`);
  }
  createReview(reviewData) {
    return this.http.put(`/create-new-review`, reviewData);
  }
  getAdminBlogs() {
    return this.http.get(`/admin-all-blogs`);
  }
  likeBlog(blogId, user) {
    const url = `/like-blog/${blogId}`;
    return this.http.put(url, {
      user
    });
  }
  unlikeBlog(blogId, user) {
    const url = `/unlike-blog/${blogId}`;
    return this.http.put(url, {
      user
    });
  }
  static #_ = this.ɵfac = function BlogService_Factory(t) {
    return new (t || BlogService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: BlogService,
    factory: BlogService.ɵfac,
    providedIn: 'root'
  });
}


/***/ }),

/***/ 28308:
/*!***************************************************!*\
  !*** ./src/app/shared/services/coupon.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CouponService: () => (/* binding */ CouponService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 58071);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 54860);



class CouponService {
  constructor(http) {
    this.http = http;
    this.baseUrl = 'http://localhost:8000/api/v2';
    this.appliedCouponSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
    this.appliedCoupon$ = this.appliedCouponSubject.asObservable();
  }
  createCouponCode(couponData) {
    return this.http.post(`${this.baseUrl}/coupon/create-coupon-code`, couponData);
  }
  getCouponsByShopId(shopId) {
    return this.http.get(`${this.baseUrl}/coupon/get-coupon/${shopId}`);
  }
  deleteCoupon(couponId) {
    return this.http.delete(`${this.baseUrl}/coupon/delete-coupon/${couponId}`);
  }
  getCouponById(couponId) {
    return this.http.get(`${this.baseUrl}/coupon/get-coupon-code/${couponId}`);
  }
  getCouponValueByName(couponName) {
    return this.http.get(`${this.baseUrl}/coupon/get-coupon-value/${couponName}`);
  }
  applyCoupon(coupon) {
    this.appliedCouponSubject.next(coupon);
  }
  static #_ = this.ɵfac = function CouponService_Factory(t) {
    return new (t || CouponService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: CouponService,
    factory: CouponService.ɵfac,
    providedIn: 'root'
  });
}


/***/ }),

/***/ 27957:
/*!**************************************************!*\
  !*** ./src/app/shared/services/order.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderService: () => (/* binding */ OrderService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 12235);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 54860);




const state = {
  checkoutItems: JSON.parse(localStorage['checkoutItems'] || '[]')
};
class OrderService {
  constructor(router, http) {
    this.router = router;
    this.http = http;
    this.apiUrl = "http://localhost:8000/api/v2";
  }
  // Get Checkout Items
  get checkoutItems() {
    const itemsStream = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(observer => {
      observer.next(state.checkoutItems);
      observer.complete();
    });
    return itemsStream;
  }
  createOrder(product, details, orderId, amount, selectedAddress, selectedCargo) {
    if (orderId) {
      var item = {
        shippingDetails: details,
        product: product,
        orderId: orderId,
        totalAmount: amount,
        address: selectedAddress,
        cargo: selectedCargo
      };
      state.checkoutItems = item;
      localStorage.setItem('checkoutItems', JSON.stringify(item));
      localStorage.removeItem('cartItems');
      console.log(item.shippingDetails, "details PaymentData");
      console.log(item.product, "amount PaymentData");
      console.log(item.orderId, "details PaymentData");
      console.log(item.totalAmount, "details PaymentData");
      this.router.navigate(['/pages/order/success', orderId]);
      return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(observer => {
        observer.next({
          message: 'Ödeme başarılı'
        });
        observer.complete();
        console.log(orderId, "orderId");
      });
    } else {
      console.error("orderId geçerli bir değere sahip değil.");
    }
  }
  getOrders(userId) {
    const url = `/order/get-all-orders/${userId}`;
    return this.http.get(url);
  }
  getOrderDetails(orderId) {
    const url = `/order/order-details/${orderId}`;
    return this.http.get(url);
  }
  refundOrder(orderId) {
    const refundData = {
      status: 'Refund Success'
    }; // İade başarılı olduğunda gönderilen durum
    return this.http.put(`/order/order-refund-success/${orderId}`, refundData);
  }
  setSelectedAddress(address) {
    this.selectedAddress = address;
  }
  getSelectedAddress() {
    return this.selectedAddress;
  }
  static #_ = this.ɵfac = function OrderService_Factory(t) {
    return new (t || OrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: OrderService,
    factory: OrderService.ɵfac,
    providedIn: 'root'
  });
}


/***/ }),

/***/ 55773:
/*!*****************************************************!*\
  !*** ./src/app/shared/services/shipping.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ShippingService: () => (/* binding */ ShippingService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 54860);


class ShippingService {
  constructor(http) {
    this.http = http;
    this.apiUrl = 'assets/data/shipping.json'; // JSON dosyasının yolu
  }

  getShipData() {
    return this.http.get(this.apiUrl);
  }
  setSelectedShipping(shipping) {
    this.selectedShipping = shipping;
  }
  getSelectedShipping() {
    return this.selectedShipping;
  }
  static #_ = this.ɵfac = function ShippingService_Factory(t) {
    return new (t || ShippingService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: ShippingService,
    factory: ShippingService.ɵfac,
    providedIn: 'root'
  });
}


/***/ })

}]);
//# sourceMappingURL=common.js.map