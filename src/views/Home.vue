<template>
  <div>
    <el-button type="primary" @click="goTo('/backTopOne')">页面1</el-button>
    <el-button type="primary" @click="goTo('/backTopTwo')">页面2 </el-button>
    <el-button type="primary" @click="goTo('/login ')">登录页 </el-button>
  </div>
</template>

<script>


export default {
  name: 'Home',
  components: {

  },
  methods: {
    goTo(path){
      this.$router.push(path)
    }
  }
}
</script>
