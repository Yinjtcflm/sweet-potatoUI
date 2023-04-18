<template>
  <button
    class="hs-button"
    :class="classes"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <span v-if="loading" class="hs-loadingIndicator"></span>
    <slot />
  </button>
</template>
<script lang="ts" setup="props">
import { computed } from "vue";
const props = defineProps<{
  theme?: "button" | "text" | "link";
  size?: "normal" | "big" | "small";
  level?: "normal" | "main" | "danger";
  disabled?: boolean;
  loading?: boolean;
}>();

const { theme='button', size, level } = props;
defineEmits<{
  (e: "click", event: MouseEvent): void;
}>();
const classes = computed(() => {
  return {
    [`hs-theme-${theme}`]: theme,
    [`hs-size-${size}`]: size,
    [`hs-level-${level}`]: level,
  };
});
</script>
<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
$orange: orange;
$grey: grey;

button.hs-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: background 250ms;
  & + & {
    margin-left: 8px;
  }
  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.hs-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    &:hover,
    &:focus {
      color: lighten($blue, 10%);
    }
  }
  &.hs-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
  }
  &.hs-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }
  &.hs-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }
  &.hs-theme-button {
    &.hs-level-main {
      background: $blue;
      color: white;
      border-color: $blue;
      &:hover,
      &:focus {
        background: darken($blue, 10%);
        border-color: darken($blue, 10%);
      }
    }
    &.hs-level-danger {
      background: $orange;
      border-color: $orange;
      color: white;
      &:hover,
      &:focus {
        background: darken($orange, 10%);
        border-color: darken($orange, 10%);
      }
    }
  }
  &.hs-theme-link {
    &.hs-level-danger {
      color: $orange;
      &:hover,
      &:focus {
        color: darken($orange, 10%);
      }
    }
  }
  &.hs-theme-text {
    &.hs-level-main {
      color: $blue;
      &:hover,
      &:focus {
        color: darken($blue, 10%);
      }
    }
    &.hs-level-danger {
      color: $orange;
      &:hover,
      &:focus {
        color: darken($orange, 10%);
      }
    }
  }
  &.hs-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
      &:hover {
        border-color: $grey;
      }
    }
  }
  &.hs-theme-link,
  &.hs-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
  }
  > .hs-loadingIndicator {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: $blue $blue $blue transparent;
    border-style: solid;
    border-width: 2px;
    animation: hs-spin 1s infinite linear;
  }
}
@keyframes hs-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>