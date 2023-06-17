<!-- 小车控制 -->
<template>
    <div class="control">
        <!-- 主页按钮 -->
        <span
            class="returnBtn iconXX icon-fanhui"
            @click="returnBtn"
        ></span>
        <!-- 表单 -->
        <div class="formBox">
            <van-form
                @submit="onSubmit"
                class="vanForm"
            >
                <van-cell-group inset>
                    <van-field
                        v-model="IPaddress"
                        name="address"
                        label="IP地址"
                        placeholder="IP地址"
                        :rules="[{ required: true, message: '请填写CAR IP地址' }]"
                    />
                </van-cell-group>
                <div class="formBtnBox">
                    <van-button
                        block
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
import { useRouter } from 'vue-router';
let router = useRouter();

// 返回
const returnBtn = () => {
    history.back();
}

let IPaddress = ref('');
// 连接
const onSubmit = (values) => {
    router.push({ path: '/control', query: values });
};

</script>

<style lang="scss" scoped>
.control {
    width: 100%;
    height: 100%;

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

    .formBox {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        .vanForm {
            width: 50%;
            border-radius: 5px;
            border: 1px solid #ccc;
            padding-top: 1px;

            .formBtnBox {
                display: flex;
                justify-content: space-around;
            }
        }
    }
}
</style>