<template>
	<view>

		<view class="cu-card article margin-bottom-xl">
			<view v-for="g in gg" class="cu-item shadow">
				<view class="title">
					<view class="text-cut">广告</view>
				</view>
				<view class="content">
					<image :src="require('../../img/gg.png')" />
					<view class="desc">
						<view class="text-content">广告广告广告广告广告广告广告广告广告广告广告广告广告广告广告广告</view>
						<view>
							<view class="cu-tag bg-red light sm round">广告</view>
							<view class="cu-tag bg-green light sm round">广告</view>
						</view>
					</view>
				</view>
			</view>
			<view class="grid col-1 padding"></view>

		</view>


		<uni-list class="text-center" v-show="!flag" v-bind:style="{width:mapW + 'px',position: 'fixed',
		bottom: 'calc(100rpx + env(safe-area-inset-bottom) / 2)',
		right: 0}">
			<uni-list-item title="个人中心" @click="user" clickable />
			<uni-list-item title="车位预约" @click="parkingres" clickable />
			<uni-list-item title="停车场预约" @click="parkingPre" clickable />
			<uni-list-item title="停车月卡" @click="nodo" clickable />
			<uni-list-item title="关于我们" @click="nodo" clickable />
		</uni-list>
		<view class="cu-bar bg-white tabbar border foot">
			<view class="bg-grey.light action" @tap="reverse">反向寻车</view>
			<view class="bg-grey.light action" @tap="parkfee">停车付费</view>
			<view class="bg-grey.light action" @click="xmenu">服务中心


			</view>

		</view>

	</view>


</template>

<script>
	export default {
		data() {
			return {
				flag: true,
				g: 1,
				gg: 6,
				mapH: 0, // 高度
				mapW: 0, // 宽度

			}
		},
		onLoad() {

		},
		mounted() {
			this.initMapH()
		},
		methods: {
			initMapH() {
				this.mapW = uni.getSystemInfoSync().windowWidth / 3 + 10;
				this.mapH = uni.getSystemInfoSync().windowHeight;
			},
			reverse(e) {
				uni.navigateTo({
					url: '../reverse/index',
				});
			},
			parkfee(e) {
				uni.navigateTo({
					url: '../parkfee/index',
				});
			},
			xmenu() {
				this.flag = !this.flag;
				console.log('1')
			},
			user() {
				uni.navigateTo({
					url: '../user/index',
				});
			},
			parkingres() {
				uni.navigateTo({
					url: '../Parkingres/index',
				});
			},
			parkingPre() {
				uni.navigateTo({
					// url: '../ParkingPreview/index',//这个是地图插件的   感觉比较low
					url: '../ParkingPreview/ParkingPreview',
				});
			},
			nodo() {
				uni.showToast({
					title: '敬请期待.....',
					icon: 'none',
					duration: 2000
				});
			}
		}
	}
</script>

<style>

</style>
