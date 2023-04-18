<demo>
    支持 size
    </demo>
<template>
  <div class="button2">
    <div>
      <Button size="big">Big</Button>
      <Button>Normal</Button>
      <Button size="small">Small</Button>
    </div>
    <div class="link">
      <Button theme="link" size="big">Big link</Button>
      <Button theme="link">Link</Button>
      <Button size="small" theme="link">Small link</Button>
    </div>
    <div class="text">
      <Button size="big" theme="text">Big text</Button>
      <Button theme="text">Text</Button>
      <Button size="small" theme="text">Small text</Button>
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
.button2 {
  .link {
    padding: 8px 0;
  }
}
</style>