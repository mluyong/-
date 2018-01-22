<template>
    <div class="ReleaseBaby">
      <el-row>
        <el-col :span="24">
             <p>banner</p>
          </el-col>
          <el-col class="ReleaseBaby-conter-one" :span="24">
              <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
                  <i v-else class="el-icon-circle-plus avatar-uploader-icon"></i>
              </el-upload>
          </el-col>
          <el-col :span="24"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      </el-row>

  </div>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: ""
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
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
.ReleaseBaby-conter-one {
  border-radius: 8px;
  border: 1px solid #d3d3d3;
  background-color: #dedede;
}
.avatar-uploader {
  width: 520px;
  height: 260px;
  margin: 0 auto;
}

.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}

.avatar-uploader-icon {
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
</style>

