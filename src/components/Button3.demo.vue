<demo>支持 level</demo>
<template>
  <div class="button3">
    <div>
      <Button level="main">主要按钮</Button>
      <Button>普通按钮</Button>
      <Button level="danger">危险按钮</Button>
    </div>
    <div class="link">
      <Button theme="link" level="main">Main link</Button>
      <Button theme="link">Normal link</Button>
      <Button theme="link" level="danger">Danger link</Button>
    </div>
    <div class="text">
      <Button theme="text" level="main">Main text</Button>
      <Button theme="text">Normal text</Button>
      <Button theme="text" level="danger">Danger text</Button>
    </div>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: {
    Button,
  },
};
</script>
<style lang="scss" scoped>
.button3 {
  .link {
    padding: 8px 0;
  }
}
</style>