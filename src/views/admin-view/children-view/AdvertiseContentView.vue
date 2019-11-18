<template>
	<div id="advertisecontent">
    <el-row class="row-marg-lf">
      <el-col :span="22">
        <p></p>
      </el-col>
      <el-col :span="2">
        <el-button type="primary" @click="newAdv()">添加广告</el-button>
      </el-col>
    </el-row>
    <el-row class="row-marg-lf">
      <el-col :span="16">
        <p/>
      </el-col>
      <el-col :span="1">
        <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          类型<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-plus">通知</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus">推广</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus-outline">活动</el-dropdown-item>
            <el-dropdown-item icon="el-icon-check">其他</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

      </el-col>
      <el-col :span="1">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            排序<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>点击量</el-dropdown-item>
            <el-dropdown-item>评论数</el-dropdown-item>
            <el-dropdown-item>投稿时间</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>

    </el-row>
    <el-row class="row-marg-lf">
      <el-col :span="24">
        <ul class="ann-ul">
          <li v-for="item in advertises">
            <AdvertiseContentEl :element="item"/>
          </li>
        </ul>
      </el-col>

    </el-row>
	</div>
</template>

<script>
  import AdvertiseContentEl from '../../../components/AdminViewComponents/AdvertiseContentEl.vue'
  export default {
    created() {
      this.getAdvertises();
    },
    data(){
      return{
        advertises:''
      }
    },
    methods:{
      getAdvertises(){
        this.$http.get('http://localhost:8080/onlineBookStore/getAllAdvertise').then((response) => {
          console.log(response.data)
          response.data.forEach((item,index,array)=>{
            if (item.location === '1'){
              item.location = '首图'
            }
            if (item.location === '2'){
              item.location = '中间图'
            }

            if (item.location === '3'){
              item.location = '尾图'

            }
          })

          this.advertises = response.data


        })
      },
      newAdv(){
        this.$router.push({
          path:'/adminView/EditAdvertiseView/-1'

        })
      }
    },
    components:{
      AdvertiseContentEl
    }
  }
</script>

<style scoped>
  .ann-ul {
    /*margin-left: 150px;*/
    list-style: none;
  }

  .row-marg-lf {
    margin-left: 350px

  }
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>
