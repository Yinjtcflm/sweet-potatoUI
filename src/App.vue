<template>
  <router-view />
</template>

<script lang="ts">
import { ref } from "@vue/reactivity";
import { provide } from "vue";
export default {
  name: "App",
  setup() {
    const menuVisible = ref(false);
    provide("menuVisible", menuVisible);
  },
};
</script>
