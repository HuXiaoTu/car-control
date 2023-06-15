<template>
  <div
    class="homeIndex"
    v-loading="loading"
    element-loading-text="连接中..."
    element-loading-background="rgba(122, 122, 122,0.9)"
  >
    <!-- 初始化 -->
    <div
      class="inputBox"
      v-if="showPage === 'init'"
    >
      <div>
        <el-form
          ref="formRef"
          :model="form"
          label-position="left"
          :rules="rules"
        >
          <el-form-item
            label="控制地址："
            prop="ip"
          >
            <el-input
              style="width: 25rem;"
              v-model="form.ip"
              placeholder="例:192.168.0.111"
              @keydown.enter="submitForm"
            >
              <template #prepend>{{ form.agreement }}</template>
            </el-input>
          </el-form-item>
        </el-form>
      </div>
      <div class="btnBox">
        <el-button
          type="primary"
          @click="submitForm"
        >确定</el-button>
      </div>
    </div>
    <!-- 操作界面 -->
    <div v-else>
      <control :url="form.agreement + form.ip"></control>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { reactive, ref } from 'vue';
import control from './control.vue';


let formRef = ref(null);
let form = ref({
  ip: '',
  // 请求协议
  agreement: 'http://'
})
// 验证规则
const rules = reactive({
  ip: [
    { required: true, message: 'ip必须输入', trigger: 'blur' },
  ],
})

// 先获取 缓存 
let localhost = localStorage.getItem("oldId");
if (localhost) form.value.ip = localhost;


// 显示页面
let showPage = ref('init');
// loading
let loading = ref(false);
const submitForm = () => {
  formRef.value.validate((valid, fields) => {

    if (valid) {
      loading.value = true;
      let { agreement, ip } = form.value;
      axios({
        url: agreement + ip, method: 'get',
        headers: { 'pm-token': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI3IiwiaXNzIjoicG0udGVkYy5jb20iLCJpYXQiOjE2ODY3OTIzNzgsImV4cCI6MzE1ODAyMTMwNn0.JSrUNiC73EpVbvBaTqL7H6nmIbdipRG5cOIG9i0Z2rY' }
      })
        .then(() => {
          loading.value = false;
          showPage.value = 'ready';
          // 存储IP
          localStorage.setItem("oldId", form.value.ip);
        })
        .catch(() => {
          loading.value = false;
          alert('连接失败...')
        })
    }

  })
}

</script>

<style lang="scss" scoped>
.homeIndex {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;

  .inputBox {
    width: 35rem;
    box-shadow: 0px 0px 5px 5px #cccccc;
    border-radius: 1rem;
    padding: 5px;

    .btnBox {
      padding: 20px 0;
      text-align: center;
    }
  }

}
</style>