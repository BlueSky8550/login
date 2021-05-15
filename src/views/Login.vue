<!--  -->
<template>
  <div>
      
      <div class="login">
          <h1>普通登录组件</h1>
        <div class="accout">
          <accout-login :ruleForm="ruleForm" :rules="rules" 
          @submit="submit" @errHandle="errHadle"></accout-login>
        </div>
      </div>
       
      <div class="login">
          <h1>短信验证码登录组件</h1>
        <div class="phone">
          <phone-login :ruleForm="phoneForm"></phone-login>
        </div>
      </div>
      
  </div>
</template>
  
<script>
import AccoutLogin from '../components/accoutLogin/AccoutLogin.vue';
import PhoneLogin from '../components/phoneLogin/PhoneLogin.vue';
export default { 
  name: 'Login',
  components: {AccoutLogin, PhoneLogin},
  props: {},
  data () {
    return {
      ruleForm: {
        username: '',
        password:''
      },
      rules: {
        username: [
          {
            required: true,
            trigger: blur ,
            message: '用户名不能为空'
            
          },
          {
            min: 2,
            max: 6,
            message: '用户名在2-6字符之间',
            trigger: blur
          }
        ],
        password: [
          {
            required: true, 
            message: '密码不能为空',
            trigger: blur
          },
          {
            min: 6,
            max: 15,
            message: '用户名在6-15字符之间',
            trigger: blur
          }
        ]
      },
      phoneForm: {
        phone: '',
        code: '' 
      }
    }
  },

  methods: {
    submit(){
      this.$message.success(text,'提交成功')
    },
    errHandle(){
      this.$message.error('表单填写有误，请检查')
    }
  },

  mounted:{}

}
</script>
<style scoped lang='scss' >
.login {
    margin-top: 30px;
    margin-left: 30px;
}
.accout, .phone{
    width:500px;    
}
</style>