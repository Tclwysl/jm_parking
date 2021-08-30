<template>
	<view>
		<form @submit="formSubmit">
			<view class="cu-form-group">
				<view class="title">手机号码：</view>
				<input name="tel" placeholder="请输入手机号码" type="number"></input>
				<view class="cu-capsule radius">
					<view class="cu-tag bg-blue">
						+86
					</view>
					<view class="cu-tag line-blue">
						中国大陆
					</view>
				</view>
			</view>
			<view class="cu-form-group">
				<view class="title">验证码：</view>
				<input name="code" placeholder="请输入验证码"></input>
				<button class="cu-btn bg-green shadow" @click="getcode">验证码</button>
			</view>
			<view class="padding flex flex-direction">
				<button class="cu-btn bg-blue lg" form-type="submit">登录</button>
			</view>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			formSubmit(e) {
				var tel = e.detail.value.tel;
				var code = e.detail.value.code;
				
				if(tel != "" && code != ""){
					uni.navigateTo({
						url: '../user/index?tel="'+tel+'"&loginflag=true&userlev="月卡会员"',
					});
				}else{
					uni.showToast({
					    title: '不要留空哦！',
						icon: 'none', 
					    duration: 2000
					});
				}
			},
			getcode(){
				uni.showToast({
				    title: '随便输入就ok！',
					icon: 'none', 
				    duration: 2000
				});
			}
		}
	}
</script>

<style>

</style>
