<template>
	<view>
		<map v-if="vmap" v-bind:style="{height: mapH + 'px'}" style="width: 100%;" :latitude="latitude" :longitude="longitude"
			:markers="covers" @callouttap="callouttap">
		</map>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				vmap:true,//地图显示开关
				mapH: 0, // 地图高度，可在initMapH()中设置高度
				mapW: 0, // 屏幕宽度
				id: 0, // 使用 marker点击事件 需要填写id
				title: 'map',
				carpark:['A','B','C'],//停车场
				freepark:['100','150','99'],//空闲车位
				freerespark:['10','12','15'],//空闲预约车位
				latitude: 29.73670117467697,
				longitude: 106.62840022071737,
				covers: []
			}
		},
		mounted() {
			this.initMapH()
		},
		onLoad() {
			this.init();
		},
		methods: {
			// 计算地图的高度
			initMapH() {
				this.mapW = uni.getSystemInfoSync().windowWidth
				this.mapH = uni.getSystemInfoSync().windowHeight;
			},
			init() {
				let that = this;
				var data = [{
					id: 0,
					latitude: 29.737161,
					longitude: 106.626888,
					iconPath: '../../static/location.png'
				}, {
					id: 1,
					latitude: 29.737013,
					longitude: 106.62997,
					iconPath: '../../static/location.png'
				}, {
					id: 2,
					latitude: 29.734025,
					longitude: 106.627302,
					iconPath: '../../static/location.png'
				}];
				that.MapData(that, data)
			},
			//地图数据初始化
			MapData(that, data) {
				let arrayData = [];
				for (var i = 0; i < data.length; i++) {
					arrayData.push({
						id: data[i].id, //marker点击事件回调会返回此id。建议为每个marker设置上Number类型id，保证更新marker时有更好的性能。
						latitude: data[i].latitude, //纬度
						longitude: data[i].longitude, //经度
						iconPath: data[i].iconPath, //项目目录下的图片路径，
						width: 40,
						height: 40,
						callout: {
							content: this.carpark[i] + '停车场\n\n空闲车位：' + this.freepark[i] + '\n空闲预约车位：' + this.freerespark[i], //文本
							color: '#ffffff', //文字颜色
							padding: 12,
							fontSize: 12, //文本大小
							borderRadius: 2, //边框圆角
							bgColor: 'rgba(0, 0, 0, 0.3)', //背景颜色
							display: 'ALWAYS', //常显
						}
					});
				}
				//重新给地图数据赋值covers 
				that.covers = arrayData;
			},
			callouttap(e){
				console.log("===你点击了标记点气泡===")
				console.log(e.detail.markerId)
				var getcarpark = this.carpark[e.detail.markerId] + "停车场";
				console.log(getcarpark)
				uni.navigateTo({
					url: './goParkingPre?carparkid=' + e.detail.markerId,
				});
			}

		}
	}
</script>

<style>

</style>
