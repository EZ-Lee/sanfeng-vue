<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'app',
	components: {
	}
}
</script>
<style>
#id{
	width: 100%;
	height: 100px;
}
.top_left_page{
	width: 20%;
	height: 100px;
	float: left;
	text-align: right;
}
.top_left_page img {
	height: 100px;
}
.top_right_page{
	width: 80%;
	height: 100px;
	float: left;
	text-align: center;
	line-height: 100px;
	/* height: 50px; */
	font-size: 20px;
	font-weight: normal;
	/* color: rgb(196,0,0); */
	font-family: '微软雅黑';
}

</style>
