<template>
    <div class="UsedorderAdmin All">
        <el-row class="UsedorderAdmin-form" :gutter="20">
            <el-col :span="8">
                <label for="">订单编号</label>
                <el-input v-model="formLabelAlign.name"></el-input>
            </el-col>
            <el-col :span="8">
                <label for="">订单日期</label>
                <el-date-picker type="date" placeholder="选择日期" v-model="formLabelAlign.date1" ></el-date-picker>
                    <div class="line" align="center"> 至 </div>
                    <el-date-picker type="date" placeholder="选择日期" v-model="formLabelAlign.date2" ></el-date-picker>
            </el-col>
            <el-col :span="8">
                <label for="">订单状态</label>
                <el-input v-model="formLabelAlign.name"></el-input>
            </el-col>
            <el-col :span="8">
                <label for="">产品名称</label>
                <el-input v-model="formLabelAlign.name"></el-input>
            </el-col>
            <el-col :span="8">
                <label for="">备   &#x3000   注</label>
                <el-input v-model="formLabelAlign.name"></el-input>
            </el-col>
            <el-col :span="8">
                <label for="">会 员 ID</label>
                <el-input v-model="formLabelAlign.name"></el-input>
            </el-col>
            <el-col :span="8">
                <label for="">手 机 号</label>
                <el-input v-model="formLabelAlign.name"></el-input>
            </el-col>
            <el-col :span="24">
                <el-button type="danger">危险按钮</el-button>
            </el-col>
        </el-row>
        <el-tabs v-model="activeName" @tab-click="handleClick">
             <el-tab-pane label="全部" name="first"></el-tab-pane>
             <el-tab-pane label="已付款" name="second"></el-tab-pane>
             <el-tab-pane label="待付款" name="third"></el-tab-pane>
             <el-tab-pane label="待退款" name="fourth"></el-tab-pane>
             <el-tab-pane label="已完成" name="fifth"></el-tab-pane>
        </el-tabs>
        <el-table ref="multipleTable" align="center" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange()">
            <el-table-column align="center" prop="orderID" label="订单编号"></el-table-column>
            <el-table-column align="center" width="400" label="信息名称">
                <template slot-scope="scope">
                    <div class="UsedorderAdmin-name-img"><img :src="scope.row.image" alt=""></div>
                    <div class="UsedorderAdmin-name-center">
                         <h5>{{scope.row.name.title}}</h5>
                         <p>{{scope.row.name.text}}</p>
                    </div>
                </template>
            </el-table-column>
            <el-table-column align="center" prop="date" label="创建时间"> </el-table-column>
            <el-table-column align="center" prop="collect" label="收藏" >
            </el-table-column>
            <el-table-column align="center" prop="Clicks" label="点击量" >
            </el-table-column>
            <el-table-column align="center" label="操作" >
                <template slot-scope="scope">
                    <p class="UsedorderAdmin-operate">{{scope.row.operate}}</p>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "second",
      tableData: [
        {
          orderID: "26582452565285",
          type: "用车技巧",
          image: "../../../static/image/car.png",
          name: {
            title: "金杯750最近大降价，省油技巧",
            text: "明天开始油价上身，金杯750可以小"
          },
          date: "2016-05-02",
          collect: "560",
          Clicks: "6200",
          operate: "编辑信息"
        }
      ],
      multipleSelection: [],
      dynamicValidateForm: {
        domains: [
          {
            value: ""
          }
        ]
      },
      labelPosition: "right",
      formLabelAlign: {
        name: "",
        region: "",
        type: "",
        date1: "",
        date2: ""
      }
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>
<style scoped>
.el-row{
  line-height: 50px;
}
.bg-purple {
  background-color: #fe5621;
}
.UsedorderAdmin {
  min-width: 1200px;
}
.UsedorderAdmin-name-center h5 {
  font-size: 16px;
}
.UsedorderAdmin-name-center p {
  font-size: 14px;
}
.el-input__inner {
  width: 232px;
  height: 40px;
  border-radius: 2px;
}
.UsedorderAdmin-name-img {
  width: 100px;
  height: 80px;
  float: left;
  color: #666666;
  font-size: 14px;
  text-align: left;
}
.UsedorderAdmin-name-img img {
  width: 100%;
  height: 100%;
  vertical-align: middle;
}
.UsedorderAdmin-name-center {
  float: left;
}
.UsedorderAdmin-name-center h5 {
  color: #333333;
  font-size: 16px;
  font-family: MicrosoftYaHei;
  text-align: left;
  font-weight: normal;
  padding-left: 24px;
}
.UsedorderAdmin-name-center p {
  color: #666666;
  font-size: 14px;
  font-family: MicrosoftYaHei;
  text-align: left;
  padding-left: 24px;
}

.el-table {
  color: #333333;
}
.UsedorderAdmin-operate {
  text-align: center;
  width: 72px;
  margin: 0 auto;
  font-size: 14px;
  color: white;
  border-radius: 4px;
  background-color: #fe5621;
}
.el-checkbox span {
  display: none;
}
.el-tabs__nav-scroll {
  margin-left: 60px;
}
.el-tabs__item {
  font-size: 16px;
}
.el-form-item__label {
  font-family: Adobe Heiti Std R;
}
.UsedorderAdmin .line {
  width: 25px !important;
  display: inline-block;
}
.UsedorderAdmin .el-row label {
  font-size: 14px;
  display: inline-block;
  text-align: right;
  width: calc(100% - 80%);
}
.UsedorderAdmin .el-input {
  display: inline-block;
  width: 70%;
}
.UsedorderAdmin div.el-date-editor {
  width: 31% !important;
}
.UsedorderAdmin .UsedorderAdmin-form.el-row {
  padding-top: 20px !important;
  margin: 0px !important;
}
.UsedorderAdmin .UsedorderAdmin-form .el-col-24 {
  margin: 0 auto;
  text-align: center;
}
.UsedorderAdmin .UsedorderAdmin-form .el-col-24 .el-button {
  border-radius: 16px;
}
</style>
