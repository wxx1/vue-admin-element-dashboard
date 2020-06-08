<template>
  <div class="head-nav">
    <div class="head-nav-menu ">
      <ul class="head-nav-menu-r">
        <li>
          <div class="head-nav-menu-hd">
            <router-link to="/login" style="color:#f23b13" ><span>你好，请登录</span></router-link>
          </div>
        </li>
        <li>
          <div class="head-nav-menu-hd">
            <router-link to="/login" style="color:#6C6C6C"  ><span>免费注册</span></router-link>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
ul {
  list-style: none;
  display: inline;
}
li {
  display: inline-block;
}
.head-nav {
  height: 36px;
  background-color: #f5f5f5;
  line-height: 36px;
}
.head-nav-menu-r {
  float:right;
  /* 使用vw单位，视口宽度 */
  margin: 0 6vw;
}

.head-nav-menu-hd{
    margin:0 10px;
    color:#ccc;
}

.head-nav-menu-hd span:hover{
    color:red;
}
</style>