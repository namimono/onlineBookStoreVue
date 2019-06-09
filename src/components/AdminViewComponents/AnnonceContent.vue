<template>
  <div id="content">


    <el-row class="row-marg-lf">
      <el-col :span="22">
        <p></p>
      </el-col>
      <el-col :span="2">
        <el-button type="primary" @click="newAnno()">新建公告</el-button>
      </el-col>
    </el-row>
    <el-row class="row-marg-lf">
      <el-col :span="15">
        <p/>
      </el-col>
      <el-col :span="2">
        <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          按类型排序<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-plus">通知</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus">推广</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus-outline">活动</el-dropdown-item>
            <el-dropdown-item icon="el-icon-check">其他</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

      </el-col>
      <el-col :span="2">
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
          <li v-for="item in annouces">
            <AnnonceContentEl :element="item"/>
          </li>
        </ul>
      </el-col>

    </el-row>


  </div>
</template>

<script>
  import AnnonceContentEl from './AnnonceContentEl.vue'

  export default {
    created() {
      this.getAnnounce();
    },
    data() {
      return {
        element: "a",
        annouces: ""
      }
    },
    methods: {
      getAnnounce() {
        this.$http.get('http://localhost:8080/onlineBookStore/getAllAnnoucenments', {
          firstName: 'Fred',
          lastName: 'Flintstone'
        }).then((response) => {
          this.annouces = response.data


        })
      },
      newAnno(){
        this.$router.push({
          path:'/'
        })
      }
    },
    components: {
      AnnonceContentEl
    }

  }
</script>
<style>
  .ann-ul {
    margin-left: 150px;
    list-style: none;
  }

  .row-marg-lf {
    margin-left: 200px

  }
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>
