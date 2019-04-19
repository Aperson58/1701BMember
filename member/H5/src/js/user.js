
require.config({
	paths:{
		"mui":"libs/mui.min",
	}
})

require(['mui'],function(mui){
	var qr=document.querySelector('.qr');
	var qx=document.querySelector('.qx');
	var name=document.querySelector('.name');
	var age=document.querySelector('.age');
	var sex=document.querySelector('.sex');
	var adress=document.querySelector('.adress');
	var iphone=document.querySelector('.iphone');
	var box=document.querySelector('.box');
	var cart = JSON.parse(window.localStorage.getItem('id')) || [];
	
	//修改
	mui.ajax('/api/getUserOne',{
		data:{
			id:cart
		},
		dataType:'json',//服务器返回json格式数据
		type:'post',//HTTP请求类型
		timeout:10000,//超时时间设置为10秒；
		success:function(res){
			console.log(res);
			res.data.forEach(function(item,i){
				box.innerHTML=`
					<div class="mui-input-row">
						<label>用户名</label>
						<input type="text" class="mui-input-clear name" placeholder="${item.name}">
					</div>
					<div class="mui-input-row">
						<label>年龄</label>
						<input type="text" class="mui-input-clear age" placeholder="${item.age}">
					</div>
					<div class="mui-input-row">
						<label>性别</label>
						<input type="text" class="mui-input-clear sex" placeholder="${item.sex}">
					</div>
					<div class="mui-input-row">
						<label>地址</label>
						<input type="text" class="mui-input-clear adress" placeholder="${item.adress}">
					</div>
					<div class="mui-input-row">
						<label>电话</label>
						<input type="text" class="mui-input-clear iphone" placeholder="${item.iphone}">
					</div>
				`
				var name=document.querySelector('.name');
				var age=document.querySelector('.age');
				var sex=document.querySelector('.sex');
				var adress=document.querySelector('.adress');
				var iphone=document.querySelector('.iphone');
				
					
				qr.onclick=(function(){
					mui.ajax('/api/getUpdate',{
						data:{
							name:name.value || name.placeholder,
							age:age.value || age.placeholder,
							sex:sex.value || sex.placeholder,
							adress:adress.value || adress.placeholder,
							iphone:iphone.value || iphone.placeholder,
							id:cart
						},
						dataType:'json',//服务器返回json格式数据
						type:'post',//HTTP请求类型
						timeout:10000,//超时时间设置为10秒；
						success:function(data){
							
						},
						error:function(xhr,type,errorThrown){
							
						},
						
					});
					
					location.href="./index.html";
				})
				
			})
		},
		error:function(xhr,type,errorThrown){
			
		}
	});
	localStorage.removeItem('id');
	
	//添加
	qr.onclick=function(){
		mui.ajax('/api/addUser',{
			data:{
				name:name.value,
				age:age.value,
				sex:sex.value,
				adress:adress.value,
				iphone:iphone.value,
			},
			dataType:'json',//服务器返回json格式数据
			type:'post',//HTTP请求类型
			timeout:10000,//超时时间设置为10秒；
			success:function(data){
				
			},
			error:function(xhr,type,errorThrown){
				
			}
		});
		location.href="./index.html";
		
	}
	qx.onclick=function(){
		location.href="./index.html"
	}
})