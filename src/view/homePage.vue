<!-- 主页 -->
<template>
    <div class="home">
        <div class="homePageTitle">
            <van-field
                v-model="ipValue"
                label="默认CAR_WIFI地址为:"
                label-width="auto"
                placeholder=""
            />
        </div>
        <div class="homePage">
            <!-- wifi -->
            <div>
                <span
                    class="iconXX icon-wifi"
                    @click="wifi"
                ></span>
            </div>
            <!-- 蓝牙 -->
            <div>
                <span
                    class="iconXX icon-bluetooth"
                    @click="blueTooth"
                ></span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { showNotify } from 'vant';
import { useRouter } from 'vue-router';
let router = useRouter();

let ipValue = ref('111.111.111.111');

// wifi板块控制
const wifi = () => {
    router.push({ path: '/wifi', query: { ipValue: ipValue.value } })
}

// 蓝牙板块控制
const blueTooth = () => {
    showNotify({ type: 'warning', message: '功能开发中...' });
}

</script>

<style lang="scss" scoped>
.home {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;

    .homePageTitle {
        // height: 2em;
        width: 100%;
        background-color: #fff;
    }

    .homePage {
        flex: 1;
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: #e4e4e4;


        >div {
            width: 5em;
            height: 5em;
            border-radius: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #fff;

            >span {
                font-size: 2em;
            }
        }
    }
}
</style>