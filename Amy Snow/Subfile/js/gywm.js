let div=document.querySelector(".sjt");
let h3=div.querySelector("h3");
let a=div.querySelector("a");
let uls=div.querySelector("ul");
let lis=uls.querySelectorAll("li");
let ddiv=div.querySelector("div");
let ttp=document.querySelector(".ttp")
var head=document.querySelector(".header_h");
var ul=head.querySelector("ul")
var p=head.querySelector("p")
var aa=head.querySelectorAll("a")
uls.onclick=(e)=>{
	e=e||window.event;
	var target=e.target||e.srcElement;
	if(target.nodeName!="UL"){
		for(var i=0;i<lis.length;i++){
			lis[i].className="";
		}
		var m=target.getAttribute("y");
		a.innerHTML=target.innerHTML;
		if(m==0){
			ddiv.style.display="block"
			ttp.style.display="none"
		}else{
			ddiv.style.display="none"
			ttp.style.display="block"
		}
		target.className="sd";
	}
}
ul.onclick=function(e){
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