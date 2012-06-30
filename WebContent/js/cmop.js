
function displayParameter(){
	
	//标题
	$("#td_title").html($("#title").val());
	//起始日期
	$("#td_time").html( $("#serviceStart").val() + '&nbsp;至&nbsp;' + $("#serviceEnd").val());
	//申请用途
	$("#td_usage").html($("#usage").val());
	//资源类型
	var resourceType = $("input[name='resourceType'][checked]").val();
	if(resourceType === 1){
		$("#td_resourceType").html("生产资源");
	}else if(resourceType ===2){
		$("#td_resourceType").html("测试/演示资源 ");
	}else{
		$("#td_resourceType").html("公测资源 ");
	}
	
	//接入服务
	account = $("#account").val() ;
	user = $("#accountUser").val();
	visitHost = $("#visitHost").val();
	$("#td_inVpnItem").html("<code>账号:</code>"+account+"<code>使用人:</code>"+user+"<code>需要访问主机:</code>"+visitHost);
	
}