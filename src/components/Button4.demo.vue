<demo>支持 disabled</demo>
<template>
  <div class="button4">
    <Button disabled>Disabled</Button>
    <Button theme="link" disabled>Disabled link</Button>
    <Button theme="text" disabled>Disabled text</Button>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: { Button },
  setup() {
    const onClick = () => {
      console.log("hi");
    };
    return { onClick };
  },
};
</script>
<style lang="scss" scoped>
.button4 {
  > Button {
    padding: 8px 0;
  }
}
</style>
