<template>
	<div class="content">
		<mt-header title="注册">
		  <router-link to="/user" slot="left">
		    <mt-button icon="back">返回</mt-button>
		  </router-link>
		</mt-header>
		<mt-field placeholder="请输入手机号" :state='telState' type="number" v-model="tel"></mt-field>
		<mt-field placeholder="验证码"  v-model="code" :state='codeState' type='number'>
			
		  <button v-if='flag' class='sendCodeBtn' @click='sendCode'>{{CodeStr}}1</button>
		  <span v-else>{{CodeStr}}2</span>
		  
		</mt-field>
		<mt-field placeholder="密码为6-21字母和数字" type="password" :state='passwordState' v-model="password"></mt-field>
		<!--<mt-button>
  <img src="../assets/100x100.png" height="20" width="20" slot="icon">
  带自定义图标
</mt-button>-->
		<div class='registerBtn' :class='{active:registerFlag}' @click='register'>注&nbsp;&nbsp;&nbsp;册</div>
	</div>
</template>

<script src='./script.js'></script>

<style lang='scss' src='./style.scss'></style>