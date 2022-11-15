<demo>支持 level</demo>
<template>
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
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: {
    Button,
  },
};
</script>