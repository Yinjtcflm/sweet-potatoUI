<template>
  <div>
    <h1>示例</h1>
    <demo :component="Dialog1Demo" />
    <demo :component="Dialog2Demo" />
  </div>
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import Dialog1Demo from "./Dialog1.demo.vue";
import Dialog2Demo from "./Dialog2.demo.vue";

export default {
  components: { Demo },
  setup() {
    return { Dialog1Demo, Dialog2Demo };
  },
};
</script>