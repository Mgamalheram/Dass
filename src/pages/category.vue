<template>

    <div class="main-container container">

        <div class="row">

            <!--Middle Part Start-->
            <div id="content" class="col-md-12 col-sm-12">

                <div class="products-category">
                    <div class="category-desc form-group">
                        <!--    <h3 class="title-category">{{ category.name }}</h3> -->
                        <!-- <div class="banners">
                            <div>
                                <a  href="#"><img src="../assets/image/catalog/demo/category/img-cate.jpg" alt="img cate"><br></a>
                            </div>
                        </div> -->

                    </div>

                    <!--Content Top -->
                    <div class="module filter-v3">
                        <h3 class="modtitle">فلترة </h3>
                        <div class="modcontent ">
                            <form class="type_2">

                                <div class="table_layout filter-row">
                                    <div class="table_row">
                                        <!-- - - - - - - - - - - - - - Category filter - - - - - - - - - - - - - - - - -->
                                        <div class="table_cell" style="z-index: 103;">
                                            <legend>Search</legend>
                                            <input class="form-control" type="text" value="" size="30"
                                                autocomplete="off" placeholder="Search" name="search">
                                        </div><!--/ .table_cell -->
                                        <!-- - - - - - - - - - - - - - End of category filter - - - - - - - - - - - - - - - - -->
                                        <!-- - - - - - - - - - - - - - SUB CATEGORY - - - - - - - - - - - - - - - - -->
                                        <div class="table_cell">
                                            <fieldset>
                                                <legend dir="rtl">المحافظة</legend>


                                                <select dir="rtl" v-model="selectedMohafaza" @change="updateWilayat">
                                                    <option value="">اختر المحافظة</option>

                                                    <option v-for="mohafaza in Object.keys(wilayat)" :key="mohafaza"
                                                        :value="mohafaza">
                                                        {{ mohafaza }}
                                                    </option>
                                                </select>

                                            </fieldset>

                                        </div><!--/ .table_cell -->
                                        <!-- - - - - - - - - - - - - - End SUB CATEGORY - - - - - - - - - - - - - - - - -->
                                        <!-- - - - - - - - - - - - - - Manufacturer - - - - - - - - - - - - - - - - -->
                                        <div class="table_cell">
                                            <fieldset>
                                                <legend dir="rtl">الولاية</legend>
                                                <select dir="rtl" id="wilaya" v-model="selectedWilaya">
                                                    <option value="">اختر الولاية</option>
                                                    <option v-for="wilaya in filteredWilayat" :key="wilaya"
                                                        :value="wilaya">
                                                        {{ wilaya }}
                                                    </option>
                                                </select>

                                            </fieldset>

                                        </div><!--/ .table_cell -->
                                        <!-- - - - - - - - - - - - - - End manufacturer - - - - - - - - - - - - - - - - -->

                                        <!-- - - - - - - - - - - - - - Price - - - - - - - - - - - - - - - - -->
                                        <div class="table_cell">
                                            <fieldset>
                                                <legend dir="rtl">السعر</legend>
                                                <div class="range">
                                                    Range :
                                                    <span class="min_val">$188.73</span> -
                                                    <span class="max_val">$335.15</span>
                                                    <input type="hidden" name="" class="min_value" value="188.73">
                                                    <input type="hidden" name="" class="max_value" value="335.15">
                                                </div>
                                                <div id="slider"
                                                    class="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all">
                                                    <div class="ui-slider-range ui-widget-header ui-corner-all">
                                                    </div>
                                                    <span
                                                        class="ui-slider-handle ui-state-default ui-corner-all"></span>
                                                    <span
                                                        class="ui-slider-handle ui-state-default ui-corner-all"></span>
                                                </div>
                                            </fieldset>
                                        </div><!--/ .table_cell -->

                                        <!-- - - - - - - - - - - - - - End price - - - - - - - - - - - - - - - - -->

                                        <!-- - - - - - - - - - - - - - Price - - - - - - - - - - - - - - - - -->


                                        <!-- - - - - - - - - - - - - - End price - - - - - - - - - - - - - - - - -->

                                    </div><!--/ .table_row -->
                                    <footer class="bottom_box">
                                        <div class="buttons_row">
                                            <button type="submit" class="button_grey button_submit">Search</button>
                                            <button type="reset" class="button_grey ">Reset</button>
                                        </div>
                                        <!--Back To Top-->
                                        <div class="back-to-top"><i class="fa fa-angle-up"></i></div>
                                    </footer>
                                </div><!--/ .table_layout -->



                            </form>
                        </div>

                    </div>
                    <!--Content Top End -->


                    <!-- Filters -->
                    <div class="product-filter product-filter-top filters-panel">
                        <div class="row">
                            <div class="col-sm-5 view-mode">
                                <div class="list-view">
                                    <button id="gridButton" class="btn btn-default grid" data-view="grid"
                                        data-toggle="tooltip" data-original-title="Grid"><i
                                            class="fa fa-th"></i></button>
                                    <button id="listButton" class="btn btn-default list" data-view="list"
                                        data-toggle="tooltip" data-original-title="List"><i
                                            class="fa fa-th-list"></i></button>
                                </div>
                            </div>

                            <!-- <div class="box-pagination col-md-3 col-sm-4 col-xs-12 text-right">
                                <ul class="pagination">
                                    <li class="active"><span>1</span></li>
                                    <li><a href="">2</a></li><li><a href="">&gt;</a></li>
                                    <li><a href="">&gt;|</a></li>
                                </ul>
                            </div> -->
                        </div>
                    </div>
                    <!-- //end Filters -->

                    <!--changed listings-->
                    <div class="products-list row nopadding-xs so-filter-gird">

                        <div class="product-layout col-lg-3 col-md-4 col-sm-6 col-xs-12">
                            <div class="product-item-container item--static">
                                <div class="left-block">
                                    <div class="product-image-container second_img">
                                        <a href="product.html" target="_self" title="Volup tatem accu">
                                            <img :src="ImageProduct1" class="img-1 img-responsive" alt="image1">
                                            <img :src="ImageProduct1" class="img-2 img-responsive" alt="image2">
                                        </a>
                                    </div>
                                    <span class="label-product label-new">New</span>
                                    <!--quickview-->
                                    <!--end quickview-->
                                </div>
                                <div class="right-block">
                                    <div class="button-group cartinfo--static">

                                        <button type="button" class="wishlist btn-button" title="Add to Wish List"
                                            onclick="wishlist.add('60');"><i class="fa fa-heart"></i></button>
                                        <button type="button" class="addToCart" title="Add to cart"
                                            onclick="cart.add('60 ');">
                                            <span>Add to cart </span>
                                        </button>

                                    </div>
                                    <h4><a href="product.html" title="Volup tatem accu" target="_self">Volup tatem
                                            accu</a></h4>
                                    <div class="price">
                                        <span class="price">$48.00</span>
                                    </div>
                                    <div class="description item-desc">
                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                                            voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                                    </div>
                                    <div class="list-block">
                                        <button class="addToCart btn-button" type="button" title="Add to Cart"
                                            onclick="cart.add('101', '1');"><i class="fa fa-shopping-basket"></i>
                                        </button>
                                        <button class="wishlist btn-button" type="button" title="Add to Wish List"
                                            onclick="wishlist.add('101');"><i class="fa fa-heart"></i>
                                        </button>

                                        <!--quickview-->

                                        <!--end quickview-->
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-for="product in categoryProducts" :key="product.id"
                            class="product-layout col-lg-3 col-md-4 col-sm-6 col-xs-12">
                            <div class="product-item-container item--static">
                                <div class="left-block">
                                    <div class="product-image-container second_img">
                                        <router-link :to="{ name: 'Product', params: { id: product.id } }">
                                            <img :src="ImageProduct1" class="img-1 img-responsive" :alt="product.name">
                                            <img :src="ImageProduct1" class="img-2 img-responsive" :alt="product.name">
                                        </router-link>

                                    </div>
                                    <span class="label-product label-new">New</span>
                                </div>
                                <div class="right-block">
                                    <div class="button-group cartinfo--static">
                                        <button type="button" class="wishlist btn-button" title="Add to Wish List"
                                            @click="addToWishlist(product.id)"><i class="fa fa-heart"></i></button>
                                        <button type="button" class="addToCart" title="Add to cart"
                                            @click="addToCart(product.id)">
                                            <span>Add to cart </span>
                                        </button>
                                    </div>
                                    <h4>

                                        {{ product.name }}



                                    </h4>
                                    <div class="price">
                                        <span class="price">{{ product.price }}</span>
                                    </div>
                                    <div class="description item-desc">
                                        <p>{{ product.description }}</p>
                                    </div>
                                    <div class="list-block">
                                        <button class="addToCart btn-button" type="button" title="Add to Cart"
                                            @click="addToCart(product.id)"><i class="fa fa-shopping-basket"></i>
                                        </button>
                                        <button class="wishlist btn-button" type="button" title="Add to Wish List"
                                            @click="addToWishlist(product.id)"><i class="fa fa-heart"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <!--// End Changed listings-->

                    <!-- Filters -->
                    <div class="product-filter product-filter-bottom filters-panel">
                        <div class="row">
                            <div class="col-sm-6 text-left"></div>
                            <div class="col-sm-6 text-right">Showing 1 to 12 of 12 (1 Pages)</div>
                        </div>
                    </div>
                    <!-- //end Filters -->

                </div>

            </div>



        </div>
        <!--Middle Part End-->
    </div>

</template>
<script>
import axios from "axios";
import ImageProduct1 from "../assets/img/1.jpg"

export default {
    name: 'Category',
    data() {
        return {
            ImageProduct1,
            selectedMohafaza: '',
            selectedWilaya: '',
            categoryProducts: [],
            categoryId: null,
            wilayat: {
                "محافظة مسقط": ["ولاية مسقط", "ولاية مطرح", "ولاية بوشر", "ولاية السيب", "ولاية العامرات", "ولاية قريات"],
                "محافظة ظفار": ["ولاية صلالة", "ولاية طاقة", "ولاية مرباط", "ولاية سدح", "ولاية شليم وجزر الحلانيات", "ولاية ضلكوت", "ولاية رخيوت", "ولاية ثمريت", "ولاية مقشن", "ولاية حات", "ولاية المزيونة"],
                "محافظة الداخلية": ["ولاية نزوى", "ولاية بهلاء", "ولاية منح", "ولاية الحمراء", "ولاية أدم", "ولاية إزكي", "ولاية سمائل", "ولاية بدبد", "ولاية الجبل الاخضر"],
                "محافظة الظاهرة": ["ولاية عبري", "ولاية ينقل", "ولاية ضنك"],
                "محافظة البريمي": ["ولاية البريمي", "ولاية محضة", "ولاية السنينة"],
                "محافظة الوسطى": ["ولاية هيما", "ولاية محوت", "ولاية الدقم", "ولاية الجازر"],
                "محافظة شمال الباطنة": ["ولاية صحار", "ولاية شناص", "ولاية لوى", "ولاية صحم", "ولاية الخابورة", "ولاية السويق"],
                "محافظة جنوب الباطنة": ["ولاية الرستاق", "ولاية العوابي", "ولاية نخل", "ولاية وادي المعاول", "ولاية بركاء", "ولاية المصنعة"],
                "محافظة شمال الشرقية": ["ولاية إبراء", "ولاية المضيبي", "ولاية بدية", "ولاية القابل", "ولاية وادي بني خالد", "ولاية دماء والطائيين", "ولاية سناو"],
                "محافظة جنوب الشرقية": ["ولاية صور", "ولاية الكامل والوافي", "ولاية جعلان بني بو علي", "ولاية جعلان بني بو حسن", "ولاية مصيرة"],
                "محافظة مسندم": ["ولاية خصب", "ولاية بخاء", "ولاية دبا", "ولاية مدحاء"]
            }

        }
    },
    mounted() {
        this.activateListView();
        this.handleScrollToTop();
        this.categoryId = this.$route.params.id;
        this.fetchCategoryProducts();
    },
    computed: {
        filteredWilayat() {
            return this.selectedMohafaza ? this.wilayat[this.selectedMohafaza] : [];
        }
    },
    methods: {
        activateListView() {
            const hasReloaded = sessionStorage.getItem('hasReloaded');

            if (!hasReloaded) {
                // Use setTimeout to ensure the DOM is fully loaded
                setTimeout(() => {
                    const listButton = document.getElementById('listButton');
                    if (listButton) {
                        listButton.click();
                        // Set a flag to indicate that we've reloaded
                        sessionStorage.setItem('hasReloaded', 'true');
                        // Set a flag to scroll to top after reload
                        sessionStorage.setItem('scrollToTop', 'true');
                        // Force a page refresh
                        window.location.reload();
                    }
                }, 0);
            } else {
                // If we've already reloaded, just activate the list view
                setTimeout(() => {
                    const listButton = document.getElementById('listButton');
                    if (listButton) {
                        listButton.click();
                    }
                }, 0);

                sessionStorage.removeItem('hasReloaded');
            }
        },
        handleScrollToTop() {

            if (sessionStorage.getItem('scrollToTop') === 'true') {
                setTimeout(() => {
                    window.scrollTo(0, 0);
                    sessionStorage.removeItem('scrollToTop');
                }, 100);
            }
        },
        updateWilayat() {
            this.selectedWilaya = '';
        },
        fetchCategoryProducts() {

            axios.get(`http://127.0.0.1:8000/api/categories/${this.categoryId}/products`)
                .then(response => {
                    this.categoryProducts = response.data;
                })
                .catch(error => {
                    console.error('Error fetching category products:', error);

                    this.fetchAllProductsAndFilter();
                });
        },
        fetchAllProductsAndFilter() {
            // الطريقة 2: جلب جميع المنتجات وتصفيتها على جانب العميل
            axios.get('http://127.0.0.1:8000/api/products')
                .then(response => {
                    this.categoryProducts = response.data.filter(product => product.category_id == this.categoryId);
                })
                .catch(error => {
                    console.error('Error fetching products:', error);
                });
        },
    },

    beforeMount() {
        // Check if we need to scroll to top
        this.handleScrollToTop();
    }
}
</script>
<style scoped>
@media (max-width:937px) {
    .table_row {
        display: flex !important;
        flex-direction: column !important;
    }
}
</style>