<template>
<div class="common">
    <div class="header">
        <el-row>
            <el-col :span="24"><div class="grid-content bg-purple">勿等贷</div></el-col>
        </el-row>
    </div>
    <div class="container">
        <el-row>
            <el-col :span="5"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="19"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
    </div>
</div>
</template>

<script>
export default {};
</script>

<style>
.common{
    min-width: 1200px;
}
.header .bg-purple {
  background: #363f45;
}
.header .grid-content {
  line-height: 60px;
  color: white;
  padding-left: 15px;
  font-size: 22px;
  font-family: SimSun;
}
.container .el-row:last-child {
  margin-bottom: 0;
}
.container .el-row .el-col:last-child{
    padding: 0px 24px;
}
.container .bg-purple {
  background: #ffffff;
}
.container .grid-content {
  min-height: 360px;
}
</style>
