<template>
    <div class="ReleaseBaby">
      <el-row>
          <el-col class="ReleaseBaby-title-one"  :span="24">
             <p>banner</p>
          </el-col>
          <el-col class="ReleaseBaby-conter ReleaseBaby-conter-one" :span="24">
            <P> <span> 图片大小：750*374(px)</span> <span>上传格式限：jpg png </span> <span>文件大小限：1.0M</span> </P>
              <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
                  <i v-else class="el-icon-circle-plus avatar-uploader-icon"></i>
              </el-upload>
               <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccessOne" :before-upload="beforeAvatarUpload">
                  <img v-if="imageUrlOne" :src="imageUrlOne" class="avatar">
                  <i v-else class="el-icon-circle-plus avatar-uploader-icon"></i>
              </el-upload>
              <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccessTwo" :before-upload="beforeAvatarUpload">
                  <img v-if="imageUrlTwo" :src="imageUrlTwo" class="avatar">
                  <i v-else class="el-icon-circle-plus avatar-uploader-icon"></i>
              </el-upload>
              <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccessThree" :before-upload="beforeAvatarUpload">
                  <img v-if="imageUrlThree" :src="imageUrlThree" class="avatar">
                  <i v-else class="el-icon-circle-plus avatar-uploader-icon"></i>
              </el-upload>
              <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccessFour" :before-upload="beforeAvatarUpload">
                  <img v-if="imageUrlFour" :src="imageUrlFour" class="avatar">
                  <i v-else class="el-icon-circle-plus avatar-uploader-icon"></i>
              </el-upload>
          </el-col>
           <el-col class="ReleaseBaby-title-one"  :span="24">
             <p>推荐</p>
          </el-col>
          <el-col class="ReleaseBaby-conter ReleaseBaby-conter-two" :span="24">
            <P> <span> 图片大小：750*374(px)</span> <span>上传格式限：jpg png </span> <span>文件大小限：1.0M</span> </P>
            <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
              <i class="el-icon-plus"></i> 
              <img width="100%" :src="dialogImageUrl" alt="">
            </el-upload>
            <el-col class="ReleaseBaby-conter-img" v-for="(domain, index) in dynamicValidateForm.domains" :index="index" :key="domain.key">
              <div>
                  <img src="" alt=""> 
                  <i @click.prevent="removeDomain(domain)" class="el-icon-circle-close"></i>
              </div>
             
            </el-col>
            <i @click="addDomain()" class="el-icon-circle-plus ReleaseBaby-conter-i"></i>
          </el-col>
        <el-col class="ReleaseBaby-title-one"  :span="24">
             <p>推荐</p>
        </el-col>
        <el-col class="ReleaseBaby-conter ReleaseBaby-conter-three" :span="24">
          <div class="el-table__body-wrapper is-scroll-left"  v-for="(domain, index) in dynamicValidateForms.domains" :index="index" :key="domain.key">
            <table class="el-table__body" cellspacing="0" cellpadding="0" border="0">
                <tr class="el-table__row">
                  <td class="el-table_1_column_8 is-right el-table-column--selection">
                    <div class="cell">
                      <label role="checkbox" class="el-checkbox">
                        <span aria-checked="mixed" class="el-checkbox__input">
                        <span class="el-checkbox__inner"></span>
                          <input class="el-checkbox__original" value="" type="checkbox"></span>
                      </label>
                    </div>
                  </td>
                  <td class="el-table_1_column_9 is-center ">
                    <div class="cell">用车技巧</div>
                  </td>
                  <td class="el-table_1_column_10 is-center ">
                    <div class="cell">
                      <div data-v-ae31b1d4="" class="ReleaseBaby-name-img">
                        <img data-v-ae31b1d4="" src="../../static/image/car.png" alt="">
                      </div> 
                      <div data-v-ae31b1d4="" class="ReleaseBaby-name-center">
                        <h5 data-v-ae31b1d4="">金杯750最近大降价，省油技巧</h5> 
                        <p data-v-ae31b1d4="">明天开始油价上身，金杯750可以小</p>
                      </div>
                    </div>
                  </td>
                  <td class="el-table_1_column_11 is-center" >
                    <div class="cell">2018-01-24</div>
                  </td>
                  <td class="el-table_1_column_12 is-center ">
                    <div class="cell">上架</div>
                  </td>
                  <td class="el-table_1_column_13 is-center ">
                    <div class="cell">库存26</div>
                  </td>
                  <td class="el-table_1_column_14 is-center ">
                    <div class="cell">
                      <p data-v-ae31b1d4="" class="ReleaseBaby-operate">更改链接</p>
                    </div>
                  </td>
                </tr>
            </table>
          </div>
          <i @click="addDomains()" class="el-icon-circle-plus ReleaseBaby-conter-i ReleaseBaby-conter-i-two"></i>
        </el-col>
      </el-row>

  </div>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: "",
      imageUrlOne: "",
      imageUrlTwo: "",
      imageUrlThree: "",
      imageUrlFour: "",
      imageUrlFive: "",
      fileList: [{name: ' ', url: ' '} ],
      dialogImageUrl: '',
        dialogVisible: false,
        handlePictureCardPreview:"",
        dynamicValidateForm: {
        domains: [
          {
            value: ""
          }
        ]
      },
       dynamicValidateForms: {
        domains: [
          {
            value: ""
          }
        ]
      },
      tableData: [
        {
          type: "用车技巧",
          image: "../../static/image/car.png",
          name: {
            title: "金杯750最近大降价，省油技巧",
            text: "明天开始油价上身，金杯750可以小"
          },
          date: Date.now,
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
    addDomains() {
      this.dynamicValidateForms.domains.push({
        value: "",
        key: Date.now()
      });
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    handleAvatarSuccessOne(res, file) {
      this.imageUrlOne = URL.createObjectURL(file.raw);
    },
    handleAvatarSuccessTwo(res, file) {
      this.imageUrlTwo = URL.createObjectURL(file.raw);
    },
    handleAvatarSuccessThree(res, file) {
      this.imageUrlThree = URL.createObjectURL(file.raw);
    },
    handleAvatarSuccessFour(res, file) {
      this.imageUrlFour = URL.createObjectURL(file.raw);
    },
    handleAvatarSuccessFive(res, file) {
      this.imageUrlFive = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isPNG = file.type === "image/png";
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (isJPG || isPNG) {
        return isJPG || isPNG;
      } else if (!isJPG && !isPNG) {
        this.$message.error("上传头像图片只能是 JPG 和 PNG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return (isJPG && isLt2M) || isPNG;
    }
  }
};
</script>
<style scoped>
.ReleaseBaby {
  margin: 0 33px;
}
.ReleaseBaby-title-one{
  padding: 10px 20px;
  font-size: 16px;
}
.ReleaseBaby-conter {
  border-radius: 8px;
  border: 1px solid #d3d3d3;
  background-color: #dedede;
  min-width: 1200px;
  padding: 0 10px;
}

.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}

.ReleaseBaby .ReleaseBaby-conter-one>div:nth-of-type(1) .el-upload .avatar-uploader-icon {
  text-align: center;
  font-size: 120px;
  color: #d3d3d3;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  line-height: 260px;
  text-align: center;
}
.avatar {
  width: 100%;
  height: 100%;
  display: block;
}
.ReleaseBaby-conter>p{
  line-height: 45px;
  font-size: 14px;
  color:  #333333;
  padding-left: 10px;
}
.ReleaseBaby-conter>p span{
  display: inline-block;
  padding-right: 27px;
}
.el-upload-list li{
  background-color: #409eff;
  border: 1px solid red;
}
.ReleaseBaby-conter-two{
  padding-bottom: 20px;
}
.ReleaseBaby-conter-two>div:nth-of-type(1){
  float: left;
  margin-right: 20px;
}
.ReleaseBaby-conter-img{
  width: 125px;
  height: 125px;
  margin-right: 20px;
  margin-bottom: 20px;
  display: inline-block;
  background-color: #ffffff;
}
.ReleaseBaby-conter-img div{
  position: relative;
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
}
.ReleaseBaby-conter-img div img{
  width: 100%;
  height: 100%;
}
.ReleaseBaby-conter-img div i{
  width: 100%;
  height: 100%;
  font-size: 20px;
  position: absolute;
  bottom: -100px;
  right: -100px;
}
.ReleaseBaby-conter-i{
   width: 125px;
  height: 125px;
  font-size: 66px;
  line-height: 125px;
  text-align: center;
  color:  #4B4B4B;
}
.ReleaseBaby-conter-i-two{
  margin: 0 40%;
}
.ReleaseBaby-td-two div{
  display: inline-block;
  
}
.ReleaseBaby-conter-three{
  padding:  0px !important;
}
.el-table__body-wrapper{
padding: 20px 10px;
border-bottom: 1px solid  #EBEBEB;
}
.ReleaseBaby-name-img {
  width: 100px;
  height: 80px;
  float: left;
  color: #666666;
  font-size: 14px;
  text-align: left;
}
.ReleaseBaby-name-img img {
  width: 100%;
  height: 100%;
  vertical-align: middle;
}
.ReleaseBaby-name-center {
  float: left;
}
.ReleaseBaby-name-center h5 {
  color: #333333;
  font-size: 16px;
  font-family: MicrosoftYaHei;
  text-align: left;
  font-weight: normal;
  padding-left: 24px;
}
.ReleaseBaby-name-center p {
  color: #666666;
  font-size: 14px;
  font-family: MicrosoftYaHei;
  text-align: left;
  padding-left: 24px;
}
.el-table {
  color: #333333;
}
.ReleaseBaby-operate{
    text-align: center;
    width: 72px;
    margin: 0 auto;
    font-size: 14px;
    color: white;
    border-radius: 4px;
    background-color: #fe5621;
    cursor: pointer;
}
</style>

