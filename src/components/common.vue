<template>
<div class="common">
    <el-container>
        <el-header>
                <el-row>
                    <el-col :span="20"><div class="grid-content bg-purple">勿等贷</div></el-col>
                    <el-col :span="4">
                        <div class="grid-content">
                            <el-badge :value="3" class="item">
                                <i class="el-icon-delete"></i>
                            </el-badge>
                            <i class="el-icon-share"></i>
                            <i class="el-icon-delete"></i>
                        </div>
                    </el-col>
                </el-row>
        </el-header>
    <el-container>
    <el-aside width="210px">
        <el-row class="tac">
            <el-menu default-active="2" :unique-opened="true" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                <el-submenu index="1">
                    <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>订单管理</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="1-1">选项1</el-menu-item>
                        <el-menu-item index="1-2">选项2</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span>商品管理</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="2-1">选项1</el-menu-item>
                        <el-menu-item index="2-2">选项2</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title">
                    <i class="el-icon-edit-outline"></i>
                    <span>页面调整</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="3-1">选项1</el-menu-item>
                        <el-menu-item index="3-2">选项2</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="4">
                    <template slot="title">
                    <i class="el-icon-view"></i>
                    <span>咨询信息</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="4-1">选项1</el-menu-item>
                        <el-menu-item index="4-2">选项2</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="5">
                    <template slot="title">
                    <i class="el-icon-service"></i>
                    <span>用户用心</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="5-1">选项1</el-menu-item>
                        <el-menu-item index="5-2">选项2</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </el-row>
    </el-aside>
    <el-main>
         <el-row>
             2018-12-23
         </el-row>
         <el-row>
             勿等贷 <i class="el-icon-d-arrow-right"></i> 订单管理 <i class="el-icon-d-arrow-right"></i> 商品管理
         </el-row>
         <router-view></router-view>
    </el-main>
    </el-container>
</el-container>

</div>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
.common{
    min-width: 1200px;
}
.el-header {
  background-color: #363f45;
  color: #333;
  text-align: left;
}
.el-header .bg-purple {
  background: #363f45;
}
.el-header .grid-content {
  line-height: 60px;
  color: white;
  padding-left: 15px;
  font-size: 22px;
  font-family: SimSun;
}
.el-header .el-row .el-col:last-child {
  text-align: right;
  /* min-width: 278px; */
}
.el-header .el-row .el-col:last-child i{
    padding: 0 10px; 
}
.el-aside {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  min-height: 500px;
}

.el-main {
  background-color: #FFFFFF;
  color: #333;
  padding: 0 0px;
  margin: 0 24px;
}
.el-main .el-row{
    padding: 0 20px;
}
.el-main .el-row:first-child{
    line-height: 60px;
    font-size: 18px;
    font-family: SimSun;
}
.el-main .el-row:nth-of-type(2){
    line-height: 60px;
    font-size: 14px;
    padding-left: 45px;
    background: linear-gradient(to right, rgba(237,238,239,1) , rgba(244,245,246,1));
    color:  rgba(40,47,51,1);
    font-family: Adobe Heiti Std R;
}
.el-header .bg-purple {
  background: #363f45;
}
.el-header .grid-content {
  line-height: 60px;
  color: white;
  padding-left: 15px;
  font-size: 22px;
  font-family: SimSun;
}
.el-submenu {
  text-align: left;
}
</style>
