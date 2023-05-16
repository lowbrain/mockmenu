<script setup lang="ts">
import { ref, watch } from 'vue'

// プロパティ定義
// const msg = reactive({
//   display: true,
//   type: "error",
//   title: "タイトル",
//   message: "メッセージ",
//   confirm: true
// })
const props = defineProps<{
  display: Boolean,
  type?: String,
  title?: String,
  message: String,
  confirm?: Boolean
}>()

// イベント定義
// <ErrSnackbar v-bind="msg" @close="msg.display = false"/>
// <ErrSnackbar v-bind="msg" @ok="msg.display = false" @cancel="msg.display = false"/>
defineEmits(['close', 'ok', `cancel`])

// displayプロパティーを用いて表示／非表示制御
const disp = ref(props.display)
watch(
  () => props.display,
  () => {
    disp.value = props.display
  }
)
</script>
<template>
  <v-snackbar v-model="disp" multi-line timeout="-1" location="buttom right" variant="text">
    <v-alert :type="type" :title="title" :text="message">
      <div class="d-flex justify-end">
        <template v-if="confirm">
          <v-btn variant="outlined" @click="$emit('ok')" class="ma-1"> Ok </v-btn>
          <v-btn variant="outlined" @click="$emit('cancel')" class="ma-1"> Cancel </v-btn>
        </template>
        <template v-else>
          <v-btn variant="outlined" @click="$emit('close')" class="ma-1"> Close </v-btn>
        </template>
      </div>
    </v-alert>    
  </v-snackbar>
</template>
