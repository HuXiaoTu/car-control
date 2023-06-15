<template>
  <div class="control">
    <!-- 返回按钮 -->
    <div
      class="returnBtn"
      @click="returnBtn"
    >
      <el-icon size="35">
        <Fold />
      </el-icon>
    </div>
    <!-- 实时 视频展示区域 -->
    <div class="view"></div>
    <!-- 操作区域 -->
    <div class="operate">
      <div class="contentBox">
        <span
          class="btn"
          v-for="item in btnList"
          :key="url"
          @touchstart="activeBtn($event, item.url)"
          @touchend="entBtn"
          :style="item.style"
        >
          <component
            style="width: 10em; height: 10em;"
            class="el-icon"
            :is="item.ele"
          ></component>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { h, resolveComponent } from 'vue';

const btnList = [
  // 左转
  {
    url: '/left',
    ele: h(resolveComponent('TopLeft'))
  },
  // 前进
  {
    url: '/forward',
    ele: h(resolveComponent('Top'))
  },
  // 右转
  {
    url: '/right',
    ele: h(resolveComponent('TopRight'))
  },
  // 左转圈
  {
    url: '/CLeft',
    ele: h(resolveComponent('Sort'))
  },
  // 停止
  {
    url: '/stop',
    ele: h(resolveComponent('VideoPause'))
  },
  // 右转圈
  {
    url: '/CRight',
    ele: h(resolveComponent('Sort')),
    style: { 'transform': 'rotateY(180deg)' }
  },
  // 左后转
  {
    url: '/BLeft',
    ele: h(resolveComponent('BottomLeft'))
  },
  // 后退
  {
    url: '/back',
    ele: h(resolveComponent('Bottom'))
  },
  // 右后转
  {
    url: '/BRight',
    ele: h(resolveComponent('BottomRight'))
  },
]


let props = defineProps({
  url: String,
})
let url = props.url;

// 手指按下
const activeBtn = (e, type) => {
  e.currentTarget.classList.add('active');
  if (type === '/stop') return;

  axios({ url: url + type, method: 'get' });
}
// 手指抬起
const entBtn = () => {
  let box = document.querySelector('.contentBox');
  let active = box.querySelector('.active');
  if (active) active.classList.remove('active');

  axios({ url: url + '/stop', method: 'get' });
}

// 点击返回
const returnBtn = () => {
  window.location.reload(true);
}
</script>

<style lang="scss" >
.control {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;

  .returnBtn {
    position: fixed;
    top: 1rem;
    left: 1rem;
  }

  .view {
    width: 50%;
    height: 100%;
  }

  .operate {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .contentBox {
      width: 20rem;
      height: 20rem;
      box-shadow: 0px 0px 5px 5px #cccccc;
      border-radius: 1rem;
      display: flex;
      flex-wrap: wrap;

      >span {
        flex: 0.33;
        font-size: 10px;
      }

      .active {
        background-color: skyblue;
        border-radius: 1rem;
      }
    }
  }
}
</style>