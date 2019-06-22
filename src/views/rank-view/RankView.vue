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
      <el-col :span="14">
        <el-checkbox-group v-model="srcData.types">
          <el-checkbox label="魔幻"></el-checkbox>
          <el-checkbox label="科幻"></el-checkbox>
          <el-checkbox label="都市"></el-checkbox>
          <el-checkbox label="军事"></el-checkbox>
          <el-checkbox label="游戏"></el-checkbox>
        </el-checkbox-group>
      </el-col>
      <el-col :span="4" >

        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            排序方式<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="click">点击量</el-dropdown-item>
            <el-dropdown-item command="average_rating">评分</el-dropdown-item>
            <el-dropdown-item command="collection">收藏</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        {{srcData.condition}}
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
<!--内容-->
    <el-row>
      <el-col :span="3">
        <p></p>
      </el-col>
      <el-col :span="18" style="margin-top: 10px">
          <ul class="ann-ul">
            <li v-for="(book,index) in books">
                <RankContentEl :element="book"></RankContentEl>
            </li>

          </ul>

      </el-col>

      <el-col :span="3">
        <p></p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import RankContentEl from "../../components/RankViewComponents/RankContentEl.vue"
  export default {
    name: "RankView",
    created() {
      this.getRank();
    },
    data() {
      return {
        srcData: {types: [], condition: "click"},
        // types:['标签一', '标签二', '标签三'],

        condition: "",

        books:""

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
          console.log('返回结果为:'+response.data)
          this.books=response.data;
        })

      },

      CloseTag(tag) {
        var types = this.srcData.types
        console.log(types.indexOf(tag))
        types.splice(types.indexOf(tag), 1);
        this.getRank()
      },

      handleCommand(command) {
        this.srcData.condition=command;
        this.getRank()
        // this.$message('click on item ' + command);
      }


    },

    watch:{
      'srcData.types':function (newVal) {
        this.getRank()
      }

    },
    components:{

      RankContentEl
    }

  }
</script>

<style scoped>
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }

  .ann-ul {
    /*margin-left: 150px;*/
    list-style: none;
  }
</style>
