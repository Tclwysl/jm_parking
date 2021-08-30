<template>
	<view>
		<view class="flex bg-grey">
		  <view class="text-left padding">车辆位置：  {{position}}</view>
		  </view>
		<view>
			<image :src="require('../../img/fxxc.png')" mode='widthFix' v-bind:style="{height: mapH + 'px',width:mapW + 'px'}">
				
			</image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				position:'A停车场 F1层 B1302',
				mapH: 0, // 高度
				mapW: 0, 
			}
		},
		mounted() {
			this.initMapH()
		},
		methods: {
			initMapH() {
				this.mapW = uni.getSystemInfoSync().windowWidth;
				this.mapH = uni.getSystemInfoSync().windowHeight;
			},
		}
	}
</script>

<style>

</style>
