<template>
    <div class="dictionary">
<el-tree
  :data="data4"
  :props="defaultProps"
  node-key="dict_id"
  @node-click="selected"
  :render-content="renderContent">
</el-tree>


    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>

  </div>
</template>

<script>
let id = 1000;

export default {
  data() {
    return {
      data4: [],
      tableData:[],
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  },

  methods: {
    append(data) {
      const newChild = { id: id++, label: "testtest", children: [] };
      if (!data.children) {
        this.$set(data, "children", []);
      }
      data.children.push(newChild);
    },

    remove(node, data) {
      console.log(data.dict_id);
      this.$http
        .delete("http://wddapi.jiechikeji.com/api/DataDictionary?id=" + data.dict_id)
        .then(
          data => {
            this.$alert("删除成功", "提示信息");
            this.loadTree();
          },
          err => {
            console.log(err);
          }
        );
    },

    renderContent(h, { node, data, store }) {
      return (
        <span style="flex: 1; display: flex; align-items: center; justify-content: space-between; font-size: 14px; padding-right: 8px;">
          <span>
          {data.dict_name}
          </span>
          <span>
            <el-button
              style="font-size: 12px;"
              type="text"
              on-click={() => this.remove(node, data)}
            >
              删除
            </el-button>
          </span>
        </span>
      );
    },
    loadTree() {
      this.$http.get("http://wddapi.jiechikeji.com/api/DataDictionary").then(
        data => {
          this.data4 = data.body.Data;
          console.log(this.data4);
        },
        err => {
          console.log(err);
        }
      );
    },
    loadTable() {
      this.$http.get("http://wddapi.jiechikeji.com/api/DataDictionaryContent?id=20").then(
        data => {
          this.data4 = data.body.Data;
          console.log(this.data4);
        },
        err => {
          console.log(err);
        }
      );
    },
    selected(data){
      console.log(data);
      this.$alert("选择", "提示信息");
      this.loadTable();
    }
  },
  created() {
    this.loadTree();
   // this.loadTable();
  }
};
</script>

<style scoped>
.dictionary .el-row:first-child {
  margin-left: 0px !important;
  margin-right: 0px !important;
  border-bottom: 1px solid #bbbbbb;
}
.dictionary .dictionary-button-left,
.dictionary .dictionary-button-right {
  padding: 15px 0px;
}
.dictionary .dictionary-button-left .el-button {
  background-color: #fe5621;
  color: white;
  width: 72px;
  height: 24px;
  color: 14px;
  margin: 0 15px;
  padding: 0px;
}
.dictionary .dictionary-button-right .el-button {
  float: right;
  background-color: #fe5621;
  color: white;
  width: 72px;
  height: 24px;
  color: 14px;
  margin: 0 15px;
  padding: 0px;
}
.el-table {
  color: #333333;
  font-size: 18px;
}
.dictionary-conter-left {
  width: calc(100% - 70% - 20px);
  float: left;
  font-size: 0px;
  margin-right: 20px;
}
.dictionary-conter-left ul {
  font-size: 0px;
  padding: 20px 0px;
  color: #333333;
}
.dictionary-conter-left ul:nth-of-type(2n + 1) {
  background-color: #e5f0fd;
}
.dictionary-conter-left ul:nth-of-type(1) {
  padding: 10px 0px;
  color: #bbbbbb;
}
.dictionary-conter-left ul li:first-child {
  padding: 0px 40px;
}
.dictionary-conter-left li {
  display: inline-block;
  font-size: 16px;
  width: calc(100% / 2);
}

.dictionary .dictionary-conter-right {
  width: 70%;
  float: right;
  text-align: center;
  border-collapse: collapse;
}
.dictionary .dictionary-conter-right table {
  width: 100%;
  text-align: center;
  border-collapse: collapse;
  font-size: 16px;
}
.dictionary table tr:nth-last-of-type(2n + 1) {
  background-color: #e5f0fd;
}
.dictionary table tr th {
  padding: 10px 0px;
  color: #bbbbbb;
}
.dictionary table tr td {
  padding: 20px 0px;
  color: #333333;
}
.dictionary table tr th:last-child {
  width: 300px;
}
.dictionary-tr td span {
  color: #fe5621;
  display: inline-block;
  padding: 0 20px;
}
</style>
