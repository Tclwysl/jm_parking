<template>
	<view>
		<dropdown-screen ></dropdown-screen>
		
		<view v-for="(item,index) in record" :key="index" class="cu-card article no-card margin-top-sm">
			<view class="cu-item shadow padding-sm margin-xs radius flex align-center">
				<view class="grid col-2 padding-bottom-sm">
					<view>
						<text>{{item.parklot}}停车场    {{item.detailednum}}号</text>
					</view>
					<view>
						<text class="fr">预约费用：{{item.rmb}}元</text>
					</view>
					
					
				</view>
				<view class="grid col-1">
					<view class="padding-bottom-xs">
						<text>停车时间：{{item.apttime}} - {{item.arritime}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import dropdownScreen from '@/components/dropdown-screen/dropdown-screen'
	export default {
		data() {
			return {
				record:[
					//停车场   、   号  、  钱  、   停车时间    、 离开时间  、预约时长
				    {id:1,parklot:"xxx",detailednum:"A3270",rmb:"88888",apttime:"2021-08-23 10:00",arritime:"2021-08-23 14:00"},
				    {id:2,parklot:"xxx",detailednum:"B3270",rmb:"88888",apttime:"2021-08-23 10:00",arritime:"2021-08-23 14:00"},
					{id:3,parklot:"xxx",detailednum:"C3270",rmb:"88888",apttime:"2021-08-23 10:00",arritime:"2021-08-23 14:00"},
					{id:4,parklot:"xxx",detailednum:"D3270",rmb:"88888",apttime:"2021-08-23 10:00",arritime:"2021-08-23 14:00"},
					{id:5,parklot:"xxx",detailednum:"E3270",rmb:"88888",apttime:"2021-08-23 10:00",arritime:"2021-08-23 14:00"}
				 ],
			}
		},
		components: {
			dropdownScreen
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
