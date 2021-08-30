<template>
	<view class="container">
		<view class="top ibg-blue flex padding justify-center">
			<view class="cu-avatar xl round bg-white">测试</view>
			<view class="pos-ar bg-white padding-xs iborder text-center text-w">{{userlev}}</view>
		</view>
		
		<view v-if="loginflag" class="text-xl flex padding justify-center ibg-blue text-black padding-bottom-lg">
			{{usernum}}
		</view>
		<view v-else class="text-xl flex padding justify-center ibg-blue text-black padding-bottom-lg">
			<button class="cu-btn bg-blue round shadow" role="button" aria-disabled="false" @tap="login">
				去登录
			</button>
		</view>
		
		<uni-list class="text-center margin">
			<uni-list-item title="车辆管理" clickable @click="carmanage"/>
		</uni-list>
		
		<uni-list class="text-center margin">
			<uni-list-item v-if="loginflag" title="预约记录" clickable @click="aptrecord"/>
			<uni-list-item title="停车记录" clickable @click="parkrecord"/>
			<uni-list-item title="违停记录" clickable @click="illegalstop"/>
		</uni-list>
		
		<uni-list class="text-center margin">
			<uni-list-item title="退出登录" clickable @click="quit"/>
		</uni-list>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userlev:'未登录',
				usernum:'************',
				loginflag:false
			}
		},
		onLoad(e) {
			if(e != null){
				this.loginflag = JSON.parse(e.loginflag);//登录标志
				this.userlev = JSON.parse(e.userlev); //等级
				this.usernum = JSON.parse(e.tel);//电话
				
			}
			
			
		},
		methods: {
			login() {
				uni.navigateTo({
					url: '../login/index',
				});
			},
			quit(){
				if(this.loginflag){
					this.loginflag = false;
					this.userlev='未登录';
				}else{
					uni.showToast({
					    title: '您还未登录哦！',
						icon: 'none',
					    duration: 2000
					});
				}
			},
			aptrecord(){
				
				if(this.loginflag){
					uni.navigateTo({
						url: '../AptRecord/index',
					});
				}else{
					uni.showToast({
					    title: '您还未登录哦！',
						icon: 'none',
					    duration: 2000
					});
					
				}
			},
			parkrecord(){
				
				if(this.loginflag){
					uni.navigateTo({
						url: '../ParkRecord/index',
					});
				}else{
					uni.showToast({
					    title: '您还未登录哦！',
						icon: 'none',
					    duration: 2000
					});
					
				}
			},
			carmanage(){
				if(this.loginflag){
					uni.navigateTo({
						url: '../carmanage/index',
					});
				}else{
					uni.showToast({
					    title: '您还未登录哦！',
						icon: 'none',
					    duration: 2000
					});
					
				}
			},
			illegalstop(){
				if(this.loginflag){
					uni.navigateTo({
						url: '../Illegalstop/index',
					});
				}else{
					uni.showToast({
					    title: '您还未登录哦！',
						icon: 'none',
					    duration: 2000
					});
					
				}
				
			}
		}
	}
</script>

<style>
.top{
	height: 260rpx;
}
.xl{
	width: 220rpx !important;
	height: 220rpx !important;
}
.pos-ar{
	position: absolute;
	right: 40rpx;
	top: 40rpx;
}

.iborder{
	border: solid 1rpx #000000;
}

.text-w{
	width: 5em;
}

.ibg-blue{
	background-color:#00aaff;
}
</style>
