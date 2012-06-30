
/**
 * 将输入的各种参数插入到最后的详情table中
 * 注意对比table中td 的ID
 */
function displayInputParameter(){
	
	//标题
	$("#td_title").html($("#title").val());
	
	//起始日期
	$("#td_time").html( $("#serviceStart").val() + '&nbsp;至&nbsp;' + $("#serviceEnd").val());
	
	//申请用途
	$("#td_usage").html($("#usage").val());
	
	//资源类型
	resourceType = $("input[name='resourceType'][checked]").val();
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

/**
 * 申请页面中,点击"下一步"和"后退"时切换Tab
 * ul的ID	:		myTab
 * 下一步按钮ID:	nextStep
 * 返回按钮ID:		backStep
 */
function switchTab(){
	
	var nextSteps = $("a[id^='nextStep']");
	nextSteps.click(function(){
		$('#myTab li:eq('+ (nextSteps.index(this) + 1) +') a').tab('show'); 
		displayInputParameter();
	 });
	
	var backSteps = $("a[id^='backStep']");
	backSteps.click(function(){
		
		$('#myTab li:eq('+backSteps.index(this)+') a').tab('show'); // Select 1 tab (0-indexed)
		
		displayInputParameter();
	 });
	
	
	
}