<template>
  <el-container direction="vertical" v-loading.fullscreen.sync="loading">
    <el-row>
      <el-col>
        <el-card style="text-align: left;">
          <el-form :inline="true" :model="condition" class="demo-form-inline">
            <el-form-item label="业务名">
              <el-input v-model="condition.businessName" placeholder="业务名"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button icon="el-icon-search" circle @click="conditionQuery"></el-button>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="dialogFormVisible = true">添加新业务</el-button>
            </el-form-item>
          </el-form>

        </el-card>

      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-card>
          <el-table
            :data="queryResults.content"
            highlight-current-row
            border="true"
            style="width: 100%;">
            <el-table-column
              type="index"
              label=""
              width="50">
            </el-table-column>
            <el-table-column
              prop="businessName"
              label="业务名"
              width="300px">
            </el-table-column>
            <el-table-column
              prop="createTime"
              label="创建时间"
              width="150px">
            </el-table-column>
            <el-table-column
              prop="apiToken"
              label="ApiToken">
            </el-table-column>
            <el-table-column
              prop="description"
              label="描述">
            </el-table-column>
            <el-table-column
              fixed="right"
              label="操作"
              width="100">
              <template slot-scope="scope">
                <el-button @click="deleteBusiness(scope.row.businessCode)" type="text" size="small">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination
            style="margin-top: 20px;"
            layout="prev, pager, next"
            @current-change="conditionQuery"
            :page-size="condition.pageSize"
            :current-page.sync="condition.page"
            :total="queryResults.totalElements">
          </el-pagination>
        </el-card>
      </el-col>
    </el-row>

    <el-dialog title="添加新业务" :visible.sync="dialogFormVisible" :show-close="false">
      <el-form :model="business" ref="business"
      >
        <el-form-item label="业务名称" :label-width="formLabelWidth"
                      :rules="[{ required: true, message: '业务名称不能为空'}]">
          <el-input v-model="business.businessName" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="描述" :label-width="formLabelWidth">
          <el-input v-model="business.description" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="resetForm">取 消</el-button>
        <el-button type="primary" @click="submitForm('business')">确 定</el-button>
      </div>
    </el-dialog>

  </el-container>
</template>


<script>
  import Axios from 'axios'

  export default {
    data() {
      return {
        loading: false,
        formLabelWidth: '80px',
        dialogFormVisible: false,
        condition: {businessName: '', page: 1, pageSize: 10},
        queryResults: {content: [], totalElements: 0},
        business: {
          description: '',
          businessName: ''
        },
        tableData: []
      }
    },
    methods: {
      resetForm() {
        this.business.description = '';
        this.business.businessName = '';
        this.dialogFormVisible = false;
      },
      deleteBusiness(businessCode) {
        console.log(businessCode);
        this.$confirm('此操作将永久删除该业务, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          var _this = this;
          Axios.get('http://localhost:20000/api/business/delete?businessCode='+businessCode)
            .then(function (res) {
              console.log(res);
              _this.loading = false;
              _this.$message({
                type: 'success',
                message: '删除成功!'
              });
              _this.conditionQuery();
            })
            .catch(function (err) {
              _this.loading = false;
              _this.$message.error(err.message);
            });

        }).catch(() => {
        });
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            var _this = this;
            _this.loading = true;
            Axios.post('http://localhost:20000/api/business/addBusiness', _this.business)
              .then(function (res) {
                console.log(res);
                _this.loading = false;
                _this.resetForm();
                _this.conditionQuery();
              })
              .catch(function (err) {
                _this.loading = false;
                _this.$message.error(err.message);
              });

          } else {
            return false;
          }
        })
      },
      conditionQuery() {
        this.loading = true;
        var _this = this;
        Axios.post('http://localhost:20000/api/business/findByCondition', _this.condition)
          .then(function (res) {
            console.log(res);
            _this.loading = false;
            _this.queryResults = res.data.result;
            _this.resetForm();
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
