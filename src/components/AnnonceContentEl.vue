<template>
	<div class="ann-el"id="contentel">
		<el-card class="box-card" style="width: 800px; height:150px;">
      <el-row>
        <el-col :span="1" >
          <h4 style="padding-top: 50%">{{element.annoId}}</h4>
        </el-col>
        <el-col :span="23">
          <el-row>

            <el-col :span="24" >
              <el-tag type="info" >{{element.type}}</el-tag>
              <el-link href="#" target="_blank" style="font-size: 20px">{{element.title}}</el-link>

            </el-col>
          </el-row>
          <el-row>


            <el-col :span="24">
              <h5 style="color: #959595;">{{element.uploadTime}}</h5>
            </el-col>

          </el-row>
          <el-row>
            <el-col :span="24">
              <el-button class="edit-btn" type="danger" icon="el-icon-delete" style="float: right;"  size="medium "round>删除</el-button>
              <el-button class="edit-btn" type="primary" icon="el-icon-edit" style="float: right;" size="medium "round>编辑</el-button>
            </el-col>

          </el-row>
        </el-col>
      </el-row>


    </el-card>


	</div>
</template>

<script>
	export default{
		data(){
			return{


			}
		},
		props:['element']

	}
</script>

<style>
	.ann-el{
		padding-top: 40px;
	}
</style>
