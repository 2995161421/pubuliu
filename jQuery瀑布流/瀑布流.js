//当页面加载完成时  调用imgLocation()函数方法
$(document).ready(function(){
		imgLocation();
})


//排瀑布流单独写一个函数
function imgLocation(){
	// 获取装照片大盒子的宽度    获取的是类数组对象
	var box=$(".box");
	// 获取装照片小盒子的宽度  box.eq(是获取第一个盒子的宽度) eq()是索引
	var boxWidth=box.eq(0).width();
	//获取窗口宽         窗口的宽 ÷ 当前装照片容器的宽度 = 每行所放照片的数量
	/* var num = $(window).width()/boxWidth */
	var num=Math.floor($(window).width()/boxWidth)
	
	
	//首先创建一个空数组  放这一行中的所有照片的高度  去比较那个是最小的
	var boxArr=[];
	// 遍历box类数组对象取每个照片的高度   box是类数组对象 box.each去遍历当前元素的下标索引
	box.each(function(index,value){  //value 是拿到的十个元素  index是拿到的十个下标索引
		console.log(index+"————————"+value)
		 // 拿每个照片的高度
		 var boxHeight=box.eq(index).height();
		 console.log(boxHeight);
		 
		 // 拿到的盒子高度然后放进空数组中    比较第一行照片最小的高度
		 if(index<num){
			 boxArr[index]=boxHeight;
		 }else{
			 // 从boxArr[index]数组中判断最小高度   拿最小的高度
			 var minboxHeight=Math.min.apply(null,boxArr);
			 //找最小高度的照片  获取最小的高度照片
			 var minboxIndex=$.inArray(minboxHeight,boxArr);
			 console.log(minboxHeight);
			 console.log(value);
			 // 
			 $(value).css({
				 "position":"absolute",
				 "top":minboxHeight,
				 "left":box.eq(minboxIndex).position().left
			 });
			 boxArr[minboxIndex]+=box.eq(index).height();
		 }
	})
}