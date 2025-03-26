<template>
    <header dir="ltr" id="header" class=" typeheader-1">

        <!-- Header Top -->
        <div class="header-top hidden-compact">
            <div class="container">
                <div class="row">
                    <div class="header-top-left col-lg-2 col-md-2 col-sm-5 hidden-xs">
                        <div class="telephone ">
                            <ul class="socials">
                                <li class="facebook"><a href="https://www.facebook.com/smartaddons.page"
                                        target="_blank"><i class="fa fa-facebook"></i></a></li>
                                <li class="twitter"><a href="https://twitter.com/smartaddons" target="_blank"><i
                                            class="fa fa-twitter"></i></a></li>
                                <li class="instagram"><a href="#" target="_blank"><i class="fa fa-instagram"></i></a>
                                </li>
                            </ul>
                        </div>


                    </div>
                    <div class="header-top-right col-lg-9 col-md-8 col-sm-7 col-xs-12">
                        <ul class="top-link list-inline lang-curr">
                            <li class="language">
                                <div class="btn-group languages-block " style="margin-bottom: 45px;">
                                    <form action="#" method="post" enctype="multipart/form-data" id="bt-language">

                                        <div id="google_translate_element">
                                        </div>
                                    </form>
                                </div>

                            </li>
                        </ul>
                        <ul class="top-log list-inline " style="display: flex;">
                            <router-link :to="{ name: 'Seller' }">
                                <li class="me-3" style="margin-right: 10px;"><a href="#">تسجيل كبائع</a> </li>
                            </router-link>
                            <router-link :to="{ name: 'Login' }">
                                <li><i class="fa fa-lock"></i><a href="#">تسجيل دخول</a> / </li>
                            </router-link>
                            <router-link :to="{ name: 'Register' }">
                                <li><a href="#">انشاء حساب</a></li>
                            </router-link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="header-middle hidden-compact">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-4 col-sm-12 col-xs-12">
                        <div class="logo ">
                            <a href="/"><img width="100px" src="../assets/img/logo.png" title="Your Store"
                                    alt="Your Store" /></a>
                        </div>

                    </div>
                    <div class="col-lg-9 col-md-8 col-sm-12 col-xs-12 middle-right" style="margin-top: 35px;"
                        bis_skin_checked="1">
                        <div class="search-header-w" bis_skin_checked="1">
                            <div class="icon-search hidden-lg hidden-md">
                                <i class="fa fa-search" @click="serchMobile" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"></i>
                            </div>

                            <div id="sosearchpro" class="sosearchpro-wrapper so-search " bis_skin_checked="1">
                                <form>
                                    <div id="search0" class="search input-group form-group" bis_skin_checked="1">
                                        <div class="select_category filter_type  icon-select hidden-xs"
                                            bis_skin_checked="1">
                                            <select class="no-border" name="category_id" v-model="category_selected">
                                                <option selected value="null">كل الاقسام </option>

                                                <option v-for="categorie in categories" :value="categorie.id">{{
                                                    categorie.name }}</option>

                                            </select>
                                        </div>


                                        <input class="autosearch-input form-control" v-model="search" placeholder="ابحث عن">
                                        <button @click="search_fun" type="button" class="button-search btn btn-primary "
                                            name="submit_search"><i><svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                    height="16" fill="currentColor" class="bi bi-search mb-2"
                                                    viewBox="0 0 16 16">
                                                    <path
                                                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                                </svg></i></button>

                                    </div>
                                    <input type="hidden" name="route" value="product/search">
                                </form>
                            </div>
                        </div>

                        <div class="shopping_cart" bis_skin_checked="1">
                            <div id="cart" class="btn-shopping-cart" bis_skin_checked="1">
                                <router-link :to="{ name: 'Cart' }">
                                    <div href="javascript:void(0)" data-loading-text="Loading... "
                                        class="btn-group top_cart dropdown-toggle" data-toggle="dropdown"
                                        aria-expanded="true" bis_skin_checked="1">
                                        <div class="shopcart" bis_skin_checked="1">
                                            <span class="icon-c">
                                                <i class="mb-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                        fill="currentColor" class="bi bi-basket " viewBox="0 0 16 16">
                                                        <path
                                                            d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9zM1 7v1h14V7zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5" />
                                                    </svg>
                                                </i>
                                            </span>
                                            <div class="shopcart-inner" bis_skin_checked="1">
                                                <p class="text-shopping-cart">
                                                    عربتي
                                                </p>

                                                <span class="total-shopping-cart cart-total-full">
                                                    <span class="items_cart">02</span><span class="items_cart2">
                                                        item(s)</span><span class="items_carts">$162.00</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </router-link>

                                <ul class="dropdown-menu pull-right shoppingcart-box" role="menu">
                                    <li>
                                        <table class="table table-striped">
                                            <tbody>
                                                <tr>
                                                    <td class="text-center" style="width:70px">
                                                        <a href="#" bis_skin_checked="1">
                                                            <img src="../assets/img/catalog/demo/product/80/1.jpg"
                                                                style="width:70px" alt="Yutculpa ullamcon"
                                                                title="Yutculpa ullamco" class="preview">
                                                        </a>
                                                    </td>
                                                    <td class="text-left"> <a class="cart_product_name" href="#"
                                                            bis_skin_checked="1">Yutculpa
                                                            ullamco</a>
                                                    </td>
                                                    <td class="text-center">x1</td>
                                                    <td class="text-center">$80.00</td>
                                                    <td class="text-right">
                                                        <a href="#" class="fa fa-edit" bis_skin_checked="1"></a>
                                                    </td>
                                                    <td class="text-right">
                                                        <a onclick="cart.remove('2');"
                                                            class="fa fa-times fa-delete"></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="text-center" style="width:70px">
                                                        <a href="#" bis_skin_checked="1">
                                                            <img src="../assets/img/catalog/demo/product/80/2.jpg"
                                                                style="width:70px" alt="Xancetta bresao"
                                                                title="Xancetta bresao" class="preview">
                                                        </a>
                                                    </td>
                                                    <td class="text-left"> <a class="cart_product_name" href="#"
                                                            bis_skin_checked="1">Xancetta bresao</a>
                                                    </td>
                                                    <td class="text-center">x1</td>
                                                    <td class="text-center">$60.00</td>
                                                    <td class="text-right">
                                                        <a href="#" class="fa fa-edit" bis_skin_checked="1"></a>
                                                    </td>
                                                    <td class="text-right">
                                                        <a onclick="cart.remove('1');"
                                                            class="fa fa-times fa-delete"></a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </li>
                                    <li>
                                        <div bis_skin_checked="1">
                                            <table class="table table-bordered">
                                                <tbody>
                                                    <tr>
                                                        <td class="text-left"><strong> التكلفة المبدئية</strong>
                                                        </td>
                                                        <td class="text-right">$140.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="text-left"><strong>المجموع الكلي</strong>
                                                        </td>
                                                        <td class="text-right">$162.00</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <p class="text-right">
                                                <router-link :to="{ name: 'Cart' }">
                                                    <a class="btn view-cart" href="#" bis_skin_checked="1">
                                                        <i class="fa fa-shopping-cart"></i> عربة التسوق
                                                    </a>
                                                </router-link>

                                                <router-link :to="{ name: 'Chekout' }">

                                                    &nbsp;&nbsp;&nbsp; <a class="btn btn-mega checkout-cart" href="#"
                                                        bis_skin_checked="1"><i class="fa fa-share"></i>الدفع</a>
                                                </router-link>
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <router-link :to="{ name: 'Wishlist' }">
                            <div class="wishlist hidden-md hidden-sm hidden-xs" bis_skin_checked="1">

                                <a href="#" id="wishlist-total" class="top-link-wishlist">

                                    <i class=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" class="bi bi-heart-fill mb-2" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd"
                                                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                                        </svg></i>
                                </a>
                            </div>
                        </router-link>

                    </div>
                </div>
            </div>
        </div>

        <div class="header-bottom hidden-compact">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                        <div class="menu-vertical-w">
                            <div class="responsive so-megamenu megamenu-style-dev ">
                                <div class="so-vertical-menu ">
                                    <nav class="navbar-default">

                                        <div class="container-megamenu vertical">
                                            <div id="menuHeading">
                                                <div class="megamenuToogle-wrapper">
                                                    <div class="megamenuToogle-pattern">
                                                        <div class="container">
                                                            <div>
                                                                <span></span>
                                                                <span></span>
                                                                <span></span>
                                                            </div>
                                                            كل الاقسام
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="navbar-header">
                                                <button type="button" id="show-verticalmenu" data-toggle="collapse"
                                                    class="navbar-toggle">
                                                    <i class="fa fa-bars"></i>
                                                    <span> All Categories </span>
                                                </button>
                                            </div>
                                            <div class="vertical-wrapper">
                                                <span id="remove-verticalmenu" class="fa fa-times"></span>
                                                <div class="megamenu-pattern">
                                                    <div class="container-mega">
                                                        <ul class="megamenu">
                                                            <li class="item-vertical  with-sub-menu hover">
                                                                <p class="close-menu"></p>

                                                                <div class="sub-menu" data-subwidth="60">
                                                                    <div class="content">
                                                                        <div class="row">
                                                                            <div class="col-sm-12">
                                                                                <div class="row">
                                                                                    <div class="col-md-4 static-menu">
                                                            <li v-for="category in categories">
                                                                {{ category.name }}
                                                            </li>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            </div>
                            </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </nav>
        </div>
        </div>
        </div>
        </div>
        <div class="col-lg-9 col-md-9 col-sm-6 col-xs-6">
            <div class="main-menu-w">
                <div class="responsive so-megamenu megamenu-style-dev">
                    <nav class="navbar-default">
                        <div class=" container-megamenu  horizontal open ">
                            <div class="navbar-header">
                                <button type="button" id="show-megamenu" data-toggle="collapse" class="navbar-toggle">
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                </button>
                            </div>

                            <div class="megamenu-wrapper">
                                <span id="remove-megamenu" class="fa fa-times"></span>
                                <div class="megamenu-pattern">
                                    <div class="container-mega">
                                        <ul class="megamenu" data-transition="slide" data-animationtime="250">
                                            <li class=" ">
                                                <a href="/">الرئيسية</a>

                                            </li>
                                            <li class="with-sub-menu hover">
                                                <p class="close-menu"></p>
                                                <a href="#" class="clearfix">
                                                    <strong>سمات</strong>
                                                    <b class="caret"></b>
                                                </a>
                                                <div class="sub-menu" style="width: 100%; right: auto;">
                                                    <div class="content">
                                                        <div class="row">


                                                            <div class="col-md-3">
                                                                <div class="column">
                                                                    <a href="#" class="title-submenu">
                                                                        صفحات التسوق
                                                                    </a>
                                                                    <div>
                                                                        <ul class="row-list">
                                                                            <router-link :to="{ name: 'Cart' }">

                                                                                <li><a href="#">
                                                                                        صفحة عربة التسوق
                                                                                    </a></li>
                                                                            </router-link>
                                                                            <router-link :to="{ name: 'Chekout' }">
                                                                                <li><a href="#">
                                                                                        صفحة الدفع
                                                                                    </a></li>
                                                                            </router-link>
                                                                            <router-link :to="{ name: 'Wishlist' }">

                                                                                <li><a href="#">
                                                                                        صفحة الامنيات
                                                                                    </a></li>
                                                                            </router-link>

                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-3">
                                                                <div class="column">
                                                                    <a href="#" class="title-submenu">
                                                                        ملفي الشخصي
                                                                    </a>
                                                                    <div>
                                                                        <ul class="row-list">
                                                                            <router-link :to="{ name: 'Login' }">

                                                                                <li><a href="#">
                                                                                        تسجيل الدخول
                                                                                    </a></li>
                                                                            </router-link>
                                                                            <router-link :to="{ name: 'Register' }">
                                                                                <li><a href="#">
                                                                                        انشاء حساب
                                                                                    </a></li>
                                                                            </router-link>
                                                                            <router-link :to="{ name: 'Profile' }">

                                                                                <li><a href="#">
                                                                                        حسابي</a></li>
                                                                            </router-link>
                                                                            <router-link :to="{ name: 'OrderHistory' }">
                                                                                <li><a href="#">
                                                                                        تاريخ الطلبات</a></li>
                                                                            </router-link>
                                                                            <router-link :to="{ name: 'OrderInfo' }">

                                                                                <li><a href="#">
                                                                                        تفاصيل الطلبات
                                                                                    </a></li>
                                                                            </router-link>


                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="with-sub-menu hover">
                                                <p class="close-menu"></p>
                                                <a href="#" class="clearfix">
                                                    <strong>اخري</strong>
                                                    <b class="caret"></b>
                                                </a>
                                                <div class="sub-menu" style="width: 40%; ">
                                                    <div class="content">
                                                        <div class="row">
                                                            <div class="col-md-6">
                                                                <ul class="row-list">
                                                                    <!--                                                                     <router-link :to="{ path: 'FAQ' }">
                                                                    </router-link>
 -->
                                                                    <li><a class="subcategory_item"
                                                                            @click="GoToHell">الاسئلة
                                                                            الشائعة</a></li>



                                                                    <router-link :to="{ name: 'AboutUs' }">

                                                                        <li><a class="subcategory_item"
                                                                                href="/about-us">من
                                                                                نحن
                                                                            </a></li>
                                                                    </router-link>
                                                                </ul>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="with-sub-menu hover">
                                                <p class="close-menu"></p>
                                                <a href="#" class="clearfix">
                                                    <strong>الاقسام</strong>

                                                    <b class="caret"></b>
                                                </a>
                                                <div class="sub-menu" style="width: 100%; display: none;">
                                                    <div class="content">
                                                        <div class="row">
                                                            <div class="col-sm-12">
                                                                <div class="row">
                                                                    <div v-for="categorie in categories"
                                                                        class="col-md-3 img img1">
                                                                        <a href="#"><img
                                                                                :src="'http://127.0.0.1:8000/storage/' + categorie.image"
                                                                                alt="banner1"></a>

                                                                        <a href="#" class="title-submenu">
                                                                            {{ categorie.name }}
                                                                        </a>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </li>

                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        </div>
        </div>

        </div>

    </header>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    ...
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';


export default {
    name: 'Navbar',
    methods: {
        GoToHell() {
            location.href = "/FAQ"
        },
        search_fun(event) {
            if (event) event.preventDefault(); // منع السلوك الافتراضي إذا كان هناك حدث

            axios.post('http://127.0.0.1:8000/api/products/search', {
                "search": this.search,
                "category_id": this.category_selected
            }).then(({ data }) => {
                console.log('Search results:', data);
                this.$router.push({
                    name: 'search',
                    params: { searchResults: JSON.stringify(data) }
                }).catch(err => {
                    console.error('Navigation error:', err);
                });
            }).catch(error => {
                console.error('API error:', error);
            });
        }
    },
    data() {
        return {
            categories: [],
            search: null,
            data: [],
            category_selected: null,
        }
    },
    mounted() {
        axios.get("http://127.0.0.1:8000/api/categories").then(({ data }) => {
            this.categories = data;
        })
    },
}
</script>