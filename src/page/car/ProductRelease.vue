<template>
     <div class="Car-pr">
         <el-col class="Car-pr-choice">
            <el-button type="danger" plain>删除</el-button>
            <el-button type="danger" plain>上架</el-button>
            <el-button type="danger" plain>下架</el-button>
            <el-button type="danger" plain>发布信息</el-button>
        </el-col>

        <el-form :model="ruleForm"  ref="ruleForm" label-width="150px" class="demo-ruleForm Car-pr-conter">
            <el-form-item label="">
              <h2 align="center">发布宝贝</h2>
            </el-form-item>
            
            <el-form-item label="宝贝名称" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="宝贝介绍" prop="desc">
                <el-input type="textarea" v-model="ruleForm.desc"></el-input>
            </el-form-item>
            <el-form-item label="宝贝款式价格" prop="region">
                <div class="Car-pr-conter-money">
                    <div v-for="(domain,index) in ruleForm.domains" :key="domain.key">
                        <span>{{domain.text}}{{index}}</span>
                        <i @click.prevent="removeDomain(domain)" class="el-icon-circle-close"></i>
                    </div>
                    <p><i @click="addDomain()" class="el-icon-circle-plus"></i></p>
                </div>
            </el-form-item>
            <el-form-item label="经销商参考价" prop="name">
                <el-input placeholder="请输入内容" v-model="ruleForm.name">
                    <template slot="append">万</template>
                </el-input>
            </el-form-item>
            <el-form-item label="厂商参考价" prop="name">
                <el-input placeholder="请输入内容" v-model="ruleForm.name">
                    <template slot="append">万</template>
                </el-input>
            </el-form-item>
            <el-form-item label="全款购车" prop="name">
                <el-input placeholder="请输入内容" v-model="ruleForm.name">
                    <template slot="append">万</template>
                </el-input>
            </el-form-item>
            <el-form-item class="car-two" label="贷款购车" prop="name">
                <el-input class="car-two-left" placeholder="请输入内容" v-model="ruleForm.name">
                    <template slot="append">万</template>
                </el-input>
                <el-input class="car-two-right" placeholder="请输入内容" v-model="ruleForm.name">
                    <template slot="append">期</template>
                </el-input>
            </el-form-item>
            <el-form-item label="商品数量" prop="name">
                <el-input placeholder="请输入内容" v-model="ruleForm.name">
                </el-input>
            </el-form-item>
             <el-form-item label="宝贝款式价格" prop="region">
                <div class="Car-pr-conter-money">
                    <div v-for="(domain,index) in ruleForm.domains" :key="domain.key">
                        <span>{{domain.text}}{{index}}</span>
                        <i @click.prevent="removeDomain(domain)" class="el-icon-circle-close"></i>
                    </div>
                    <p><i @click="addDomain()" class="el-icon-circle-plus"></i></p>
                </div>
            </el-form-item>
            
            <el-form-item label="上传主图">
                <div class="Car-pr-conter-upload">
                    <p><span>图片大小：750*420（px）</span><span>上传格式限：jpg png </span><span>文件大小限：10M</span></p>
                    <el-upload action="https://jsonplaceholder.typicode.com/posts/" :drag="true" :limit="3" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
                        <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible" size="tiny">
                    <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
                </div>
            </el-form-item>
            <el-form-item label="详情设置"><br>
                <div class="Car-pr-conter-quill">
                    <quill-editor ref="myTextEditor" v-model="content" :config="editorOption"></quill-editor>
                </div>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
        
    </div>
</template>

<script>
import { quillEditor } from "vue-quill-editor";
export default {
  data() {
    return {
      content: "<p>Hello BBK</p>",
      editorOption: {
        // something config
      },
      infoForm: {
        a_title: "",
        a_source: "",
        a_content: "",
        editorOption: {}
      },
      dialogImageUrl: "",
      dialogVisible: false,
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        domains: [
          { text: "款式名称" },
          { text: "颜色" },
          { text: "价格（万）" }
        ]
      },
      rules: {
        name: [
          { required: true, message: "请输入宝贝名称", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" }
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
      }
    };
  },
  methods: {
    onEditorReady(editor) {},
    removeDomain(item) {
      var index = this.ruleForm.domains.indexOf(item);
      if (index !== -1) {
        this.ruleForm.domains.splice(index, 1);
      }
    },
    addDomain() {
      this.ruleForm.domains.push({
        value: "",
        key: Date.now()
      });
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  },
  computed: {
    editor() {
      return this.$refs.myTextEditor.quillEditor;
    }
  },
  components: {
    quillEditor
  }
};
</script>

<style>
.bg-purple {
  height: 40px;
  margin-bottom: 10px;
  background-color: aquamarine;
}
.Car-pr .Car-pr-choice {
  padding: 14px 0px 14px 25px;
  border-bottom: 1px solid #ebebeb;
}
.Car-pr .Car-pr-choice .el-button {
  padding: 0px 15px;
  border-radius: 2px;
  font-size: 14px;
  line-height: 24px;
  margin: 0 10px 0 20px;
}
.Car-pr .el-input,
.Car-pr .el-textarea {
  width: 600px;
  border-radius: 2px;
}

.Car-pr .Car-pr-conter-money {
  width: 600px;
  border: 1px solid #cccccc;
  border-radius: 2px;
}
.Car-pr .Car-pr-conter-money div:nth-child(3n-2) {
  width: 200px;
  padding-right: 60px;
}
.Car-pr .Car-pr-conter-money div {
  width: 135px;
  display: inline-block;
  background-color: #999999;
  font-size: 14px;
  color: white;
  line-height: 24px;
  border-radius: 2px;
  padding-left: 10px;
  margin: 0 20px;
}
.Car-pr .Car-pr-conter-money > p {
  width: 100%;
  text-align: center;
  font-size: 24px;
  line-height: 45px;
}
.Car-pr .el-input-group__append,
.Car-pr .el-input-group__prepend {
  background-color: white;
}
.Car-pr .Car-pr-conter-upload {
  width: 600px;
  background-color: #f9f9f9;
  border: 1px solid #cccccc;
}
.el-upload-list--picture-card .el-upload-list__item {
  width: 120px;
  height: 80px;
}
.el-upload--picture-card,
.el-upload-dragger {
  width: 120px;
  height: 80px;
  line-height: 80px;
}
.Car-pr-conter-upload > p {
  padding: 0 10px;
  font-size: 14px;
  line-height: 16px;
}
.Car-pr-conter-upload > div {
  padding: 10px;
}
.Car-pr-conter-upload > p > span {
  display: inline-block;
  padding-right: 30px;
  padding-top: 10px;
  padding-bottom: 5px;
  color: #333333;
}
.Car-pr-conter-upload > p > span:last-child {
  padding-bottom: 0px;
  padding-top: 0px;
}
.Car-pr .Car-pr-conter .el-upload-dragger {
  border: 1px solid #fe5621;
}
.Car-pr .Car-pr-conter .el-upload--picture-card {
  border: none;
}
.Car-pr .Car-pr-conter-quill{
  width:  670px !important;
  margin: 0 -66px;;
}
.Car-pr .Car-pr-conter-quill p{
  padding-bottom: 20px;
}
.Car-pr .el-form{
  width: 55%;
  margin: 0 auto;
}
.Car-pr .el-form .car-two .car-two-left{
  width: 350px;
}
.Car-pr .el-form .car-two .car-two-right{
  width: 225px;
  margin-left: 20px
}
.Car-pr .el-form .el-form-item:first-child{
  margin: 0px;
}
.Car-pr .el-form .el-form-item:first-child h2{
  width: 600px;
  font-size: 18px;
  font-weight: normal;
  padding-top: 65px;
  padding-bottom: 5px;;
  color:  #333333;
}
</style>
