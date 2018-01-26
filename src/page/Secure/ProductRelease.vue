<template>
     <div class="Secure-pr">
         <el-col class="Secure-pr-choice">
            <el-button type="danger" plain>删除</el-button>
            <el-button type="danger" plain>上架</el-button>
            <el-button type="danger" plain>下架</el-button>
            <el-button type="danger" plain>发布信息</el-button>
        </el-col>

        <el-form :model="ruleForm" ref="ruleForm" label-width="150px" class="demo-ruleForm Secure-pr-conter">
            <el-form-item label="">
              <h2 align="center">宝贝发布</h2>
            </el-form-item>
            
            <el-form-item label="宝贝名称" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="车贷简介" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            
            <el-form-item label="上传主图">
                <div class="Secure-pr-conter-upload">
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
                <div class="Secure-pr-conter-quill">
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
.Secure-pr .Secure-pr-choice {
  padding: 14px 0px 14px 25px;
  border-bottom: 1px solid #ebebeb;
}
.Secure-pr .Secure-pr-choice .el-button {
  padding: 0px 15px;
  border-radius: 2px;
  font-size: 14px;
  line-height: 24px;
  margin: 0 10px 0 20px;
}
.Secure-pr .el-input,
.Secure-pr .el-textarea {
  width: 600px;
  border-radius: 2px;
}

.Secure-pr .Secure-pr-conter-money {
  width: 600px;
  border: 1px solid #cccccc;
  border-radius: 2px;
}
.Secure-pr .Secure-pr-conter-money div:nth-child(3n-2) {
  width: 168px;
  padding-right: 60px;
}
.Secure-pr .Secure-pr-conter-money div {
  width: 110px;
  display: inline-block;
  background-color: #999999;
  font-size: 14px;
  color: white;
  line-height: 24px;
  border-radius: 2px;
  padding-left: 10px;
  margin: 0 10px;
}
.Secure-pr .Secure-pr-conter-money > p {
  width: 100%;
  text-align: center;
  font-size: 24px;
  line-height: 45px;
}
.Secure-pr .el-input-group__append,
.Secure-pr .el-input-group__prepend {
  background-color: white;
}
.Secure-pr .Secure-pr-conter-upload {
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
.Secure-pr-conter-upload > p {
  padding: 0 10px;
  font-size: 14px;
  line-height: 16px;
}
.Secure-pr-conter-upload > div {
  padding: 10px;
}
.Secure-pr-conter-upload > p > span {
  display: inline-block;
  padding-right: 30px;
  padding-top: 10px;
  padding-bottom: 5px;
  color: #333333;
}
.Secure-pr-conter-upload > p > span:last-child {
  padding-bottom: 0px;
  padding-top: 0px;
}
.Secure-pr .Secure-pr-conter .el-upload-dragger {
  border: 1px solid #fe5621;
}
.Secure-pr .Secure-pr-conter .el-upload--picture-card {
  border: none;
}
.Secure-pr .Secure-pr-conter-quill{
  width:  670px !important;
  margin: 0 -66px;;
}
.Secure-pr .Secure-pr-conter-quill p{
  padding-bottom: 20px;
}
.Secure-pr .el-form{
  width: 55%;
  margin: 0 auto;
}
.Secure-pr .el-form .el-form-item:first-child{
  margin: 0px;
}
.Secure-pr .el-form .el-form-item h2{
  width: 600px;
  text-align: center;
  font-size: 18px;
  font-weight: normal;
  padding-top: 65px;
  padding-bottom: 5px;;
  color:  #333333;
}
</style>
