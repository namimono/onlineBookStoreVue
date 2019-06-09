<template>
  <div id="announcement">
    {{announcement.content}}
  </div>
</template>

<script>
  export default {
    name: "Announcement",
    created() {
      this.getAnnounceContent();
    },
    data() {
      return {
        id: this.$route.params.id,
        announcement:""
      }
    },
    methods: {
      getAnnounceContent(){

        this.$http.get("http://localhost:8080/onlineBookStore/announcement/"+this.id).then((response)=>{
          console.log(response.data)
          this.announcement=response.data

        })
      }
    }
  }
</script>

<style scoped>

</style>
