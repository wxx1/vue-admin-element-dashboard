<template>
  <div class="main">
    <v-sidebar :items="items"></v-sidebar>
    <v-header></v-header>
    <div class="content-box"
    :class="{'content-collapse': collapse}">
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import vHeader from "./Header.vue";
import vSidebar from "./Sidebar.vue";
export default {
  components: {
    vHeader,
    vSidebar
  },
  data() {
    return {
      items: [
        {
          icon: "el-icon-s-home",
          index: "home",
          title: "系统首页"
        },
        {
          icon: "el-icon-user",
          index: "1",
          title: "员工管理",
          subs: [
            {
              index: "workers",
              title: "员工信息管理"
            }
          ]
        },
        {
          icon: "el-icon-tickets",
          index: "table",
          title: "表格"
        },
        {
          icon: "el-icon-edit-outline",
          index: "2",
          title: "表单",
          subs: [
            {
              index: 'form',
              title: "用户表单"
            }
          ]
        },
        {
          icon: "el-icon-edit-outline",
          index: "3",
          title: "挂靠审核",
          subs: [
            {
              index: "lessonscategory",
              title: "申请挂靠机构"
            },
            {
              index: "affiliate",
              title: "挂靠请求"
            }
          ]
        },
        {
          icon: "el-icon-postcard",
          index: "4",
          title: "课表",
          subs: [
            {
              index: "entrystuinfo",
              title: "周课表"
            },
            {
              index: "students",
              title: "月课表"
            },
            {
              index: "electivecourse",
              title: "学生选课管理"
            },
            {
              index: "trialcourse",
              title: "预约试听管理"
            }
          ]
        }
      ]
    };
  },
  computed: {
    collapse(){
      return this.$store.state.collapse;
    }
  },
};
</script>

<style scoped>
.main {
  background-color: #f0f2f5;
  height: 100%;
  padding-top: 64px;
  /* padding-top:64px; */
  overflow: hidden;
}
.content-box {
  position: absolute;
  top: 64px;
  right: 0;
  left: 200px;
  bottom: 0;
  overflow: hidden;
}
.content-collapse {
  left: 65px;
}
.content {
  width: auto;
  height: 100%;
  padding: 20px;
  overflow-y: scroll;
  
  box-sizing: border-box;
}
</style>