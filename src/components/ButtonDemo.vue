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
  <div>
    <Button theme="link" size="big">大大大</Button>
    <Button theme="link">普普通</Button>
    <Button size="small" theme="link">小小小</Button>
  </div>
  <div>
    <Button size="big" theme="text">大大大</Button>
    <Button theme="text">普普通</Button>
    <Button size="small" theme="text">小小小</Button>
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