<template>
  <div class="ann-el" id="contentel">
    <transition name="el-zoom-in-center">
      <div v-show="show2" >

        <el-card shadow="hover" class="box-card" style="width: 800px; height:160px;">


          <el-row>
            <el-col :span="1">
              <h4 style="padding-top: 50%">{{element.annoId}}</h4>
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
                  <el-button class="edit-btn" type="danger" icon="el-icon-delete" style="float: right;" size="medium "
                             round
                             plain>删除
                  </el-button>
                  <el-button class="edit-btn" type="primary" icon="el-icon-edit" style="float: right;" size="medium "
                             round
                             plain>编辑
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
    mounted(){
        this.show2=true;
    },
    data() {
      return {
        // toAnnouncementUrl:'toAnnouncement?id='+this.element.annoId
        toAnnouncementUrl: '/announcementView/' + this.element.annoId,
        show2: false
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
</style>
