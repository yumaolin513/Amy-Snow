let sjt=document.querySelector(".sjt");
let ab=sjt.querySelector("a")
let uls=sjt.querySelector("ul");
let lis=uls.querySelectorAll("li");
let h3=sjt.querySelector("h3");
let sp=h3.querySelector("span");
let fg=document.querySelector(".fg")
console.log(fg)
let h5=fg.querySelector("h5")
let h6=fg.querySelector("h6")
let imgs=fg.querySelectorAll(".fg>div>div>img")
let span=fg.querySelectorAll(".fg>div>div>span")
let h2=fg.querySelectorAll(".fg>div>div>h2")

let da=fg.querySelectorAll(".fg>div>div");
let tu=document.querySelector(".tu")
let timg=tu.querySelectorAll("img");
let th2=tu.querySelectorAll("h2");
let lbtn=tu.querySelector("button:nth-of-type(1)");
let rbtn=tu.querySelector("button:nth-of-type(2)");
let th3=tu.querySelectorAll("h3");
let arr=["百搭风格<span>STYLE</span>",
"韩版风格<span>KOREAN STVLE</span>",
"欧美风格<span>EUROPEAN AND AMERICAN STYLE</span>",
"简约风格<span>SIMPLE STVLE</span>"];
let str=["百搭，一般为单品，可以搭配各类衣服，很实用的单件服饰，与其他款式、颜色的服饰均能产生一定的效果一般都是比较基本的、经典的样式或颜色。如纯色系服装牛仔裤等。",
"韩装舍弃了简单的色调堆砌，而是通过特别的明暗对比来彰显品位。服装的设计者通过面料的质感与对比，加上款式的丰富变化来强调冲击力，那种浓艳的、繁复的表面的东西被精致的、甚至有点羞涩的展现取而代之，简洁得连口袋都省了的长裤、不规则的衣裙下摆、极具风情的褶褶花边都在表白它的美丽与流行。",
"主张大气、简洁，面料白然，比校随掌比较简的搭配感和设计感源。黑白色候、卡其色很为主的船伤，加以马甲、围巾、帽子、珠主等临就可以称头感美风格。",
"简约风格的服装几乎不要任何装饰，信奉简约主义的服装设计师擅长做减法。他们把一切多余的东西从服装上拿走。这种精心设计的廓形常常需要精致的材料来表现通过精确的结构（板型）和精到的工艺来完成。"]
let mg=[
["img/2.png","img/3.png","img/4.png","img/5.png"],
["img/7.png","img/8.png","img/9.png","img/10.png"],
["img/15.png","img/16.png","img/17.png","img/18.png"],
["img/12.png","img/13.png","img/14.png","img/11.png"]
];
let hh=[
["舒适百搭印花","浩瀚如海","光年里骑行","花样年华"],
["橘色季风","橙色季风","粉色妖姬","白色玫瑰"],
["森林变奏曲","沉醉飞鱼池","幻陷翡翠鸟","高级系列"],
["暮色森林","黑色经典","棕色毛衣","黑色毛衣"]
];
let spp=["产品介绍>百搭风格>",
"产品介绍>韩版风格>",
"产品介绍>欧美风格>",
"产品介绍>简约风格>"
];
let tim=[[
   ["img/z5.jpg","img/z2.jpg","img/z3.jpg","img/z4.jpg","img/7.png","img/8.png","img/9.png","img/10.png"],
   ["img/z5.jpg","img/z2.jpg","img/z3.jpg","img/z5.jpg","img/z2.jpg","img/z3.jpg","img/z4.jpg","img/s3.jpg"],
   ["img/n.jpg","img/n2.jpg","img/n3.jpg","img/n1.jpg","img/s1.jpg","img/s5.jpg","img/s3.jpg","img/s4.jpg"],
   ["img/m5.jpg","img/m2.jpg","img/m3.jpg","img/m1.jpg","img/z5.jpg","img/z2.jpg","img/z3.jpg","img/z4.jpg"]
],[
   ["img/s1.jpg","img/s5.jpg","img/s3.jpg","img/s4.jpg","img/m5.jpg","img/m2.jpg","img/m3.jpg","img/m1.jpg"],
   ["img/z5.jpg","img/z2.jpg","img/z3.jpg","img/z4.jpg","img/7.png","img/8.png","img/9.png","img/10.png"],
   ["img/n.jpg","img/n2.jpg","img/n3.jpg","img/n1.jpg","img/11.png","img/12.png","img/13.png","img/14.png"],
   ["img/m5.jpg","img/m2.jpg","img/m3.jpg","img/m1.jpg","img/2.png","img/13.png","img/4.png","img/11.png"]
],[
   ["img/s1.jpg","img/s5.jpg","img/s3.jpg","img/s4.jpg","img/s1.jpg","img/s5.jpg","img/s3.jpg","img/s4.jpg"],
   ["img/z5.jpg","img/z2.jpg","img/z3.jpg","img/z4.jpg","img/7.png","img/8.png","img/9.png","img/10.png"],
   ["img/n.jpg","img/n2.jpg","img/n3.jpg","img/n1.jpg","img/z5.jpg","img/z2.jpg","img/z3.jpg","img/z4.jpg"],
   ["img/m5.jpg","img/m2.jpg","img/m3.jpg","img/m1.jpg","img/s1.jpg","img/s5.jpg","img/s3.jpg","img/s4.jpg"]
],[
   ["img/s1.jpg","img/s5.jpg","img/s3.jpg","img/s4.jpg","img/11.png","img/12.png","img/17.png","img/18.png"],
   ["img/z5.jpg","img/z2.jpg","img/z3.jpg","img/z4.jpg","img/m5.jpg","img/m2.jpg","img/m3.jpg","img/m1.jpg"],
   ["img/n.jpg","img/n2.jpg","img/n3.jpg","img/n1.jpg","img/m5.jpg","img/m2.jpg","img/m3.jpg","img/m1.jpg"],
   ["img/m5.jpg","img/m2.jpg","img/m3.jpg","img/m1.jpg","img/m5.jpg","img/m2.jpg","img/m3.jpg","img/m1.jpg"]
]];

let ttm=[
    [["img/s1.jpg","img/s5.jpg","img/s3.jpg","img/s4.jpg","img/m5.jpg","img/m2.jpg","img/m3.jpg","img/m1.jpg"],
       ["img/z5.jpg","img/z2.jpg","img/z3.jpg","img/z4.jpg","img/7.png","img/8.png","img/9.png","img/10.png"],
       ["img/n.jpg","img/n2.jpg","img/n3.jpg","img/n1.jpg","img/z5.jpg","img/z3.jpg","img/z3.jpg","img/z4.jpg"],
       ["img/m5.jpg","img/m2.jpg","img/m3.jpg","img/m1.jpg","img/s1.jpg","img/s5.jpg","img/s3.jpg","img/s4.jpg"]
   ],
[
   ["img/s1.jpg","img/s5.jpg","img/s3.jpg","img/s4.jpg","img/15.png","img/16.png","img/14.png","img/18.png"],
   ["img/z5.jpg","img/z2.jpg","img/z3.jpg","img/z4.jpg","img/m5.jpg","img/m2.jpg","img/m3.jpg","img/m1.jpg"],
   ["img/n.jpg","img/n2.jpg","img/n3.jpg","img/n1.jpg","img/m5.jpg","img/m2.jpg","img/m3.jpg","img/m1.jpg"],
   ["img/m5.jpg","img/m2.jpg","img/m3.jpg","img/m1.jpg","img/m5.jpg","img/m2.jpg","img/m3.jpg","img/m1.jpg"]
],
[
   ["img/s1.jpg","img/s5.jpg","img/s3.jpg","img/s4.jpg","img/m5.jpg","img/m2.jpg","img/m3.jpg","img/m1.jpg"],
   ["img/z5.jpg","img/z2.jpg","img/z3.jpg","img/z4.jpg","img/11.png","img/14.png","img/17.png","img/18.png"],
   ["img/n.jpg","img/n2.jpg","img/n3.jpg","img/n1.jpg","img/11.png","img/12.png","img/11.png","img/14.png"],
   ["img/m5.jpg","img/m2.jpg","img/m3.jpg","img/m1.jpg","img/12.png","img/13.png","img/14.png","img/11.png"]
],
  [
   ["img/z5.jpg","img/z2.jpg","img/z3.jpg","img/z4.jpg","img/7.png","img/8.png","img/9.png","img/10.png"],
   ["img/z5.jpg","img/z2.jpg","img/z3.jpg","img/z5.jpg","img/z2.jpg","img/z3.jpg","img/z4.jpg","img/s3.jpg"],
   ["img/n.jpg","img/n2.jpg","img/n3.jpg","img/n1.jpg","img/s1.jpg","img/s5.jpg","img/s3.jpg","img/s4.jpg"],
   ["img/m5.jpg","img/m2.jpg","img/m3.jpg","img/m1.jpg","img/z5.jpg","img/z2.jpg","img/z3.jpg","img/z4.jpg"]
],
]





let thh2=[
      
]
var head=document.querySelector(".header_h");
var ul=head.querySelector("ul");
var p=head.querySelector("p");
var aa=head.querySelectorAll("a");
var m=0
  uls.onclick=(e)=>{
  	e=e||window.event;
  	var target=e.target||e.srcElement;
  	if(target.nodeName!="UL"){
  		m=target.getAttribute("y");
  		k=target.getAttribute("k");
  		ab.innerHTML=target.innerHTML;
  		h5.innerHTML=arr[m];
  		h6.innerHTML=str[m];
  		fg.style.display="block";
   	  tu.style.display="none";
   	  sp.innerHTML="产品介绍";
  		for(var i=0;i<imgs.length;i++){
  			lis[i].className=""
  			imgs[i].src=mg[m][i];
  			h2[i].innerHTML=hh[m][i];
  		}
  		target.className="sd";
  	}
  };
  var k=0;
  for(var i=0;i<da.length;i++){
  	da[i].onclick=function(){
  	    k=this.getAttribute("m");
  	    ab.innerHTML=hh[m][k];
  	    sp.innerHTML=spp[m];
  	    fg.style.display="none";
   	  tu.style.display="block";
  	    for(var n=0;n<timg.length;n++){
  	    	timg[n].src=tim[m][k][n];
  	    }
  	}
  };
    var x=0;
   rbtn.onclick=()=>{
   	x++
   	if(x==2){
   		x=0;
   	}
   	for(var i=0;i<2;i++){
		th3[i].style.color="#333";
	}
	th3[x].style.color="#ff7864";
  	for(var n=0;n<timg.length;n++){
  		if(x==0){
  			timg[n].src=tim[m][k][n];
  		}else{
  			timg[n].src=ttm[m][k][n];
  		}
  	    }
   }
   
   lbtn.onclick=()=>{
   	x--
   	if(x==-1){
   		x=1;
   	}
   		for(var i=0;i<2;i++){
		th3[i].style.color="#333";
	}
	th3[x].style.color="#ff7864";
  	for(var n=0;n<timg.length;n++){
  		if(x==0){
  			timg[n].src=tim[m][k][n];
  		}else{
  			timg[n].src=ttm[m][k][n];
  		}
  	    }
   }


























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