<template>
	<view>
		<view class="grid col-1 padding">
			<view class="text-left margin-bottom-sm">
				<text>停车方式：</text>
				<text>{{parkmode}}</text>
			</view>
			<view class="text-left padding-bottom-lg bor-bot">
				<text>车牌号：</text>
				<text>{{carnum}}</text>
			</view>
		</view>
		<view class="grid col-1 padding ">
			<view class="text-left margin-bottom-sm">
				<text>停车时间：</text>
				<text>{{downtime}}</text>
			</view>
			<view class="text-left margin-bottom-sm">
				<text>出车时间：</text>
				<text>{{departure}}</text>
			</view>
			<view class="text-left padding-bottom-lg bor-bot">
				<text>合计时长：</text>
				<text>{{totalduration}}</text>
			</view>
		</view>
		<view class="grid col-1 padding ">
			<view class="text-left margin-bottom-sm">
				<text>是否违停：</text>
				<text>{{illegalpark}}</text>
			</view>
			<view class="text-left padding-bottom-lg bor-bot">
				<text>应交罚金：</text>
				<text>{{fine}}</text>
				<text class="alink">查看违停详情</text>
			</view>
		</view>
		<view class="grid col-1 padding ">
			<view class="text-left">
				<text>合计费用：</text>
				<text class="text-price text-red">{{money}}</text><text>元</text>
			</view>
		</view>
		<view class="grid col-1 padding ">
			<view class="flex flex-direction">
			  <button class="cu-btn bg-blue">缴费</button>
			  
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				parkmode:'游客停车/会员停车/员工停车',
				carnum:'渝A 88888',
				downtime:'2021-8-10 10:55',
				departure:'2021-8-10 15:55',
				totalduration:'5小时',
				illegalpark:'是',
				fine:'5',
				money:'15 '

			}
		},
		methods: {

		}
	}
</script>

<style>
.bor-bot{
	border-bottom: solid 1rpx #000000;
	margin-bottom: none;
}
.alink {
            color: #0A8DE7;
            text-decoration:underline;
			float: right;
        }
        .alink:hover {
            color: #f40;
        }
		
view text:first-child{
	font-weight: bold;
}
</style>
