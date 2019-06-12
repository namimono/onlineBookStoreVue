<template>
  <div id="editannoncementview">
    <el-row class="row-marg-lf" style="margin-bottom: 10px">
      <el-col :span="20">
        <el-input v-model="contentObj.url" placeholder="请输入广告url" clearable maxlength="100" show-word-limit></el-input>
      </el-col>
      <el-col :span="4">
        <p></p>
      </el-col>
    </el-row>
    <el-row class="row-marg-lf">
      <el-col :span="20">

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
        <el-radio-group v-model="contentObj.location" size="medium ">
          <el-radio-button label="carousel"></el-radio-button>
          <el-radio-button label="middle"></el-radio-button>
          <el-radio-button label="tail"></el-radio-button>
        </el-radio-group>
      </el-col>
      <el-col :span="4">
        <p></p>
      </el-col>
    </el-row>

    <el-row class="row-marg-lf" style="margin-top: 20px">
      <el-col :span="24">
        <el-button type="success" plain v-if="isCreate" @click="commit()">提交</el-button>
        <el-button type="success" plain v-if="isUpdate" @click="update()">更新</el-button>
      </el-col>
    </el-row>

  </div>
</template>

<script>
  import {VueEditor, Quill} from 'vue2-editor'

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
          advId: '', url: '', picUrl: '', lastMdfTime:'',location:''
        }
      }

    },
    methods: {
      commit() {
        var url = "http://localhost:8080/onlineBookStore/announcement"
        this.$http.post(
          url,
          this.contentObj
        ).then((response) => {
          console.log(response.data);
          if (response.data == "success") {
            this.$message.success('添加成功');

          }
        })
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
            this.contentObj.location= response.data.location

          })
        }
      },
      update() {
        console.log(this.contentObj.annoId)
        var url = "http://localhost:8080/onlineBookStore/announcement/" + this.contentObj.annoId
        this.$http.put(
          url,
          this.contentObj
          // [{title:"中俄我",content:"aaaaa"},{title:"中我",content:"bbbbbbb"}]
          // this.$qs.stringify(this.contentObj),
          // {param:"中文"}
        ).then((response) => {
          console.log(response.data);
          if (response.data == "success") {
            this.$message.success('修改成功');
          }

        })

      },
      // fileChange(file){
      //   console.log(file)
      // }


    },
    components: {
      VueEditor, Quill
    }
  }
</script>

<style scoped>

  .row-marg-lf {
    margin-left: 350px

  }
</style>
