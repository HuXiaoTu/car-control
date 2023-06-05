<template>
  <div class="control">
    <!-- 实时 视频展示区域 -->
    <div class="view"></div>
    <!-- 操作区域 -->
    <div class="operate">
      <div class="contentBox">
        <!-- 上 -->
        <div>
          <span @click="activeBtn($event, '/forward')">
            <Top style="width: 10em; height: 10em;" />
          </span>
        </div>
        <!-- 左 暂停 右 -->
        <div>
          <span @click="activeBtn($event, '/left')">
            <Back style="width: 10em; height: 10em;" />
          </span>
          <span
            class="active"
            @click="activeBtn($event, '/stop')"
          >
            <VideoPause style="width: 10em; height: 10em;" />
          </span>
          <span @click="activeBtn($event, '/right')">
            <Right style="width: 10em; height: 10em;" />
          </span>
        </div>
        <!-- 下 -->
        <div>
          <span @click="activeBtn($event, '/back')">
            <Bottom style="width: 10em; height: 10em;" />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";

let props = defineProps({
  ip: String,
})
let url = 'http://' + props.ip;

const activeBtn = (e, type) => {
  let box = document.querySelector('.contentBox');
  let active = box.querySelector('.active');
  if (active) active.classList.remove('active');
  e.currentTarget.classList.add('active');

  axios({ url: url + type, method: 'get' });
}
</script>

<style lang="scss" >
.control {
  width: 100vw;
  height: 100vh;
  display: flex;

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
      flex-direction: column;

      >div {
        flex: 0.33;
        font-size: 10px;
        display: flex;
        align-items: center;
        justify-content: center;

        .active {
          // >span {
          background-color: skyblue;
          border-radius: 1rem;
        }
      }
    }
  }
}
</style>