<template>
    <div class="WarehourseGoods All">
        <el-row class="WarehourseGoods-form" :gutter="20">
            <el-col :span="8">
                <label for="">产品名称： </label>
                <el-input v-model="formLabelAlign.name"></el-input>
            </el-col>
            <el-col :span="8">
                <label for="">上架日期：</label>
                <el-date-picker type="date" placeholder="选择日期" v-model="formLabelAlign.date1" ></el-date-picker>
                    <div class="line" align="center"> 至 </div>
                    <el-date-picker type="date" placeholder="选择日期" v-model="formLabelAlign.date2" ></el-date-picker>
            </el-col>
            <el-col :span="8">
                <label for="">宝贝种类：</label>
                <el-input v-model="formLabelAlign.name"></el-input>
            </el-col>
            <el-col :span="8">
                <label for="">产品积分：</label>
                <el-date-picker type="date" placeholder="选择日期" v-model="formLabelAlign.date1" ></el-date-picker>
                    <div class="line" align="center"> 至 </div>
                    <el-date-picker type="date" placeholder="选择日期" v-model="formLabelAlign.date2" ></el-date-picker>
            </el-col>
            <el-col :span="8">
                <label for="">产品金额：</label>
                <el-date-picker type="date" placeholder="选择日期" v-model="formLabelAlign.date1" ></el-date-picker>
                    <div class="line" align="center"> 至 </div>
                    <el-date-picker type="date" placeholder="选择日期" v-model="formLabelAlign.date2" ></el-date-picker>
            </el-col>
            <el-col :span="8">
                <label for="">产品状态：</label>
                <el-input v-model="formLabelAlign.name"></el-input>
            </el-col>
            <el-col :span="24">
                <el-button type="danger">搜索</el-button>
            </el-col>
        </el-row>
        <el-tabs v-model="activeName" @tab-click="handleClick">
             <el-tab-pane label="全部" name="first">
                <el-table ref="multipleTable" align="center" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
            <el-table-column align="center" width="200"  prop="type" label="订单编号" >
            </el-table-column>
            <el-table-column align="center" width="500" label="产品信息">
                <template slot-scope="scope">
                    <div class="WarehourseGoods-name-img"><img :src="scope.row.image" alt=""></div>
                    <div class="WarehourseGoods-name-center">
                         <h5>{{scope.row.name.title}}</h5>
                         <p>{{scope.row.name.text}}</p>
                    </div>
                </template>
            </el-table-column>
            <el-table-column align="center"  label="交易信息">
                <template slot-scope="scope">
                    <span>{{scope.row.date}}</span>
                    <p>{{scope.row.username}}</p>
                    <p>{{scope.row.orderstate}}</p>
                </template>
            </el-table-column>
             <el-table-column align="center" label="操作" >
                <template slot-scope="scope">
                   <p class="Warehourse-integral">{{scope.row.integral}} <span class="goods-integral">积分</span></p>
                    <p class="Warehourse-operate">{{scope.row.operate}}</p>
                </template>
            </el-table-column>
        </el-table>
             </el-tab-pane>
             <el-tab-pane label="已付款" name="second">
                <el-table ref="multipleTable" align="center" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
            <el-table-column align="center" width="200"  prop="type" label="订单编号" >
            </el-table-column>
            <el-table-column align="center" width="500" label="产品信息">
                <template slot-scope="scope">
                    <div class="WarehourseGoods-name-img"><img :src="scope.row.image" alt=""></div>
                    <div class="WarehourseGoods-name-center">
                         <h5>{{scope.row.name.title}}</h5>
                         <p>{{scope.row.name.text}}</p>
                    </div>
                </template>
            </el-table-column>
            <el-table-column align="center"  label="交易信息">
                <template slot-scope="scope">
                    <span>{{scope.row.date}}</span>
                    <p>{{scope.row.username}}</p>
                    <p class="goodsorderdetail">{{scope.row.orderstate}}</p>
                </template>
            </el-table-column>
             <el-table-column align="center" label="操作" >
                <template slot-scope="scope">
                   <p class="Warehourse-integral">{{scope.row.integral}} <span class="goods-integral">积分</span></p>
                    <p class="Warehourse-operate">{{scope.row.operate}}</p>
                </template>
            </el-table-column>
        </el-table>
             </el-tab-pane>
             <el-tab-pane label="待付款" name="third">
                <el-table ref="multipleTable" align="center" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
            <el-table-column align="center" width="200"  prop="type" label="订单编号" >
            </el-table-column>
            <el-table-column align="center" width="500" label="产品信息">
                <template slot-scope="scope">
                    <div class="WarehourseGoods-name-img"><img :src="scope.row.image" alt=""></div>
                    <div class="WarehourseGoods-name-center">
                         <h5>{{scope.row.name.title}}</h5>
                         <p>{{scope.row.name.text}}</p>
                    </div>
                </template>
            </el-table-column>
            <el-table-column align="center"  label="交易信息">
                <template slot-scope="scope">
                    <span>{{scope.row.date}}</span>
                    <p>{{scope.row.username}}</p>
                    <p>{{scope.row.orderstate}}</p>
                </template>
            </el-table-column>
             <el-table-column align="center" label="操作" >
                <template slot-scope="scope">
                   <p class="Warehourse-integral">{{scope.row.integral}} <span class="goods-integral">积分</span></p>
                    <p class="Warehourse-operate">{{scope.row.operate}}</p>
                </template>
            </el-table-column>
        </el-table>
             </el-tab-pane>
             <el-tab-pane label="待退款" name="fourth">
                <el-table ref="multipleTable" align="center" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
            <el-table-column align="center" width="200"  prop="type" label="订单编号" >
            </el-table-column>
            <el-table-column align="center" width="500" label="产品信息">
                <template slot-scope="scope">
                    <div class="WarehourseGoods-name-img"><img :src="scope.row.image" alt=""></div>
                    <div class="WarehourseGoods-name-center">
                         <h5>{{scope.row.name.title}}</h5>
                         <p>{{scope.row.name.text}}</p>
                    </div>
                </template>
            </el-table-column>
            <el-table-column align="center"  label="交易信息">
                <template slot-scope="scope">
                    <span>{{scope.row.date}}</span>
                    <p>{{scope.row.username}}</p>
                    <p>{{scope.row.orderstate}}</p>
                </template>
            </el-table-column>
             <el-table-column align="center" label="操作" >
                <template slot-scope="scope">
                   <p class="Warehourse-integral">{{scope.row.integral}} <span class="goods-integral">积分</span></p>
                    <p class="Warehourse-operate">{{scope.row.operate}}</p>
                </template>
            </el-table-column>
        </el-table>
             </el-tab-pane>
             <el-tab-pane label="已完成" name="fifth">
                <el-table ref="multipleTable" align="center" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
            <el-table-column align="center" width="200"  prop="type" label="订单编号" >
            </el-table-column>
            <el-table-column align="center" width="500" label="产品信息">
                <template slot-scope="scope">
                    <div class="WarehourseGoods-name-img"><img :src="scope.row.image" alt=""></div>
                    <div class="WarehourseGoods-name-center">
                         <h5>{{scope.row.name.title}}</h5>
                         <p>{{scope.row.name.text}}</p>
                    </div>
                </template>
            </el-table-column>
            <el-table-column align="center"  label="交易信息">
                <template slot-scope="scope">
                    <span>{{scope.row.date}}</span>
                    <p>{{scope.row.username}}</p>
                    <p class="goodsorderdetail">{{scope.row.orderstate}}</p>
                </template>
            </el-table-column>
             <el-table-column align="center" label="操作" >
                <template slot-scope="scope">
                   <p class="Warehourse-integral">{{scope.row.integral}} <span class="goods-integral">积分</span></p>
                    <p class="Warehourse-operate">{{scope.row.operate}}</p>
                </template>
            </el-table-column>
        </el-table>
             </el-tab-pane>
        </el-tabs>
        <!-- <el-col class="WarehourseGoods-choice">
            <el-button type="danger" plain>删除</el-button>
            <el-button type="danger" plain>上架</el-button>
            <el-button type="danger" plain>下架</el-button>
            <el-button type="danger" plain>发布信息</el-button>
        </el-col> -->
        
    </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "second",
      tableData: [
        {
          list: "汽车",
          type: "用车技巧",
          image: "../../../static/image/car.png",
          name: {
            title: "金杯750最近大降价，省油技巧",
            text: "明天开始油价上身，金杯750可以小"
          },
          date: "2016-05-02",
          integral: "2000",
          operate: "发货",
          username:"赵俊",
          orderstate:"订单详情"
        },
        {
          list: "汽车",
          type: "用车技巧",
          image: "../../../static/image/car.png",
          name: {
            title: "金杯750最近大降价，省油技巧",
            text: "明天开始油价上身，金杯750可以小"
          },
          date: "2016-05-02",
          integral: "2000",
          operate: "发货",
          username:"赵俊",
          orderstate:"订单详情"
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
.WarehourseGoods-form{
  min-width: 1300px;
}
.el-col .el-col-8{
  padding-left: 0px;
}
.el-row{
  line-height: 60px;
}
.bg-purple {
  background-color: #fe5621;
}
.WarehourseGoods {
  min-width: 1200px;
}
.WarehourseGoods-name-center h5 {
  font-size: 16px;
}
.WarehourseGoods-name-center p {
  font-size: 14px;
}
.el-input__inner {
  width: 232px;
  height: 40px;
  border-radius: 2px;
}
.WarehourseGoods-name-img {
  width: 100px;
  height: 80px;
  float: left;
  color: #666666;
  font-size: 14px;
  text-align: left;
}
.WarehourseGoods-name-img img {
  width: 100%;
  height: 100%;
  vertical-align: middle;
}
.WarehourseGoods-name-center {
  float: left;
}
.WarehourseGoods-name-center h5 {
  color: #333333;
  font-size: 16px;
  font-family: MicrosoftYaHei;
  text-align: left;
  font-weight: normal;
  padding-left: 24px;
}
.WarehourseGoods-name-center p {
  color: #666666;
  font-size: 14px;
  font-family: MicrosoftYaHei;
  text-align: left;
  padding-left: 24px;
}

.el-table {
  color: #333333;
}
.WarehourseGoods-operate {
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
.WarehourseGoods .line {
  width: 25px !important;
  display: inline-block;
}
.WarehourseGoods .el-row label {
  font-size: 14px;
  display: inline-block;
  text-align: right;
  width: calc(100% - 80%);
}
.WarehourseGoods .el-input {
  display: inline-block;
  width: 77%;
}
.WarehourseGoods div.el-date-editor {
  width: 35% !important;
}
.WarehourseGoods .WarehourseGoods-form.el-row {
  padding-top: 20px !important;
  margin: 0px !important;
}
.WarehourseGoods .WarehourseGoods-form .el-col-24 {
  margin: 50px auto 10px auto;
  text-align: center;
}
.WarehourseGoods .WarehourseGoods-form .el-col-24 .el-button {
  border-radius: 8px;
  padding: 5px 30px;
  font-size: 16px;
}
.Warehourse-operate{
    text-align: center;
    width: 72px;
    margin: 0 auto;
    font-size: 14px;
    color: white;
    border-radius: 4px;
    background-color: #fe5621;
}

.WarehourseGoods-choice {
  padding: 10px 0px;
  border-bottom: 1px solid #ebebeb;
  margin-top: -25px;
}
.WarehourseGoods-choice .el-button {
  padding: 0px 15px;
  border-radius: 2px;
  font-size: 14px;
  line-height: 24px;
  margin: 0 10px 0 20px;
}
.Warehourse-integral{
  font-size: 16px;
}
.Warehourse-integral span{
  font-size: 14px;
  color: #fe5621;
}
.Warehourse-integral,.Warehourse-operate{
  cursor: pointer;
}
.goodsorderdetail{
  cursor: pointer;
}
</style>
