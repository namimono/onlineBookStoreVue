<template>
  <div class="ann-el" id="contentel">
    <transition name="el-zoom-in-center">
      <div v-show="show2">

        <el-card shadow="hover" class="box-card" style="width: 800px; height:160px;">


          <el-row>

            <el-col :span="1">
              <i class="el-icon-d-caret" style="padding-top: 50px"></i>
              <!--              <h4 style="padding-top: 50%">{{element.annoId}}</h4>-->
            </el-col>
            <el-col :span="23">
              <el-row>

                <el-col :span="24">
                  <el-tag type="info">{{element.type}}</el-tag>
                  <!--              <el-link :href="toAnnouncementUrl" target="_blank" style="font-size: 20px">{{element.title}}</el-link>-->
                  <router-link tag="el-link" :to="toAnnouncementUrl" style="font-size: 20px"> {{element.title}}
                  </router-link>

                </el-col>
              </el-row>
              <el-row>


                <el-col :span="24">
                  <h5 style="color: #959595;">{{element.uploadTime}}</h5>
                </el-col>

              </el-row>
              <el-row>
                <el-col :span="24">
                  <el-button @click="delAn()" class="edit-btn" type="danger" icon="el-icon-delete" style="float: right;" size="medium "
                             round
                             plain >删除
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
        // toAnnouncementUrl:'toAnnouncement?id='+this.element.annoId
        toAnnouncementUrl: '/announcementView/' + this.element.annoId,
        // toAnnouncementEditView: '/adminView/editAnnouncementView/' + this.element.annoId,
        show2: false
      }
    },
    methods: {
      edit() {
        this.$router.push({
          path: '/adminView/EditAnnoncementView/' + this.element.annoId
        });


      },
      //http://localhost:8080/onlineBookStore/announcement
      delAn(){
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          var url='http://localhost:8080/onlineBookStore/announcement/'+this.element.annoId;
          this.$http.delete(
            url,
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

        // var url='http://localhost:8080/onlineBookStore/announcement/'+this.element.annoId;
        // this.$http.delete(
        //   url,
        // ).then(response=>{
        //
        //   console.log(response.data)
        //   this.$router.go(0)
        //
        // })

      },
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
