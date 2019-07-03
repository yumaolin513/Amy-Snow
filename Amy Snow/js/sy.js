var head=document.querySelector(".header_h");
var ul=head.querySelector("ul")
var p=head.querySelector("p")
var aa=head.querySelectorAll("a")
			 var df=document.getElementsByTagName("div")[2];
	    	 var lbtn=document.getElementsByTagName("button")[1];
	    	 var rbtn=document.getElementsByTagName("button")[0];
	    	 var imgs=df.getElementsByTagName("img");
	    	 var lis=df.getElementsByTagName("li");
	    	 var h=0;
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
	    	rbtn.onclick=function(){
	    		  h++
	    	if(h==3){
	    			h=0
	    	}
	    	for(var i=0;i<imgs.length;i++){
	    			 imgs[i].className="";
	    	}
	    	for(var i=0;i<lis.length;i++){
	    	  
	    			 lis[i].className=""
	        }
	    			 lis[h].className="qw";
	    		     imgs[h].className="flist_jpg";
	    	}
	    	
	    	lbtn.onclick=function(){
	    		h--
	    	if(h==-1){
	    			  h=2
	    		}
	    	for(var i=0;i<imgs.length;i++){
	    			  imgs[i].className="";
	    		}
	    	for(var i=0;i<lis.length;i++){
	    			  lis[i].className=""
	    	}
	    			  lis[h].className="qw";
	    		      imgs[h].className="flist_jpg";
	    	}
	    	for(var i=0;i<lis.length;i++){
	    	  		  lis[i].onclick=function(){
	    	for(var i=0;i<lis.length;i++){
	    	  
	    			   lis[i].className=""
	    	}
	    	  		   this.className="qw";
	    	  		   h=this.getAttribute("y");
	    	for(var i=0;i<imgs.length;i++){
	    	  		   imgs[i].className="";
	    	 }
	    	  		   imgs[h].className="flist_jpg";
	    	 }
	    	 }
	    	var tm=setInterval(function(){
	    	      	rbtn.onclick();
	    	 },2000)
	        df.onmouseover=function(){
				    clearInterval(tm);
			}
			        df.onmouseout=function(){
				
				    tm=setInterval(function(){
				
				    rbtn.onclick();
					
				},2000)
			}
   