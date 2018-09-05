<template>
    <el-row>
        <el-col :span="8" :offset="8">
            <div class="grid-content">

                <el-main>
                    <i class="el-icon-upload" style="height: 300px;"></i>
                </el-main>
                <el-main>
                    <el-card>
                        <el-row :gutter="20">
                            <el-col :span="12" :offset="6">
                                <el-input id="name" v-model="name" placeholder="请输入帐号">
                                    <template slot="prepend">y</template>
                                </el-input>
                            </el-col>
                        </el-row>
                        <el-row :gutter="20">
                            <el-col :span="12" :offset="6">
                                <el-input id="password" v-model="password" type="password" placeholder="请输入密码">
                                    <template slot="prepend">密码</template>
                                </el-input>
                            </el-col>
                        </el-row>
                        <el-row :gutter="20">
                            <el-col :span="12" :offset="6">
                                <el-button id="login" v-on:click="check" style="width:100%" type="primary">登录
                                </el-button>
                            </el-col>
                        </el-row>

                    </el-card>
                </el-main>

                <el-footer>
                </el-footer>
            </div>
        </el-col>
    </el-row>
</template>

<style>

    .login-box {
        text-align: center; /*让div内部文字居中*/
        background-color: #fff;
        border-radius: 20px;
        margin: auto;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }

    html, body, #app, el-container {
        text-align: center; /*让div内部文字居中*/
        height: 100%;
        padding: 0px;
        margin: 0px;
    }

</style>
