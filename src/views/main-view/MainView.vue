<template>
  <div id="mainView">
    <el-row style="margin-top: 40px">
      <el-col :span="3">
        <p></p>
      </el-col>
      <el-col :span="8">
        <el-carousel indicator-position="outside" height="250px">
          <el-carousel-item v-for="item in carouselAdv" :key="item.advId">
            <a target="_blank" :href="item.url">

              <el-image :src="item.picUrl"></el-image>
            </a>
          </el-carousel-item>
        </el-carousel>
      </el-col>
      <el-col :span="10">
        <p></p>
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

      <el-col :span="18">
        <p>内容</p>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
      </el-col>
      <el-col :span="3">
        <p></p>
      </el-col>

    </el-row>
    <el-row>
      <el-col :span="3">
        <p></p>
      </el-col>
      <el-row>
        <el-col :span="18">
          <p>中间位置广告:</p>
        </el-col>
        <el-col :span="3">
          <p></p>
        </el-col>
      </el-row>

    </el-row>
<!--    中间广告-->
    <el-row >
      <el-col :span="3">
        <p></p>
      </el-col>

      <el-col :span="18">
        <img  :src="middleAdv.picUrl" ></img>
<!--        <img :src="middleAdv.picUrl"></img>-->
<!--        <el-image src="/assets/pic/advBaidu.jpg"></el-image>-->
      </el-col>
      <el-col :span="3">
        <p></p>
      </el-col>

    </el-row>
<!--    内容2-->
    <el-row>
      <el-col :span="3">
        <p></p>
      </el-col>

      <el-col :span="18" >
        <p>内容</p>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
      </el-col>
      <el-col :span="3">
        <p></p>
      </el-col>

    </el-row>
<!--页尾广告-->
    <el-row>
      <el-col :span="3">
        <p></p>
      </el-col>

      <el-col :span="18">
        <p>页尾广告:</p>
      </el-col>
      <el-col :span="3">
        <p></p>
      </el-col>

    </el-row>
    <el-row >
      <el-col :span="3">
        <p></p>
      </el-col>

      <el-col :span="18">
        <img  :src="tailAdv.picUrl" ></img>
      </el-col>
      <el-col :span="3">
        <p></p>
      </el-col>

    </el-row>
    <!--    <button @click="test()">test</button>-->
  </div>
</template>

<script>
  export default {
    name: "MainView",
    created() {
      var url = "http://localhost:8080/onlineBookStore/getAllAdvertise"
      this.$http.get(
        url
      ).then((response) => {
        console.log("axios返回值" + response.data)
        this.addAdv(response.data)
        console.log("初始化完后"+this.middleAdv.picUrl)
      })

    },
    data() {
      return {
        carouselAdv: [],
        middleAdv: {},
        tailAdv: {}

      }
    },
    methods: {
      // test() {
      //   this.carouselAdv.push({
      //     liveTime: 'wwwwwwwwwwwwwwwwwwwww',
      //     location: '',
      //     lastMdfTime: 'aaaa',
      //     advId: 3,
      //     picUrl: '',
      //     url: ''
      //   })
      //   console.log(this.carouselAdv)
      //
      // },
      addAdv(data) {
        data.forEach(value => {
          console.log("addAve()遍历值" + value.location)
          if (value.location == "carousel") {
            this.carouselAdv.push(value)

          } else if (value.location == "middle") {
            this.middleAdv=value
          } else (value.location == "tail")
          {
            this.tailAdv=value
          }
        })
      }
    }
  }
</script>

<style scoped>
  .el-carousel__item {
    text-align: center;
    /*padding-top: 30px;*/
    /*text-align-all: center;*/
    /*color: #69361d;*/
    /*font-size: 18px;*/
    /*opacity: 0.75;*/
    /*margin: 0;*/
    cursor: pointer;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: rgba(170, 255, 220, 0.27);
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #bccce6;
  }

  /*.el-dropdown-link {*/
  /*  cursor: pointer;*/
  /*  color: #409EFF;*/
  /*}*/
</style>
