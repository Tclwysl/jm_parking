<template>
	<view>
		<view class="cu-card dynamic">
			<view v-for="(item,index) in allcar" :key="index" class="cu-item shadow padding-top">
				<view class="solid-bottom padding-bottom">
					<view class="cu-avatar lg round margin-left bg-blue">
						{{item.Icar}}
					</view>
					<text class="text-black text-lg text-center padding-sm margin-xs">{{item.carf}} - {{item.carn}}</text>
					<view class="fr text-black text-lg padding-sm margin-xs">违停罚款：{{item.fine}}元</view>
				</view>
				<view class="text-lg padding-xs">
					<view class="text-center">违停时间：{{item.starttime}} - {{item.endtime}}</view>
				</view>
				<view class="image">
					<image mode="widthFix" src="../../static/u392.png"></image>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				allcar:[
				    {id:1,Icar:"渝",carf:"A",carn:"88888",starttime:"2021-08-23 10:00",endtime:"2021-08-23 12:00",fine:"10"},
				    {id:2,Icar:"晋",carf:"B",carn:"88888",starttime:"2021-08-23 10:00",endtime:"2021-08-23 13:00",fine:"15"},
				    {id:3,Icar:"京",carf:"C",carn:"88888",starttime:"2021-08-23 10:00",endtime:"2021-08-23 14:00",fine:"20"}
				 ],
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.solid-bottom{
	border-bottom: #d7d7d7 1rpx solid;
}
</style>
