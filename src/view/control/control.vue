<template>
  <div class="control">
    <!-- 顶部栏 -->
    <div class="controlTop">
      <div
        class="returnBtn"
        @click="returnBtn"
      >
        <van-icon
          class="returnBtnIcon"
          name="share"
          size="30"
        />
      </div>
      <div style="margin: 0 0.3rem;  ">
        <span>当前控制方式：</span>
        <span style="display: inline-block; width: 4.5rem;">{{ selectRow.text }}</span>
      </div>
      <van-popover
        v-model:show="showPopover"
        :actions="options"
        @select="onSelect"
      >
        <template #reference>
          <van-icon
            :class="[showPopover?'scale':'','selectPage']"
            name="arrow-down"
            size="20"
          />
        </template>
      </van-popover>
    </div>
    <!-- 控制方式 -->

    <!-- 四个电机（无舵机） -->
    <FourEngine v-if="selectRow.value === 1"></FourEngine>
    <!-- 方向+动力 -->
    <DirectionEngine v-else-if="selectRow.value === 2"></DirectionEngine>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import FourEngine from './components/four_engine.vue';
import DirectionEngine from './components/direction_engine.vue';


const options = [
  { text: '四个电机', value: 1 },
  { text: '方向+动力', value: 2 },
];

let selectRow = ref({
  text: '四个电机', value: 1
});

const showPopover = ref(false);
const onSelect = (item) => {
  selectRow.value = item;
}

// 点击返回
const returnBtn = () => {
  history.back();
}
</script>

<style lang="scss" >
.control {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;

  .controlTop {
    position: fixed;
    top: 0;
    left: 0;
    height: 35px;
    display: flex;
    width: 50%;
    align-items: center;

    .returnBtn {
      padding-left: 5px;

      .returnBtnIcon {
        transform: scaleX(-1);
      }
    }

    .selectPage {
      transition: transform 0.2s linear;
    }

    .scale {
      transform: rotate(180deg);
    }
  }
}
</style>