<template>
  <el-container direction="vertical">
    <el-row>
      <el-col>
        <el-card style="text-align: left;">
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="业务名">
              <el-select v-model="businessIdWatching" placeholder="请选择">
                <el-option
                  v-for="item in tableData"
                  :key="item.businessId"
                  :label="item.businessName"
                  :value="item.businessId">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="success" icon="el-icon-check" circle></el-button>
              <el-button type="danger" icon="el-icon-close" circle></el-button>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">Start</el-button>
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
            style="width: 100%;">
            <el-table-column
              fixed
              prop="businessId"
              label="日志ID"
              width="100px"
            >
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
  export default {
    data() {
      return {
        businessIdWatching:'',
        formInline: {
          businessName: ''

        },
        tableData: [{
          createTime: '2016-05-02',
          businessName: '在线会员',
          businessId: 1,
          memo: '在线会员'
        }, {
          createTime: '2016-05-02',
          businessName: '会员系统',
          businessId: 2,
          memo: '会员系统'
        }, {
          createTime: '2016-05-02',
          businessName: '储值卡系统',
          businessId: 3,
          memo: '储值卡系统'
        }, {
          createTime: '2016-05-02',
          businessName: '百感交集',
          businessId: 4,
          memo: '百感交集'
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
