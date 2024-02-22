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
            <!-- 操作 -->
            <div>
                <span
                    class="iconXX icon-shoubing2"
                    @click="handleCar"
                    v-if="!isLoading"
                ></span>
                <van-loading
                    vertical
                    v-else
                >
                    <template #icon>
                        <van-loading
                            type="spinner"
                            color="#1989fa"
                        />
                    </template>
                </van-loading>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { showNotify, showSuccessToast } from 'vant';
import { useRouter } from 'vue-router';
import axios from "axios";
import { computed } from 'vue';
let router = useRouter();

let ipValue = ref('111.111.111.111');
let url = computed(() => {
    return "http://" + ipValue.value;
})

// wifi板块控制
const wifi = () => {
    router.push({ path: '/wifi', query: { ipValue: url.value } });
}

// 蓝牙板块控制
const blueTooth = () => {
    showNotify({ type: 'warning', message: '功能开发中...' });
}

// 小车控制
let isLoading = ref(false);
const handleCar = () => {
    isLoading.value = true;
    axios({ url: url.value, method: 'get' }).then(() => {
        isLoading.value = false;
        showSuccessToast('连接成功~');
        router.push({ path: '/control', query: { address: url.value } });
    }).catch(() => {
        isLoading.value = false;
        showNotify({ type: 'warning', message: '连接失败,请检查IP地址是否正确!' });
    });
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