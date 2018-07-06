<template>
	<div class="content">
		<mt-header title="登录">
		  <router-link to="/user" slot="left">
		    <mt-button icon="back">返回</mt-button>
		  </router-link>
		</mt-header>
		<mt-field placeholder="请输入手机号" :state='telState' type="number" v-model="tel"></mt-field>
		  
		</mt-field>
		<mt-field placeholder="密码为6-21字母和数字" type="password" :state='passwordState' v-model="password"></mt-field>
		<!--<mt-button>
		  <img src="../assets/100x100.png" height="20" width="20" slot="icon">
		  带自定义图标
		</mt-button>-->
		<div class='registerBtn' :class='{active:loginFlag}' @click='logining'>登&nbsp;&nbsp;&nbsp;录</div>
	</div>
</template>

<script src='./script.js'></script>

<style lang='scss' src='./style.scss'></style>