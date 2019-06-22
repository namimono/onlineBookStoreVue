<template>
  <div  id="contentel">

        <el-card shadow="hover" class="box-card" style="width: 800px; height:150px; margin-left: 100px ;background-color: rgba(64,158,255,0.04);margin-top: 10px">


          <el-row>

            <el-col :span="4">
              <el-image
                style="width: 100px; height: 100px"
                :src="element.imageUrl"
                >

              </el-image>
            </el-col>
            <el-col :span="20">
              <el-row>

                <el-col :span="24">
                  <el-tag type="info">{{element.author}}</el-tag>
                  <!--              <el-link :href="toAnnouncementUrl" target="_blank" style="font-size: 20px">{{element.title}}</el-link>-->
                  <router-link tag="el-link" :to="toBook" style="font-size: 20px"> {{element.title}}
                  </router-link>

                </el-col>
              </el-row>
              <el-row>


                <el-col :span="24">
                  <h5 style="color: #959595;">发布时间:{{element.year}}</h5>
                </el-col>

              </el-row>
              <el-row>
                <el-col :span="24">
                  点击量：{{element.click}}
                  收藏量：{{element.collection}}
                  评分：{{element.averageRating}}
                </el-col>

              </el-row>
            </el-col>
          </el-row>


        </el-card>
      </div>


</template>

<script>
  export default {
    created() {
      console.log(this.element)
    },
    data() {
      return {
        toBook: '/book/' + this.element.bookId,
      }
    },
    methods: {


    },

    props: ['element']

  }
</script>

<style>
  .ann-el {
    margin-bottom: 40px;
  }

  /*.edit-btn{*/
  /*  margin-bottom: 2px;*/
  /*}*/
</style>
