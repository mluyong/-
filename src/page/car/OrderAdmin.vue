<!--汽车订单管理页面-->
<template>
    <div class="CarOrderAdmin All">
        <el-row class="CarOrderAdmin-form" :gutter="20">
            <el-col :span="8">
                <label for="">订单编号：</label>
                <el-input v-model="formLabelAlign.orderID"></el-input>
            </el-col>
            <el-col :span="8">
                <label for="">订单日期：</label>
                <el-date-picker type="date" placeholder="选择日期" v-model="formLabelAlign.begindate" ></el-date-picker>
                    <div class="line" align="center"> 至 </div>
                    <el-date-picker type="date" placeholder="选择日期" v-model="formLabelAlign.enddate" ></el-date-picker>
            </el-col>
            <el-col :span="8">
                <label for="">订单状态：</label>
                <el-input v-model="formLabelAlign.orderstate"></el-input>
            </el-col>
             <el-col :span="8">
                <label for="">产品名称：</label>
                <el-input v-model="formLabelAlign.ordername"></el-input>
            </el-col>
            <el-col :span="8">
                <label for="">成交日期：</label>
                <el-date-picker type="date" placeholder="选择日期" v-model="formLabelAlign.turnoverbegindate" ></el-date-picker>
                    <div class="line" align="center"> 至 </div>
                    <el-date-picker type="date" placeholder="选择日期" v-model="formLabelAlign.turnoverenddate" ></el-date-picker>
            </el-col>
             <el-col :span="8">
                <label for="">会 员 ID：</label>
                <el-input v-model="formLabelAlign.name"></el-input>
            </el-col>
            <el-col :span="8">
                <label for="">手 机 号：</label>
                <el-input v-model="formLabelAlign.name"></el-input>
            </el-col>
            <el-col :span="8">
                <label for="">成交金额：</label>
                <el-date-picker type="text"  v-model="formLabelAlign.lowerprice" ></el-date-picker>
                    <div class="line" align="center"> 至 </div>
                    <el-date-picker type="text"  v-model="formLabelAlign.highprice" ></el-date-picker>
            </el-col>
            <el-col :span="24">
                <el-button type="danger">搜索</el-button>
            </el-col>
        </el-row>
        <el-tabs v-model="activeName" @tab-click="handleClick">
             <el-tab-pane label="全部" name="first">
               <el-table ref="multipleTable" align="center" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
            <el-table-column align="center" width="200"  prop="OrderID" label="订单编号" >
            </el-table-column>
            <el-table-column align="center" width="500" label="信息名称">
                <template slot-scope="scope">
                    <div class="CarOrderAdmin-name-img"><img :src="scope.row.image" alt=""></div>
                    <div class="CarOrderAdmin-name-center">
                         <h5>{{scope.row.name.title}}</h5>
                         <p>{{scope.row.name.text}}</p>
                    </div>
                </template>
            </el-table-column>
            <el-table-column align="center" prop="Clicks" label="交易信息" >
                <template slot-scope="scope">
                    <p>{{scope.row.date}}</p>
                    <p>{{scope.row.UserName}}</p>
                     <p>{{scope.row.UserDetail}}</p>
                </template>
            </el-table-column>
             <el-table-column align="center" label="价格" >
                <template slot-scope="scope">
                    <p>￥<span class="red">{{scope.row.price}}</span>积分</p>
                    <p>（订金）</p>
                </template>
            </el-table-column>
        </el-table>
             </el-tab-pane>
             <el-tab-pane label="已付款" name="second">
               <el-table ref="multipleTable" align="center" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
            <el-table-column align="center" width="200"  prop="OrderID" label="订单编号" >
            </el-table-column>
            <el-table-column align="center" width="500" label="信息名称">
                <template slot-scope="scope">
                    <div class="CarOrderAdmin-name-img"><img :src="scope.row.image" alt=""></div>
                    <div class="CarOrderAdmin-name-center">
                         <h5>{{scope.row.name.title}}</h5>
                         <p>{{scope.row.name.text}}</p>
                    </div>
                </template>
            </el-table-column>
            <el-table-column align="center" prop="Clicks" label="交易信息" >
                <template slot-scope="scope">
                    <p>{{scope.row.date}}</p>
                    <p>{{scope.row.UserName}}</p>
                     <p>{{scope.row.UserDetail}}</p>
                </template>
            </el-table-column>
             <el-table-column align="center" label="价格" >
                <template slot-scope="scope">
                    <p>￥<span class="red">{{scope.row.price}}</span>积分</p>
                    <p>（订金）</p>
                </template>
            </el-table-column>
        </el-table>
             </el-tab-pane>
             <el-tab-pane label="待付款" name="third">
               <el-table ref="multipleTable" align="center" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
            <el-table-column align="center" width="200"  prop="OrderID" label="订单编号" >
            </el-table-column>
            <el-table-column align="center" width="500" label="信息名称">
                <template slot-scope="scope">
                    <div class="CarOrderAdmin-name-img"><img :src="scope.row.image" alt=""></div>
                    <div class="CarOrderAdmin-name-center">
                         <h5>{{scope.row.name.title}}</h5>
                         <p>{{scope.row.name.text}}</p>
                    </div>
                </template>
            </el-table-column>
            <el-table-column align="center" prop="Clicks" label="交易信息" >
                <template slot-scope="scope">
                    <p>{{scope.row.date}}</p>
                    <p>{{scope.row.UserName}}</p>
                     <p>{{scope.row.UserDetail}}</p>
                </template>
            </el-table-column>
             <el-table-column align="center" label="价格" >
                <template slot-scope="scope">
                    <p>￥<span class="red">{{scope.row.price}}</span>积分</p>
                    <p>（订金）</p>
                </template>
            </el-table-column>
        </el-table>
             </el-tab-pane>
             <el-tab-pane label="待退款" name="fourth">
               <el-table ref="multipleTable" align="center" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
            <el-table-column align="center" width="200"  prop="OrderID" label="订单编号" >
            </el-table-column>
            <el-table-column align="center" width="500" label="信息名称">
                <template slot-scope="scope">
                    <div class="CarOrderAdmin-name-img"><img :src="scope.row.image" alt=""></div>
                    <div class="CarOrderAdmin-name-center">
                         <h5>{{scope.row.name.title}}</h5>
                         <p>{{scope.row.name.text}}</p>
                    </div>
                </template>
            </el-table-column>
            <el-table-column align="center" prop="Clicks" label="交易信息" >
                <template slot-scope="scope">
                    <p>{{scope.row.date}}</p>
                    <p>{{scope.row.UserName}}</p>
                     <p>{{scope.row.UserDetail}}</p>
                </template>
            </el-table-column>
             <el-table-column align="center" label="价格" >
                <template slot-scope="scope">
                    <p>￥<span class="red">{{scope.row.price}}</span>积分</p>
                    <p>（订金）</p>
                </template>
            </el-table-column>
        </el-table>
             </el-tab-pane>
             <el-tab-pane label="已完成" name="fifth">
               <el-table ref="multipleTable" align="center" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
            <el-table-column align="center" width="200"  prop="OrderID" label="订单编号" >
            </el-table-column>
            <el-table-column align="center" width="500" label="信息名称">
                <template slot-scope="scope">
                    <div class="CarOrderAdmin-name-img"><img :src="scope.row.image" alt=""></div>
                    <div class="CarOrderAdmin-name-center">
                         <h5>{{scope.row.name.title}}</h5>
                         <p>{{scope.row.name.text}}</p>
                    </div>
                </template>
            </el-table-column>
            <el-table-column align="center" prop="Clicks" label="交易信息" >
                <template slot-scope="scope">
                    <p>{{scope.row.date}}</p>
                    <p>{{scope.row.UserName}}</p>
                     <p>{{scope.row.UserDetail}}</p>
                </template>
            </el-table-column>
             <el-table-column align="center" label="价格" >
                <template slot-scope="scope">
                    <p>￥<span class="red">{{scope.row.price}}</span>积分</p>
                    <p>（订金）</p>
                </template>
            </el-table-column>
        </el-table>
             </el-tab-pane>
        </el-tabs>
         
    </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "second",
      tableData: [
        {
          OrderID: "26582452565285",
          image: "../../../static/image/car.png",
          UserName: "赵俊",
          UserDetail: "订单详情",
          name: {
            title: "东风日产-奇骏 2017款 2.5L CVT领先版 4WD",
            text: "红色/2017款 2.5L CV领先版"
          },
          price: "2000",
          date: "2016-05-02",
          operate: "编辑信息"
        },
        {
          OrderID: "26582452565285",
          image: "../../../static/image/car.png",
          UserName: "赵俊",
          UserDetail: "订单详情",
          name: {
            title: "东风日产-奇骏 2017款 2.5L CVT领先版 4WD",
            text: "红色/2017款 2.5L CV领先版"
          },
          price: "2000",
          date: "2016-05-02",
          operate: "编辑信息",
          lowerprice: "",
          hightprice: ""
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
        ordername: "",
        region: "",
        type: "",
        begindate: "",
        enddate: "",
        orderID: "",
        turnoverbegindate: "",
        turnoverenddate: "",
        orderstate: "",
        userID: "",
        orderphone: "",
        orderprice: ""
      }
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleSelectionChange() {
      console.log(123456);
    }
  }
};
</script>
<style scoped>
.el-row {
  line-height: 60px;
}
.bg-purple {
  background-color: #fe5621;
}
.CarOrderAdmin {
  min-width: 1300px;
}
.CarOrderAdmin-name-center h5 {
  font-size: 16px;
}
.CarOrderAdmin-name-center p {
  font-size: 14px;
}
.el-input__inner {
  width: 232px;
  height: 40px;
  border-radius: 2px;
}
.CarOrderAdmin-name-img {
  width: 100px;
  height: 80px;
  float: left;
  color: #666666;
  font-size: 14px;
  text-align: left;
}
.CarOrderAdmin-name-img img {
  width: 100%;
  height: 100%;
  vertical-align: middle;
}
.CarOrderAdmin-name-center {
  float: left;
}
.CarOrderAdmin-name-center h5 {
  color: #333333;
  font-size: 16px;
  font-family: MicrosoftYaHei;
  text-align: left;
  font-weight: normal;
  padding-left: 24px;
}
.CarOrderAdmin-name-center p {
  color: #666666;
  font-size: 14px;
  font-family: MicrosoftYaHei;
  text-align: left;
  padding-left: 24px;
}

.el-table {
  color: #333333 !important;
}
.CarOrderAdmin-operate {
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
.CarOrderAdmin .line {
  width: 25px !important;
  display: inline-block;
}
.CarOrderAdmin .el-row label {
  font-size: 14px;
  display: inline-block;
  text-align: right;
  width: calc(100% - 80%);
}
.CarOrderAdmin .el-input {
  display: inline-block;
  width: 77%;
}
.CarOrderAdmin div.el-date-editor {
  width: 35% !important;
}
.CarOrderAdmin .CarOrderAdmin-form.el-row {
  padding-top: 20px !important;
  margin: 0px !important;
}
.CarOrderAdmin .CarOrderAdmin-form .el-col-24 {
  margin: 50px auto 10px auto;
  text-align: center;
}
.CarOrderAdmin .CarOrderAdmin-form .el-col-24 .el-button {
  width: 90px !important;
  height: 30px !important;
  border-radius: 8px;
  padding: 5px 30px;
  font-size: 16px;
}
.Warehourse-operate {
  text-align: center;
  width: 72px;
  margin: 0 auto;
  font-size: 14px;
  color: white;
  border-radius: 4px;
  background-color: #fe5621;
}

.CarOrderAdmin-choice {
  padding: 10px 0px;
  border-bottom: 1px solid #ebebeb;
  margin-top: -25px;
}
.CarOrderAdmin-choice .el-button {
  padding: 0px 15px;
  border-radius: 2px;
  font-size: 14px;
  line-height: 24px;
  margin: 0 10px 0 20px;
}


</style>