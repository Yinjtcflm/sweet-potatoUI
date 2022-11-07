<template>
  <div>Button 示例</div>
  <h1>示例1</h1>
  <div>
    <Button @click="onClick">按钮</Button>
    <Button theme="link">按钮</Button>
    <Button theme="text">按钮</Button>
  </div>
  <h1>示例2</h1>
  <div>
    <div>
      <Button size="big">Big</Button>
      <Button>Normal</Button>
      <Button size="small">Small</Button>
    </div>
    <div>
      <Button theme="link" size="big">Big link</Button>
      <Button theme="link">Link</Button>
      <Button size="small" theme="link">Small link</Button>
    </div>
    <div>
      <Button size="big" theme="text">Big text</Button>
      <Button theme="text">Text</Button>
      <Button size="small" theme="text">Small text</Button>
    </div>
  </div>
  <h1>示例3</h1>
  <div>
    <dir>
      <Button level="main">主要按钮</Button>
      <Button>普通按钮</Button>
      <Button level="danger">危险按钮</Button>
    </dir>
    <dir>
      <Button theme="link" level="main">Main link</Button>
      <Button theme="link">Normal link</Button>
      <Button theme="link" level="danger">Danger link</Button>
    </dir>
    <dir>
      <Button theme="text" level="main">Main text</Button>
      <Button theme="text">Normal text</Button>
      <Button theme="text" level="danger">Danger text</Button>
    </dir>
  </div>
  <h1>示例4</h1>
  <div>
    <Button disabled>Disabled</Button>
    <Button theme="link" disabled>Disabled link</Button>
    <Button theme="text" disabled>Disabled text</Button>
  </div>
  <h1>示例5</h1>
  <div>
    <Button loading>Loading</Button>
    <Button>加载完毕</Button>
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