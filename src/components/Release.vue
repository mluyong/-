<template>
  <div class="clearfix">
    <div class="Release clearfix">
      <el-col class=" Release-choice clearfix">
            <router-link to="/Release/car"><el-button type="danger" plain>汽车</el-button></router-link>
            <router-link to="/Release/used"><el-button type="danger" plain>二手车</el-button></router-link>
            <router-link to="/Release/integral"><el-button type="danger" plain></el-button></router-link>
            <router-link to="/Release/secure"><el-button type="danger" plain></el-button></router-link>
            <router-link to="/Release/fund"><el-button type="danger" plain></el-button></router-link>
            <router-link to="/Release/loan"><el-button type="danger" plain></el-button></router-link>
            <router-link to="/Release/coupon"><el-button type="danger" plain></el-button></router-link>
      </el-col>
      </div>
      <router-view></router-view>
        
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.Release-choice {
  padding: 5px 0px;
  border-bottom: 1px solid #ebebeb;
  z-index: 999999;
}
.Release-choice .el-button {
  padding: 0px 15px;
  border-radius: 2px;
  font-size: 14px;
  line-height: 24px;
  margin: 0 10px 0 20px;
}
</style>
