<template>
	<footer>
		 <ul>
		 	<router-link to='/home' tag='li'>首页</router-link>
		 	<router-link to='/casts' tag='li'>演员</router-link>
		 	<router-link to='/directors' tag='li'>导演</router-link>
		 	<router-link to='/movie' tag='li'>电影</router-link>
		 	<router-link :to="{path:'/user'}" tag='li'>我的</router-link>
		 </ul>
	 </footer>
</template>

<script src='./script.js'></script>
<script lang="scss" scoped src='./style.scss'></script>

<style>
</style>