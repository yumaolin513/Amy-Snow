let div=document.querySelector(".sjt");
let h3=div.querySelector("h3");
let a=div.querySelector("a");
let uls=div.querySelector("ul");
let lis=uls.querySelectorAll("li");
let h6s=div.querySelectorAll("h6");
let sjs=div.querySelector(".sjr");
let imgs=div.querySelectorAll(".sjt>div>img");
let lbtn=div.querySelector("button:nth-of-type(1)");
let rbtn=div.querySelector("button:nth-of-type(2)");
let h2=div.querySelectorAll("h2");
var head=document.querySelector(".header_h");
var ul=head.querySelector("ul")
var p=head.querySelector("p")
var aa=head.querySelectorAll("a")
let str=["设计师刘清扬（CHRISTINELAU），生在北京，长在香港，18岁留学英国，就读于CENTRAL SAINT MARTINS COLLAGE英国圣马丁艺术设计学院）TEXTILEDESIGN（面料设计）专业。出于对服装设计的热爱，毕业后，在做面料设计师的同时开始自学服装设计，在中西文化结合的生长环境影响下，形成了对设计的独特见解，面料设计的基础更令其在服装设计上有着得天独原的优势。",
"韩路璐普游学于加拿大及意大利，在意大利米兰顶袋设计学烷ISTITUTO MARANGOI获得硒士学位。她曾参与多家高端品牌的设计项目，其中更以自由设计师身份加入世界顶级礼服巨掌桂由美YUMI KATSURA的设计工作，成为其合作的首位华人设计师。同时，以时尚博主冠军身份受遵ELLE巴黎秀场头排客，并担任悦己专栏探腐人及多家电视媒体造型师。作为“新式轻礼服”创导者，从2008年HLL设计工作室成立之初，便受到部会精英女性的热捧和时尚媒体的广泛关注。",
"周翔宇出生于1982年，毕业于DEN HAAG服装学院，曾经攻读工业造型设计并在AMSTERDAM自由大学修读荷兰语。周翔宇曾经为夏纳国际电影节、威尼斯国际电影节、东京国际电影节、香港国际电影节、釜山国际电影节、印度国际电影节等艺人、导演定制红毯礼服。",
"罗峥淡然处事，笑谈风云，在成功经营自己的时装品牌的同时又成为国际投资商的座上宾，用她设计师敏锐的感悟与与他们讨论着天下时尚大势。但她毕竟只是一个女孩子，而且还是一个很年轻的女孩子。所以知性加感性的她有着无限美好的发展前景。看罗睁设计的时装，就会发现许多艺术元素，比如，用扇子、中国花鸟、旧上海洋烟图等意象组合而成的中西合璧旗袍；"
];
let strr=["设计风格优推而前卫，注重服装设计的原创精神。设计师将复古元素和现代简约设计巧妙的结合在一起，创造出一种精致并且经典的设计风格.设计师认为面料是影响服装设计的关键所在，因此对面料的运用有着独特的见解而每一季由设计师亲自操刀设计的另类印花面料",
"作为“新式轻礼服”创导者，韩烯烯不拘泥于轻礼服既为酒会小礼胀的固有形式，推出了“新式轻礼服”的概念将礼服的精致与成衣的实穿完美结合。在材料及工艺的选择处理上，细致考究、自然妥贴。她擅长将典雅的东方气质与利落的西式剪裁相融和，强调女性精致、优雅的特质；提倡一衣多变及无季节性的穿搭理念，力求在设计感与实穿性上找到最佳契合点。",
"XANDER ZHOU以独特的视觉艺术角度、出众的设计剪裁进行一种新的诠释，他的多元化的市场理念在中国服装界构筑出一个全新的商业模式。周祥宇喜欢MIUCCIA PRADA以及NICOLAS GHESQUIERE的设计。多年的专业经历让他对设计以及经营都有着很清晰的思路。他的作品非常注重服装穿着时的整体搭配性，强调模糊性别的着装概念，而不是刻意的中性感，一切以完美的视觉效果出发。",
"风之冀系列源自新古典浪漫主义，秉承经典时尚的风格，极富唯美，浪漫的韵味。把传统的思维用现代的理念表达出来，寻求一种自然而现代的平衡。用纯艺术的，戏剧性的手法来突出一种典雅的气质。运用各种富有机理质感的面料和现代的结构技巧来实现时尚与古典优雅的统一，创造一种不同凡想的视觉效果。从而营造出高贵中带有不羁的女性，她就象灵动而富有激情的天使，于典雅中流露着忧郁，诠释着无法抵挡的女性魅力。"
];
let mg=[
["img/2.png","img/3.png","img/4.png","img/5.png"],
["img/7.png","img/8.png","img/9.png","img/10.png"],
["img/15.png","img/16.png","img/17.png","img/18.png"],
["img/12.png","img/13.png","img/14.png","img/11.png"]
];
let tg=[
["img/s1.jpg","img/s5.jpg","img/s3.jpg","img/s4.jpg"],
["img/z5.jpg","img/z2.jpg","img/z3.jpg","img/z4.jpg"],
["img/n.jpg","img/n2.jpg","img/n3.jpg","img/n1.jpg"],
["img/m5.jpg","img/m2.jpg","img/m3.jpg","img/m1.jpg"]
]
let sg=["img/s1.png","img/s2.png","img/s3.png","img/s4.png"];
let m=0;
uls.onclick=function(e){
	e=e||window.event;
	let target=e.target||e.srcElement;
	  m=parseInt(target.getAttribute("y"));
	if(target.nodeName!="UL"){
		sjs.src=sg[m];
		a.innerHTML=target.innerHTML;
		for(var i=0;i<imgs.length;i++){
			imgs[i].src=mg[m][i];
			lis[i].className="";
		};
		h6s[0].innerHTML=str[m];
		h6s[1].innerHTML=strr[m];
		target.className="sd";
	}
	
}  
		let h=0;
lbtn.onclick=function(){
	let n=
	h++;
	if(h==2){
		h=0
	}
	for(var i=0;i<2;i++){
		h2[i].style.color="#666";
	}
	h2[h].style.color="#fc7a60";
	for(var i=0;i<imgs.length;i++){
		if(h==0){
			imgs[i].src=mg[m][i];
		}else{
			imgs[i].src=tg[m][i];
		}
			
		}
       }

rbtn.onclick=function(){
	
	h--;
	if(h==-1){
		h=1
	}
	for(var i=0;i<2;i++){
		h2[i].style.color="#666";
	}
	h2[h].style.color="#fc7a60";
	for(var i=0;i<imgs.length;i++){
		if(h==0){
			imgs[i].src=mg[m][i];
		}else{
			imgs[i].src=tg[m][i];
		}
		};
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
