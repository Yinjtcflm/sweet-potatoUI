<demo>常规用法</demo>
<template>
  <Button @click="toggle">toggle</Button>
  <Dialog
    v-model:visible="x"
    :closeOnClickOverlay="false"
    :ok="f1"
    :cancel="f2"
  >
    <template v-slot:content>
      <strong>红薯</strong>
      <div>冬天必吃！</div>
    </template>
    <template v-slot:title>
      <strong>这是一个提示</strong>
    </template>
  </Dialog>
</template>

<script lang="ts">
import { Button, Dialog } from "../lib/index";
import { ref } from "vue";

export default {
  components: { Dialog, Button },
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    const f1 = () => {};
    const f2 = () => {};
    return { x, toggle, f1, f2 };
  },
};
</script>