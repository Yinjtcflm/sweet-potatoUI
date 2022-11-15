<demo>
    支持 size
    </demo>
<template>
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
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: {
    Button,
  },
};
</script>