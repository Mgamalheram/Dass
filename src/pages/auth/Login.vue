<template>
	<div class="main-container container">
		<ul class="breadcrumb">
			<li><a href="#"><i class="fa fa-home"></i></a></li>
			<li><a href="#">Account</a></li>
			<li><a href="#">Login</a></li>
		</ul>

		<div class="row">
			<div id="content" class="col-sm-12">
				<div class="page-login">

					<div class="account-border">
						<div class="row">
							<div class="col-sm-6 new-customer">
								<div class="well">
									<h2><i class="fa fa-file-o" aria-hidden="true"></i> مستخدم جديد</h2>
									<p>من خلال إنشاء حساب، ستتمكن من التسوق بشكل أسرع، وستكون على اطلاع دائم بحالة
										الطلب، وتتبع الطلبات التي قمت بها مسبقًا.</p>
								</div>
								<div class="bottom-form">
									<router-link :to="{ name: 'Register' }">
										<a href="#" class="btn btn-default pull-right">متابعة</a>
									</router-link>
								</div>
							</div>

							<form @submit.prevent="Login" action="#" method="post" enctype="multipart/form-data">
								<div class="col-sm-6 customer-login">
									<div class="well">
										<h2><i class="fa fa-file-text-o" aria-hidden="true"></i> عودة الزبون </h2>
										<p><strong>لقد عدت</strong></p>
										<div class="form-group">
											<label class="control-label " for="input-email">لبريد الالكتروني</label>
											<input type="text" name="email" v-model="email" value="" id="input-email"
												class="form-control" />
										</div>
										<div class="form-group">
											<label class="control-label " for="input-password">كلمة المرور</label>
											<input type="password" name="password" v-model="password" value=""
												id="input-password" class="form-control" />
										</div>
									</div>
									<div class="bottom-form">
										<button type="submit" class="btn btn-default pull-right"> تسجيل</button>>
										<a href="#" class="forgot">نسيت كلمة المرور</a>
									</div>
								</div>
							</form>
						</div>
					</div>

				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
import Navbar from '../../components/Navbar.vue';
import Swal from 'sweetalert2';

export default {
	name: 'Login',
	components: {
		Navbar
	},
	data() {
		return {
			email: 'ahmeddd@gmail.com',
			password: 'akeracode'
		}
	},
	methods: {
		Login() {
			axios.post('http://127.0.0.1:8000/api/login/user', {
				email: this.email,
				password: this.password,
			}).then((data) => {

				if (data.status == 200) {
					const accessToken = data.data.token;

					this.$store.commit("setToken", accessToken)
					this.$store.commit("setAuthenticated", true)
					this.$cookies.set("_JUserSession", this.$store.state.token, 60 * 60, '/', null, true, true)

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

				}
				if (error.response.data.status == 401) {
					Swal.fire({
						title: 'Error!',
						html: '<h3 style="color:red"> email or password incorrect  </h3>',
						icon: 'Error',
						confirmButtonText: 'OK'
					});
				}
				else {
					Swal.fire({
						title: 'Error!',
						text: 'An unknown error occurred.',
						icon: 'Error',
						confirmButtonText: 'OK'
					});
				}
			});


		}
	}
}
</script>