<template>
  <button class="hs-switch" @click="toggle" :class="{ 'hs-checked': value }">
    <span></span>
  </button>
</template>

<script lang="ts" setup="props, context">
const props = defineProps<{ value: boolean }>();
const emit = defineEmits<{
  (e: "update:value", visible: boolean): void;
}>();
const toggle = () => {
  emit("update:value", !props.value);
};
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.hs-switch {
  height: $h;
  width: $h * 2;
  border: none;
  background: #bfbfbf;
  border-radius: calc($h/2);
  position: relative;
  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: calc($h2 / 2);
    transition: all 250ms;
  }
  &.hs-checked {
    background: #1890ff;
  }
  &.checked > span {
    left: calc(100% - #{$h2} - 2px);
  }
  &:focus {
    outline: none;
  }
  &:active {
    > span {
      width: $h2 + 4px;
    }
  }
  &.hs-checked:active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }
}
</style>