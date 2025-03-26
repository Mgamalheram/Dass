<template>

	<div>
		<div class="main-container container">
			<ul class="breadcrumb">
				<li><a href="#"><i class="fa fa-home"></i></a></li>
				<li><a href="#">Account</a></li>
				<li><a href="#">Register</a></li>
			</ul>

			<div class="row">
				<div id="content" class="col-sm-12">
					<h2 class="title">انشاء حساب جديد </h2>
					<p>إذا كان لديك بالفعل حساب معنا، يرجى تسجيل الدخول على<router-link :to="{ name: 'Login' }">تسجيل
							دخول</router-link>.</p>
					<form @submit.prevent="CreateAccount" class="form-horizontal account-register clearfix">
						<fieldset id="account">
							<legend>ادخل بيناتك الشخصية</legend>
							<div class="form-group required" style="display: none;">
								<label class="col-sm-2 control-label">بينات العميل </label>
								<div class="col-sm-10">
									<div class="radio">
										<label>
											<input type="radio" name="customer_group_id" value="1" checked="checked">
											Default
										</label>
									</div>
								</div>
							</div>
							<div class="form-group required">
								<label class="col-sm-2 control-label" for="input-firstname">الاسم الاول </label>
								<div class="col-sm-10">
									<input type="text" name="firstname" value="" placeholder="الاسم الاول "
										v-model="first_name" id="input-firstname" class="form-control">
								</div>
							</div>
							<div class="form-group required">
								<label class="col-sm-2 control-label" for="input-lastname">الاسم الاخير </label>
								<div class="col-sm-10">
									<input type="text" name="lastname" value="" placeholder="الاسم الاخير"
										v-model="seconde_name" id="input-lastname" class="form-control">
								</div>
							</div>
							<div class="form-group required">
								<label class="col-sm-2 control-label" for="input-email">الاميل</label>
								<div class="col-sm-10">
									<input type="email" name="email" value="" placeholder="الايمل" v-model="Email"
										id="input-email" class="form-control">
								</div>
							</div>
							<div class="form-group required">
								<label class="col-sm-2 control-label" for="input-telephone">رقم الهاتف</label>
								<div class="col-sm-10">
									<input type="tel" name="telephone" value="" placeholder="رقم الهاتف"
										v-model="Tlephone" id="input-telephone" class="form-control">
								</div>
							</div>
						</fieldset>
						<fieldset>
							<legend>كلمة المرور </legend>
							<div class="form-group required">
								<label class="col-sm-2 control-label" for="input-password">كلمة المرور </label>
								<div class="col-sm-10">
									<input type="password" name="password" value="" placeholder="كلمة المرور"
										v-model="Password" id="input-password" class="form-control">
								</div>
							</div>
							<div class="form-group required">
								<label class="col-sm-2 control-label" for="input-confirm">تاكيد كلمة المرور </label>
								<div class="col-sm-10">
									<input type="password" name="confirm" value="" placeholder="تاكيد كلمة المرور "
										v-model="ConfirmPassword" id="input-confirm" class="form-control">
								</div>
							</div>
						</fieldset>
						<div id="google_translate_element"></div>

						<button class="btn btn-primary" type="submit" style="width: 100%;"> تسجيل</button>
					</form>
				</div>
			</div>
		</div>
	</div>

</template>
<script>
import Navbar from '../../components/Navbar.vue';
import axios from 'axios';
import Swal from 'sweetalert2';
export default {
	name: 'Regsiter',
	components: {
		Navbar
	},
	/**
	 * 
	 */
	data() {
		return {
			first_name: null,
			seconde_name: null,
			Email: null,
			Tlephone: null,
			Password: null,
			ConfirmPassword: null,
		}
	},
	methods: {
		CreateAccount() {
			axios.post('http://127.0.0.1:8000/api/register/user', {
				first_name: this.first_name,
				last_name: this.seconde_name,
				email: this.Email,
				phone_number: this.Tlephone,
				password: this.Password,
				confirm_password: this.ConfirmPassword,
				confirm_password_confirmation: this.ConfirmPassword,
			}).then((res) => {
				console.log(res.data);
				
				if (data.status == 200) {
					Swal.fire({
						title: 'success!',
						html: '<h3 style="color:green"> login successful  </h3>',
						icon: 'success',
						confirmButtonText: 'OK'
					}).then(() => {
						this.$router.push('/')
					});
				}
				// Handle success (e.g., redirect to a different page)
			}).catch((error) => {
				if (error.response && error.response.data.errors) {
					let errorMessages = "";
					for (let key in error.response.data.errors) {
						errorMessages += `${error.response.data.errors[key].join(", ")}<br>`;
					}
					Swal.fire({
						title: 'Error!',
						html: '<h3 style="color:red">' + errorMessages + '</h3>',
						icon: 'error',
						confirmButtonText: 'OK'
					});
				} else {
					Swal.fire({
						title: 'Error!',
						text: 'An unknown error occurred.',
						icon: 'error',
						confirmButtonText: 'OK'
					});
				}
			});
		}
	}

}

</script>