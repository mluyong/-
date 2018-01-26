<template>
    <div class="dictionary">
        <el-row :gutter="50" class="dictionary-button">
            <el-col :span="12">
                
            </el-col>
            <el-col :span="12">
                
            </el-col>
        </el-row>
        <el-row class="dictionary-conter">
            <div class="dictionary-conter-left">
                <div class="dictionary-button-left clearfix">
                    <el-button @click="dialogFormVisible = true">创建</el-button>
                    <el-button @click="delectDict = true">删除</el-button>
                </div>
                <ul>
                    <li><input type="checkbox"/></li>
                    <li>品牌</li>
                </ul>
                <ul v-for="dict in dictionaryType" :key="dict.dict_id">
                    <li><input type="checkbox"/></li>
                    <li>{{dict.dict_name}}</li>
                </ul>
            </div>
            <div class="dictionary-conter-right">
                <div class="dictionary-button-right clearfix">
                    <el-button>删除</el-button>
                    <el-button>添加</el-button>
                </div>
                <table>
                    <tr>
                        <th>名称</th>
                        <th>排序</th>
                        <th>操作</th>
                    </tr>
                    <tr v-for="tables in tableData" :key="tables.type" class="dictionary-tr">
                        <td>{{tables.name}}</td>
                        <td>{{tables.sort}}</td>
                        <td><span>{{tables.operate.edit}}</span><span>{{tables.operate.delect}}</span></td>
                    </tr> 
                </table>
            </div>
        </el-row>



        <el-dialog title="新增品牌" :visible.sync="dialogFormVisible">
        <el-form :model="formName" :rules="rules" ref="formName">
            <el-form-item label="品牌名称" prop="dict_name" :label-width="formLabelWidth">
            <el-input v-model="formName.dict_name" auto-complete="off"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="DictionaryEnsure('formName')">确 定</el-button>
        </div>
        </el-dialog>
        <el-dialog title="删除品牌" :visible.sync="delectDict">

        <el-form :model="form" >
            <el-form-item label="品牌名称" :label-width="formLabelWidth">
            <el-input v-model="dictId" auto-complete="off"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="delectDict = false">取 消</el-button>
            <el-button type="primary" @click="delectEnsure()">确 定</el-button>
        </div>
        </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rules: {
        dict_name: [{ required: true, message: "品牌名称不能为空" }]
      },

      dictionaryType: "",

      dictId: "",
      tableData: [
        {
          name: "金杯",
          sort: "1",
          operate: {
            edit: "编辑",
            delect: "删除"
          }
        },
        {
          name: "金杯",
          sort: "1",
          operate: {
            edit: "编辑",
            delect: "删除"
          }
        }
      ],
      dialogFormVisible: false,
      delectDict: false,
      form: {
        name: ""
      },
      formName: { dict_name: "" },
      formLabelWidth: "120px"
    };
  },
  methods: {
    DictionaryType() {
      this.$http.get("http://192.168.2.178:53960/api/DataDictionary").then(
        data => {
          this.dictionaryType = data.body.Data;
          console.log(this.dictionaryType);
        },
        err => {
          console.log(err);
        }
      );
    },
    DictionaryEnsure(formName) {
      var that = this;
      that.$refs[formName].validate(valid => {
        console.log(valid);
        if (valid) {
          that.$http
            .post("http://192.168.2.178:53960/api/DataDictionary", {
              dict_name: that.formName.dict_name
            })
            .then(
              data => {
                console.log(data.body);
                var check = data.body.Status;
                if (check == 0) {
                  that.$alert("添加成功", "提示信息");
                  setTimeout(function() {
                    that.dialogFormVisible = false;
                    location.href='#/dictionary'
                  }, 2000);
                } else {
                  //   $("#mysubmit").attr("disabled", false);
                  that.$alert(
                    "添加失败：" + data.body.Msg,
                    "提示信息"
                  );
                }
                // this.dictionaryType = data.body.Data;
                // console.log(this.dictionaryType);
                //
              },
              err => {
                console.log(err);
              }
            );
        } else {
          that.$alert(
                    "用户名和密码不能为空",
                    "提示信息"
                  );
          return false;
        }
      });
    },
    delectEnsure() {
      var that = this;
      var id = this.dictId;
      that.$http
        .delete("http://192.168.2.178:53960/api/DataDictionary?id=" + id)
        .then(
          data => {
            console.log(data.body);
            var check = data.body.Status;
            if (check == 0) {
              that.$alert("删除成功", "提示信息");
              setTimeout(function() {
                //   console.log('ckjsnjdkj')
                that.delectDict = false;
              }, 2000);
            } else {
              //   $("#mysubmit").attr("disabled", false);
              that.$alert("删除失败，失败原因是：" + data.body.Msg, "提示信息");
            }
            // this.dictionaryType = data.body.Data;
            // console.log(this.dictionaryType);
            //
          },
          err => {
            console.log(err);
          }
        );
    }
  },
  created() {
    this.DictionaryType();
  }
};
</script>

<style scoped>
.dictionary .el-row:first-child {
  margin-left: 0px !important;
  margin-right: 0px !important;
  border-bottom: 1px solid #bbbbbb;
}
.dictionary .dictionary-button-left,
.dictionary .dictionary-button-right {
  padding: 15px 0px;
}
.dictionary .dictionary-button-left .el-button {
  background-color: #fe5621;
  color: white;
  width: 72px;
  height: 24px;
  color: 14px;
  margin: 0 15px;
  padding: 0px;
}
.dictionary .dictionary-button-right .el-button {
  float: right;
  background-color: #fe5621;
  color: white;
  width: 72px;
  height: 24px;
  color: 14px;
  margin: 0 15px;
  padding: 0px;
}
.el-table {
  color: #333333;
  font-size: 18px;
}
.dictionary-conter-left {
  width: calc(100% - 70% - 20px);
  float: left;
  font-size: 0px;
  margin-right: 20px;
}
.dictionary-conter-left ul {
  font-size: 0px;
  padding: 20px 0px;
  color: #333333;
}
.dictionary-conter-left ul:nth-of-type(2n + 1) {
  background-color: #e5f0fd;
}
.dictionary-conter-left ul:nth-of-type(1) {
  padding: 10px 0px;
  color: #bbbbbb;
}
.dictionary-conter-left ul li:first-child {
  padding: 0px 40px;
}
.dictionary-conter-left li {
  display: inline-block;
  font-size: 16px;
  width: calc(100% / 2);
}

.dictionary .dictionary-conter-right {
  width: 70%;
  float: right;
  text-align: center;
  border-collapse: collapse;
}
.dictionary .dictionary-conter-right table {
  width: 100%;
  text-align: center;
  border-collapse: collapse;
  font-size: 16px;
}
.dictionary table tr:nth-last-of-type(2n + 1) {
  background-color: #e5f0fd;
}
.dictionary table tr th {
  padding: 10px 0px;
  color: #bbbbbb;
}
.dictionary table tr td {
  padding: 20px 0px;
  color: #333333;
}
.dictionary table tr th:last-child {
  width: 300px;
}
.dictionary-tr td span {
  color: #fe5621;
  display: inline-block;
  padding: 0 20px;
}
</style>
