<template>
    <div class="main-container container">
        <ul class="breadcrumb">
            <li><a href="#"><i class="fa fa-home"></i></a></li>
            <li><a href="#">تاريخ الطلب</a></li>
        </ul>

        <div class="row">
            <!--Middle Part Start-->
            <div  id="content" class="col-sm-12">
                <h2 class="title">تاريخ الطلب</h2>
                <div class="table-responsive">
                    <table class="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <td class="text-center">الصورة</td>
                                <td class="text-left">اسم المنتج  </td>
                                <td class="text-center">رقم المنتج</td>
                                <td class="text-center">العدد</td>
                                <td class="text-center">الحالة</td>
                                <td class="text-center">تاريخ الاضافة</td>
                                <td class="text-right">الاجمالي</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="text-center">
                                    <a href="product.html"><img width="85" class="img-thumbnail"
                                            title="Aspire Ultrabook Laptop" alt="Aspire Ultrabook Laptop"
                                            src="../assets/img/catalog/demo/product/replacement/1.jpg">
                                    </a>
                                </td>
                                <td class="text-left"><a href="product.html">Aspire Ultrabook Laptop</a>
                                </td>
                                <td class="text-center">#214521</td>
                                <td class="text-center">1</td>
                                <td class="text-center">Shipped</td>
                                <td class="text-center">21/06/2016</td>
                                <td class="text-right">$228.00</td>
                                <td class="text-center"><a class="btn btn-info" title="" data-toggle="tooltip"
                                        href="order-information.html" data-original-title="View"><i
                                            class="fa fa-eye"></i></a>
                                </td>
                            </tr>
                            <tr>
                                <td class="text-center">
                                    <a href="product.html"><img width="85" class="img-thumbnail"
                                            title="Xitefun Causal Wear Fancy Shoes"
                                            alt="Xitefun Causal Wear Fancy Shoes"
                                            src="../assets/img/catalog/demo/product/replacement/4.jpg">
                                    </a>
                                </td>
                                <td class="text-left"><a href="product.html">Xitefun Causal Wear Fancy Shoes</a>
                                </td>
                                <td class="text-center">#1565245</td>
                                <td class="text-center">1</td>
                                <td class="text-center">Shipped</td>
                                <td class="text-center">20/06/2016</td>
                                <td class="text-right">$133.20</td>
                                <td class="text-center"><a class="btn btn-info" title="" data-toggle="tooltip"
                                        href="order-information.html" data-original-title="View"><i
                                            class="fa fa-eye"></i></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
            <!--Middle Part End-->
            <!--Right Part Start -->
            <!--Right Part End -->
        </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
export default {
    name: 'OrderHistory',
}
</script>