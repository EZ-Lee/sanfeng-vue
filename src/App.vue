<template>
  <div id="top_page">
	 <router-view></router-view>
		<div class="top_left_page">
			<img src="./assets/logo.png" />
		</div>
		
		<div class="top_right_page">
			<b-nav fill> 
				<b-nav-item  active>关于三丰</b-nav-item> 
				<b-nav-item>形象宣传</b-nav-item> 
				<b-nav-item>产品广告</b-nav-item> 
				<b-nav-item>展厅活动</b-nav-item> 
				<b-nav-item>地产影片</b-nav-item>
				<b-nav-item>联系我们</b-nav-item>
			</b-nav> 
		</div>
		<div>
			<b-carousel id="carousel-fade" style="text-shadow: 0px 0px 2px #000" fade indicators interval='2000' img-width="1024" img-height="480">
				<b-carousel-slide caption="First slide" img-src="https://picsum.photos/1024/480/?image=10" />
				<b-carousel-slide caption="Second Slide" img-src="https://picsum.photos/1024/480/?image=12" />
				<b-carousel-slide caption="Third Slide" img-src="https://picsum.photos/1024/480/?image=22" />
			</b-carousel>
		</div>
  </div>
	
</template>

<script>
export default {
  name: 'top_page'
}
// new Vue({
// 	el:'#lunbo',
// 	data:{
// 		ites:{
// 			[index:0,src:'https://picsum.photos/300/150/?image=41'],
// 			[index:1,src:'https://picsum.photos/300/150/?image=41'],
// 			[index:2,src:'https://picsum.photos/300/150/?image=41']
// 			}
// 			
// 	}
// })

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
