<template>

    <div class="main-container container">
        <ul class="breadcrumb">
            <li><a href="#"><i class="fa fa-home"></i></a></li>
            <li><a href="#">Checkout</a></li>

        </ul>

        <div class="row">
            <!--Middle Part Start-->
            <div id="content" class="col-sm-12">
                <h2 class="title">Checkout</h2>
                <div class="so-onepagecheckout row">
                    <div class="col-left col-sm-3">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h4 class="panel-title"><i class="fa fa-user"></i> معلوماتك الشخصية</h4>
                            </div>
                            <div class="panel-body">
                                <fieldset id="account">
                                    <div class="form-group required">
                                        <label for="input-payment-firstname" class="control-label">الاسم الاول</label>
                                        <input type="text" class="form-control" id="input-payment-firstname"
                                            placeholder="الاسم الاول " value="" name="firstname">
                                    </div>
                                    <div class="form-group required">
                                        <label for="input-payment-lastname" class="control-label">الاسم الاخير </label>
                                        <input type="text" class="form-control" id="input-payment-lastname"
                                            placeholder="الاسم الاخير" value="" name="lastname">
                                    </div>
                                    <div class="form-group required">
                                        <label for="input-payment-email" class="control-label">الاميل</label>
                                        <input type="text" class="form-control" id="input-payment-email"
                                            placeholder="الايميل" value="" name="email">
                                    </div>
                                    <div class="form-group required">
                                        <label for="input-payment-telephone" class="control-label">رقم الهاتم</label>
                                        <input type="text" class="form-control" id="input-payment-telephone"
                                            placeholder="رقم الهاتف" value="" name="telephone">
                                    </div>
                                </fieldset>
                            </div>
                        </div>
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h4 class="panel-title"><i class="fa fa-book"></i> عنوانك</h4>
                            </div>
                            <div class="panel-body">
                                <fieldset id="address" class="required">
                                    <div class="form-group required">
                                        <label for="input-payment-address-1" class="control-label">Address 1</label>
                                        <input type="text" class="form-control" id="input-payment-address-1"
                                            placeholder="Address 1" value="" name="address_1">
                                    </div>
                                    <div class="form-group">
                                        <label for="input-payment-address-2" class="control-label">Address 2</label>
                                        <input type="text" class="form-control" id="input-payment-address-2"
                                            placeholder="Address 2" value="" name="address_2">
                                    </div>
                                    <div class="form-group required">
                                        <label for="input-payment-city" class="control-label">المدينة</label>
                                        <input type="text" class="form-control" id="input-payment-city"
                                            placeholder="المدينة" value="" name="city">
                                    </div>
                                    <div class="form-group required">
                                        <label for="input-payment-postcode" class="control-label">الرمز البريدي</label>
                                        <input type="text" class="form-control" id="input-payment-postcode"
                                            placeholder="الرمز البريدي" value="" name="postcode">
                                    </div>
                                    <div class="form-group required">
                                        <label for="input-payment-country" class="control-label">البلد</label>
                                        <select class="form-control" id="input-payment-country" name="country_id">
                                            <option value="">البلد</option>
                                            <option value="244">Aaland Islands</option>
                                            <option value="1">Afghanistan</option>
                                            <option value="2">Albania</option>
                                            <option value="3">Algeria</option>
                                            <option value="4">American Samoa</option>
                                            <option value="5">Andorra</option>
                                            <option value="6">Angola</option>
                                            <option value="7">Anguilla</option>
                                            <option value="8">Antarctica</option>
                                            <option value="9">Antigua and Barbuda</option>
                                            <option value="10">Argentina</option>
                                            <option value="11">Armenia</option>
                                            <option value="12">Aruba</option>
                                            <option value="252">Ascension Island (British)</option>
                                            <option value="13">Australia</option>
                                            <option value="14">Austria</option>
                                            <option value="15">Azerbaijan</option>
                                            <option value="16">Bahamas</option>
                                            <option value="17">Bahrain</option>

                                        </select>
                                    </div>
                                    <div class="checkbox">
                                        <label>
                                            عناوين التسليم والفواتير الخاصة بي هي نفسها.</label>
                                            <input type="checkbox" checked="checked" value="1" name="shipping_address">
                                    </div>
                                </fieldset>
                            </div>
                        </div>
                    </div>
                    <div class="col-right col-sm-9" dir="ltr">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="panel panel-default no-padding">
                                    <div class="col-sm-6 checkout-shipping-methods">
                                        <div class="panel-heading">
                                            <h4 class="panel-title"><i class="fa fa-truck"></i> طريقة التوصيل</h4>
                                        </div>
                                        <div class="panel-body ">
                                            <p>يرجى تحديد طريقة الشحن المفضلة لاستخدامها في هذا الطلب.</p>
                                            <div class="radio">
                                                <label>
                                                    <input type="radio" checked="checked" name="Free Shipping">
                                                    سعر الشحن الثابت - 7.50 دولارًا</label>
                                            </div>


                                        </div>
                                    </div>
                                    <div class="col-sm-6  checkout-payment-methods">
                                        <div class="panel-heading">
                                            <h4 class="panel-title"><i class="fa fa-credit-card"></i> وسيلة الدفع
                                            </h4>
                                        </div>
                                        <div class="panel-body">
                                            <p>يرجى تحديد طريقة الدفع المفضلة لاستخدامها في هذا الطلب.</p>
                                            <div class="radio">
                                                <label>
                                                    <input type="radio" checked="checked" name="Cash On Delivery">
                                                    الدفع كاش عند التوصيل 
                                                    </label>
                                            </div>

                                        </div>
                                    </div>
                                </div>



                            </div>



                            <div class="col-sm-12">
                                <div class="panel panel-default">
                                    <div class="panel-heading">
                                        <h4 class="panel-title"><i class="fa fa-ticket"></i> هل لديك قسيمة؟
                                        </h4>
                                    </div>
                                    <div class="panel-body row">
                                        <div class="col-sm-12 ">
                                            <div class="input-group">
                                                <input type="text" class="form-control" id="input-coupon"
                                                    placeholder="ادخل الكود الخاص  بك" value="" name="coupon">
                                                <span class="input-group-btn">
                                                    <input type="button" class="btn btn-primary"
                                                        data-loading-text="Loading..." id="button-coupon"
                                                        value="تفعيل">
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-sm-12">
                                <div class="panel panel-default">
                                    <div class="panel-heading">
                                        <h4 class="panel-title"><i class="fa fa-shopping-cart"></i>عربة التسوق</h4>
                                    </div>
                                    <div class="panel-body">
                                        <div class="table-responsive">
                                            <table class="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <td class="text-center">صورة المنتج</td>
                                                        <td class="text-left">اسم المنتج</td>
                                                        <td class="text-left">العدد </td>
                                                        <td class="text-right">سعر القطعة</td>
                                                        <td class="text-right">الاجمالي</td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td class="text-center"><a href="product.html"><img width="60px"
                                                                    src="../assets/img/cate3.jpg"
                                                                    alt="Xitefun Causal Wear Fancy Shoes"
                                                                    title="Xitefun Causal Wear Fancy Shoes"
                                                                    class="img-thumbnail"></a></td>
                                                        <td class="text-left"><a href="product.html">Emasa rumas
                                                                gacem</a></td>
                                                        <td class="text-left">
                                                            <div class="input-group btn-block"
                                                                style="min-width: 100px;">
                                                                <input type="text" name="quantity" value="1" size="1"
                                                                    class="form-control">
                                                                <span class="input-group-btn">
                                                                    <button type="submit" data-toggle="tooltip"
                                                                        title="Update" class="btn btn-primary"><i
                                                                            class="fa fa-refresh"></i></button>
                                                                    <button type="button" data-toggle="tooltip"
                                                                        title="Remove" class="btn btn-danger"
                                                                        onClick=""><i
                                                                            class="fa fa-times-circle"></i></button>
                                                                </span>
                                                            </div>
                                                        </td>
                                                        <td class="text-right">$114.35</td>
                                                        <td class="text-right">$114.35</td>
                                                    </tr>
                                                </tbody>
                                                <tfoot>
                                                    <tr>
                                                        <td class="text-right" colspan="4"><strong>Sub-Total:</strong>
                                                        </td>
                                                        <td class="text-right">$93.73</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="text-right" colspan="4"><strong>Flat Shipping
                                                                Rate:</strong></td>
                                                        <td class="text-right">$4.69.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="text-right" colspan="4"><strong>Total:</strong></td>
                                                        <td class="text-right">$121.85</td>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-12">
                                <div class="panel panel-default">
                                    <div class="panel-heading">
                                        <h4 class="panel-title"><i class="fa fa-pencil"></i> اضف تعليقك حول الطلب الخاص بك</h4>
                                    </div>
                                    <div class="panel-body">
                                        <textarea rows="4" class="form-control" id="confirm_comment"
                                            name="comments"></textarea>
                                        <br>
                                        <label class="control-label" for="confirm_agree">
                                            <span>لقد قرات ووافقت على ال <a class="agree" href="#"><b>شروط &amp;
                                                والاحكام</b></a></span> </label>
                                                <input type="checkbox" checked="checked" value="1" required=""
                                                    class="validate required" id="confirm_agree" name="confirm agree">
                                        <div class="buttons">
                                            <div class="pull-right">
                                                <input type="button" class="btn btn-primary" id="button-confirm"
                                                    value="تاكيد الطلب">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--Middle Part End -->

        </div>
    </div>
</template>
<script>

export default {
    name: 'Checkout',
}
</script>