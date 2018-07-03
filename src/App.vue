<template>
  <div class='container'>
  	<!--<header>首页头部</header>-->
  	<router-view name='header'></router-view><!--精简代码-->
		<!--此处删除了<div class='content'>-->  
		<router-view name='content'></router-view>
 		<!--</div>-->
  	<router-view name='footer'></router-view>
  	
  </div>
</template>

<script>

export default {
  data () {
  	return {
  		msg: 'hello vue'
  	}
  },
  methods: {},
  components: {
  	
  }
}
</script>

<style>

</style>
