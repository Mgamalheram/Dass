<template>
    <div class="main-container container">
        <ul dir="ltr" class="breadcrumb">
            <li><a href="#"><i class="fa fa-home"></i></a></li>
            <li><a href="#">عربة التسوق </a></li>
        </ul>

        <div class="row">
            <!--Middle Part Start-->
            <div id="content" class="col-sm-12">
                <h2 class="title">عربة التسوق</h2>
                <div class="table-responsive form-group">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <td class="text-center">صورة المنتج</td>
                                <td class="text-left">اسم المنتج </td>
                                <td class="text-left">نموذج</td>
                                <td class="text-left">كمية</td>
                                <td class="text-right">سعر الوحدة</td>
                                <td class="text-right">الاجمالي</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="text-center"><a href="product.html"><img width="70px"
                                            src="../assets/img/catalog/demo/product/replacement/8.jpg"
                                            alt="Aspire Ultrabook Laptop" title="Aspire Ultrabook Laptop"
                                            class="img-thumbnail" /></a></td>
                                <td class="text-left"><a href="product.html">Emasa rumas gacem</a><br />
                                </td>
                                <td class="text-left">Pt 001</td>
                                <td class="text-left" width="200px">
                                    <div class="input-group btn-block quantity">
                                        <input type="text" name="quantity" value="1" size="1" class="form-control" />
                                        <span class="input-group-btn">
                                            <button type="submit" data-toggle="tooltip" title="Update"
                                                class="btn btn-primary"><i class="fa fa-clone"></i></button>
                                            <button type="button" data-toggle="tooltip" title="Remove"
                                                class="btn btn-danger" onClick=""><i
                                                    class="fa fa-times-circle"></i></button>
                                        </span>
                                    </div>
                                </td>
                                <td class="text-right">$120.00</td>
                                <td class="text-right">$120.00</td>
                            </tr>
                            <tr>
                                <td class="text-center"><a href="product.html"><img width="70px"
                                            src="../assets/img/catalog/demo/product/replacement/10.jpg"
                                            alt="Xitefun Causal Wear Fancy Shoes"
                                            title="Xitefun Causal Wear Fancy Shoes" class="img-thumbnail" /></a></td>
                                <td class="text-left"><a href="product.html">Comas samer rumas</a></td>
                                <td class="text-left">Pt 002</td>
                                <td class="text-left" width="200px">
                                    <div class="input-group btn-block quantity">
                                        <input type="text" name="quantity" value="1" size="1" class="form-control" />
                                        <span class="input-group-btn">
                                            <button type="submit" data-toggle="tooltip" title="Update"
                                                class="btn btn-primary"><i class="fa fa-clone" </i></button>
                                            <button type="button" data-toggle="tooltip" title="Remove"
                                                class="btn btn-danger" onClick=""><i
                                                    class="fa fa-times-circle"></i></button>
                                        </span>
                                    </div>
                                </td>
                                <td class="text-right">$150.00</td>
                                <td class="text-right">$150.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3 class="subtitle no-margin">ماذا تريد أن تفعل بعد ذلك؟</h3>
                <p>اختر ما إذا كان لديك رمز خصم أو نقاط مكافأة تريد استخدامها أو ترغب في تقدير تكلفة التوصيل.</p>
                <div class="panel-group" id="accordion">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                                <a href="#collapse-coupon" class="accordion-toggle" data-toggle="collapse"
                                    data-parent="#accordion" aria-expanded="true">استخدم رمز القسيمة

                                    <i class="fa fa-caret-down"></i>
                                </a>
                            </h4>
                        </div>
                        <div id="collapse-coupon" class="panel-collapse collapse in" aria-expanded="true">
                            <div class="panel-body">
                                <label class="col-sm-2 control-label" for="input-coupon">ادخل الكود</label>
                                <div class="input-group">
                                    <input type="text" name="coupon" value="" placeholder="ادخل الكود الخاص بك"
                                        id="input-coupon" class="form-control">
                                    <span class="input-group-btn"><input type="button" value=" تفعيل"
                                            id="button-coupon" data-loading-text="Loading..."
                                            class="btn btn-primary"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-sm-4 col-sm-offset-8">
                        <table class="table table-bordered">
                            <tbody>
                                <tr>
                                    <td class="text-right">
                                        <strong>Sub-Total:</strong>
                                    </td>
                                    <td class="text-right">$168.71</td>
                                </tr>
                                <tr>
                                    <td class="text-right">
                                        <strong>Flat Shipping Rate:</strong>
                                    </td>
                                    <td class="text-right">$4.69</td>
                                </tr>

                                <tr>
                                    <td class="text-right">
                                        <strong>Total:</strong>
                                    </td>
                                    <td class="text-right">$213.70</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="buttons">
                    <div class="pull-left"><a href="/" class="btn btn-primary">تابع التسوق</a></div>
                    <router-link :to="{name:'Chekout'}">
                        <div class="pull-right"><a href="" class="btn btn-primary">دفع</a></div>
                    </router-link>
                </div>
            </div>
            <!--Middle Part End -->

        </div>
    </div>
</template>

<script>

export default {
    name: 'Cart',
    
}
</script>