<template>
  <el-container direction="vertical" v-loading.fullscreen.sync="loading">
    <el-row>
      <el-col>
        <el-card style="text-align: left;">
          <el-form :inline="true" class="demo-form-inline">
            <el-form-item label="业务名">
              <el-select v-model="queryCondition.businessCode" placeholder="请选择">
                <el-option
                  v-for="item in businessList"
                  :key="item.businessCode"
                  :label="item.businessName"
                  :value="item.businessCode"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="日期">
              <el-date-picker
                v-model="queryCondition.date"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="日志级别">
              <el-select v-model="queryCondition.logLevel" placeholder="请选择" multiple>
                <el-option
                  v-for="item in logLevels"
                  :key="item.key"
                  :label="item.name"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="doQuery">查询</el-button>
            </el-form-item>
          </el-form>

        </el-card>

      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-card>
          <el-table
            :data="logList"
            style="width: 100%;">
            <el-table-column
              fixed
              prop="createTime"
              label="时间"
              width="100px"
            >
            </el-table-column>
            <el-table-column
              fixed
              prop="browser"
              label="浏览器"
              width="100px"
            >
            </el-table-column>
            <el-table-column
              fixed
              prop="env"
              label="环境"
              width="100px"
            >
            </el-table-column>
            <el-table-column
              fixed
              prop="level"
              label="错误级别"
              width="80px"
            >
            </el-table-column>
            <el-table-column
              fixed
              prop="message"
              label="错误信息"
              width="1000px"
            >
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
  import Axios from 'axios';

  export default {
    data() {
      return {
        loading: false,
        businessIdWatching: '',
        logLevel: '',
        valueDate: '',
        queryCondition: {
          businessCode: '',
          startTime: '',
          endTime: '',
          date: ['', '']
        },
        logLevels: [
          {key: 'Info', name: '日志', value: 'Info'},
          {key: 'Warn', name: '警告', value: 'Warn'},
          {key: 'Error', name: '错误', value: 'Error'}
        ],
        businessList: [],
        logList: []
      }
    },
    mounted: function () {
      this.initBusiness();
    },
    methods: {
      doQuery() {
        const condition = {
          businessCode: this.queryCondition.businessCode,
          startTime: this.queryCondition.date[0] === '' ? null : this.queryCondition.date[0],
          endTime: this.queryCondition.date[1] === '' ? null : this.queryCondition.date[1],
          logLevel: this.queryCondition.logLevel
        };
        var _this = this;
        Axios.post('http://localhost:20000/api/log/findByCondition', condition)
          .then(function (res) {
            console.log(res);
            _this.loading = false;
            _this.logList = res.data.result.content;
          })
          .catch(function (err) {
            _this.loading = false;
            _this.$message.error(err.message);
          });
        console.log(condition);
      },
      initBusiness() {
        var _this = this;
        _this.loading = true;
        Axios.get('http://localhost:20000/api/business/findAll')
          .then(function (res) {
            console.log(res);
            _this.loading = false;
            _this.businessList = res.data.result;
          })
          .catch(function (err) {
            _this.loading = false;
            _this.$message.error(err.message);
          });
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

  &
  :last-child {
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
