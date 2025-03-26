<template>
	<div class="main-container container">
		<ul class="breadcrumb">
			<li><a href="#"><i class="fa fa-home"></i></a></li>
			<li><a href="#">Account</a></li>
			<li><a href="#">My Account</a></li>
		</ul>

		<div class="row">
			<!--Middle Part Start-->
			<div class="col-sm-9" id="content">
				<h2 class="title">ملفي الشخصي</h2>
				<p class="lead">مرحبا, <strong>احمد</strong> -لتحديث معلومات حسابك.</p>
				<form>
					<div class="row">
						<div class="col-sm-6">
							<fieldset id="personal-details">
								<legend>المعلومات الشخصية</legend>
								<div class="form-group required">
									<label for="input-firstname" class="control-label">الاسم</label>
									<input type="text" class="form-control" id="input-firstname"
										placeholder="الاسم" value="" name="firstname">
								</div>
								<div class="form-group required">
									<label for="input-lastname" class="control-label">الاسم الاخير</label>
									<input type="text" class="form-control" id="input-lastname" placeholder="الاسم الاخير"
										value="" name="lastname">
								</div>
								<div class="form-group required">
									<label for="input-email" class="control-label">الاميل</label>
									<input type="email" class="form-control" id="input-email" placeholder="الاميل"
										value="" name="email">
								</div>
								<div class="form-group required">
									<label for="input-telephone" class="control-label">التليفون</label>
									<input type="tel" class="form-control" id="input-telephone" placeholder="التليفون"
										value="" name="telephone">
								</div>
							</fieldset>
							<br>
						</div>
						<div class="col-sm-6">
							<fieldset>
								<legend>تغيير كلمة السر</legend>
								<div class="form-group required">
									<label for="input-password" class="control-label">كلمة السر القديمة</label>
									<input type="password" class="form-control" placeholder="كلمة السر القديمة" value=""
										name="old-password">
								</div>
								<div class="form-group required">
									<label for="input-password" class="control-label">كلمة السر الجديدة</label>
									<input type="password" class="form-control" placeholder="كلمة السر الجديدة" value=""
										name="new-password">
								</div>
								<div class="form-group required">
									<label for="input-confirm" class="control-label">تاكيد الرقم السري الجديد</label>
									<input type="password" class="form-control" id="input-confirm"
										placeholder="تاكيد الرقم السري الجديد" value="" name="new-confirm">
								</div>
							</fieldset>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-6">
							<fieldset id="address">
								<legend>عنوان البطاقة</legend>

								<div class="form-group required">
									<label for="input-address-1" class="control-label">Address 1</label>
									<input type="text" class="form-control" placeholder="Address 1" value=""
										name="address_1">
								</div>
								<div class="form-group required">
									<label for="input-city" class="control-label">المدينة</label>
									<input type="text" class="form-control" placeholder="المدينة" value="" name="city">
								</div>
								<div class="form-group required">
									<label for="input-postcode" class="control-label">الرمز البريدي</label>
									<input type="text" class="form-control" placeholder="الرمز البريدي" value=""
										name="postcode">
								</div>
								<div class="form-group required">
									<label for="input-country" class="control-label">البلد</label>
									<select class="form-control" name="country_id">
										<option value=""> --- Please Select --- </option>
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

									</select>
								</div>
							</fieldset>
						</div>
						<div class="col-sm-6">
							<fieldset id="address">
								<legend>عنوان البطاقة</legend>

								<div class="form-group required">
									<label for="input-address-1" class="control-label">Address 1</label>
									<input type="text" class="form-control" placeholder="Address 1" value=""
										name="address_1">
								</div>
								<div class="form-group required">
									<label for="input-city" class="control-label">المدينة</label>
									<input type="text" class="form-control" placeholder="المدينة" value="" name="city">
								</div>
								<div class="form-group required">
									<label for="input-postcode" class="control-label">الرمز البريدي</label>
									<input type="text" class="form-control" placeholder="الرمز البريدي" value=""
										name="postcode">
								</div>
								<div class="form-group required">
									<label for="input-country" class="control-label">البلد</label>
									<select class="form-control" name="country_id">
										<option value=""> --- Please Select --- </option>
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

									</select>
								</div>
							</fieldset>
						</div>
					</div>



					<div class="buttons clearfix">
						<div class="pull-right">
							<input type="submit" class="btn btn-md btn-primary" value="حفظ التغييرات">
						</div>
					</div>
				</form>
			</div>
			<!--Middle Part End-->
			<!--Right Part Start -->
			<aside class="col-sm-3 hidden-xs content-aside col-md-3" id="column-right">
				<h2 class="subtitle">Account</h2>
				<div class="list-group">
					<ul class="list-item">
						<li><a href="#">My Account</a>
						</li>
						<router-link :to="{ name: 'Wishlist' }">
							<li><a href="#">Wish List</a>
							</li>
						</router-link>
						<router-link :to="{name:'OrderHistory'}">
							<li><a href="#">Order History</a>
							</li>
						</router-link>
					</ul>
				</div>
			</aside>
			<!--Right Part End -->
		</div>
	</div>
</template>

<script>
export default {
	name: 'Profile'
}
</script>