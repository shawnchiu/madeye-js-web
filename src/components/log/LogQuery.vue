<template>
    <el-container direction="vertical" v-loading.fullscreen.sync="loading">
      <el-row>
        <el-col>
          <el-card style="text-align: left;">
            <el-form :model="queryCondition" ref="queryCondition" :inline="true" class="demo-form-inline">
              <el-form-item label="业务名"
                            prop="businessCode">
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
              <el-form-item label="日期"
                            prop="date">
                <el-date-picker
                  v-model="queryCondition.date"
                  type="daterange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="日志级别"
                            prop="logLevel">
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
                <el-button type="primary" @click="conditionQuery">查询</el-button>
                <el-button @click="resetForm('queryCondition')">重置</el-button>
              </el-form-item>

            </el-form>

          </el-card>

        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-card>
            <el-table
              :data="queryResult.content"
              highlight-current-row
              border
              header-align="center"
              align="center"
              style="width: 100%; header-align:center;align:center;">
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
              >
              </el-table-column>

              <el-table-column
                fixed="right"
                label="操作"
                width="100">
                <template slot-scope="scope">
                  <el-button type="text" size="small">查看详情</el-button>
                </template>
              </el-table-column>
            </el-table>

            <el-pagination
              style="margin-top: 20px;"
              layout="prev, pager, next"
              @current-change="conditionQuery"
              :page-size="queryCondition.pageSize"
              :current-page.sync="queryCondition.page"
              :total="queryResult.totalElements">
            </el-pagination>
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
          page: 1,
          pageSize: 10,
          date: ['', '']
        },
        logLevels: [
          {key: 'INFO', name: '日志', value: 'INFO'},
          {key: 'WARN', name: '警告', value: 'WARN'},
          {key: 'ERROR', name: '错误', value: 'ERROR'}
        ],
        businessList: [],
        queryResult: {
          content: [],
          totalElements: 0
        }
      }
    },
    mounted: function () {
      this.initBusiness();
    },
    methods: {
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      conditionQuery() {
        var _this = this;
        _this.loading = true;
        const condition = {
          businessCode: this.queryCondition.businessCode,
          startTime: this.queryCondition.date[0] === '' ? null : this.queryCondition.date[0],
          endTime: this.queryCondition.date[1] === '' ? null : this.queryCondition.date[1],
          logLevel: this.queryCondition.logLevel
        };
        Axios.post('http://localhost:20000/api/log/findByCondition', _this.queryCondition)
          .then(function (res) {
            if (200 === res.data.code) {
              _this.loading = false;
              _this.queryResult = res.data.result;
            }
            else {
              _this.loading = false;
              _this.$message.error(res.data.message);
            }
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
            if (200 === res.data.code) {
              console.log(res);
              _this.loading = false;
              _this.businessList = res.data.result;
            }
            else {
              _this.loading = false;
              _this.$message.error(res.data.message);
            }
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
