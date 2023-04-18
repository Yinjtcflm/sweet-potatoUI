<template>
  <div class="topnav">
    <router-link to="/" class="logo">
      <svg class="icon">
        <use xlink:href="#icon-hongshu"></use>
      </svg>
    </router-link>
    <ul class="menu">
      <router-link to="/doc">文档</router-link>
    </ul>
    <svg v-if="toggleMenuButtonVisible" class="toggleAside" @click="toggleMenu">
      <use x-link:href="#icon-menu"></use>
    </svg>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";
export default {
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible");
    const toggleMenu = () => {
      if (menuVisible) {
        menuVisible.value = !menuVisible.value;
      }
    };
    return { toggleMenu };
  },
};
</script>

<style lang="scss" scoped>
.topnav {
  color: #db7093;
  height: 3rem;
  display: flex;
  position: fixed;
  z-index: 3000;
  top: 0;
  left: 0;
  right: 0;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid;
  background: #fff;
  box-shadow: 0 3px 3px #db7093;
  > .logo {
    max-width: 6em;
    margin-left: 32px;
    > svg {
      width: 32px;
      height: 32px;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    margin-right: 32px;
  }
  > li {
    margin: 0 1em;
  }
  > .toggleAside {
    width: 24px;
    height: 24px;
    background: linear-gradient(
      0deg,
      rgba(34, 193, 195, 1) 0%,
      rgba(253, 187, 45, 1) 100%
    );
    border-radius: 6px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }
  @media (max-width: 500px) {
    > .menu {
      display: block;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>