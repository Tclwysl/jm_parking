<template>
	<view class=" margin">
		<view class="flex p-xs mb-sm bg-white">
			<view class="flex-sub padding-sm margin-xs radius text-bold">停车场选择：</view>
			<view class="flex-twice padding-sm margin-xs radius">
				 <picker @change="ParklotChange" :value="parklotindex" :range="Parklotarray">
				                        <view class="uni-input fl text-lg">{{Parklotarray[parklotindex]}}</view>	
										<view class="fr">
											<text class="cuIcon-unfold lg text-gray"></text>
										</view>
				                    </picker>
									
			</view>
		</view>
		<view class="flex p-xs margin-bottom-sm mb-sm bg-white">
			
			<view class="flex-sub padding-sm margin-xs radius text-bold">车位选择：</view>
			<view class="flex-twice padding-sm margin-xs radius">
				<picker @change="ParkplaceChange" :value="parkplaceindex" :range="Parkplacearray">
				                       <view class="uni-input fl text-lg">{{Parkplacearray[parkplaceindex]}}</view>
									   
									   <view class="fr">
										   <text class="cuIcon-unfold lg text-gray"></text>
									   </view>
									   <view v-if="parkplaceindex == 0" class="fr text-sm padding-right">
										   <view class="cu-tag line-red radius posre">
											   推荐
										   </view>
									   </view>
				                   </picker>
				
			</view>
			
		</view>
		<view class="padding flex flex-direction">
			<button class="cu-btn bg-blue lg button-hover" @click="upchoice">提交预约</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				Parklotarray: ['A停车场', 'B停车场', 'C停车场', 'D停车场','E停车场','F停车场'],
				parklotindex: 0,//停车场默认选中
				Parkplacearray: ['-1F3074', '-1F2015', '-2F123', '-3F1232','-2F1233','-1F3011'],
				parkplaceindex: 0,//停车位默认选中
			}
		},
		methods: {
			upchoice(){
				uni.showToast({
				    title: '预约成功！',
					icon: 'none',
				    duration: 2000
				});
			},
			ParklotChange: function(e) {
			            console.log('picker1发送选择改变，索引为', e.target.value)
			            this.parklotindex = e.target.value//索引
						console.log(this.Parklotarray[this.parklotindex])//value
			        },
					ParkplaceChange: function(e) {
					            console.log('picker2发送选择改变，索引为', e.target.value)
					            this.parkplaceindex = e.target.value//索引
								console.log(this.Parkplacearray[this.parkplaceindex])//value
					        },
		}
	}
</script>

<style>
.posre{
	position: relative;
	top:-10rpx;
}
</style>
