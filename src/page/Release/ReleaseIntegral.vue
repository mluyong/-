<template>
     <div class="Car-pr">
        <el-form :model="IntegralForm" :rules="rules" ref="IntegralForm" label-width="150px" class="demo-IntegralForm Car-pr-conter">
            <el-form-item label="">
              <h2 align="center">积分商品发布</h2>
            </el-form-item>
            
            <el-form-item label="宝贝名称：" prop="name">
                <el-input v-model="IntegralForm.name"></el-input>
            </el-form-item>
            <el-form-item label="宝贝价格：" prop="Price" :rules="Price">
                <el-input placeholder="请输入参考价" v-model.number="IntegralForm.Price">
                    <template slot="append">积分</template>
                </el-input>
            </el-form-item>
            <el-form-item label="市场参考价：" prop="marketPrice" :rules="marketPrice">
                <el-input placeholder="请输入市场参考价" v-model.number="IntegralForm.marketPrice">
                    <template slot="append">元</template>
                </el-input>
            </el-form-item>
            <el-form-item label="产品描述：" prop="Product">
                <el-input type="textarea" v-model="IntegralForm.Product"></el-input>
            </el-form-item>
            <el-form-item label="上传主图：">
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
            <el-form-item label="详情设置："><br>
                <div class="Car-pr-conter-quill">
                    <quill-editor ref="myTextEditor" v-model="content" :config="editorOption"></quill-editor>
                </div>
            </el-form-item>
            <el-form-item class="ReleaseButton">
                <el-button type="primary" @click="submitForm('IntegralForm')">立即发布</el-button>
            </el-form-item>
            
        </el-form>
        
    </div>
</template>

<script>
import { quillEditor } from "vue-quill-editor";
export default {
  data() {
    return {
      content: "",
      editorOption: {},
      dialogImageUrl: "",
      dialogVisible: false,
      IntegralForm: {
        name: "",
        // 宝贝介绍
        introduce: "",
        // 宝贝价格
        Price: "",
        // 市场参考价
        marketPrice:"",
        // 产品描述
        Product:"",
        domains: [{ name: "汽车", color: "黑色", price: "100" }]
      },
      rules: {
        name: [
          { required: true, message: "请输入宝贝名称" },
          { min: 3, max: 20, message: "长度在 3 到 10 个字符" }
        ],
        Product: [
          { required: true, message: "请输入产品描述" }
        ],
        Price: [
          { required: true, message: "请输入宝贝价格"},
          { type: "number", message: "宝贝价格必须为数字值"}
        ],
        marketPrice: [
          { required: true, message: "请输入市场参考价"},
          { type: "number", message: "市场参考价必须为数字值"}
        ]
      }
    };
  },
  methods: {
    removeDomain(item) {
      var index = this.IntegralForm.domains.indexOf(item);
      if (index !== -1) {
        this.IntegralForm.domains.splice(index, 1);
      }
    },
    addDomain() {
      this.IntegralForm.domains.push({
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
.Car-pr{
  padding-top: 20px;
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
  padding: 10px;
}
.Car-pr .Car-pr-conter-money .Car-pr-conter-money-div {
  width: 100%;
  display: inline-block;
  font-size: 0px;
  color: white;
  line-height: 14px;
}
.Car-pr .Car-pr-conter-money .Car-pr-conter-money-div div {
  display: inline-block;
  width: calc(100% / 3 - 20px);
  margin-right: 10px;
  background-color: #999999;
  border: none;
  padding: 0 10px;
  font-size: 14px;
  line-height: 24px;
  color: RGBA(255, 255, 255, 1);
  border-radius: 2px;
}
.Car-pr .Car-pr-conter-money .Car-pr-conter-money-div > i {
  font-size: 20px;
  line-height: 24px;
  color: #999999;
}
.Car-pr .Car-pr-conter-money .Car-pr-conter-money-div > div label {
  display: inline-block;
  width: 50%;
}
.Car-pr .Car-pr-conter-money .Car-pr-conter-money-div > div input {
  display: inline-block;
  width: 50%;
  background-color: #999999;
  border: none;
  color: RGBA(255, 255, 255, 1);
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
.Car-pr .Car-pr-conter-quill {
  width: 665px !important;
  margin: 0 -66px;
}
.Car-pr .Car-pr-conter-quill p {
  padding-bottom: 20px;
}
.Car-pr .el-form {
  width: 50%;
  margin: 0 auto;
  min-width: 800px;
}
.Car-pr .el-form .car-two .car-two-left {
  width: 350px;
}
.Car-pr .el-form .car-two .car-two-right {
  width: 225px;
  margin-left: 20px;
}
.Car-pr .el-form .el-form-item:first-child {
  margin: 0px;
}
.Car-pr .el-form .el-form-item:first-child h2 {
  width: 600px;
  font-size: 18px;
  font-weight: normal;
  padding-bottom: 5px;
  color: #333333;
}
.ql-container {
  min-height: 300px;
}
</style>
