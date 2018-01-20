<template>
     <div class="used-pr">
         <el-col class="used-pr-choice">
            <el-button type="danger" plain>删除</el-button>
            <el-button type="danger" plain>上架</el-button>
            <el-button type="danger" plain>下架</el-button>
            <el-button type="danger" plain>发布信息</el-button>
        </el-col>
        <!-- <el-row :gutter="20">
            <el-col :span="8"> wqwqw</el-col>
            <el-col :span="16" label="rwerwe">
                <el-input placeholder="请输入宝贝名称" v-model="input2"></el-input>
            </el-col>
            <el-col :span="8"> wqwqw</el-col>
            <el-col :span="16" label="rwerwe">
                <el-input placeholder="请选择日期" suffix-icon="el-icon-date" v-model="input2">
                    <template>
                  <span>skaskdhnsa</span>
                </template></el-input>
            </el-col>
        </el-row> -->
             <!-- <el-form :label-position="labelPosition" label-width="120px" :model="formLabelAlign">
                <el-form-item label="宝贝名称">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="宝贝介绍">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="宝贝款式价格">
                    <div class="el-input__inner">
                        <ul>
                            <li>款式名称</li>
                            <li>颜色</li>
                            <li>价格(万)</li>
                        </ul>
                        <div class="product-btn"><span>+</span></div>
                    </div>
                </el-form-item>
                <el-form-item label="经销商参考价">
                    <el-input value="万"></el-input>
                </el-form-item>
                <el-form-item label="厂商参考价">
                    <el-input value="万"></el-input>
                </el-form-item>
                <el-form-item label="全款购车">
                    <el-input ></el-input>
                </el-form-item>
                <el-form-item label="贷款购车">
                    <el-input ></el-input>
                </el-form-item>
                <el-form-item label="商品数量">
                    <el-input ></el-input>
                </el-form-item>
                <el-form-item label="上传主图">
                    <div class="el-input__inner">
                         
                    </div>
                </el-form-item>
            </el-form> -->

        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm used-pr-conter">
            <el-form-item label="宝贝名称" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="宝贝介绍" prop="desc">
                <el-input type="textarea" v-model="ruleForm.desc"></el-input>
            </el-form-item>
            <el-form-item label="宝贝款式价格" prop="region">
                <div class="used-pr-conter-money">
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
            <el-form-item label="贷款购车" prop="name">
                <el-input placeholder="请输入内容" v-model="ruleForm.name">
                    <template slot="append">万</template>
                </el-input>
                <el-input placeholder="请输入内容" v-model="ruleForm.name">
                    <template slot="append">万</template>
                </el-input>
            </el-form-item>
            <el-form-item label="商品数量" prop="name">
                <el-input placeholder="请输入内容" v-model="ruleForm.name">
                </el-input>
            </el-form-item>
             <el-form-item label="宝贝款式价格" prop="region">
                <div class="used-pr-conter-money">
                    <div v-for="(domain,index) in ruleForm.domains" :key="domain.key">
                        <span>{{domain.text}}{{index}}</span>
                        <i @click.prevent="removeDomain(domain)" class="el-icon-circle-close"></i>
                    </div>
                    <p><i @click="addDomain()" class="el-icon-circle-plus"></i></p>
                </div>
            </el-form-item>
            <el-form-item label="上传主图">
                <div class="used-pr-conter-upload">
                    <quill-editor v-model="infoForm.a_content" ref="myQuillEditor" class="editer"  @ready="onEditorReady($event)"></quill-editor>
                </div>
            </el-form-item>
            <el-form-item label="上传主图">
                <div class="used-pr-conter-upload">
                    <p><span>图片大小：750*420（px）</span><span>上传格式限：jpg png </span><span>文件大小限：10M</span></p>
                    <el-upload action="https://jsonplaceholder.typicode.com/posts/" :drag="true" :limit="2" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
                        <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible" size="tiny">
                    <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
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
import quillEditor from "../../components/QuillEditor";
export default {
  data() {
    return {
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
      return this.$refs.myQuillEditor.quill;
    }
  },
    components: { quillEditor }
};
</script>

<style>
.bg-purple {
  height: 40px;
  margin-bottom: 10px;
  background-color: aquamarine;
}
.used-pr .used-pr-choice {
  padding: 14px 0px 14px 25px;
  border-bottom: 1px solid #ebebeb;
}
.used-pr .used-pr-choice .el-button {
  padding: 0px 15px;
  border-radius: 2px;
  font-size: 14px;
  line-height: 24px;
  margin: 0 10px 0 20px;
}
.used-pr-conter {
  padding: 0 300px;
}
.used-pr .el-input,
.used-pr .el-textarea {
  width: 450px;
  border-radius: 2px;
}

.used-pr .used-pr-conter-money {
  width: 450px;
  border: 1px solid #cccccc;
  border-radius: 2px;
}
.used-pr .used-pr-conter-money div:nth-child(3n-2) {
  width: 168px;
  padding-right: 60px;
}
.used-pr .used-pr-conter-money div {
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
.used-pr .used-pr-conter-money > p {
  width: 100%;
  text-align: center;
  font-size: 24px;
  line-height: 45px;
}
.used-pr .el-input-group__append,
.used-pr .el-input-group__prepend {
  background-color: white;
}
.used-pr .used-pr-conter-upload {
  width: 450px;
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
.used-pr-conter-upload > p {
  padding: 0 10px;
  font-size: 14px;
  line-height: 16px;
}
.used-pr-conter-upload > div {
  padding: 10px;
}
.used-pr-conter-upload > p > span {
  display: inline-block;
  padding-right: 30px;
  padding-top: 10px;
  padding-bottom: 5px;
  color: #333333;
}
.used-pr-conter-upload > p > span:last-child {
  padding-bottom: 0px;
  padding-top: 0px;
}
.used-pr .used-pr-conter .el-upload-dragger {
  border: 1px solid #fe5621;
}
.used-pr .used-pr-conter .el-upload--picture-card {
  border: none;
}
</style>
