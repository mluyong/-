<template>
    <section class="chart-container">
        <el-row :span="24">
            <el-col :span="24">
                  <h3>访客统计</h3>
            </el-col>
            <el-col :span="24">
                 <label for="">成交日期：</label>
                <el-date-picker type="date" placeholder="选择日期" v-model="formLabelAlign.turnoverbegindate" >
                </el-date-picker>
                    <div class="line" align="center"> 至 </div>
                    <el-date-picker type="date" placeholder="选择日期" v-model="formLabelAlign.turnoverenddate">
                    </el-date-picker>
                 <el-button type="primary">搜索</el-button>
            </el-col>
            <el-col :span="24">
                <div id="chartColumn" style="width:100%; height:400px;"></div>
            </el-col>
        </el-row>
    </section>
</template>

<script>
    import echarts from 'echarts'

    export default {
        data() {
            return {
                chartColumn: null,
                formLabelAlign:{
                    "turnoverbegindate":"",
                    "turnoverenddate":""
                }
            }
        },

        methods: {
            drawColumnChart() {
                this.chartColumn = echarts.init(document.getElementById('chartColumn'));
                this.chartColumn.setOption({
                  title: { 
                      subtext:"访客数量",
                                
                      },
                  tooltip: {
                      trigger:"axis"
                  },
                  xAxis: {
                      data: ["1时", "2时", "3时", "4时", "5时", "6时","7时","8时","9时","10时","11时","12时","13时","14时","15时"
                      ,"16时","17时", "18时", "19时", "20时", "21时", "22时","23时","24时"]
                  },
                  yAxis: {},
                  series: [{
                      name: '访客数量',
                      type: 'bar',
                      data: [1500, 1520, 1550, 1580, 1590, 2000,2330,1520,1520,1520,1520,
                      1520,1520,1520,1520,1520,1520,1520,1520,1520,1520,1520,1520,1520]
                    }]
                });
            },
            drawCharts() {
                this.drawColumnChart()
            },
        },

        mounted: function () {
            this.drawCharts()
        },
        updated: function () {
            this.drawCharts()
        }
    }
</script>

<style scoped>
.chart-container{
    min-width: 1300px;
}
.chart-container  .el-row{
    width: 100%;
    margin: 0 auto;
}
.chart-container h3{
    text-align: center;
    font-size: 30px;
    font-weight: normal;
}
.el-col-24:nth-child(2){
    padding-left: 55%;
    font-size: 14px;
    margin-top: 16px;
}
.el-col-24:nth-child(1){
    margin-top: 15px;   
}
.el-col-24:nth-child(2) .line{
    display: inline-block;
}
.el-col-24:nth-child(3){
    padding-left: 6%;
}
</style>
