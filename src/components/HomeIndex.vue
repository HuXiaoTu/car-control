<template>
  <div class="homeIndex">
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
              <template #prepend>http://</template>
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
      <control :ip="form.ip"></control>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import control from './control.vue';

let formRef = ref(null);

let form = ref({
  ip: '192.168.0.111',
})

const rules = reactive({
  ip: { required: true, message: 'ip必须输入', trigger: 'blur' },
})

let showPage = ref('init');

const submitForm = () => {
  if (!formRef) return
  formRef.value.validate((valid, fields) => {
    if (valid) {
      showPage.value = 'ready';
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