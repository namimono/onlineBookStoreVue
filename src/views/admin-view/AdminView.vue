<template>
  <div id="admin">

<!--    <el-row>-->
<!--      <el-col :span="24">-->
<!--        <p class="cP" style="background-color:#F5F5F5; margin-top: -7px; ">-->

<!--          <el-link icon="el-icon-s-home" style="margin-left: 10px;">主页</el-link>-->


<!--        </p>-->
<!--      </el-col>-->
<!--    </el-row>-->
    <el-row>
      <el-col :span="24">

      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-container>

          <el-aside :width="asideWidth" style="position: fixed">
            <el-button style="margin-left: 5px;" icon="el-icon-s-operation"
                       @click="change()"></el-button>
            <el-menu default-active="1" class="el-menu-vertical-demo" :collapse="isCollapse" :collapse-transition=false>

              <el-menu-item index="1" @click="clickUserM()">
                <i class="el-icon-user-solid"></i>
                <span slot="title">用户管理</span>
              </el-menu-item>
              <el-menu-item index="2" @click="clickAdvM()">
                <i class="el-icon-view"></i>
                <span slot="title">广告管理</span>
              </el-menu-item>
              <el-menu-item index="3" @click="clickAnnM()">
                <i class="el-icon-document"></i>
                <span slot="title">公告管理</span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="el-icon-money"></i>
                <span slot="title">财务管理</span>
              </el-menu-item>
              <el-menu-item index="5" @click="clickRecM()">
                <i class="el-icon-notebook-1" ></i>
                <span slot="title">推荐作品管理</span>
              </el-menu-item>
            </el-menu>
          </el-aside>
          <el-main>
            <router-view></router-view>
          </el-main>

        </el-container>
      </el-col>
    </el-row>


  </div>
</template>

<script>

  export default {
    name: "Admin",
    data() {
      return {
        isCollapse: true,
        asideWidth: "200px",
      };
    },
    methods: {
      clickUserM() {
        this.$router.push({
          path:'/adminView/UserContentView'
        })

      },
      clickAdvM() {
        this.$router.push({
          path:'/adminView/AdvertiseContentView'
        })
      },
      clickAnnM() {
        // this.currentView = "AnnonceContent";
        this.$router.push({
          path:'/adminView/announceContentView'
        })
      },
      clickRecM() {
        this.$router.push({
          path:'/adminView/RecommendContentView'
        })
      },
      change() {
        this.isCollapse = !this.isCollapse;
      },
      changeAsideWidth() {
        if (!this.isCollapse) {
          this.asideWidth = "210px"

        } else {
          this.asideWidth = "100px"
        }
      }
    },
    components: {
    }
  }
</script>

<style scoped>
  /* .cP {
  line-height: 60px;

} */

  .el-aside {
    color: #333;
  }

</style>
