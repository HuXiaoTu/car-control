<!-- 主页 -->
<template>
    <van-skeleton
        title
        avatar
        :row="3"
        :loading="loading"
    >
        <div>实际内容</div>
    </van-skeleton>
    <van-button type="primary">主要按钮</van-button>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const loading = ref(true);

onMounted(() => {
    // loading.value = false;
});
</script>

<style lang="scss" scoped></style>