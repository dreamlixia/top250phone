<template>
	<div class="content">
		<mt-swipe :auto="4000">
		  <mt-swipe-item>1</mt-swipe-item>
		  <mt-swipe-item>2</mt-swipe-item>
		  <mt-swipe-item>3</mt-swipe-item>
		</mt-swipe>
		<router-link to='/directors'>去导演页面</router-link>
		<button @click='goDirectors()'>去导演页面</button>
		<button @click='goCastsDetail("1035641")'>去找巩俐</button>
	</div>
</template>

<script src='./script.js'></script>

<style lang='scss' src='./style.scss'></style>