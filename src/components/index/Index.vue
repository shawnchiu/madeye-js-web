<template style='height: 100%; border: 0px; margin:0px; padding:0px;'>
    <el-container style="height: 100%; border: 1px solid #eee">

        <el-header style='text-align: right; font-size: 12px'>
            <el-dropdown>
                <i class='el-icon-setting' style='margin-right: 15px'></i>
                <el-dropdown-menu slot='dropdown'>
                    <el-dropdown-item>查看</el-dropdown-item>
                    <el-dropdown-item>新增</el-dropdown-item>
                    <el-dropdown-item>删除</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <span>王小虎</span>
        </el-header>
        <el-container style='height: 100%; border: 1px solid #eee'>
            <el-aside width='200px;' style='background-color: rgb(238, 241, 246)'>
                <el-menu class='el-menu-vertical'
                         :default-active='$route.path'
                         router>
                    <el-menu-item :index='item.router' v-for='item in menu' :key='item.key' :id='item.key'>
                        <i :class='item.icon'></i>
                        <span slot='title'>{{item.name}}</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>

            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>

</template>

<script>

    export default {
        name: 'index',
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
                {
                    name: '实时监控',
                    key: 'watch',
                    index: 3,
                    icon: 'el-icon-view',
                    router: '/logWatch'
                },
                {
                    name: '业务管理',
                    key: 'business',
                    index: 4,
                    icon: 'el-icon-tickets',
                    router: '/business'
                }, {
                    name: '用户管理',
                    key: 'user',
                    index: 5,
                    icon: 'el-icon-service',
                    router: '/user'
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
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
    }

    .el-container {
        height: 100%;
        width: 100%;
    }
</style>

