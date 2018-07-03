<template>
	<div class="content">
		<mt-loadmore bottomPullText="上拉加载" bottomDropText="释放加载" :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
		<ul class="castslist">
			<router-link :to='{name:"castsDetail", params: {name: "casts", id: item.id }}' tag='li' v-for = 'item of castslist' :key='item.id'>
				<img :src="item.avatars.small" :alt="item.alt" />
				{{ item.name }} ---- {{ item.id }}
			</router-link>
		</ul>
		<!--<mt-cell-swipe
		  v-for = 'item of castslist' :key='item.id'
		  :title="item.name"
		  :right="[
		    {
		      content: 'Delete',
		      style: { background: 'red', color: '#fff' },
		      handler: () => this.$messagebox('delete')
		    }
		  ]"></mt-cell-swipe>-->
		</mt-loadmore>
	</div>
</template>

<script src='./script.js'></script>

<style lang='scss' src='./style.scss'></style>