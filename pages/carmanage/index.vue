<template>
	<view>
		<view v-if="addcar">
			<view class="car" @tap="fFocus">
				<input :focus="bFocus" disabled type="text" v-model="sCar" class="ipt-hide" @input="fInput"
					:maxlength="cCarNum" @blur="fBlur" />
				<view class="car-item" v-for="nIndex in cCarNum" :class="{active:nIndex===sCar.length-1}" :key="nIndex">
					{{sCar.split('')[nIndex]?sCar.split('')[nIndex].toUpperCase():''}}
				</view>
				<view class="car-item car-change" @tap.stop="fChange"><text
						class="cuIcon-roundadd lg text-gray"></text><text>{{bIsUnit?'新能源':'普通'}}</text></view>

			</view>
			
			<view  class="padding-sm flex flex-direction">
				<button class="cu-btn block button-hover margin-tb-sm lg bg-blue" @click="eaddcar">
					<text class="cuIcon-add lg"></text>
					添加车辆
				</button>
			</view>
		</view>
		<view v-else>
			<view v-for="(item,index) in allcar" :key="index" class="cu-card article no-card margin-top-sm">
				<view class="cu-item shadow padding-sm margin-xs radius flex align-center">
					<view class="cu-avatar lg round margin-left bg-blue">
						{{item.Icar}}
					</view>
					<text class="text-black text-bold text-xxl text-center padding-sm margin-xs">{{item.carf}} - {{item.carn}}</text>
					
					<button @click="dcar" class="padding-top fr cu-btn round xl button-hover bg-white" :data-delcar="item.id" role="button" aria-disabled="false">
						<text class="cuIcon-close lg text-black text-bold"></text>
					</button>
				</view>
			</view>

			<view class="padding-sm flex flex-direction bg-white  margin-top-sm">
				<button class="cu-btn block lines-black button-hover margin-tb-sm lg" @click="caddcar">
					<text class="cuIcon-add lg text-black"></text>
					添加车辆
				</button>
			</view>
		</view>
		<carnoKeyboard :showKeyboard.sync="modalShow" @kInput="onInput" @kDelete="onDelete" @kConfirm="onConfirm"
			@kClose="onClose"></carnoKeyboard>
	</view>
</template>

<script>
	import carnoKeyboard from '@/components/carno-keyboard/carno-keyboard.vue'
	export default {
		data() {
			return {
				sCar: '渝',
				bIsUnit: true,
				bFocus: false,
				carNo: '',
				modalShow: false,
				allcar:[
				    {id:1,Icar:"渝",carf:"A",carn:"88888"},
				    {id:2,Icar:"晋",carf:"B",carn:"88888"},
				    {id:3,Icar:"京",carf:"C",carn:"88888"}
				 ],
				addcar: false
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
			dcar(e){
				console.log(e.currentTarget.dataset.delcar);
				var getindex = e.currentTarget.dataset.delcar;
			
				var index0 = this.allcar.findIndex(item => {
				       if (item.id == getindex) {
				            return true
				            }
				          });
				  this.allcar.splice(index0, 1);
				  uni.showToast({
				      title: '删除成功！',
				  	icon: 'none', 
				      duration: 2000
				  });
			},
			caddcar() {
				this.addcar = true
			},
			eaddcar(){
				
				//获取车牌
				var car = this.sCar;
				var getIcar = car[0];
				var getcarf = car[1];
				var getcarn = car.substring(2);
				// 获取car数组
				var cararr = this.allcar;
				// 获得car id
				var newId = cararr.length + 1;
				// 插入新car
				var newStu = {
                    id: newId,
					Icar:getIcar,//车牌地点
                    carf: getcarf,//车牌首字母
                    carn: getcarn//车牌号
                }
				cararr.push(newStu);//下面接上
				// cararr.unshift(newStu);//最前面
				console.log(newStu);
				
				uni.showToast({
				    title: '车牌号：' + car + '添加成功奥！',
					icon: 'none', 
				    duration: 2000
				});
				
				this.addcar = false;//关闭添加
				
			},
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
