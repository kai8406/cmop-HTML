
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
	resourceType = $("input[name='resourceType']:checked").val();
	if(resourceType == 1){
		$("#td_resourceType").html("生产资源");
	}else if(resourceType ==2){
		$("#td_resourceType").html("测试/演示资源 ");
	}else{
		$("#td_resourceType").html("公测资源 ");
	}
	
	/*接入服务*/
	account = $("#account").val() ;
	user = $("#accountUser").val();
	visitHost = $("#visitHost").val();
	$("#td_inVpnItem").html("<code>账号:</code>"+account+"<code>使用人:</code>"+user+"<code>需要访问主机:</code>"+visitHost);
	
	
	/*存储资源*/
	//存储资源:数据存储
	if($('#dataStorageType').is(":checked")){
		
		$("#tr_dataStorage").show();
		
		//容量空间
		space = $("input[name='dataSorageSpace']:checked").val();
		
		//Throughput（吞吐量）
	 	if($("input[name='dataStorageThroughput']:checked").val() === 1){
	 		throughput = "50 Mbps以内"; 
	 	}else{
	 		throughput = "50 Mbps以上"; 
	 	}
		
		//IOPS（每秒进行读写（I/O）操作的次数）
		iops = $("#dataStorageIops").val();
		
	 	$("#td_dataStorage").html("<code>存储类型:</code>数据存储<code>容量空间:</code>"+space+"G<code>吞吐量:</code>"+throughput+"<code>IOPS:</code>"+iops);
	 	
	}else{
		$("#tr_dataStorage").hide();
	}
	
	//存储资源:业务存储
	if($('#businessStorageType').is(":checked")){
		
		$("#tr_businessStorage").show();
		
		//容量空间
		space = $("input[name='businessStorageSpace']:checked").val();
		
		//Throughput（吞吐量）
	 	if($("input[name='businessStorageThroughput']:checked").val() === 1){
	 		throughput = "50 Mbps以内"; 
	 	}else{
	 		throughput = "50 Mbps以上"; 
	 	}
		
		//IOPS（每秒进行读写（I/O）操作的次数）
		iops = $("#businessStorageIops").val();
		
	 	$("#td_businessStorage").html("<code>存储类型:</code>业务存储<code>容量空间:</code>"+space+"G<code>吞吐量:</code>"+throughput+"<code>IOPS:</code>"+iops);
	}else{
		$("#tr_businessStorage").hide();
	}
	
	
	/*计算资源*/
	//服务器类型
	serverType = $("input[name='serverType']:checked").val();
	if(serverType == 1){
		tserverTypeName = "Small &mdash; CPU[单核] Memory[1GB] Disk[20GB]";
	}else if(serverType ==2){
		tserverTypeName = "Middle &mdash; CPU[双核] Memory[2GB] Disk[20GB]";
	}else{
		tserverTypeName = "Large &mdash; CPU[四核] Memory[4GB] Disk[20GB]";
	}
	
	//实例数量
	instancesNum = $("#instancesNum").val();
	
	//操作系统
	if($("input[name='osBit']:checked")){
		
		//获得radio的父节点,用于取得最近的serverId
		osNode = $("input[name='osBit']:checked").parent().parent().parent();
		
		//给隐藏域osType赋上选中的操作类型ID用于提交到后台.
	 	$("#osType").val(osNode.find("#osId").val());
		
		osName = osNode.find("#osName").text();//操作系统名
	}
	
	//操作系统位数
 	if($("input[name='osBit']:checked").val() == 1){
 		osBit = "32 Bit"; 
 	}else{
 		osBit = "64 Bit"; 
 	}
	
	$("#td_osType").html(osName+" &mdash;"+osBit);
	
	$("#td_serverType").html("<code>服务器类型:</code>"+tserverTypeName+"<code>虚拟机数量:</code>"+instancesNum);
	
	/*网络资源*/
	
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
	
	var tabStep = $("#myTab li a");
	tabStep.click(function(){
		displayInputParameter();
	 });
	
}












