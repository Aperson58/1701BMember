
require.config({
	paths:{
		"mui":"libs/mui.min",
	}
})

require(['mui'],function(mui){
	mui.ajax('/api/getUser',{
		data:{
			
		},
		dataType:'json',//服务器返回json格式数据
		type:'post',//HTTP请求类型
		timeout:10000,//超时时间设置为10秒；
		success:function(res){
			console.log(res);
			var str=''
			res.data.forEach(function(item,index){
				str+=`<li class="mui-table-view-cell">
							<a class="mui-navigate-right">
								 ${item.name}
							</a>
					<button type="button" class="mui-btn mui-btn-blue look" data-id="${item._id}">修改</button>
					<button type="button" class="mui-btn mui-btn-red del" data-id="${item._id}">删除</button>
				</li>`
			})
			document.querySelector('.list').innerHTML=str;
			var look=[...document.querySelectorAll('.look')];
			// console.log(look);
			look.forEach(function(v,k){
				v.onclick=function(){
					var Id=v.getAttribute('data-id');
					// console.log(Id);
					localStorage.setItem('id',JSON.stringify(Id));
					location.href="./user.html";
				}
			})
			var del=[...document.querySelectorAll('.del')];
			del.forEach(function(item,i){
				item.onclick=function(){
					var id=item.getAttribute('data-id');
					console.log(id);
					mui.ajax('/api/delUser',{
						data:{
							id:id
						},
						dataType:'json',//服务器返回json格式数据
						type:'post',//HTTP请求类型
						timeout:10000,//超时时间设置为10秒；
						success:function(data){
							
						},
						error:function(xhr,type,errorThrown){
							
						}
					});
					location.reload();
				}
			})
		},
		error:function(xhr,type,errorThrown){
			
		}
	});
	var add=document.querySelector('.add');
	add.onclick=function(){
		location.href="./user.html"
	}
	
	
})