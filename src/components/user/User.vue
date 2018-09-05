<template>
    <div>
        <el-row>
            <el-col >
                <el-card>
                    <el-form :inline="true" :model="formInline" class="demo-form-inline">
                        <el-form-item label="用户名">
                            <el-input v-model="formInline.userName" placeholder="用户名"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button icon="el-icon-search" circle @click="onSubmit"></el-button>

                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="onSubmit">添加新用户</el-button>
                        </el-form-item>
                    </el-form>
                </el-card>

            </el-col>
        </el-row>
        <el-row>
            <el-col >
                <el-card>
                    <el-table
                            :data="tableData"
                            style="width: 100%;height: 800px;">
                        <el-table-column
                                fixed
                                prop="userId"
                                label="用户ID"
                                width="100px"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="userName"
                                label="用户名"
                                width="300px">
                        </el-table-column>
                        <el-table-column
                                prop="type"
                                label="账户类型">
                        </el-table-column>
                        <el-table-column
                                fixed
                                prop="createTime"
                                label="注册时间"
                                width="150px">
                        </el-table-column>
                    </el-table>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                formInline: {
                    userName: ''
                },
                tableData: [{
                    createTime: '2016-05-02',
                    userName: '孙晓',
                    userId: 1,
                    type: 'admin'
                }, {
                    createTime: '2016-05-02',
                    userName: '李辉',
                    userId: 2,
                    type: 'admin'
                }, {
                    createTime: '2016-05-02',
                    userName: 'admin',
                    userId: 3,
                    type: 'admin'
                }, {
                    createTime: '2016-05-02',
                    userName: '张三',
                    userId: 4,
                    type: 'admin'
                }]
            }
        },
        methods: {
            onSubmit() {
            }
        }
    }
</script>
<style>
    .box-card {
        height: 350px;
        width: 100%;
    }
    .el-row {
        margin-bottom: 20px;
    &:last-child {
         margin-bottom: 0;
     }
    }
    .el-col {
        border-radius: 4px;
    }
    .bg-purple-dark {
        background: #99a9bf;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
        height: 100%;
        width: 100%;
    }
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }

</style>
