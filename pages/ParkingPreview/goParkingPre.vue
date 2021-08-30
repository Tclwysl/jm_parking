<template>
	<view>
		<view class="cu-bar toptop">
			<view class="flex p-xs margin-bottom-sm mb-sm">
				<view class="flex-sub radius margin-left margin-top">
					<dropdown :list="carparklist" :current="carparkcurrent" @onClick="dropDownChange1"></dropdown>
				</view>
				<view class="flex-sub radius margin-left margin-top">
					<dropdown :list="carparklaylist" :current="carparklaycurrent" @onClick="dropDownChange2"></dropdown>
				</view>
				<view class="flex-sub radius margin-left margin-top ">
					<view class="grid col-1 margin-left margin-bottom text-center">
						<view class="padding margin-left-sm">
							<button @click="cNav" class="cu-btn button-hover bg-blue" role="button" aria-disabled="false">导航</button>
						</view>
						<view class="margin-left-sm">
							<button @click="cRes" class="cu-btn button-hover bg-cyan" role="button" aria-disabled="false">预约</button>
						</view>
					</view>
				</view>
			</view>
			
		</view>
		<view class=" bg-img bgimgg" v-bind:style="{height: mapH + 'px',backgroundSize: 'cover',backgroundPosition: 'center'}">
		</view>
	</view>
</template>
 
<script>
	export default {
		
		data() {
			return {
				imageURL: '../../static/fxxcys.png',
				mapH: 0, // 高度
				mapW: 0, // 屏幕宽度"A","B","C"
				carparklist:['A停车场','B停车场','C停车场'],
				carparklaylist:['负一层','负二层','负三层'],
				carparkcurrent:0,//停车场下拉
				carparklaycurrent:0,//楼层下拉
				
			}
		},				
		onLoad(e){
			this.carparkcurrent = e.carparkid;//接收停车场索引
		},
		mounted() {
			this.initMapH()
		},
		methods: {
			initMapH() {
				this.mapW = uni.getSystemInfoSync().windowWidth / 2;
				this.mapH = uni.getSystemInfoSync().windowHeight;
			},
			dropDownChange1(e){
				console.log(e)
				this.carparkcurrent = e;
			},
			dropDownChange2(e){
				console.log(e)
				this.carparklaycurrent = e;
			},
			cNav(){
				uni.showToast({
				    title: '跳转第三方地图导航',
					icon: 'none',
				    duration: 2000
				});
			},
			cRes(){
				uni.showToast({
				    title: '跳转至预约页面',
					icon: 'none',
				    duration: 2000
				});
			}
		}
	}
</script>

<style scoped lang="scss">
@import "../../commom/base64.scss";
.toptop{
	/* position: -webkit-sticky;
		  position: sticky;
		  top: var(--window-top);
		  z-index: 99; */
	position: fixed;
	top:0;
}
.bgimgg{
	
	background: $parking-back-code;
}
</style>
