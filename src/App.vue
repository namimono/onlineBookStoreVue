<template>
  <div id="app">
        <el-card class="box-card" style	="height: 50px; margin-top: -10px">
          <div style="margin-top: -10px">
            <router-link tag="el-link" class="el-icon-s-home " to="/mainView" style="margin-top: 2px">主页</router-link>
            <router-link class="test" tag="el-link"  to="/adminView">管理</router-link>
            <router-link class="test" tag="el-link"   to="/rankView">排行榜</router-link>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>

          </div>
        </el-card>
<!--    <el-row>-->
<!--      <el-col :span="24">-->
<!--        <div style="background-color: #8c939d; height: 30px" >-->
<!--          <span>主页</span>-->
<!--          <router-link tag="el-button"  class="el-icon-delete"  to="/adminView" style="height: 10px; " >ad</router-link>-->
<!--          <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->

<!--        </div>-->
<!--      </el-col>-->
<!--    </el-row>-->

    <router-view></router-view>

  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        showrouters: true
      }
    },
    methods: {
      changeShow() {
        this.showrouters = false;
      }
    }


  }
</script>

<style scoped>
  .test{
    margin-left: 20px;

  }

</style>
