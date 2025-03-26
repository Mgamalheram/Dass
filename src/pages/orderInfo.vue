<template>
    <div class="main-container container">
        <ul class="breadcrumb">
            <li><a href="#"><i class="fa fa-home"></i></a></li>
            <li><a href="#">معلومات الطلب</a></li>
        </ul>

        <div class="row">
            <!--Middle Part Start-->
            <div dir="" id="content" class="col-sm-9">
                <h2 class="title">معلومات الطلب</h2>

                <table class="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <td colspan="2" class="text-left">تفاصيل الطلب</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="width: 50%;" class="text-left"> <b>رقم المنتج:</b> #214521
                                <br>
                                <b>تاريخ الاضافة:</b> 20/06/2016
                            </td>
                            <td style="width: 50%;" class="text-left"> <b>وسيلة الدفع:</b> Cash On Delivery
                                <br>
                                <b>وسيلة التوصيل:</b> Flat Shipping Rate
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table class="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <td style="width: 50%; vertical-align: top;" class="text-left">تفاصيل البطاقة</td>
                            <td style="width: 50%; vertical-align: top;" class="text-left">تفاصيل الشحن </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="text-left">Jhone Cary
                                <br>Central Square
                                <br>22 Hoi Wing Road
                                <br>New Delhi
                                <br>India
                            </td>
                            <td class="text-left">Jhone Cary
                                <br>Central Square
                                <br>22 Hoi Wing Road
                                <br>New Delhi
                                <br>India
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="table-responsive">
                    <table class="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <td class="text-left">اسم المنتج  </td>
                                <td class="text-left">الاصدار</td>
                                <td class="text-right">العدد</td>
                                <td class="text-right">السعر</td>
                                <td class="text-right">الاجمالي</td>
                                <td style="width: 20px;"></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="text-left">iPhone5 </td>
                                <td class="text-left">product 11</td>
                                <td class="text-right">1</td>
                                <td class="text-right">$123.20</td>
                                <td class="text-right">$123.20</td>
                            </tr>

                        </tbody>
                        <tfoot>
                            <tr>
                                <td colspan="3"></td>
                                <td class="text-right"><b>Sub-Total</b>
                                </td>
                                <td class="text-right">$101.00</td>

                            </tr>
                            <tr>
                                <td colspan="3"></td>
                                <td class="text-right"><b>Flat Shipping Rate</b>
                                </td>
                                <td class="text-right">$5.00</td>

                            </tr>
                            <tr>
                                <td colspan="3"></td>
                                <td class="text-right"><b>Eco Tax (-2.00)</b>
                                </td>
                                <td class="text-right">$6.00</td>

                            </tr>
                            <tr>
                                <td colspan="3"></td>
                                <td class="text-right"><b>VAT (20%)</b>
                                </td>
                                <td class="text-right">$21.20</td>

                            </tr>
                            <tr>
                                <td colspan="3"></td>
                                <td class="text-right"><b>Total</b>
                                </td>
                                <td class="text-right">$133.20</td>

                            </tr>
                        </tfoot>
                    </table>
                </div>
                <h3>تاريخ الطلب</h3>
                <table class="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <td class="text-left">تاريخ الاضافة</td>
                            <td class="text-left">الحالة</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="text-left">20/06/2016</td>
                            <td class="text-left">Processing</td>
                        </tr>
                        <tr>
                            <td class="text-left">21/06/2016</td>
                            <td class="text-left">Shipped</td>
                        </tr>
                        <tr>
                            <td class="text-left">24/06/2016</td>
                            <td class="text-left">Complete</td>
                        </tr>
                    </tbody>
                </table>



            </div>
            <!--Middle Part End-->
            <!--Right Part Start -->

            <!--Right Part End -->
        </div>
    </div>
</template>
<script>

export default {
    name: 'OrderInfo',

}
</script>