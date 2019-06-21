<template>
  <div id="rankview">
<!--    标题-->
    <el-row style="margin-top: 40px">
      <el-col :span="3">
        <p></p>
      </el-col>
      <el-col :span="18" style="text-align: center">
        <h1 style="color: #8c939d;">排行榜</h1>
      </el-col>
      <el-col :span="3">
        <p></p>
      </el-col>
    </el-row>
<!--    选择栏-->
    <el-row style="margin-top: 40px">
      <el-col :span="3">
        <p></p>
      </el-col>
      <el-col :span="16">
        <el-checkbox-group v-model="srcData.types">
          <el-checkbox label="魔幻"></el-checkbox>
          <el-checkbox label="科幻"></el-checkbox>
          <el-checkbox label="都市"></el-checkbox>
          <el-checkbox label="军事"></el-checkbox>
          <el-checkbox label="游戏"></el-checkbox>
        </el-checkbox-group>
      </el-col>
      <el-col :span="2" >
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="click">点击量</el-dropdown-item>
            <el-dropdown-item command="average_rating">评分</el-dropdown-item>
            <el-dropdown-item command="collection">收藏</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
      <el-col :span="3">
        <p></p>
      </el-col>
    </el-row>

<!--    标签-->
    <el-row>
      <el-col :span="3">
        <p></p>
      </el-col>
      <el-col :span="18" style="margin-top: 10px">
        <el-tag
          :key="tag"
          v-for="tag in srcData.types"
          closable
          :disable-transitions="false"
          @close="CloseTag(tag)">
          {{tag}}
        </el-tag>
      </el-col>

      <el-col :span="3">
        <p></p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "RankView",
    created() {
      this.getRank();
    },
    data() {
      return {
        srcData: {types: [], conditon: "click"},
        // types:['标签一', '标签二', '标签三'],

        condition: ""

      }
    },
    methods: {
      getRank() {
        console.log(this.srcData)

        var url = "http://localhost:8080/onlineBookStore/getRank/"
        this.$http.post(
          url,
          this.srcData
        ).then(response => {
          console.log(response.data)
        })

      },

      CloseTag(tag) {
        var types = this.srcData.types
        console.log(types.indexOf(tag))
        types.splice(types.indexOf(tag), 1);
      },

      handleCommand(command) {
        // this.$message('click on item ' + command);
      }


    }

  }
</script>

<style scoped>
  /*.tagType{*/
  /*  padding-left: 40px;*/
  /*}*/
</style>
