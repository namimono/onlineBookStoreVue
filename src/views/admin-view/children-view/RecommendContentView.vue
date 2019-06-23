<template>
    <div id="recommendContentView">
      <el-row class="row-marg-lf">

        <el-col :span="2" style="padding-top: 10px; padding-left: 10px;color: #7c838d;font-size: 15px">
          用户id：
        </el-col>
        <el-col :span="4" >
          <el-input style="margin-left: -25px " maxlength="8"  show-word-limit v-model="id" placeholder="请输入用户id" type="text"></el-input>
        </el-col>
        <el-col :span="18" >
          <el-button  style="margin-left: 10px" type="primary" @click="searchUser()">获取用户</el-button>

        </el-col>
      </el-row>
      <el-row class="row-marg-lf">
        <el-col :span="24" style="padding-top: 10px; padding-left: 10px;color: #7c838d;font-size: 15px">
          用户名称：{{userName}}
        </el-col>

      </el-row>

      <el-row class="row-form">
        <el-col :span="20">
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="用户兴趣">
              <el-checkbox-group v-model="form.type">
                <el-checkbox label="魔幻" name="type"></el-checkbox>
                <el-checkbox label="科幻" name="type"></el-checkbox>
                <el-checkbox label="都市" name="type"></el-checkbox>
                <el-checkbox label="军事" name="type"></el-checkbox>
                <el-checkbox label="游戏" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>

            <el-form-item label="推荐列表">
              <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                  prop="bookId"
                  label="图书id"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="title"
                  label="图书名称"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="author"
                  label="作者">
                </el-table-column>
              </el-table>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit()">生成推荐推荐列表</el-button>
              <el-button>取消</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>


    </div>
</template>

<script>
    export default {
        name: "RecommendContentView",
      data(){
          return{
            id: '',
            userName:'',
            form: {
              name: '',
              region: '',
              date1: '',
              date2: '',
              delivery: false,
              type: [],
              resource: '',
              desc: ''
            },

            tableData: []

          }
      },
      methods:{
        searchUser(){
          var url="http://localhost:8080/onlineBookStore/getUserRecommend/"+this.id
          this.$http.get(
              url
          ).then(response=>{
            console.log(response.data)
            if (response.data.userName==null){
              alert("用户不存在")

            }
            this.userName=response.data.userName;
            this.form.type=response.data.intrest;
            this.tableData=response.data.recList;
          })

        },

        onSubmit(){
          var url="http://localhost:8080/onlineBookStore/generateRecommend/"+this.id
          this.$http.get(
            url
          ).then(response=>{
            console.log(response.data)
              alert(response.data)
          })
        }

      }
    }
</script>

<style scoped>
  .row-marg-lf{
    margin-left: 200px

  }
  .row-form{
    margin-top: 20px;
    margin-left: 200px

  }
</style>
