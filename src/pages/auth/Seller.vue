<template>
    <div class="main-container container">
    <ul class="breadcrumb">
        <li><a href="#"><i class="fa fa-home"></i></a></li>
        <li><a href="#">الحساب</a></li>
        <li><a href="#">تسجيل</a></li>
    </ul>

    <div class="row">
        <div id="content" class="col-sm-12">
            <h2 class="title">إنشاء حساب</h2>
            <p>إذا كان لديك حساب بالفعل، يرجى تسجيل الدخول في <a href="#">صفحة تسجيل الدخول</a>.</p>
            <form action="" method="post" enctype="multipart/form-data"
                class="form-horizontal account-register clearfix">
                <fieldset id="account">
                    <legend>معلوماتك الشخصية</legend>
                    <div class="form-group required" style="display: none;">
                        <label class="col-sm-2 control-label">مجموعة العملاء</label>
                        <div class="col-sm-10">
                            <div class="radio">
                                <label>
                                    <input type="radio" name="customer_group_id" value="1" checked="checked">
                                    الافتراضي
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="form-group required">
                        <label class="col-sm-2 control-label" for="input-firstname">الاسم الأول</label>
                        <div class="col-sm-10">
                            <input type="text" name="firstname" value="" placeholder="الاسم الأول"
                                id="input-firstname" class="form-control">
                        </div>
                    </div>
                    <div class="form-group required">
                        <label class="col-sm-2 control-label" for="input-lastname">الاسم الأخير</label>
                        <div class="col-sm-10">
                            <input type="text" name="lastname" value="" placeholder="الاسم الأخير" id="input-lastname"
                                class="form-control">
                        </div>
                    </div>
                    <div class="form-group required">
                        <label class="col-sm-2 control-label" for="input-email">البريد الإلكتروني</label>
                        <div class="col-sm-10">
                            <input type="email" name="email" value="" placeholder="البريد الإلكتروني" id="input-email"
                                class="form-control">
                        </div>
                    </div>
                    <div class="form-group required">
                        <label class="col-sm-2 control-label" for="input-telephone">الهاتف</label>
                        <div class="col-sm-10">
                            <input type="tel" name="telephone" value="" placeholder="الهاتف" id="input-telephone"
                                class="form-control">
                        </div>
                    </div>
                </fieldset>
                <fieldset id="address">
                    <legend>عنوانك</legend>
                    <div class="form-group">
                        <label class="col-sm-2 control-label" for="input-company">الشركة</label>
                        <div class="col-sm-10">
                            <input type="text" name="company" value="" placeholder="الشركة" id="input-company"
                                class="form-control">
                        </div>
                    </div>
                    <div class="form-group required">
                        <label class="col-sm-2 control-label" for="input-address-1">العنوان 1</label>
                        <div class="col-sm-10">
                            <input type="text" name="address_1" value="" placeholder="العنوان 1"
                                id="input-address-1" class="form-control">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label" for="input-address-2">العنوان 2</label>
                        <div class="col-sm-10">
                            <input type="text" name="address_2" value="" placeholder="العنوان 2"
                                id="input-address-2" class="form-control">
                        </div>
                    </div>
                    <div class="form-group required">
                        <label class="col-sm-2 control-label" for="input-city">المدينة</label>
                        <div class="col-sm-10">
                            <input type="text" name="city" value="" placeholder="المدينة" id="input-city"
                                class="form-control">
                        </div>
                    </div>
                    <div class="form-group required">
                        <label class="col-sm-2 control-label" for="input-postcode">الرمز البريدي</label>
                        <div class="col-sm-10">
                            <input type="text" name="postcode" value="" placeholder="الرمز البريدي" id="input-postcode"
                                class="form-control">
                        </div>
                    </div>
                    <div class="form-group required">
                        <label class="col-sm-2 control-label" for="input-country">البلد</label>
                        <div class="col-sm-10">
                            <select name="country_id" id="input-country" class="form-control">
                                <option value=""> --- الرجاء التحديد --- </option>
                                <option value="244">جزر آلاند</option>
                                <option value="1">أفغانستان</option>
                                <option value="2">ألبانيا</option>
                                <option value="3">الجزائر</option>
                                <option value="4">ساموا الأمريكية</option>
                                <option value="5">أندورا</option>
                                <option value="6">أنغولا</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group required">
                        <label class="col-sm-2 control-label" for="input-zone">المنطقة / الولاية</label>
                        <div class="col-sm-10">
                            <select name="zone_id" id="input-zone" class="form-control">
                                <option value=""> --- الرجاء التحديد --- </option>
                                <option value="3513">أبردين</option>
                                <option value="3514">أبردينشاير</option>
                                <option value="3515">أنغليسي</option>
                                <option value="3516">أنغوس</option>
                            </select>
                        </div>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>كلمة المرور</legend>
                    <div class="form-group required">
                        <label class="col-sm-2 control-label" for="input-password">كلمة المرور</label>
                        <div class="col-sm-10">
                            <input type="password" name="password" value="" placeholder="كلمة المرور"
                                id="input-password" class="form-control">
                        </div>
                    </div>
                    <div class="form-group required">
                        <label class="col-sm-2 control-label" for="input-confirm">تأكيد كلمة المرور</label>
                        <div class="col-sm-10">
                            <input type="password" name="confirm" value="" placeholder="تأكيد كلمة المرور"
                                id="input-confirm" class="form-control">
                        </div>
                    </div>
                </fieldset>
                <div class="buttons">
                    <div class="pull-right">لقد قرأت ووافقت على <a href="#" class="agree"><b>جداول التسعير</b></a>
                        <input class="box-checkbox" type="checkbox" name="agree" value="1"> &nbsp;
                        <input type="submit" value="متابعة" class="btn btn-primary">
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>

</template>

<script>
import Navbar from '../../components/Navbar.vue';
export default {
    name: 'Seller',
    components: {
        Navbar
    }
}
</script>