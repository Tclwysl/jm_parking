<template>
	<view>
		<view class="car" @tap="fFocus">
			<input :focus="bFocus" disabled type="text" v-model="sCar" class="ipt-hide" @input="fInput"
				:maxlength="cCarNum" @blur="fBlur" />
			<view class="car-item" v-for="nIndex in cCarNum" :class="{active:nIndex===sCar.length-1}" :key="nIndex">
				{{sCar.split('')[nIndex]?sCar.split('')[nIndex].toUpperCase():''}}
			</view>
			<view class="car-item car-change" @tap.stop="fChange"><text
					class="cuIcon-roundadd lg text-gray"></text><text>{{bIsUnit?'新能源':'普通'}}</text></view>

		</view>

		<view class="padding flex flex-direction" @tap="Goreverse">
			<button class="cu-btn bg-blue lg round">查 询</button>
		</view>


		<carnoKeyboard :showKeyboard.sync="modalShow" @kInput="onInput" @kDelete="onDelete" @kConfirm="onConfirm"
			@kClose="onClose"></carnoKeyboard>

	</view>

</template>

<script>
	import carnoKeyboard from '@/components/carno-keyboard/carno-keyboard.vue' //new插件

	export default {

		data() {
			return {
				sCar: '渝',
				bIsUnit: true,
				bFocus: false,
				carNo: '', //new插件
				modalShow: false //new插件
			}
		},
		computed: {
			cCarNum() {
				return this.bIsUnit ? 7 : 8; //车牌位数
			}
		},
		onLoad(option) {

		},
		components: {
			carnoKeyboard
		}, //new插件
		methods: {
			fClear() {
				this.sCar = '渝';
				this.bIsUnit = true;
				this.bFocus = false;
			},
			fChange() {
				this.sCar = '渝';
				this.bFocus = false;
				this.bIsUnit = !this.bIsUnit;
			},
			fBlur() {
				this.bFocus = false;
			},
			fFocus() {
				this.bFocus = true;
				this.modalShow = true; //显示键盘奥
			},
			fInput() {
				this.$emit('fCb', {
					sCar: this.sCar.toUpperCase(),
					bIsUnit: this.bIsUnit
				})
			},
			showCarNo() {
				this.modalShow = true
			},
			onInput(item) {
				var maxnum = this.bIsUnit ? 7 : 8; //限制输入长度
				if (this.sCar.length < maxnum) {
					this.sCar += item
				}

			},
			onDelete() {
				this.sCar = this.sCar.substr(0, this.sCar.length - 1)
			},
			onConfirm() {
				uni.showModal({
					content: this.sCar,
					showCancel: false
				})
			},
			onClose() {
				this.modalShow = false
			},
			Goreverse(e) {
				var car = this.sCar;
				if (car == "渝A88888") {
					uni.navigateTo({
						url: '../goparkfee/index',
					});
				} else {
					uni.showModal({
						//title: '提示',
						showCancel: false,
						content: '未查询到该车辆的停车信息，请重新输入车牌号码。',
						success: function(res) {
							if (res.confirm) {
								console.log('点击确定');
							} else if (res.cancel) {
								console.log('点击取消');
							}
						}
					});
				}
			}
		},
		mounted() {
			this.fClear()
		}
	}
</script>

<style scoped lang="less">
	.car {
		display: flex;
		margin-top: 10%;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		height: 42px;
		width: 100%;
		padding: 5px;
		box-sizing: border-box;
	}

	.car-item {
		height: 42px;
		width: 36px;
		margin: 0 2px;
		text-align: center;
		line-height: 42px;
		color: #3e3e3e;
		font-size: 18px;
		border: 1px solid #b2b2b2;
		border-radius: 3px;
	}

	.active {
		border-color: #19bbff;
	}

	.ipt-hide {
		position: absolute;
		z-index: -1;
		left: -100%;
		opacity: 0
	}

	.car-change {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border-style: dotted;
		font-size: 10px;
		line-height: 2;
		color: #7f7f7f;

		.iconfont {
			font-size: 10px;
		}
	}
</style>
