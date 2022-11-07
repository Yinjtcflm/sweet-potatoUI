<template>
  <div>button</div>
  <h1>示例1</h1>
  <div>
    <Button>按钮</Button>
    <Button theme="button">按钮</Button>
    <Button theme="link">按钮</Button>
    <Button theme="text">按钮</Button>
  </div>
  <h1>示例2</h1>
  <div>
    <Button size="big">Big</Button>
    <Button>按钮</Button>
    <Button size="small">Small</Button>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  component: { Button },
  setup() {
    const onClick = () => {
      console.log("hi");
    };
    return { onClick };
  },
};
</script>