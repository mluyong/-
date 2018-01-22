<template>
    <div class="information">
        <el-menu :default-active="activeIndex" active-text-color="#FE5621" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-menu-item index="2">订单管理</el-menu-item>
            <el-menu-item index="3">订单管理</el-menu-item> 
            <el-menu-item v-for="(domain, index) in dynamicValidateForm.domains" :index="index" :key="domain.key">
                <span >{{index}}</span><i @click.prevent="removeDomain(domain)" class="el-icon-circle-close"></i>
            </el-menu-item>
            <i @click="addDomain()" class="el-icon-circle-plus"></i>
        </el-menu>
        <el-col class="information-choice">
            <el-button type="danger" plain>删除</el-button>
            <el-button type="danger" plain>上架</el-button>
            <el-button type="danger" plain>下架</el-button>
            <el-button type="danger" plain>发布信息</el-button>
        </el-col>
        <el-table ref="multipleTable" align="center" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
            <el-table-column align="right"  type="selection" width="40"> </el-table-column>
            <el-table-column align="center" prop="type" label="产品种类" >
            </el-table-column>
            <el-table-column align="center" width="400" label="信息名称">
                <template slot-scope="scope">
                    <div class="information-name-img"><img :src="scope.row.image" alt=""></div>
                    <div class="information-name-center">
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
                    <p class="information-operate">{{scope.row.operate}}</p>
                </template>
            </el-table-column>
        </el-table>
        <!-- <div style="margin-top: 20px">
            <el-button @click="toggleSelection()">取消选择</el-button>
        </div> -->
    </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          type: "用车技巧",
          image: "../../static/image/car.png",
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
      }
    };
  },
  methods: {
    removeDomain(item) {
      var index = this.dynamicValidateForm.domains.indexOf(item);
      if (index !== -1) {
        this.dynamicValidateForm.domains.splice(index, 1);
      }
    },
    addDomain() {
      this.dynamicValidateForm.domains.push({
        value: "",
        key: Date.now()
      });
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  }
};
</script>

<style scoped>
.information {
  padding: 0 25px;
}
.information .el-menu {
  height: 50px;
  line-height: 50px;
  border: none;
  margin: 0px 0px 0px 0px;
}
.information .el-menu .el-menu-item {
  height: 50px !important;
  line-height: 50px !important;
  font-size: 16px !important;
  color: #666666;
}

.information .el-menu i {
  line-height: 50px;
  padding: 0 10px;
  font-size: 16px;
}
.information .el-menu > .el-menu-item.is-active,
.information .el-menu--horizontal > .el-submenu.is-active .el-submenu__title {
  border-bottom: 2px solid #fe5621 !important;
}
.information .information-choice {
  padding: 5px 0px;
  border-bottom: 1px solid #ebebeb;
}
.information .information-choice .el-button {
  padding: 0px 15px;
  border-radius: 2px;
  font-size: 14px;
  line-height: 24px;
  margin: 0 10px 0 20px;
}
.information-name-img {
  width: 100px;
  height: 80px;
  float: left;
  color: #666666;
  font-size: 14px;
  text-align: left;
}
.information-name-img img {
  width: 100%;
  height: 100%;
  vertical-align: middle;
}
.information-name-center {
  float: left;
}
.information-name-center h5 {
  color: #333333;
  font-size: 16px;
  font-family: MicrosoftYaHei;
  text-align: left;
  font-weight: normal;
  padding-left: 24px;
}
.information-name-center p {
  color: #666666;
  font-size: 14px;
  font-family: MicrosoftYaHei;
  text-align: left;
  padding-left: 24px;
}
.el-table {
  color: #333333;
}
.information-operate{
    text-align: center;
    width: 72px;
    margin: 0 auto;
    font-size: 14px;
    color: white;
    border-radius: 4px;
    background-color: #fe5621;
}
</style>
