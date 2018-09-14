<template>
  <el-container class="no-border">
    <el-header style="width:100%; background-color: #409EFF ;box-shadow: 0px 5px 3px #DDD; margin-bottom: 8px;position:fixed; z-index:999; top:0;">
    </el-header>
    <el-container class="no-border" style="position: fixed">
      <el-aside width='200px;' style='background-color: #fff'>
        <el-menu class='el-menu-vertical no-border'
                 :default-active='$route.path'
                 style="margin-top: 70px;height: 90%"
                 router>
          <el-menu-item :index='item.router' v-for='item in menu' :key='item.key' :id='item.key'>
            <i :class='item.icon'></i>
            <span slot='title'>{{item.name}}</span>
          </el-menu-item>
        </el-menu>
      </el-aside>

      <el-main style="margin-top: 70px">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>

</template>

<script>
  export default {
    name: 'Index',
    created: function () {
      this.$router.push('/dashboard');
    },
    data() {
      const menu = [
        {
          name: '首页',
          key: 'dashboard',
          index: 1,
          icon: 'el-icon-menu',
          router: '/dashboard'
        },
        {
          name: '日志查询',
          key: 'logQuery',
          index: 2,
          icon: 'el-icon-search',
          router: '/logQuery'
        },
        // {
        //   name: '实时监控',
        //   key: 'watch',
        //   index: 3,
        //   icon: 'el-icon-view',
        //   router: '/logWatch'
        // },
        {
          name: '业务管理',
          key: 'business',
          index: 4,
          icon: 'el-icon-tickets',
          router: '/business'
          // }, {
          //   name: '用户管理',
          //   key: 'user',
          //   index: 5,
          //   icon: 'el-icon-service',
          //   router: '/user'
        },

      ];
      return {
        menu: menu
      };
    }
  };
</script>

<style>

  .el-menu-vertical {
    height: 100%;
    width: 200px;
  }

  .el-header {
    background-color: #FFF;
    color: #333;
    line-height: 60px;
  }

  .el-container {
    height: 100%;
    width: 100%;
  }

  .no-border {
    border: 0px;
  }
</style>

