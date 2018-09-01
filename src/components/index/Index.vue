<template style="height: 100%; border: 0px; margin:0px; padding:0px;">
<el-container style="height: 100%; border: 0px; margin:0px; padding:0px;">
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown @command="handleCommand">
        <i class="el-icon-more" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="exit">退出登陆</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>{{loginInfo.name}}</span>
    </el-header>
      <el-aside width="200px" >
    <el-menu @command="go">
          <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span slot="title" command="index">首页</span>
      </el-menu-item>   
         <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title" command="logQuery">日志查询</span>
      </el-menu-item>
         <el-menu-item index="3">
        <i class="el-icon-menu"></i>
        <span slot="title" command="realtimeLog">实时监控</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-menu"></i>
        <span slot="title" command="businessmanager">业务管理</span>
      </el-menu-item >
         <el-menu-item index="5"  command="userManager">
        <i class="el-icon-menu"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
    <el-main>
      <Dashboard />
    </el-main>
  </el-container>
</el-container>

</template>

<script>
  import Dashboard from '../dashboard/Dashboard.vue'
  
  export default {

  components: {
    Dashboard
  },
   data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        loginInfo: item,
        tableData: Array(20).fill(item)
      }
    },
    methods: {
        handleCommand: function (command) {
         if ('exit'===command) {
           alert("已退出");
         }
       },
       go: function (page) {
         if("index" === page) {
           alert("已退出");
         }
         else if("logQuery" === page) {
           alert("已退出");
         }
         else if("realtimeLog" === page) {
           alert("已退出");
         }
         else if("businessmanager" === page) {
           alert("已退出");
         }
         else if("userManager" === page) {
           alert("已退出");
         }
       }
    }
  };
</script>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>
