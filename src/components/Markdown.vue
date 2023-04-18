<template>
  <article class="markdown-body" v-html="content"></article>
</template>
  
<script lang="ts">
export default {
  props: {
    content: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.markdown-body {
  -webkit-text-size-adjust: 100%;
  color: #24292e;
  font-size: 16px;
  line-height: 1.5;
  word-wrap: break-word;
  background: #f5f5f5;
}
</style>