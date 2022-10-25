<template>
  <div>
    <a-menu
      :default-selected-keys="defaultSelectKeys"
      :default-open-keys="defaultOpenKeys"
      mode="inline"
      theme="dark"
      :inline-collapsed="collapsed"
      :forceSubMenuRender="true"
    >
      <template v-for="menu in routes">
        <a-menu-item
          v-if="!menu.meta.hasSubMenu"
          @click="handleMenuClick(menu.path)"
          :key="menu.children[0].path"
        >
          <a-icon :type="menu.meta.icon" />
          <span>{{ menu.meta.title }}</span>
        </a-menu-item>
        <sub-menu
          v-else
          :key="menu.path"
          :menu-info="menu"
          @menuItemClick="handleMenuClick"
        ></sub-menu>
      </template>
    </a-menu>
  </div>
</template>

<script>
import { generateRoutes } from '@/utils/utils.js'
import SubMenu from './submenu.vue'

export default {
  name: 'Sidebar',
  data() {
    const routes = generateRoutes(this.$router.options.routes)
    const defaultSelectKeys = []
    const defaultOpenKeys = []
    return {
      collapsed: false,
      routes,
      defaultSelectKeys
    }
  },
  components: {
    SubMenu
  },
  methods: {
    handleMenuClick(path) {
      this.$router.push(path)
    }
  },
  watch: {
    $route: {
      handler(route) {
        const path = route.path
        this.defaultSelectKeys = [path]
        const parentPath = route.matched[0].path
        this.defaultOpenKeys = [parentPath]
      },
      immediate: true
    }
  }
}
</script>

<style scoped lang="less">
#components-layout-demo-custom-trigger {
  height: 100%;
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
