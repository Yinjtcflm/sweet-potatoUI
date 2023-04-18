<demo>一键打开 Dialog</demo>
<template>
  <div>
    <Button @click="showDialog">show</Button>
  </div>
</template>

<script lang="ts">
import { h } from "@vue/runtime-core";
import { Button, openDialog } from "../lib/index";

export default {
  components: { Button },
  setup() {
    const showDialog = () => {
      openDialog({
        title: h("strong", {}, "快来"),
        content: "买呀",
        ok() {
          console.log("ok");
        },
        cancel() {
          console.log("cancel");
        },
      });
    };
    return { showDialog };
  },
};
</script>