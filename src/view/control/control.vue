<template>
  <div class="control">
    <!-- 返回按钮 -->
    <div
      class="returnBtn"
      @click="returnBtn"
    >
      <span class="returnBtn iconXX icon-fanhui"></span>
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
          <span :class="['iconXX', item.ele]"></span>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { useRoute } from "vue-router";
let route = useRoute();

const btnList = [
  // 左转
  {
    url: '/left',
    ele: 'icon-ziyuanldpi3',
    style: { 'transform': 'rotateY(180deg)' }
  },
  // 前进
  {
    url: '/forward',
    ele: 'icon-ziyuanldpi'
  },
  // 右转
  {
    url: '/right',
    ele: 'icon-ziyuanldpi3',
  },
  // 左转圈
  {
    url: '/CLeft',
    ele: 'icon-ziyuanldpi2'
  },
  // 停止
  {
    url: '/stop',
    style: { 'pointer-events': 'none' }
  },
  // 右转圈
  {
    url: '/CRight',
    ele: 'icon-ziyuanldpi2',
    style: { 'transform': 'rotateY(180deg)' }
  },
  // 左后转
  {
    url: '/BLeft',
    ele: 'icon-ziyuanldpi4'
  },
  // 后退
  {
    url: '/back',
    ele: 'icon-ziyuanldpi1'
  },
  // 右后转
  {
    url: '/BRight',
    ele: 'icon-ziyuanldpi4',
    style: { 'transform': 'rotateY(180deg)' }
  },
]


let url = "http://" + route.query.address;

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
  history.back();
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
    top: 0.3rem;
    left: 0.5rem;
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
        width: 33%;
        display: flex;
        justify-content: center;
        align-items: center;

        span {
          display: inline-block;
          font-size: 3rem;
        }
      }

      .active {
        background-color: skyblue;
        border-radius: 1rem;
      }
    }
  }
}
</style>