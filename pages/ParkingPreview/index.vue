<template>
    <view class="content">
        <button type="primary" @tap="openMap">点击选择地址 </button>
        <view class="address">
            <view class="">纬度：{{positionObj.latitude}}</view>
            <view class="">经度：{{positionObj.longitude}}</view>
            <view class="">具体 地址：{{positionObj.address}}</view>
        </view>

        <mi-map 
            v-if="mapShow"
            ref="miMap"
            tipText="mi-Map"
            @updateAddress="updateAddress"
        >
        </mi-map>
    </view>
</template>
<!-- 此处缺<script>包裹 由于未知原因，markdown文件上传到组件库里就没了~ -->
<script>
    import miMap from '../../components/mi-map/mi-map.vue'
    export default {
        components: {miMap},
        data() {
            return {
                mapShow: true,
                positionObj: {},
            }
        },
        methods: {
            // 打开地图
            openMap() {
                this.mapShow = true
            },
            // 更新地址并关闭地图
            updateAddress(addressObj) {
                this.mapShow = false
                this.positionObj = addressObj
            },
        }
    }
</script>

<style>
    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .address{
        margin-top: 1rem;
    }
</style>