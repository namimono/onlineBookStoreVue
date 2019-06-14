<template>
  <div id="editannoncementview">
    <el-row class="row-marg-lf" style="margin-bottom: 10px">
      <el-col :span="20">
        <el-input v-model="contentObj.title" placeholder="请输入标题" clearable maxlength="10" show-word-limit></el-input>
      </el-col>
      <el-col :span="4">
        <p></p>
      </el-col>
    </el-row>
    <el-row class="row-marg-lf">
      <el-col :span="20">
        <vue-editor v-model="contentObj.content"></vue-editor>
      </el-col>
      <el-col :span="4">
        <p></p>
      </el-col>
    </el-row>

    <el-row class="row-marg-lf" style="margin-top: 20px; margin-bottom: -20px">
      <el-col :span="20">
        <h4 style="color: #8c939d"> 选择公告类型:</h4>
      </el-col>
      <el-col :span="4">
        <p></p>
      </el-col>
    </el-row>
    <el-row class="row-marg-lf" style="margin-top: 20px">
      <el-col :span="20">
        <el-radio-group v-model="contentObj.type" size="medium ">
          <el-radio-button label="通知"></el-radio-button>
          <el-radio-button label="活动"></el-radio-button>
          <el-radio-button label="推广"></el-radio-button>
          <el-radio-button label="其他"></el-radio-button>
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
        id: this.$route.params.id,
        isUpdate: false,
        isCreate: true,
        contentObj: {
          content: '', title: '', type: '通知', annoId: ''
        }
      }

    },
    // watch:{
    //   "contentObj.title":function (newVal,oldVal) {
    //     if (newVal.length>=10) {
    //
    //       this.disabled=true
    //     }
    //   }
    // },
    methods: {
      commit() {
        var url = "announcement"
        this.$http.post(
          url,
          this.contentObj
          // [{title:"中俄我",content:"aaaaa"},{title:"中我",content:"bbbbbbb"}]
          // this.$qs.stringify(this.contentObj),
          // {param:"中文"}
        ).then((response) => {
          console.log(response.data);
          if (response.data == "success") {
            this.$message.success('添加成功');

          }
        })
        // this.createNewAnnouncement()
        // if (this.id>-1){
        //   this.initUpdatePage();
        //   //
        //   //
        //   var data=JSON.stringify(this.contentObj)
        //   console.log(data)
        //   // this.updateAnnouncement();
        // }else{
        //   this.createNewAnnouncement();
        // }
        // var data=JSON.stringify(this.contentObj)
        // console.log(JSON.stringify([{id:1,name:1},{id:2,name:2}]))
        // console.log(data)
        // console.log(this.$qs.stringify(this.contentObj))
        // console.log(JSON.stringify(this.contentObj))
        // console.log(this.$qs.stringify({param:"aaaaaaaaaaa"}))
      },
      initPage() {

        if (this.id > -1) {
          this.isUpdate = true;
          this.isCreate = false;
          this.$http.get("announcement/" + this.id).then((response) => {
            console.log(response.data)

            this.contentObj.annoId = response.data.annoId
            this.contentObj.title = response.data.title
            this.contentObj.type = response.data.type
            this.contentObj.content = response.data.content
          })
        }
      },
      update() {
        console.log(this.contentObj.annoId)
        var url = "announcement/" + this.contentObj.annoId
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

      }

      // createNewAnnouncement(){
      //   var url = "http://localhost:8080/onlineBookStore/announcement"
      //   this.$http.post(
      //     url,
      //     this.contentObj
      //     // [{title:"中俄我",content:"aaaaa"},{title:"中我",content:"bbbbbbb"}]
      //
      //     // this.$qs.stringify(this.contentObj),
      //     // {param:"中文"}
      //
      //
      //   ).then((response) => {
      //     console.log(response.data)
      //   })
      // },
      // initPage(){
      //
      //
      //
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
