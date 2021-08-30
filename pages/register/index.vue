<template>
	<view>
		<view class="cu-bar bg-white text-black text-lg shadow shadow-lg padding">
			首次使用需要绑定手机号码
		</view>
		<form @submit="regSubmit">
			<view class="cu-form-group margin-top-sm solid">
				<input name="tel" placeholder="请输入手机号" selection-start="-1" selection-end="-1" cursor="-1" type="number" @blur="blurtel" maxlength="11"/>
				<view class="cu-capsule radius">
					<view v-if="!pd_tel" class="cu-tag padding-right bg-white">
						<text class="cuIcon-roundclose lg text-red text-bold" style="transform:scale(1.5)"></text>
					</view>
					<view class="cu-tag bg-blue">+86</view>
					<view class="cu-tag line-blue">中国大陆</view>
				</view>
			</view>
			<view class="cu-form-group solid">
				<input name="code" placeholder="请输入验证码" selection-start="-1" selection-end="-1" cursor="-1" type="number" @blur="blurcode" maxlength="6"/>
				<view v-if="!pd_code" class="cu-tag padding-right bg-white">
					<text class="cuIcon-roundclose lg text-red text-bold" style="transform:scale(1.6)"></text>
				</view>
				<button class="cu-btn bg-green shadow" v-if="show_again" @click="sendCode" role="button" aria-disabled="false">验证码</button>
				<button class="cu-btn bg-green shadow" v-else @click="sendCodeAgain" role="button" aria-disabled="false">{{count}}s 后重新发送</button>
			</view>
			<view class="bg-gray margin-bottom-sm flex padding">
				<checkbox-group @change="pd_xy">
					<checkbox class="fl blue" style="transform:scale(0.6)" :checked="xy_flag"></checkbox>
				</checkbox-group>
				<view class="fl margin-xs text-bold">我已经阅读并同意</view>
				<text class="alink margin-xs" @click="clickagr">{{parkagr}}停车服务协议</text>
			</view>
			<view class="padding-lr">
				<button class="cu-btn block bg-blue margin-tb-sm lg" role="button" :disabled="pd_flag" form-type="submit">确定</button>
			</view>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tel_len:0,
				code_len:0,
				show_again: true, //  显示发送验证码||请稍后按钮
				count: "", // 等待时间
				timer: null, //定时器
				parkagr:"xxxx",
				pd_flag:true,//确认按钮   true为关闭 false开启
				pd_tel:true,//电话号码判断 true 关闭 false开启
				pd_code:true,//验证码判断 true 关闭 false开启
				xy_flag:false//阅读协议判断 false 未选中 true选中
			}
		},
		computed:{
		            changeData(){
		                const {pd_tel,pd_code,xy_flag,tel_len,code_len} = this
		                return{
		                    pd_tel,//电话号码判断
		                    pd_code,//验证码判断 
		                    xy_flag,//阅读协议判断
							tel_len,//电话长度
							code_len//验证码长度
		                }
		            }
		        },
		watch:{
		            /* 监听电话号码/验证码/阅读协议 改变登陆按钮状态 */
		            changeData:{
		                handler:function(n,o){
		                    if(n.pd_tel && n.pd_code && n.xy_flag){
		                        if(n.tel_len>0&&n.code_len>0){
		                            this.pd_flag=false  //控制登录开关
		                        }
		                    }else{
								this.pd_flag=true;
							}
		                    
		                }
		            }
		        },
		methods: {
			sendCode(){
				const count = 60;
				if (!this.timer) {
					this.count = count;
					this.show_again = false;
					this.timer = setInterval(() => {
						if (this.count > 0 && this.count <= count) {
							this.count--;
						} else {
							this.show_again = 0;
							clearInterval(this.timer);
							this.timer = null;
						}
					}, 1000)
				}
			},
			sendCodeAgain() {
				var djs = this.count;
				uni.showToast({
					title: '请 ' + djs + 's 后重新发送',
					icon: "none",
					duration: 1500
				})
			},
			blurtel(e_tel){
				//console.log(e_tel.detail.value);//输入的电话
				var gettel = e_tel.detail.value;
				this.tel_len = gettel.length;
				if(gettel.length != 11)
				{
					this.pd_tel = false;
					uni.showToast({
						title: '电话号码长度不对！',
						icon: "none",
						duration: 1500
					})
				}else{
					this.pd_tel = true;
				}
			},
			blurcode(e_code){
				var getcode = e_code.detail.value;
				this.code_len = getcode.length;
				if(getcode.length != 6)
				{
					this.pd_code = false;
					uni.showToast({
						title: '验证码长度不对！',
						icon: "none",
						duration: 1500
					})
				}else{
					this.pd_code = true;
				}
			},
			regSubmit(e) {
				var tel = e.detail.value.tel;
				var code = e.detail.value.code;
				
				if(tel != "" && code != "" && this.xy_flag){
					uni.redirectTo({
						url: '../Parkingres/index?registerflg=true',
					});
				}else{
					uni.showToast({
					    title: '不要留空哦！',
						icon: 'none', 
					    duration: 2000
					});
				}
			},
			pd_xy(e){
				this.xy_flag = !this.xy_flag;
				console.log(this.xy_flag);
			},
			clickagr(){
				uni.showToast({
				    title: '点击协议',
					icon: 'none', 
				    duration: 2000
				});
			}
		}
	}
</script>

<style>
.alink {
            color: #0A8DE7;
            text-decoration:underline;
			float: right;
        }
        .alink:hover {
            color: #f40;
        }
</style>
