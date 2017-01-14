window.onload = function(){
	var p = document.createElement('p');
	p.innerHTML = "这是动态添加的";
	document.body.appendChild(p);
}

function addContent(state){
	document.getElementById('content').innerHTML = state;
}