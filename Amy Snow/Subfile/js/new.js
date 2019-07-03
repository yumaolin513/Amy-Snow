var head=document.querySelector(".header_h");
var ul=head.querySelector("ul");
var p=head.querySelector("p");
var aa=head.querySelectorAll("a");
ul.onclick=(e)=>{
		e=e||window.event;
		var target=e.target||e.srcElement;
		var m=target.getAttribute("y");
		if(target.nodeName!="UL"&&target.nodeName!="LI"){
			p.style.display="block"
			for(var i=0;i<aa.length;i++){
				aa[i].style.color="#333"
			}
			target.style.color="#fe7763"
			if(m==0){
		        p.style.width="36px"
				p.style.left=663+70*m+"px"
			}else if(m==1){
		        p.style.width="71px"
				p.style.left=663+127*m+"px"
			}else{
		        p.style.width="71px"
				p.style.left=790+120*(m-1)+"px"
			}
		}
     }