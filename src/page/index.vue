<template>
  <div>
      <el-row :gutter="20">
        <el-col :span="8">
            <div class="popular-header-left">
                <span>今日访客</span>
                <p>256521</p>
            </div>
            <div class="popular-header-right">
                <i class="el-icon-edit"></i>
            </div>
        </el-col>
        <el-col :span="8">
             <div class="popular-header-left">
                <span>订单数</span>
                <p>236</p>
            </div>
            <div class="popular-header-right">
                <i class="el-icon-edit"></i>
            </div>
        </el-col>
        <el-col :span="8">
             <div class="popular-header-left">
                <span>新增会员</span>
                <p>14789</p>
            </div>
            <div class="popular-header-right">
                <i class="el-icon-edit"></i>
            </div>
        </el-col>
      </el-row>
      <el-row>
           <el-col :span="10">
            <div class="order-news">
                <h3>订单信息</h3>
                <ul>
                    <li class="popular-get">代付款订单<span>(16)</span></li>
                    <li class="popular-get">代发货订单<span>(10)</span></li>
                    <li class="popular-get">退款订单<span>(8)</span></li>
                    <li class="popular-get">待售罄产品<span>(3)</span></li>
                    <li class="popular-get">最新评价<span>(96)</span></li>
                </ul>
            </div>
        </el-col>
        <el-col :span="10">
             <div class="user-news">
                <h3>用户信息</h3>
                <ul>
                    <li class="popular-get">新增会员<span>(16)</span></li>
                    <li class="popular-get">积分信息<span>(10)</span></li>
                    <li class="popular-get">消费过用户<span>(8)</span></li>
                    <li class="popular-get">消息群发<span>(3)</span></li>
                </ul>
            </div>
        </el-col>
      </el-row>
      <el-row>
            <el-col :span="12">
            <div class="content">
                <h3>销量排行</h3>
                <ul>
                    <li class="clearfix">
                         <div class="content-left">
                            <img src="../../static/image/dzbl.jpg" alt="">
                        </div>
                        <div class="content-right">
                            <h2>广汽丰田-YARiS L 致炫 2016款 改款 1.3L 手动灵动版</h2>
                            <p>2016款手动灵动版/2016款尊享自动款</p>
                            <p>预定人数：<span>160</span></p>
                        </div> 
                    </li>
                     <li class="clearfix">
                         <div class="content-left">
                            <img src="../../static/image/dzbl.jpg" alt="">
                        </div>
                        <div class="content-right">
                            <h2>广汽丰田-YARiS L 致炫 2016款 改款 1.3L 手动灵动版</h2>
                            <p>2016款手动灵动版/2016款尊享自动款</p>
                            <p>预定人数：<span>160</span></p>
                        </div> 
                    </li>
                     <li class="clearfix">
                         <div class="content-left">
                            <img src="../../static/image/dzbl.jpg" alt="">
                        </div>
                        <div class="content-right">
                            <h2>广汽丰田-YARiS L 致炫 2016款 改款 1.3L 手动灵动版</h2>
                            <p>2016款手动灵动版/2016款尊享自动款</p>
                            <p>预定人数：<span>160</span></p>
                        </div> 
                    </li>
                </ul>
            </div>
        </el-col>
        <el-col :span="12">
              <div class="content">
                <h3>点击排行</h3>
                <ul>
                    <li class="clearfix">
                         <div class="content-left">
                            <img src="../../static/image/dzbl.jpg" alt="">
                        </div>
                        <div class="content-right">
                            <h2>广汽丰田-YARiS L 致炫 2016款 改款 1.3L 手动灵动版</h2>
                            <p>2016款手动灵动版/2016款尊享自动款</p>
                            <p>预定人数：<span>160</span></p>
                        </div> 
                    </li>
                     <li class="clearfix">
                         <div class="content-left">
                            <img src="../../static/image/dzbl.jpg" alt="">
                        </div>
                        <div class="content-right">
                            <h2>广汽丰田-YARiS L 致炫 2016款 改款 1.3L 手动灵动版</h2>
                            <p>2016款手动灵动版/2016款尊享自动款</p>
                            <p>预定人数：<span>160</span></p>
                        </div> 
                    </li>
                     <li class="clearfix">
                         <div class="content-left">
                            <img src="../../static/image/dzbl.jpg" alt="">
                        </div>
                        <div class="content-right">
                            <h2>广汽丰田-YARiS L 致炫 2016款 改款 1.3L 手动灵动版</h2>
                            <p>2016款手动灵动版/2016款尊享自动款</p>
                            <p>预定人数：<span>160</span></p>
                        </div> 
                    </li>
                </ul>
            </div>
        </el-col>
      </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  margin: 0 !important;
  padding: 0 !important;
}
.clearfix {
  display: block;
  content: "";
  clear: both;
  height: 0;
}
.el-row {
  min-width: 1300px;
  background-color: #ebecf2;
  font-family: Adobe Heiti Std R;
}
.el-row .el-col-8 {
  width: 30%;
  height: 110px;
  margin-right: 36px !important;
}
.el-row .el-col-8:nth-of-type(1) {
  background-color: #fec006;
}
.el-row .el-col-8:nth-of-type(2) {
  background-color: #e81d62;
}
.el-row .el-col-8:nth-of-type(3) {
  background-color: #8ac249;
}
.popular-header-left {
  width: 70%;
  float: left;
  padding: 22px !important;
  color: white;
}
.popular-header-left span {
  font-size: 16px;
}
.popular-header-left p {
  font-size: 30px;
}
.popular-header-right {
  width: 30%;
  float: right;
  text-align: center;
  line-height: 108px;
  opacity: 0.8;
}
.el-row .el-col-8:nth-of-type(1) .popular-header-right {
  background-color: #f1b606;
}
.el-row .el-col-8:nth-of-type(2) .popular-header-right {
  background-color: #dc1c5d;
}
.el-row .el-col-8:nth-of-type(3) .popular-header-right {
  background-color: #83b845;
}
.el-row .el-col-10 {
  width: 34%;
  margin: 29px 0px !important;
  background-color: white;
  margin-right: 80px !important;
}

.order-news h3 {
  font-size: 16px;
  margin-left: 14px !important;
  padding-top: 4px !important;
}
.order-news ul li {
  display: inline-block;
  padding: 18px !important;
}
.order-news ul li span {
  color: #f60b0b;
}
.user-news h3 {
  font-size: 16px;
  margin-left: 14px !important;
  padding-top: 4px !important;
}
.user-news ul li {
  display: inline-block;
  padding: 18px !important;
}
.user-news ul li span {
  color: #f60b0b;
}
.content {
  width: 94%;
  background-color: white;
}
.content h3 {
  padding-top: 6px !important;
  margin-left: 12px !important;
}
.content ul {
  background-color: white;
  width: 98%;
  font-size: 14px;
  margin-right: 6px;
  display: inline-block;
  padding: 4px !important;
}

.content ul li {
  height: 160px;
  list-style: none;
  margin: 0px 4px !important;
}
.content ul li:hover {
  background-color: #e7e3e3;
}
.el-col-12 .content-left {
  width: 30%;
  height: 133px;
  float: left;
  margin: 10px !important;
}
.el-col-12 .content-left img {
  width: 100%;
  height: 133px;
}
.el-col-12 .content-right {
  margin-top: 10px !important;
  width: 66%;
  float: right;
}
.el-col-12 .content-right h2 {
  font-size: 22px;
}
.el-col-12 .content-right p:nth-of-type(2) {
  margin-top: 32px !important;
}
.el-col-12 .content-right p:nth-of-type(2) span {
  color: red;
}
.popular-get{
  cursor: pointer;
}
</style>
