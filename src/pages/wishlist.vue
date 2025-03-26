<template>

    <div class="main-container container">
        <ul class="breadcrumb">
            <li><a href="#"><i class="fa fa-home"></i></a></li>
            <li><a href="#">Account</a></li>
            <li><a href="#">قائمة الامنيات</a></li>
        </ul>

        <div class="row">
            <!--Middle Part Start-->
            <div id="content" class="col-sm-12">
                <h2 class="title">قائمة الامنيات</h2>
                <div class="table-responsive">
                    <table class="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <td class="text-center">الصورة</td>
                                <td class="text-left"> اسم المنتج </td>
                                <td class="text-left">الاصدار</td>
                                <td class="text-right">العدد</td>
                                <td class="text-right">سعر القطعة </td>
                                <td class="text-right">Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="text-center">
                                    <a href="product.html"><img width="70px" src="../assets/img/catalog/demo/product/80/2.jpg"
                                            alt="Aspire Ultrabook Laptop" title="Aspire Ultrabook Laptop">
                                    </a>
                                </td>
                                <td class="text-left"><a href="product.html">iPad</a>
                                </td>
                                <td class="text-left">Pt 001</td>
                                <td class="text-right">In Stock</td>
                                <td class="text-right">
                                    <div class="price"> <span class="price-new">$45</span> <span
                                            class="price-old">$80</span></div>

                                </td>
                                <td class="text-right">
                                    <button class="btn btn-primary" title="" data-toggle="tooltip"
                                        onclick="cart.add('48');" type="button" data-original-title="Add to Cart"><i
                                            class="fa fa-shopping-cart"></i>
                                    </button>
                                    <a class="btn btn-danger" title="" data-toggle="tooltip" href=""
                                        data-original-title="Remove"><i class="fa fa-times"></i></a>
                                </td>
                            </tr>
                            <tr>
                                <td class="text-center">
                                    <a href="product.html"><img width="70px" src="../assets/img/catalog/demo/product/80/1.jpg"
                                            alt="Xitefun Causal Wear Fancy Shoes"
                                            title="Xitefun Causal Wear Fancy Shoes"></a>
                                </td>
                                <td class="text-left"><a href="product.html">Comas samer rumas</a>
                                </td>
                                <td class="text-left">Pt 002</td>
                                <td class="text-right">Pre-Order</td>
                                <td class="text-right">
                                    <div class="price"> <span class="price-new">$85</span> </div>
                                </td>
                                <td class="text-right">
                                    <button class="btn btn-primary" title="" data-toggle="tooltip" onclick=""
                                        type="button" data-original-title="Add to Cart"><i
                                            class="fa fa-shopping-cart"></i>
                                    </button>
                                    <a class="btn btn-danger" title="" data-toggle="tooltip" href=""
                                        data-original-title="Remove"><i class="fa fa-times"></i>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!--Middle Part End-->
        </div>
    </div>
</template>

<script>

export default {
    name: 'Wishlist',

}
</script>