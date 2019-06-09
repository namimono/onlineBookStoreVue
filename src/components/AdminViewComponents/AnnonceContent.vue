<template>
	<div id="content">

		<ul class="ann-ul">
			<li v-for="item in annouces">
				<AnnonceContentEl :element="item"/>
			</li>
		</ul>


	</div>
</template>

<script>
	import AnnonceContentEl from './AnnonceContentEl.vue'
	export default{
		created(){
           this.getAnnounce();
        },
		data(){
			return{
				element:"a",
				annouces:""
			}
		},
		methods:{
			getAnnounce(){
				this.$http.get('http://localhost:8080/onlineBookStore/getAllAnnoucenments',{firstName: 'Fred',
					lastName: 'Flintstone'}).then((response)=>{
						this.annouces=response.data


					})
			}
		},
		components:{
			AnnonceContentEl
		}

	}
</script>
<style>
	.ann-ul{
		margin-left: 150px;
		list-style: none;
	}
</style>
