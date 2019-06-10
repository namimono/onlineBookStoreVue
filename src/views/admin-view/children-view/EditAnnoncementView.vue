<template>
  <div id="editannoncementview">
    <el-row class="row-marg-lf">
      <el-col :span="24">
        <vue-editor v-model="contentObj.content"></vue-editor>
      </el-col>
    </el-row>
    <el-row class="row-marg-lf">
      <el-col :span="24">
        <el-button type="primary" @click="commit()">提交</el-button>
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
        contentObj: {
            content:''
        }
      }

    },
    methods: {
      commit() {
        console.log(this.contentObj)
        console.log(JSON.stringify(this.contentObj))
        var url = "http://localhost:8080/onlineBookStore/announcement"
        this.$http.post(
          url,
          this.$qs.stringify({param:"aaaaaaaaaaa"}),
        ).then((response) => {
          console.log("发送成功")
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
    margin-left: 200px

  }
</style>
