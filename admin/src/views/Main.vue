<template>
  <el-container>
    <el-aside width="200px">
      <el-menu router :default-active="$route.path" style="height: 100vh">
        <el-submenu
          v-for="(item, index) in menu.items"
          :index="`${index} + 1`"
          :key="`item${index}`"
        >
          <template slot="title"
            ><i :class="item.icon"></i>{{ item.title }}</template
          >
          <el-menu-item
            v-for="(subItem, subIndex) in item.items"
            :key="`subItem${subIndex}`"
            :index="subItem.path"
          >
            <i :class="subItem.icon"></i>{{ subItem.title }}
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <router-link tag="div" to="/"
          ><h3>
            <i class="el-icon-s-home"></i> News网站后台管理界面
          </h3></router-link
        >
      </el-header>
      <el-main>
        <router-view :key="$route.path"></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class Main extends Vue {
  menu = {
    items: [
      {
        title: "内容管理",
        icon: "el-icon-menu",
        items: [
          {
            title: "频道列表",
            path: "/channels/list",
            icon: "el-icon-data-line",
          },
          {
            title: "标签列表",
            path: "/tags/list",
            icon: "el-icon-data-line",
          },
          {
            title: "文章列表",
            path: "/articles/list",
            icon: "el-icon-reading",
          },
          {
            title: "评论列表",
            path: "/comments/list",
            icon: "el-icon-s-comment",
          },
          {
            title: "回复列表",
            path: "/replies/list",
            icon: "el-icon-s-promotion",
          },
          { title: "操作列表", path: "/actions/list", icon: "el-icon-aim" },
        ],
      },
      {
        title: "系统管理",
        icon: "el-icon-setting",
        items: [
          { title: "用户列表", path: "/users/list", icon: "el-icon-user" },
        ],
      },
    ],
  };
}
</script>

<style lang="scss">
.el-header {
  text-align: center;
  height: 60px !important;
  line-height: 60px !important ;
  color: black;
  div {
    cursor: pointer;
  }
}

i {
  margin-top: -3px;
}
</style>
