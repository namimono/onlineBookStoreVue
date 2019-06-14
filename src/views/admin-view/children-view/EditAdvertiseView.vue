<template>
  <div id="editannoncementview">
    <form action="updateAdvertise" method="post" style="margin-left: 300px" enctype="multipart/form-data">
<!--      <input type="text" name="url"/>-->
<!--      <input type="text" name="picUrl"/>-->
<!--      <input type="text" name="location"/>-->
<!--      <input type="text" name="advId"/>-->
<!--      <input type="submit" value="tijiao"/>-->

      <el-row class="row-marg-lf" style="margin-bottom: 10px">
        <el-col :span="20">
          <h4 style="color: #8c939d"> id:</h4>
          <input type="text" name="advId" :value="contentObj.advId"></input>
          <!--          <el-input v-model="contentObj.url" placeholder="请输入广告url" clearable maxlength="100"-->
          <!--                    show-word-limit></el-input>-->
        </el-col>
        <el-col :span="4">
          <p></p>
        </el-col>
      </el-row>
      <el-row class="row-marg-lf" style="margin-bottom: 10px">
        <el-col :span="20">
          <h4 style="color: #8c939d"> 选择广告url:</h4>
         <input type="text" name="url" :value="contentObj.url"></input>
<!--          <el-input v-model="contentObj.url" placeholder="请输入广告url" clearable maxlength="100"-->
<!--                    show-word-limit></el-input>-->
        </el-col>
        <el-col :span="4">
          <p></p>
        </el-col>
      </el-row>
      <el-row class="row-marg-lf">
        <el-col :span="20">
          <input type="file" name="file"/>
          <!--        <el-upload-->
          <!--          class="upload-demo"-->
          <!--          ref="upload"-->
          <!--          action="https://jsonplaceholder.typicode.com/posts/"-->
          <!--          :on-change="fileChange()"-->
          <!--          :file-list="fileList"-->
          <!--          :auto-upload="false">-->
          <!--          <el-button slot="trigger" size="small" type="primary">选取文件</el-button>-->
          <!--          <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>-->
          <!--          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
          <!--        </el-upload>-->
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
          <input type="radio" name="location" value="carousel">carousel
          <input type="radio" name="location" value="middle">middle
          <input type="radio" name="location" value="tail" >tail
<!--          <el-radio-group :value="contentObj.location" size="medium " name="location">-->
<!--            <el-radio-button label="carousel"></el-radio-button>-->
<!--            <el-radio-button label="middle"></el-radio-button>-->
<!--            <el-radio-button label="tail"></el-radio-button>-->
<!--          </el-radio-group>-->
        </el-col>
        <el-col :span="4">
          <p></p>
        </el-col>
      </el-row>

      <el-row class="row-marg-lf" style="margin-top: 20px">
        <el-col :span="24">
          <input type="submit" v-if="isCreate" value="提交"/>
          <input type="submit" v-if="isUpdate" value="更新"/>
<!--          <el-button type="success" plain v-if="isCreate" >提交</el-button>-->
<!--          <el-button type="success" plain v-if="isUpdate">更新</el-button>-->
        </el-col>
      </el-row>
    </form>
  </div>
</template>

<script>

  export default {
    name: "EditAnnoncementView",
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
        }
      }

    },
    methods: {
      // commit() {
      //   var url = "http://localhost:8080/onlineBookStore/announcement"
      //   this.$http.post(
      //     url,
      //     this.contentObj
      //   ).then((response) => {
      //     console.log(response.data);
      //     if (response.data == "success") {
      //       this.$message.success('添加成功');
      //
      //     }
      //   })
      // },
      initPage() {

        if (this.id > -1) {
          this.isUpdate = true;
          this.isCreate = false;
          this.$http.get("advertise/" + this.id).then((response) => {
            console.log(response.data)

            this.contentObj.advId = response.data.advId
            this.contentObj.url = response.data.url
            this.contentObj.picUrl = response.data.picUrl
            this.contentObj.lastMdfTime = response.data.lastMdfTime
            this.contentObj.location = response.data.location

          })
        }
      },
      // update() {
      //   console.log(this.contentObj.annoId)
      //   var url = "http://localhost:8080/onlineBookStore/announcement/" + this.contentObj.annoId
      //   this.$http.put(
      //     url,
      //     this.contentObj
      //     // [{title:"中俄我",content:"aaaaa"},{title:"中我",content:"bbbbbbb"}]
      //     // this.$qs.stringify(this.contentObj),
      //     // {param:"中文"}
      //   ).then((response) => {
      //     console.log(response.data);
      //     if (response.data == "success") {
      //       this.$message.success('修改成功');
      //     }
      //
      //   })
      //
      // },
      // fileChange(file){
      //   console.log(file)
      // }


    },
    components: {
    }
  }
</script>

<style scoped>

  .row-marg-lf {
    margin-left: 350px

  }
</style>
