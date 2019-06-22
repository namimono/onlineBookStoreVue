<template>
  <div class="ann-el" id="contentel">
    <transition name="el-zoom-in-center">
      <div v-show="show2">

        <el-card shadow="hover" class="box-card" style="width: 800px; height:200px;">


          <el-row>
            <el-col :span="1">
              <i class="el-icon-d-caret" style="padding-top: 50px"></i>
              <!--              <h4 style="padding-top: 50%">{{element.annoId}}</h4>-->
            </el-col>
            <el-col :span="23">
              <el-row>
                <el-col :span="6">

                  <el-tag type="info">广告位置:{{element.location}}</el-tag>
                </el-col>
                <el-col :span="18">
                  <p style="margin: 0px;padding-top: 3px"> 图片路径：{{element.picUrl}}</p>

                </el-col>
              </el-row>
              <el-row>


                <el-col :span="6">
                  <h5 style="color: #959595;">{{element.lastMdfTime}}</h5>
                </el-col>
                <el-col :span="18">
                  <!-- /static/advMysql.jpg-->
<!--                  <div style="position:relative;width:100px;height:100px;">-->
                    <el-image v-bind:class="{ real: isReal,fade:isfade}" @mouseover="toFade()" @mouseout="toReal()"
                              style="width: 500px; height: 70px" :src="element.picUrl" fit="cover"></el-image>
<!--                    <div v-if="textShow" style="position:absolute;width:100px;height:100px;z-indent:2;left:230px;top:25px;">-->
<!--                      文字-->
<!--                    </div>-->
<!--                  </div>-->
                </el-col>

              </el-row>
              <el-row>
                <el-col :span="12">
                  <p/>
                </el-col>
                <el-col :span="12">
                  <el-link :href="element.url">广告链接:{{element.url}}</el-link>
                </el-col>

              </el-row>
              <el-row>
                <el-col :span="24">
                  <el-button class="edit-btn" type="danger" icon="el-icon-delete" style="float: right;" size="medium "
                             round
                             plain @click="del()">删除
                  </el-button>
                  <el-button class="edit-btn" type="primary" icon="el-icon-edit" style="float: right;" size="medium "
                             round
                             plain @click="edit()">编辑
                  </el-button>
                </el-col>

              </el-row>
            </el-col>
          </el-row>


        </el-card>
      </div>
    </transition>


  </div>
</template>

<script>
  export default {
    mounted() {
      this.show2 = true;

    },
    data() {
      return {
        show2: false,
        isReal: true,
        isfade: false,
        textShow:false
      }
    },
    methods: {
      edit() {
        this.$router.push({
          path: '/adminView/EditAdvertiseView/' + this.element.advId
        });


      },
      del(){
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          var url="http://localhost:8080/onlineBookStore/advertise/"+this.element.advId
          this.$http.delete(
            url
          ).then(response=>{
            console.log(response.data)

            this.$router.go(0)

          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });

        // console.log("删除")
        // var url="http://localhost:8080/onlineBookStore/advertise/"+this.element.advId
        // this.$http.delete(
        //   url
        // ).then(response=>{
        //   console.log(response.data)
        //
        //   this.$router.go(0)
        //
        // })
      },
      toFade() {
        this.isReal = false
        this.isfade = true
        this.textShow=true
      },
      toReal() {
        this.isfade = false
        this.isReal = true
        this.textShow=false
      }
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
  .real {

  }

  .fade {
    opacity: 0.4;
  }
</style>
