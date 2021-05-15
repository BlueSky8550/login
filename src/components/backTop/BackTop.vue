
<!-- 回到顶部组件使用条件
  1.页面的内容必须超过屏幕的高度
  2.最外层必须要有一个容器，容器必须撑满整个屏幕
  3.使用slot插槽是全部页面都可实现
 -->
<template>
    <div class="pages-content-scroll">
         <el-backtop target=".pages-content-scroll"></el-backtop>
          <slot></slot>
    </div>
 
</template>

<script>
export default {
  name: 'BackTop',
  components: {},
  props: {},
  data () {
    return {
    };
  },

  methods: {},

  mounted:{}

}
</script>
<style lang='scss' scoped>
.pages-content-scroll{
    // 必须撑满真个屏幕
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow-x: hidden;
}
</style>


