<!--汽车订单详情-->
<template>
  <div class="orderadmindetail">
        <el-row>
            <el-col :span="12">订单编号 ：26528464265421</el-col>
            <el-col align="right" :span="12">订单时间：2018-1-3 15:30</el-col>
            <el-col :span="24">会 员 ID &nbsp ：5629841</el-col>
            <el-col :span="24" class="orderadmindetail-order">
                <span>订单地址 :</span>
                <span>赵俊 15300000000</span>
                <span>浙江省杭州市余杭区米果科技园区3-115室</span>
                <i class="el-icon-edit-outline colorE1"></i>
            </el-col>
            <el-col :span="24" class="orderadmindetail-PR">
                <div>产品信息:</div>
                <div class="orderadmindetail-img">
                    <img src="../../../static/image/car.png" alt="">
                </div>
                <div class="orderadmindetail-illustrate">
                    <h5>东风日产-奇骏 2017款 2.5L CVT领先版 4WD</h5>
                    <p>红色/2017款 2.5L CV领先版</p>
                    <p>积分 <span>2000</span></p>
                </div>
            </el-col>
            <el-col :span="24" class="orderadmindetail-express">
                <span>快递单号:</span>
                <span>中通 6220054151861</span>
                <i class="el-icon-edit-outline colorE1"></i>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24" class="delivery">
                <label> 请输入快递单号</label>
                <el-input v-model="form.name" ></el-input>
                <el-button type="primary">发货</el-button>
                <el-button type="primary">无需物流</el-button>
            </el-col>
        </el-row>
  </div>
</template>

<script>
export default {
  data() {
      return {
           form:{
               name:""
           }
      }
  }
};
</script>

<style  scoped>
 .orderadmindetail .el-row {
  padding :10px 0px 70px 0;
  border-bottom: 1px solid #F1F2F6;
  font-family: Adobe Heiti Std R;
}
 .orderadmindetail .el-row {
  
  font-family: Adobe Heiti Std R;
}

 .orderadmindetail .el-row  .el-col {
  line-height: 45px;
  font-size: 14px;
  padding: 0 40px;
}
.orderadmindetail-order i{
    padding-left: 22px;
}
  .orderadmindetail .el-row  .orderadmindetail-PR{
    line-height: 20px;
    padding-top: 10px;
}
.orderadmindetail-PR div{
    float: left;
}
.orderadmindetail-PR div:nth-of-type(2){
    width: 100px;
    height: 80px;
}
.orderadmindetail-PR div:nth-of-type(2) img{
    width: 100%;
    padding-left: 8px;
}
.orderadmindetail-PR div:nth-of-type(3){
    padding-left: 24px;
}
.orderadmindetail-PR h5{
    font-size: 16px;
    font-weight: normal;
    color:   #333333 ;
    
} 
.orderadmindetail-order span:nth-of-type(2){
    padding-left: 9px;
}
.orderadmindetail-order span:nth-of-type(3){
    padding-left: 35px;
}
.orderadmindetail-illustrate p:nth-child(2){
    line-height: 10px;
    color: #666666;
}
.orderadmindetail-illustrate p:nth-child(3){
    margin-top: 25px;
}
.orderadmindetail-illustrate p:nth-child(3) span{
    color: #ff0000;
    font-size: 18px;
}
.orderadmindetail-express span:nth-of-type(2){
   margin-left: 6px;
}
.orderadmindetail-express  i{
    padding-left: 31px;
}
.delivery .el-input {
    display: inline-block;
    width: 310px;
    height: 30px !important;
}
.delivery .el-button{
  padding: 6px 15px;
  margin-left: 20px;
  background-color:   #fe5621 ;
  border: none;
}
.el-icon-edit-outline{
    cursor: pointer;
}
</style>
