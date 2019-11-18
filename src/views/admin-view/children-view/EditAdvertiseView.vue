<template>
  <div id="editaadvertiseview">
    <form style="margin-left: 20px">
      <!--      <input type="text" name="url"/>-->
      <!--      <input type="text" name="picUrl"/>-->
      <!--      <input type="text" name="location"/>-->
      <!--      <input type="text" name="advId"/>-->
      <!--      <input type="submit" value="tijiao"/>-->

      <el-row class="row-marg-lf" style="margin-bottom: 10px">
        <el-col :span="20">
          <h4 style="color: #8c939d"> id: {{contentObj.advId}}</h4>
        </el-col>
        <el-col :span="4">
          <p></p>
        </el-col>
      </el-row>
      <el-row class="row-marg-lf" style="margin-bottom: 10px">
        <el-col :span="20">
          <h4 style="color: #8c939d"> 输入广告url:</h4>
          <!--         <el-input type="text" name="url" :value="contentObj.url"></el-input>-->
          <el-input v-model="contentObj.url" placeholder="请输入广告url" clearable maxlength="100"
                    show-word-limit></el-input>
        </el-col>
        <el-col :span="4">
          <p></p>
        </el-col>
      </el-row>
      <el-row class="row-marg-lf">
        <el-col :span="20">
          <el-upload
            :action="'http://localhost:8080/onlineBookStore/' + 'upload/uploadFileToTem'"
            :data="UploadData"
            list-type="picture-card"
            :on-preview="onPreview"
            :on-remove="onRemove"
            :on-success="onSuccess"
            :on-change="onChange"
            :before-upload="beforeUpload"
            :file-list="ruleForm.head"
            :limit='1'
            :on-exceed="handleExceed"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
<!--          <el-dialog :visible.sync="dialogVisible">-->
<!--            <img width="148px" src="" alt="" style="background:red;height:148px;width:148px;" />-->
<!--          </el-dialog>-->
        </el-col>
        <el-col :span="4">
          <p></p>
        </el-col>
      </el-row>

      <el-row class="row-marg-lf" style="margin-top: 20px; margin-bottom: -20px">
        <el-col :span="20">
          <h4 style="color: #8c939d"> 选择广告位置:</h4>
        </el-col>
        <el-col :span="4">
          <p></p>
        </el-col>
      </el-row>
      <el-row class="row-marg-lf" style="margin-top: 20px">
        <el-col :span="20">
<!--          <input type="radio" name="location" value="carousel">carousel-->
<!--          <input type="radio" name="location" value="middle">middle-->
<!--          <input type="radio" name="location" value="tail">tail-->
                    <el-radio-group v-model="contentObj.location " size="medium " >
                      <el-radio-button :label="1">首图</el-radio-button>
                      <el-radio-button :label="2">中间图</el-radio-button>
                      <el-radio-button :label="3">尾部</el-radio-button>
                    </el-radio-group>
        </el-col>
        <el-col :span="4">
          <p></p>
        </el-col>
      </el-row>

      <el-row class="row-marg-lf" style="margin-top: 20px">
        <el-col :span="24">
<!--          <input type="submit" v-if="isCreate" value="提交"/>-->
<!--          <input type="submit" v-if="isUpdate" value="更新"/>-->
                    <el-button type="success" plain v-if="isCreate" @click="update" >提交</el-button>
                    <el-button type="success" plain v-if="isUpdate" @click="update">更新</el-button>
        </el-col>
      </el-row>
    </form>
  </div>
</template>

<script>

  export default {
    name: "EditAdvertiseView",
    mounted() {
      this.initPage();
    },
    data() {
      return {
        // fileList:[],
        id: this.$route.params.id,
        isUpdate: false,
        isCreate: true,
        contentObj: {
          advId: '', url: '', picUrl: '', lastMdfTime: '', location: ''
        },


        UploadData:{
          dir:'',
          multipartFile: ''
        },

        ruleForm: {
          name: '',
          region: '',
          desc: '',
          head: []
        },

      }

    },
    methods: {
      onRemove(file) {
        this.contentObj.picUrl = '';
      },

      onSuccess(res, file, fileList) {
        this.contentObj.picUrl = res.data.url
        console.log(this.contentObj)
      },
      onChange(file, fileList) {},
      beforeUpload(file) {
        const isJPG = file.type
        this.UploadData.dir = 'advertise/pic'
        this.UploadData.multipartFile = file
        return isJPG
      },
      onPreview() {
        this.dialogVisible = true
      },

      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 1 个文件`);
      },
      /* 图片上传 */
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw)
      },
      beforeAvatarUpload(file) {
        const isLt1M = file.size / 1024 / 1024 < 1

        if (!isLt1M) {
          this.$message.error('上传头像图片大小不能超过 1MB!')
        }
        return isLt1M
      },

      initPage() {

        if (this.id > -1) {
          this.isUpdate = true;
          this.isCreate = false;
          this.$http.get("http://localhost:8080/onlineBookStore/advertise/" + this.id).then((response) => {
            console.log(response.data)

            this.contentObj.advId = response.data.advId
            this.contentObj.url = response.data.url
            this.contentObj.picUrl = response.data.picUrl
            this.contentObj.lastMdfTime = response.data.lastMdfTime
            this.contentObj.location = response.data.location

          })
        }
      },
      update() {
        console.log(this.contentObj)
        var url = "http://localhost:8080/onlineBookStore/updateAdvertise"
        this.$http.post(
          url,
          this.contentObj
        ).then((response) => {
          console.log(response.data);
          if (response.data.code === 200) {
            this.$message.success('修改成功');
          }
          if (response.data.code === 400) {
            this.$message.error(response.data.msg);
          }

        })

      },
      // fileChange(file){
      //   console.log(file)
      // }


    },
    components: {}
  }
</script>

<style scoped>

  .row-marg-lf {
    margin-left: 350px

  }
</style>
