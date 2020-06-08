<template>

  <div :class="[collapse? 'collapse':'','header-org']">
    <div class="collapse-btn" @click="collapseChage()">
      <i class="el-icon-s-unfold" v-if="collapse"></i>
      <i class="el-icon-s-fold" v-if="!collapse"></i>
    </div>
    <div class="header-right">
      <el-dropdown size="small" class="dropdpwn">
        <span class="el-dropdown-link">
          {{username}}
          <i class="el-icon-caret-bottom"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <div class="btn-bell">
        <el-tooltip
          class="item"
          effect="dark"
          :content="message?`有${message}条新消息`:`无新消息`"
          placement="bottom"
        >
          <i class="el-icon-bell"></i>
        </el-tooltip>
        <span class="btn-bell-bage" v-if="message"></span>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      username: localStorage.getItem("username"),
      collapse: this.$store.state.collapse,
      message: 2
    };
  },
  methods: {
    collapseChage() {
      this.$store.commit('collapseChange');
      this.collapse = this.$store.state.collapse;
    }
  }
};
</script>
<style scoped>

.header-org {
  height: 64px;
  background-color: #fcfcfc;
  position: absolute;
  top:0;
  right:0;
  width:100%;
  padding-left:200px;
  text-align: center;
  line-height: 64px;
  font-size: 0.22rem;
  box-sizing: border-box;
  transition:all .3s ease-in-out;
  border-bottom: 1px solid #dce0e5;
}
.collapse{
    padding-left: 64px;
    transition:all .3s ease-in-out;
}

.collapse-btn {
  width: 64px;
  height: 64px;
  float: left;
  padding-left: 0.5rem;
  line-height: 70px;
  padding:0 21px;
  cursor: pointer;
  box-sizing: border-box;
}


.logo{
    float: left;

}
.header-right {
  float: right;
  height: 70px;
  padding-right: 0.5rem;
  font-size: 0.22rem;
}
.el-dropdown-link {
    color:#23262e;
  cursor: pointer;
  /* height: 60px; */
}
.btn-bell {
  display: inline-block;
  padding-left: 15px;
  text-align: center;
  width:30px;
  height: 30px;
}
.btn-bell-bage {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  position: relative;
  top: -15px;
  left: -6px;
  background-color: red;
}
.dropdpwn{
    height: 40px;
}
.el-dropdown-menu__item {
  text-align: center;
}
</style>