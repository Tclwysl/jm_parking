<template>
	<view>
		<radio-group role="radiogroup" class="block padding" @change="radioChange">
			<view v-for="(item,index) in record" :key="index" class="cu-card article no-card margin-top-sm round">
				<view class="cu-item shadow padding-sm margin-xs radius flex align-center">
					<radio class="fl blue radio margin-left" :value="item.car"></radio>
					<view class="fl flex align-center">
						<text class="margin-xs text-bold text-xl padding-left">{{item.car}}</text>
					</view>
				</view>
			</view>
			<view class="padding flex flex-direction">
				<button class="cu-btn bg-blue lg button-hover" @click="gochoice">下一步</button>
			</view>
		</radio-group>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				record:[
					{id:1,car:"渝 A 888888"},
					{id:2,car:"京 A 66666"},
					{id:3,car:"黑 B 88888"}
				],
				checkcar:"",
				registerflg:false
				
			}
		},
		onLoad(e){
			this.registerflg = e.registerflg;//注册标志
			
			if(!this.registerflg){
				uni.redirectTo({
					url: '../register/index',
				});
			}
			
		},
		methods: {
			gochoice(){
				if(this.checkcar != ""){
					uni.navigateTo({
						url: './choice?car="' + this.checkcar + '"',
					});
				}else{
					uni.showToast({
					    title: '请选中车辆！',
						icon: 'none',
					    duration: 2000
					});
				}
				
			},
			radioChange(e){
				this.checkcar = e.detail.value;
				console.log("选中 ：" + this.checkcar);
			}
		}
	}
</script>

<style>

</style>
