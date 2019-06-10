<template>
  <div id="editannoncementview">
    <el-row class="row-marg-lf" style="margin-bottom: 10px">
      <el-col :span="20">
        <el-input v-model="contentObj.title" placeholder="请输入标题" clearable  maxlength="10" show-word-limit></el-input>
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

    <el-row class="row-marg-lf"style="margin-top: 20px">
      <el-col :span="24">
        <el-button type="success" plain @click="commit()">提交</el-button>
      </el-col>
    </el-row>

  </div>
</template>

<script>
  import {VueEditor, Quill} from 'vue2-editor'

  export default {
    name: "EditAnnoncementView",
    data() {
      return {
        // disabled:false,
        // radioType:'通知',
        contentObj: {
            content:'',title:'',type:'通知'
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
        var data=JSON.stringify(this.contentObj)
        // console.log(JSON.stringify([{id:1,name:1},{id:2,name:2}]))
        console.log(data)
        console.log(this.$qs.stringify(this.contentObj))
        console.log(JSON.stringify(this.contentObj))
        console.log(this.$qs.stringify({param:"aaaaaaaaaaa"}))

        var url = "http://localhost:8080/onlineBookStore/announcement"
        this.$http.post(
          url,
          this.contentObj
          // [{title:"中俄我",content:"aaaaa"},{title:"中我",content:"bbbbbbb"}]

          // this.$qs.stringify(this.contentObj),
          // {param:"中文"}


        ).then((response) => {
          console.log(response.data)
        })

      }
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
