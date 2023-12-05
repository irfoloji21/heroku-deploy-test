"use strict";
(self["webpackChunkmultikart"] = self["webpackChunkmultikart"] || []).push([["src_app_home_home_module_ts"],{

/***/ 6943:
/*!*******************************************************************!*\
  !*** ./src/app/home/fashion/fashion-one/fashion-one.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FashionOneComponent: () => (/* binding */ FashionOneComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/data/slider */ 32306);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/product.service */ 97942);
/* harmony import */ var src_app_shared_services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/category.service */ 41440);
/* harmony import */ var src_app_shared_services_collection_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/collection.service */ 77427);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-owl-carousel-o */ 99436);
/* harmony import */ var _shared_footer_footer_one_footer_one_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/footer/footer-one/footer-one.component */ 38281);
/* harmony import */ var _shared_header_header_four_header_four_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/header/header-four/header-four.component */ 99261);
/* harmony import */ var _shared_components_product_product_box_one_product_box_one_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/product/product-box-one/product-box-one.component */ 60983);
/* harmony import */ var _shared_components_modal_newsletter_newsletter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/modal/newsletter/newsletter.component */ 37436);
/* harmony import */ var _widgets_slider_slider_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../widgets/slider/slider.component */ 33978);
/* harmony import */ var _widgets_blog_blog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../widgets/blog/blog.component */ 21425);
/* harmony import */ var _widgets_logo_logo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../widgets/logo/logo.component */ 85619);
/* harmony import */ var _widgets_services_services_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../widgets/services/services.component */ 83410);
















function FashionOneComponent_ng_container_45_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "app-product-box-one", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("product", product_r1)("loader", true)("currency", ctx_r2.productService == null ? null : ctx_r2.productService.Currency)("thumbnail", true)("cartModal", true);
  }
}
function FashionOneComponent_ng_container_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, FashionOneComponent_ng_container_45_ng_template_1_Template, 2, 5, "ng-template", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
}
const _c0 = function () {
  return {
    "background-image": "url(assets/images/TrendPhoto.jpeg)"
  };
};
class FashionOneComponent {
  constructor(productService, categoryService, collectionService, router, route) {
    this.productService = productService;
    this.categoryService = categoryService;
    this.collectionService = collectionService;
    this.router = router;
    this.route = route;
    this.blog = [];
    this.products = [];
    this.productCollections = [];
    this.categories = [];
    this.collections = [];
    this.sliders = [];
    this.sortedProducts = [];
    this.ProductSliderConfig = _shared_data_slider__WEBPACK_IMPORTED_MODULE_0__.ProductSlider;
    // public sliders = [{
    //   title: 'welcome to fashion',
    //   subTitle: 'Men fashion',
    //   image: 'assets/images/slider/1.jpg'
    // }, {
    //   title: 'welcome to fashion',
    //   subTitle: 'Women fashion',
    //   image: 'assets/images/slider/2.jpg'
    // }]
    // Collection banner
    // public collectionssMan = [{
    //   image: 'assets/images/collection/fashion/1.jpg',
    //   save: 'save 50%',
    //   title: 'men'
    // }];
    // public collectionssWomen = [{
    //   image: 'assets/images/collection/fashion/1.jpg',
    //   save: 'save 50%',
    //   title: 'men'
    // }];
    // Logo
    this.logo = [{
      image: 'assets/images/logos/1.png'
    }, {
      image: 'assets/images/logos/2.png'
    }, {
      image: 'assets/images/logos/3.png'
    }, {
      image: 'assets/images/logos/4.png'
    }, {
      image: 'assets/images/logos/5.png'
    }, {
      image: 'assets/images/logos/6.png'
    }, {
      image: 'assets/images/logos/7.png'
    }, {
      image: 'assets/images/logos/8.png'
    }];
    this.collectionService.getKoleksiyons().subscribe(response => {
      this.collections = response.koleksiyons;
      this.sliders = this.collections.filter(collection => collection.isShow === true).map(collection => ({
        title: collection.name,
        subTitle: collection.description,
        image: collection?.images[0]?.url
      }));
    });
  }
  ngOnInit() {
    this.topCollection();
  }
  topCollection() {
    this.productService.getProducts.subscribe(products => {
      const productArray = Array.isArray(products.products) ? products.products : [];
      this.sortedProducts = productArray.filter(product => product.sold_out > 0).sort((a, b) => b.sold_out - a.sold_out);
      console.log(this.sortedProducts);
    });
  }
  loadDataMen() {
    this.productService.getProducts.subscribe(products => {
      const productArray = Array.isArray(products.products) ? products.products : [];
      const filteredProducts = productArray.filter(product => product.gender === 'man').filter(product => product.discountPrice > 0).filter(product => {
        const discountPercentage = (product.originalPrice - product.discountPrice) / product.originalPrice * 100;
        console.log(discountPercentage, "discountPercentage");
        return discountPercentage <= 50;
      });
      const productIds = filteredProducts.map(product => product._id);
      const queryParams = {
        filteredIds: productIds.join(',')
      };
      this.router.navigate(['/shop/collection/left/sidebar'], {
        queryParams,
        queryParamsHandling: 'merge'
      });
    });
  }
  loadDataWoman() {
    this.productService.getProducts.subscribe(products => {
      const productArray = Array.isArray(products.products) ? products.products : [];
      const filteredProducts = productArray.filter(product => product.gender === 'woman').filter(product => product.discountPrice > 0).filter(product => {
        const discountPercentage = (product.originalPrice - product.discountPrice) / product.originalPrice * 100;
        console.log(discountPercentage, "discountPercentage");
        return discountPercentage <= 50;
      });
      const productIds = filteredProducts.map(product => product._id);
      const queryParams = {
        filteredIds: productIds.join(',')
      };
      this.router.navigate(['/shop/collection/left/sidebar'], {
        queryParams,
        queryParamsHandling: 'merge'
      });
    });
  }
  static #_ = this.ɵfac = function FashionOneComponent_Factory(t) {
    return new (t || FashionOneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_shared_services_category_service__WEBPACK_IMPORTED_MODULE_2__.CategoryService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_shared_services_collection_service__WEBPACK_IMPORTED_MODULE_3__.KoleksiyonService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
    type: FashionOneComponent,
    selectors: [["app-fashion-one"]],
    inputs: {
      blog: "blog"
    },
    decls: 81,
    vars: 15,
    consts: [[3, "sticky"], [1, "p-0"], [3, "sliders", "textClass", "category", "buttonText"], [1, "col-md-12", "d-flex"], [1, "container"], [1, "row"], [1, "pb-0", 2, "cursor", "pointer"], [1, "row", "partition2", "d-flex", "flex-wrap"], [1, "col-md-6", "d-flex"], [3, "click"], [1, "collection-banner", "p-right", "text-center", "flex-grow-1"], ["src", "../../../../assets/images/man0.webp", "alt", "collection-banner", 1, "img-fluid", 2, "height", "351px", "width", "664px"], [1, "contain-banner"], ["src", "../../../../assets/images/Women0.jpg", "alt", "collection-banner", 1, "img-fluid", 2, "height", "351px", "width", "664px"], [1, "title1", "section-t-space"], [1, "title-inner1"], [1, "col-lg-6", "offset-lg-3"], [1, "product-para"], [1, "text-center"], [1, "section-b-space", "p-t-0"], [1, "col"], [1, "product-m", "no-arrow", 3, "options"], [4, "ngFor", "ngForOf"], [1, "full-banner", "parallax-banner1", "parallax", "text-center", "p-left", 2, "cursor", "pointer", 3, "ngStyle"], [1, "banner-contain"], [1, "service", "border-section", "small-section"], [1, "blog", "p-t-0"], [1, "col-md-12"], [3, "blogs"], [1, "section-b-space"], [3, "logos"], ["carouselSlide", ""], [1, "product-box"], [3, "product", "loader", "currency", "thumbnail", "cartModal"]],
    template: function FashionOneComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "app-header-four", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "app-slider", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "section", 6)(7, "div", 4)(8, "div", 7)(9, "div", 8)(10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function FashionOneComponent_Template_a_click_10_listener() {
          return ctx.loadDataMen();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](12, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "div", 12)(14, "div")(15, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](16, "discounts of up to 50%");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](18, "Men");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "div", 8)(20, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function FashionOneComponent_Template_a_click_20_listener() {
          return ctx.loadDataWoman();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](22, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "div", 12)(24, "div")(25, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](26, "discounts of up to 50%");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](27, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](28, "Women");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](29, "div", 14)(30, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](31, "special offer");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](32, "h2", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](33, "top collection");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](34, "div", 4)(35, "div", 5)(36, "div", 16)(37, "div", 17)(38, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](39, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur nostrum provident eos voluptates ducimus perspiciatis dolores reiciendis architecto in. Nulla. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](40, "section", 19)(41, "div", 4)(42, "div", 5)(43, "div", 20)(44, "owl-carousel-o", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](45, FashionOneComponent_ng_container_45_Template, 2, 0, "ng-container", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](46, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](47, "section", 1)(48, "div", 23)(49, "div", 4)(50, "div", 5)(51, "div", 20)(52, "div", 24)(53, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](54, "2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](55, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](56, "fashion trends");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](57, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](58, "special offer");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](59, "div", 4)(60, "section", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](61, "app-services");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](62, "section", 26)(63, "div", 4)(64, "div", 5)(65, "div", 20)(66, "div", 14)(67, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](68, "Recent Story");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](69, "h2", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](70, "from the blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](71, "div", 5)(72, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](73, "app-blog", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](74, "section", 29)(75, "div", 4)(76, "div", 5)(77, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](78, "app-logo", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](79, "app-newsletter")(80, "app-footer-one");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("sticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("sliders", ctx.sliders)("textClass", "text-center")("category", "fashion")("buttonText", "shop now");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("options", ctx.ProductSliderConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind3"](46, 10, ctx.sortedProducts, 0, 10));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](14, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("blogs", ctx.blog);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("logos", ctx.logo);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgStyle, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_15__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_15__.CarouselSlideDirective, _shared_footer_footer_one_footer_one_component__WEBPACK_IMPORTED_MODULE_4__.FooterOneComponent, _shared_header_header_four_header_four_component__WEBPACK_IMPORTED_MODULE_5__.HeaderFourComponent, _shared_components_product_product_box_one_product_box_one_component__WEBPACK_IMPORTED_MODULE_6__.ProductBoxOneComponent, _shared_components_modal_newsletter_newsletter_component__WEBPACK_IMPORTED_MODULE_7__.NewsletterComponent, _widgets_slider_slider_component__WEBPACK_IMPORTED_MODULE_8__.SliderComponent, _widgets_blog_blog_component__WEBPACK_IMPORTED_MODULE_9__.BlogComponent, _widgets_logo_logo_component__WEBPACK_IMPORTED_MODULE_10__.LogoComponent, _widgets_services_services_component__WEBPACK_IMPORTED_MODULE_11__.ServicesComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.SlicePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 16058:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeRoutingModule: () => (/* binding */ HomeRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _fashion_fashion_one_fashion_one_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fashion/fashion-one/fashion-one.component */ 6943);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);




const routes = [{
  path: 'fashion',
  component: _fashion_fashion_one_fashion_one_component__WEBPACK_IMPORTED_MODULE_0__.FashionOneComponent
}];
class HomeRoutingModule {
  static #_ = this.ɵfac = function HomeRoutingModule_Factory(t) {
    return new (t || HomeRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: HomeRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomeRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 54320:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeModule: () => (/* binding */ HomeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 56208);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 16058);
/* harmony import */ var _fashion_fashion_one_fashion_one_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fashion/fashion-one/fashion-one.component */ 6943);
/* harmony import */ var _widgets_slider_slider_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./widgets/slider/slider.component */ 33978);
/* harmony import */ var _widgets_blog_blog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./widgets/blog/blog.component */ 21425);
/* harmony import */ var _widgets_logo_logo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./widgets/logo/logo.component */ 85619);
/* harmony import */ var _widgets_services_services_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./widgets/services/services.component */ 83410);
/* harmony import */ var _widgets_collection_collection_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./widgets/collection/collection.component */ 98892);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 61699);




// Widgest Components






class HomeModule {
  static #_ = this.ɵfac = function HomeModule_Factory(t) {
    return new (t || HomeModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
    type: HomeModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomeRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](HomeModule, {
    declarations: [_fashion_fashion_one_fashion_one_component__WEBPACK_IMPORTED_MODULE_2__.FashionOneComponent,
    // Widgest Components
    _widgets_slider_slider_component__WEBPACK_IMPORTED_MODULE_3__.SliderComponent, _widgets_blog_blog_component__WEBPACK_IMPORTED_MODULE_4__.BlogComponent, _widgets_logo_logo_component__WEBPACK_IMPORTED_MODULE_5__.LogoComponent, _widgets_services_services_component__WEBPACK_IMPORTED_MODULE_6__.ServicesComponent, _widgets_collection_collection_component__WEBPACK_IMPORTED_MODULE_7__.CollectionComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomeRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
  });
})();

/***/ }),

/***/ 21425:
/*!*****************************************************!*\
  !*** ./src/app/home/widgets/blog/blog.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlogComponent: () => (/* binding */ BlogComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/data/slider */ 32306);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_shared_services_blog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/blog.service */ 1775);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-owl-carousel-o */ 99436);






function BlogComponent_ng_container_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3)(1, "a", 4)(2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 6)(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 7)(6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "a", 4)(10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "hr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "ul", 9)(14, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const blog_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "/pages/blog/details/" + blog_r1.slug);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", blog_r1.images.length > 0 ? blog_r1.images[0].url : "../../../../../assets/images/example2.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](8, 8, blog_r1.createdAt, "dd MMMM yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "/pages/blog/details/" + blog_r1.slug);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](blog_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Posted By : ", blog_r1.shop.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", blog_r1.likes || 0, " Hits ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", blog_r1.reviews.length || 0, " Comment(s) ");
  }
}
function BlogComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, BlogComponent_ng_container_1_ng_template_1_Template, 22, 11, "ng-template", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
}
class BlogComponent {
  constructor(blogService, router) {
    this.blogService = blogService;
    this.router = router;
    this.blogs = [];
    this.BlogSliderConfig = _shared_data_slider__WEBPACK_IMPORTED_MODULE_0__.BlogSlider;
  }
  ngOnInit() {
    this.blogService.getBlogs().subscribe(res => {
      this.blogs = res.blogs;
    });
  }
  onBlogClick(blog) {
    this.router.navigate(['/pages/blog/details', blog.slug]);
  }
  static #_ = this.ɵfac = function BlogComponent_Factory(t) {
    return new (t || BlogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_blog_service__WEBPACK_IMPORTED_MODULE_1__.BlogService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: BlogComponent,
    selectors: [["app-blog"]],
    inputs: {
      blogs: "blogs"
    },
    decls: 2,
    vars: 2,
    consts: [[1, "no-arrow", 3, "options"], [4, "ngFor", "ngForOf"], ["carouselSlide", ""], [1, "col-md-12"], [3, "routerLink"], [1, "classic-effect"], ["alt", "blog", 1, "img-fluid", 3, "src"], [1, "blog-details"], [1, "style1"], [1, "post-social"], [1, "fa", "fa-heart"], [1, "fa", "fa-comments"]],
    template: function BlogComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "owl-carousel-o", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, BlogComponent_ng_container_1_Template, 2, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx.BlogSliderConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.blogs);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__.CarouselSlideDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 98892:
/*!*****************************************************************!*\
  !*** ./src/app/home/widgets/collection/collection.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CollectionComponent: () => (/* binding */ CollectionComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/data/slider */ 32306);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-owl-carousel-o */ 99436);





const _c0 = function () {
  return ["/shop/collection/left/sidebar"];
};
const _c1 = function (a0) {
  return {
    category: a0
  };
};
function CollectionComponent_ng_container_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 3)(2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "ul", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " view more ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const cats_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r2.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", cats_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](cats_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", cats_r1.text, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c1, ctx_r2.category));
  }
}
function CollectionComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CollectionComponent_ng_container_1_ng_template_1_Template, 9, 9, "ng-template", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
}
class CollectionComponent {
  constructor() {
    this.CollectionSliderConfig = _shared_data_slider__WEBPACK_IMPORTED_MODULE_0__.CollectionSlider;
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function CollectionComponent_Factory(t) {
    return new (t || CollectionComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: CollectionComponent,
    selectors: [["app-collection"]],
    inputs: {
      categories: "categories",
      category: "category",
      class: "class"
    },
    decls: 2,
    vars: 2,
    consts: [[1, "category-m", "no-arrow", 3, "options"], [4, "ngFor", "ngForOf"], ["carouselSlide", ""], [1, "category-wrapper", 3, "ngClass"], ["alt", "", 1, "img-fluid", "w-auto", 3, "src"], [1, "category-link", 3, "innerHTML"], [1, "btn", "btn-outline", 3, "routerLink", "queryParams"]],
    template: function CollectionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "owl-carousel-o", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CollectionComponent_ng_container_1_Template, 2, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.CollectionSliderConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.categories);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__.CarouselSlideDirective],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 85619:
/*!*****************************************************!*\
  !*** ./src/app/home/widgets/logo/logo.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogoComponent: () => (/* binding */ LogoComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/data/slider */ 32306);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-owl-carousel-o */ 99436);





function LogoComponent_ng_container_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 3)(2, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const logo_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/home/fashion");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", logo_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function LogoComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LogoComponent_ng_container_1_ng_template_1_Template, 4, 2, "ng-template", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
}
class LogoComponent {
  constructor() {
    this.logos = [];
    this.LogoSliderConfig = _shared_data_slider__WEBPACK_IMPORTED_MODULE_0__.LogoSlider;
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function LogoComponent_Factory(t) {
    return new (t || LogoComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: LogoComponent,
    selectors: [["app-logo"]],
    inputs: {
      logos: "logos"
    },
    decls: 2,
    vars: 2,
    consts: [[1, "no-arrow", 3, "options"], [4, "ngFor", "ngForOf"], ["carouselSlide", ""], [1, "logo-block"], [3, "routerLink"], ["alt", "logo", 1, "w-auto", 3, "src"]],
    template: function LogoComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "owl-carousel-o", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LogoComponent_ng_container_1_Template, 2, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.LogoSliderConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.logos);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__.CarouselSlideDirective],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 83410:
/*!*************************************************************!*\
  !*** ./src/app/home/widgets/services/services.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServicesComponent: () => (/* binding */ ServicesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);

class ServicesComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function ServicesComponent_Factory(t) {
    return new (t || ServicesComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ServicesComponent,
    selectors: [["app-services"]],
    decls: 39,
    vars: 0,
    consts: [[1, "row"], [1, "col-md-4", "service-block"], [1, "media"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 -117 679.99892 679"], ["d", "m12.347656 378.382812h37.390625c4.371094 37.714844 36.316407 66.164063 74.277344 66.164063 37.96875 0 69.90625-28.449219 74.28125-66.164063h241.789063c4.382812 37.714844 36.316406 66.164063 74.277343 66.164063 37.96875 0 69.902344-28.449219 74.285157-66.164063h78.890624c6.882813 0 12.460938-5.578124 12.460938-12.460937v-352.957031c0-6.882813-5.578125-12.464844-12.460938-12.464844h-432.476562c-6.875 0-12.457031 5.582031-12.457031 12.464844v69.914062h-105.570313c-4.074218.011719-7.890625 2.007813-10.21875 5.363282l-68.171875 97.582031-26.667969 37.390625-9.722656 13.835937c-1.457031 2.082031-2.2421872 4.558594-2.24999975 7.101563v121.398437c-.09765625 3.34375 1.15624975 6.589844 3.47656275 9.003907 2.320312 2.417968 5.519531 3.796874 8.867187 3.828124zm111.417969 37.386719c-27.527344 0-49.851563-22.320312-49.851563-49.847656 0-27.535156 22.324219-49.855469 49.851563-49.855469 27.535156 0 49.855469 22.320313 49.855469 49.855469 0 27.632813-22.21875 50.132813-49.855469 50.472656zm390.347656 0c-27.53125 0-49.855469-22.320312-49.855469-49.847656 0-27.535156 22.324219-49.855469 49.855469-49.855469 27.539063 0 49.855469 22.320313 49.855469 49.855469.003906 27.632813-22.21875 50.132813-49.855469 50.472656zm140.710938-390.34375v223.34375h-338.375c-6.882813 0-12.464844 5.578125-12.464844 12.460938 0 6.882812 5.582031 12.464843 12.464844 12.464843h338.375v79.761719h-66.421875c-4.382813-37.710937-36.320313-66.15625-74.289063-66.15625-37.960937 0-69.898437 28.445313-74.277343 66.15625h-192.308594v-271.324219h89.980468c6.882813 0 12.464844-5.582031 12.464844-12.464843 0-6.882813-5.582031-12.464844-12.464844-12.464844h-89.980468v-31.777344zm-531.304688 82.382813h99.703125v245.648437h-24.925781c-4.375-37.710937-36.3125-66.15625-74.28125-66.15625-37.960937 0-69.90625 28.445313-74.277344 66.15625h-24.929687v-105.316406l3.738281-5.359375h152.054687c6.882813 0 12.460938-5.574219 12.460938-12.457031v-92.226563c0-6.882812-5.578125-12.464844-12.460938-12.464844h-69.796874zm-30.160156 43h74.777344v67.296875h-122.265625zm0 0", "fill", "#ff4c3b"], [1, "media-body"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "version", "1.1", "id", "Capa_1", "x", "0px", "y", "0px", "viewBox", "0 0 480 480", 0, "xml", "space", "preserve", "width", "512px", "height", "512px", 2, "enable-background", "new 0 0 480 480"], ["d", "M472,432h-24V280c-0.003-4.418-3.588-7.997-8.006-7.994c-2.607,0.002-5.05,1.274-6.546,3.41l-112,160     c-2.532,3.621-1.649,8.609,1.972,11.14c1.343,0.939,2.941,1.443,4.58,1.444h104v24c0,4.418,3.582,8,8,8s8-3.582,8-8v-24h24     c4.418,0,8-3.582,8-8S476.418,432,472,432z M432,432h-88.64L432,305.376V432z", "fill", "#ff4c3b"], ["d", "M328,464h-94.712l88.056-103.688c0.2-0.238,0.387-0.486,0.56-0.744c16.566-24.518,11.048-57.713-12.56-75.552     c-28.705-20.625-68.695-14.074-89.319,14.631C212.204,309.532,207.998,322.597,208,336c0,4.418,3.582,8,8,8s8-3.582,8-8     c-0.003-26.51,21.486-48.002,47.995-48.005c10.048-0.001,19.843,3.151,28.005,9.013c16.537,12.671,20.388,36.007,8.8,53.32     l-98.896,116.496c-2.859,3.369-2.445,8.417,0.924,11.276c1.445,1.226,3.277,1.899,5.172,1.9h112c4.418,0,8-3.582,8-8     S332.418,464,328,464z", "fill", "#ff4c3b"], ["d", "M216.176,424.152c0.167-4.415-3.278-8.129-7.693-8.296c-0.001,0-0.002,0-0.003,0     C104.11,411.982,20.341,328.363,16.28,224H48c4.418,0,8-3.582,8-8s-3.582-8-8-8H16.28C20.283,103.821,103.82,20.287,208,16.288     V40c0,4.418,3.582,8,8,8s8-3.582,8-8V16.288c102.754,3.974,185.686,85.34,191.616,188l-31.2-31.2     c-3.178-3.07-8.242-2.982-11.312,0.196c-2.994,3.1-2.994,8.015,0,11.116l44.656,44.656c0.841,1.018,1.925,1.807,3.152,2.296     c0.313,0.094,0.631,0.172,0.952,0.232c0.549,0.198,1.117,0.335,1.696,0.408c0.08,0,0.152,0,0.232,0c0.08,0,0.152,0,0.224,0     c0.609-0.046,1.211-0.164,1.792-0.352c0.329-0.04,0.655-0.101,0.976-0.184c1.083-0.385,2.069-1.002,2.888-1.808l45.264-45.248     c3.069-3.178,2.982-8.242-0.196-11.312c-3.1-2.994-8.015-2.994-11.116,0l-31.976,31.952     C425.933,90.37,331.38,0.281,216.568,0.112C216.368,0.104,216.2,0,216,0s-0.368,0.104-0.568,0.112     C96.582,0.275,0.275,96.582,0.112,215.432C0.112,215.632,0,215.8,0,216s0.104,0.368,0.112,0.568     c0.199,115.917,91.939,210.97,207.776,215.28h0.296C212.483,431.847,216.013,428.448,216.176,424.152z", "fill", "#ff4c3b"], ["d", "M323.48,108.52c-3.124-3.123-8.188-3.123-11.312,0L226.2,194.48c-6.495-2.896-13.914-2.896-20.408,0l-40.704-40.704     c-3.178-3.069-8.243-2.981-11.312,0.197c-2.994,3.1-2.994,8.015,0,11.115l40.624,40.624c-5.704,11.94-0.648,26.244,11.293,31.947     c9.165,4.378,20.095,2.501,27.275-4.683c7.219-7.158,9.078-18.118,4.624-27.256l85.888-85.888     C326.603,116.708,326.603,111.644,323.48,108.52z M221.658,221.654c-0.001,0.001-0.001,0.001-0.002,0.002     c-3.164,3.025-8.148,3.025-11.312,0c-3.125-3.124-3.125-8.189-0.002-11.314c3.124-3.125,8.189-3.125,11.314-0.002     C224.781,213.464,224.781,218.53,221.658,221.654z", "fill", "#ff4c3b"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 -14 512.00001 512"], ["d", "m136.964844 308.234375c4.78125-2.757813 6.417968-8.878906 3.660156-13.660156-2.761719-4.777344-8.878906-6.417969-13.660156-3.660157-4.78125 2.761719-6.421875 8.882813-3.660156 13.660157 2.757812 4.78125 8.878906 6.421875 13.660156 3.660156zm0 0", "fill", "#ff4c3b"], ["d", "m95.984375 377.253906 50.359375 87.230469c10.867188 18.84375 35.3125 25.820313 54.644531 14.644531 19.128907-11.054687 25.703125-35.496094 14.636719-54.640625l-30-51.96875 25.980469-15c4.78125-2.765625 6.421875-8.878906 3.660156-13.660156l-13.003906-22.523437c1.550781-.300782 11.746093-2.300782 191.539062-37.570313 22.226563-1.207031 35.542969-25.515625 24.316407-44.949219l-33.234376-57.5625 21.238282-32.167968c2.085937-3.164063 2.210937-7.230469.316406-10.511719l-20-34.640625c-1.894531-3.28125-5.492188-5.203125-9.261719-4.980469l-38.472656 2.308594-36.894531-63.90625c-5.34375-9.257813-14.917969-14.863281-25.605469-14.996094-.128906-.003906-.253906-.003906-.382813-.003906-10.328124 0-19.703124 5.140625-25.257812 13.832031l-130.632812 166.414062-84.925782 49.03125c-33.402344 19.277344-44.972656 62.128907-25.621094 95.621094 17.679688 30.625 54.953126 42.671875 86.601563 30zm102.324219 57.238282c5.523437 9.554687 2.253906 21.78125-7.328125 27.316406-9.613281 5.558594-21.855469 2.144531-27.316407-7.320313l-50-86.613281 34.640626-20c57.867187 100.242188 49.074218 85.011719 50.003906 86.617188zm-22.683594-79.296876-10-17.320312 17.320312-10 10 17.320312zm196.582031-235.910156 13.820313 23.9375-12.324219 18.664063-23.820313-41.261719zm-104.917969-72.132812c2.683594-4.390625 6.941407-4.84375 8.667969-4.796875 1.707031.019531 5.960938.550781 8.527344 4.996093l116.3125 201.464844c3.789063 6.558594-.816406 14.804688-8.414063 14.992188-1.363281.03125-1.992187.277344-5.484374.929687l-123.035157-213.105469c2.582031-3.320312 2.914063-3.640624 3.425781-4.480468zm-16.734374 21.433594 115.597656 200.222656-174.460938 34.21875-53.046875-91.878906zm-223.851563 268.667968c-4.390625-7.597656-6.710937-16.222656-6.710937-24.949218 0-17.835938 9.585937-34.445313 25.011718-43.351563l77.941406-45 50 86.601563-77.941406 45.003906c-23.878906 13.78125-54.515625 5.570312-68.300781-18.304688zm0 0", "fill", "#ff4c3b"], ["d", "m105.984375 314.574219c-2.761719-4.78125-8.878906-6.421875-13.660156-3.660157l-17.320313 10c-4.773437 2.757813-10.902344 1.113282-13.660156-3.660156-2.761719-4.78125-8.878906-6.421875-13.660156-3.660156s-6.421875 8.878906-3.660156 13.660156c8.230468 14.257813 26.589843 19.285156 40.980468 10.980469l17.320313-10c4.78125-2.761719 6.421875-8.875 3.660156-13.660156zm0 0", "fill", "#ff4c3b"], ["d", "m497.136719 43.746094-55.722657 31.007812c-4.824218 2.6875-6.5625 8.777344-3.875 13.601563 2.679688 4.820312 8.765626 6.566406 13.601563 3.875l55.71875-31.007813c4.828125-2.6875 6.5625-8.777344 3.875-13.601562-2.683594-4.828125-8.773437-6.5625-13.597656-3.875zm0 0", "fill", "#ff4c3b"], ["d", "m491.292969 147.316406-38.636719-10.351562c-5.335938-1.429688-10.820312 1.734375-12.25 7.070312-1.429688 5.335938 1.738281 10.816406 7.074219 12.246094l38.640625 10.351562c5.367187 1.441407 10.824218-1.773437 12.246094-7.070312 1.429687-5.335938-1.738282-10.820312-7.074219-12.246094zm0 0", "fill", "#ff4c3b"], ["d", "m394.199219 7.414062-10.363281 38.640626c-1.429688 5.335937 1.734374 10.816406 7.070312 12.25 5.332031 1.425781 10.816406-1.730469 12.25-7.070313l10.359375-38.640625c1.429687-5.335938-1.734375-10.820312-7.070313-12.25-5.332031-1.429688-10.816406 1.734375-12.246093 7.070312zm0 0", "fill", "#ff4c3b"]],
    template: function ServicesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5)(6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "free shipping");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "free shipping world wide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1)(11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "svg", 6)(13, "g")(14, "g")(15, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 7)(17, "path", 8)(18, "path", 9)(19, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5)(21, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "24 X 7 service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "online service for new customer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 1)(26, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 12)(29, "path", 13)(30, "path", 14)(31, "path", 15)(32, "path", 16)(33, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 5)(35, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "festival offer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "new online special festival offer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 33978:
/*!*********************************************************!*\
  !*** ./src/app/home/widgets/slider/slider.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SliderComponent: () => (/* binding */ SliderComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/data/slider */ 32306);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/product.service */ 97942);
/* harmony import */ var src_app_shared_services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/category.service */ 41440);
/* harmony import */ var src_app_shared_services_collection_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/collection.service */ 77427);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-owl-carousel-o */ 99436);








const _c0 = function (a0) {
  return {
    "background-image": a0
  };
};
function SliderComponent_ng_container_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "div", 6)(4, "div", 7)(5, "div")(6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SliderComponent_ng_container_1_ng_template_1_Template_a_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const slider_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.shopNow(slider_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const slider_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r2.textClass)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](6, _c0, "url(" + slider_r1.image + ")"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](slider_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](slider_r1.subTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx_r2.buttonClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r2.buttonText, " ");
  }
}
function SliderComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SliderComponent_ng_container_1_ng_template_1_Template, 12, 8, "ng-template", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
}
class SliderComponent {
  constructor(productService, categoryService, collectionService, router, route) {
    this.productService = productService;
    this.categoryService = categoryService;
    this.collectionService = collectionService;
    this.router = router;
    this.route = route;
    this.products = [];
    this.slider = [];
    this.HomeSliderConfig = _shared_data_slider__WEBPACK_IMPORTED_MODULE_0__.HomeSlider;
  }
  ngOnInit() {}
  shopNow(slider) {
    this.collectionService.getKoleksiyons().subscribe(res => {
      this.slider = res;
    });
    if (slider.subTitle === "The most liked products") {
      this.shopNowMostLiked();
    } else if (slider.subTitle === "Recently added products") {
      this.shopNowNewProducts();
    }
  }
  shopNowMostLiked() {
    this.productService.getProducts.subscribe(response => {
      this.products = response.products;
    });
    const productsArray = Array.isArray(this.products) ? this.products : [this.products];
    const filteredProducts = productsArray.filter(product => product.ratings >= 3 && product.ratings <= 5);
    const productIdss = filteredProducts.map(product => product._id);
    const queryParams = {
      theMostLiked: productIdss
    };
    this.router.navigate(['/shop/collection/left/sidebar'], {
      queryParams,
      queryParamsHandling: 'merge'
    });
  }
  shopNowNewProducts() {
    this.productService.getProducts.subscribe(response => {
      this.products = response.products;
      const currentDate = new Date();
      const tenDaysAgo = new Date(currentDate);
      tenDaysAgo.setDate(currentDate.getDate() - 10);
      const filteredProducts = this.products.filter(product => {
        const createdAtDate = new Date(product.createdAt);
        return createdAtDate >= tenDaysAgo && createdAtDate <= currentDate;
      });
      const newProductsId = filteredProducts.map(product => product._id);
      const queryParams = {
        theMostLiked: newProductsId
      };
      this.router.navigate(['/shop/collection/left/sidebar'], {
        queryParams,
        queryParamsHandling: 'merge'
      });
    });
  }
  static #_ = this.ɵfac = function SliderComponent_Factory(t) {
    return new (t || SliderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_category_service__WEBPACK_IMPORTED_MODULE_2__.CategoryService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_collection_service__WEBPACK_IMPORTED_MODULE_3__.KoleksiyonService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: SliderComponent,
    selectors: [["app-slider"]],
    inputs: {
      sliders: "sliders",
      class: "class",
      textClass: "textClass",
      category: "category",
      buttonText: "buttonText",
      buttonClass: "buttonClass",
      products: "products"
    },
    decls: 2,
    vars: 3,
    consts: [[1, "home-slider", 3, "options", "ngClass"], [4, "ngFor", "ngForOf"], ["carouselSlide", ""], [1, "home", 3, "ngClass", "ngStyle"], [1, "container"], [1, "row"], [1, "col"], [1, "slider-contain"], [1, "btn", "btn-solid", 3, "ngClass", "click"]],
    template: function SliderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "owl-carousel-o", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SliderComponent_ng_container_1_Template, 2, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("options", ctx.HomeSliderConfig)("ngClass", ctx.class);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.sliders);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgStyle, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_7__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_7__.CarouselSlideDirective],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 77427:
/*!*******************************************************!*\
  !*** ./src/app/shared/services/collection.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KoleksiyonService: () => (/* binding */ KoleksiyonService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 54860);


class KoleksiyonService {
  constructor(http) {
    this.http = http;
    this.apiUrl = "http://localhost:8000/api/v2";
  }
  getKoleksiyons() {
    return this.http.get(`/koleksiyon/koleksiyons`);
  }
  static #_ = this.ɵfac = function KoleksiyonService_Factory(t) {
    return new (t || KoleksiyonService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: KoleksiyonService,
    factory: KoleksiyonService.ɵfac,
    providedIn: 'root'
  });
}


/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map