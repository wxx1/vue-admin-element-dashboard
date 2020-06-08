<template>
  <div class="sidebar">
    <div :class="[collapse ?'sidebar-top-c':'sidebar-top']">
      <div class="logo">
        <span class="logo-s">M</span>
        <span class="logo-r">yCos</span>
      </div>
    </div>
    <el-menu
      class="sidebar-el-menu"
      background-color="#020633"
      text-color="#bfcbd9"
      active-text-color="#369388"
      :default-active="onRoutes"
      :collapse="collapse"
      unique-opened
      router
    >
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :key="item.index" :index="item.index">
            <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.title }}</span>
            </template>
            <!-- 是否存在二级目录 -->

            <template :index="subItem.index" v-for="subItem in item.subs">
              <!-- 是否存在三级目录 -->
              <!-- <template>{{subItem.title}}</template> -->
              <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                <template slot="title">{{ subItem.title }}</template>
                <el-menu-item
                  v-for="(threeItem,i) in subItem.subs"
                  :key="i"
                  :index="threeItem.index"
                >{{ threeItem.title }}</el-menu-item>
              </el-submenu>
              <el-menu-item v-else :index="subItem.index" :key="subItem.index">{{ subItem.title }}</el-menu-item>
            </template>
          </el-submenu>
        </template>

        <!-- 不存在二级目录，只有一级目录 -->
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
        <!-- </el-submenu> -->
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  props: ["items"],
  computed: {
    onRoutes() {
      console.log(this.$route.path);
      const url = this.$route.path;
      console.log(url);
      //返回一个指定的字符串值最后出现的位置，在一个字符串中的指定位置从后向前搜索。
      const index = url.lastIndexOf("/");
      return this.$route.path.replace(url.substring(0, index + 1), "");
    },
    collapse() {
      return this.$store.state.collapse;
    }
  }
};
</script>

<style scoped>
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  font-size: 12px;
  z-index:10;
  /* transition: width 0.4s;
  transition-timing-function: ease-in;
  -webkit-transition: width 0.4s; Safari */

  /* overflow-y: scroll; */
}
.sidebar-top {
  height: 64px;
  width: 200px;
  box-sizing: border-box;
  background-color: #373c8e;
  color: #fff;
  font-size: 20px;
  line-height: 64px;
  transition: 0.3s width ease-in-out, 0.3s padding-top ease-in-out, 0.3s padding-bottom ease-in-out;
}
.sidebar-top-c {
  height: 64px;
  width: 64px;
  box-sizing: border-box;
  background-color: #373c8e;
  color: #fff;
  font-size: 20px;
  line-height: 64px;
 transition: 0.3s width ease-in-out, 0.3s padding-top ease-in-out, 0.3s padding-bottom ease-in-out;
  /* transition: width 0.4s;
  transition-timing-function: ease-in;
  -webkit-transition: width 0.4s; Safari */
}
.sidebar-top-c .logo .logo-r {
  display: none;
}
.sidebar-top .logo {
  padding: 0 25px;
  text-align: left;
}
.logo-s {
  color: #1bc86c;
}
.sidebar::-webkit-scrollbar {
  width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
  width: 200px;
}
.sidebar > ul {
  height: 100%;
}
.sidebar > ul > li {
  text-align: left;
}
</style>