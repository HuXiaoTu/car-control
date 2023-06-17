<!-- wifi -->
<template>
    <div class="wifi">
        <!-- 返回按钮 -->
        <span
            class="returnBtn iconXX icon-fanhui"
            @click="returnBtn"
        ></span>
        <!-- wifi列表 -->
        <div class="wifiList">
            <div class="title">wifi扫描列表</div>
            <div class="wifiTable">
                <table>
                    <thead>
                        <tr>
                            <th>序号</th>
                            <th>名称</th>
                            <th>强度</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr
                            v-for="(ele, index) in wifiList"
                            :key="ele.name"
                        >
                            <td align="center">
                                <span>{{ index + 1 }}</span>
                            </td>
                            <td align="center">
                                <span
                                    class="link"
                                    @click="clickName(ele.name)"
                                >{{ ele.name }}</span>
                            </td>
                            <td align="center">
                                <span>{{ ele.strength }}</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
        <!-- 表单 -->
        <div class="formBox">
            <div class="title">连接至wifi</div>
            <van-form
                @submit="onSubmit"
                class="vanForm"
            >
                <van-cell-group inset>
                    <van-field
                        v-model="username"
                        name="ssid"
                        label="wifi名称"
                        placeholder="wifi名称"
                        :rules="[{ required: true, message: '请填写wifi名称' }]"
                    />
                    <van-field
                        v-model="password"
                        type="password"
                        name="password"
                        label="密码"
                        placeholder="密码"
                        :rules="[{ required: true, message: '请填写密码' }]"
                    />
                </van-cell-group>
                <div class="formBtnBox">
                    <van-button
                        type="primary"
                        size="small"
                        @click="scanWIFI"
                        :loading="scanLoading"
                    >
                        扫描
                    </van-button>
                    <van-button
                        type="primary"
                        size="small"
                        native-type="submit"
                    >
                        连接
                    </van-button>
                </div>
            </van-form>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from "axios";
import { showSuccessToast, showFailToast } from 'vant';

let route = useRoute();
let router = useRouter();
// 返回
const returnBtn = () => {
    history.back();
}

const username = ref('');
const password = ref('');
// 连接
const onSubmit = (values) => {
    axios({
        url: 'http://' + route.query.ipValue + '/HandleWifi', params: values, method: 'get',
    })
        .then((res) => {
            showSuccessToast('连接成功');
            router.push({ path: '/controlHome' })
        })
        .catch(() => {
            showFailToast('连接失败...');
        })
};

let wifiList = ref([]);
let scanLoading = ref(false);
// 扫描wifi
const scanWIFI = () => {
    scanLoading.value = true;
    axios({ url: 'http://' + route.query.ipValue + '/HandleScanWifi', method: 'get', })
        .then((res) => {
            scanLoading.value = false;
            let data = res.data;
            let arr = data.split("=");
            let resArr = arr.map((ele, index) => {
                let [name, strength] = ele.split(',');
                return {
                    name,
                    strength
                }
            })
            // 按照信号强弱排序
            wifiList.value = resArr.sort((a, b) => b.strength - a.strength);
        })
        .catch(() => {
            scanLoading.value = false;
            showFailToast('连接失败...');
        })
};

// 点击WIFI名称
const clickName = (name) => {
    username.value = name;
}
</script>

<style lang="scss" scoped>
.wifi {
    width: 100%;
    height: 100%;
    display: flex;

    .returnBtn {
        position: fixed;
        top: 0.3em;
        left: 0.5em;
    }

    .title {
        height: 2em;
        margin-bottom: 4em;
        width: 100%;
        text-align: center;
    }

    .wifiList {
        width: 50%;
        height: 100%;
        border-right: 1px solid #ccc;

        .wifiTable {
            width: 100%;
            height: calc(100% - 6em);
            overflow: auto;

            table {
                width: 100%;
            }
        }
    }

    .formBox {
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;

        .vanForm {

            // border-radius: 5px;
            // border: 1px solid #ccc;
            // padding-top: 1px;

            .formBtnBox {
                display: flex;
                justify-content: space-around;
            }
        }
    }
}
</style>