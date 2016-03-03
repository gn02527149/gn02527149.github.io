window.onload=function(){
	
	document.getElementById("SS1").onclick=SHOWSHOW_1;
	document.getElementById("SS2").onclick=SHOWSHOW_2;
	document.getElementById("SS3").onclick=SHOWSHOW_3;
	document.getElementById("SS4").onclick=SHOWSHOW_4;
	document.getElementById("SS5").onclick=SHOWSHOW_5;
	document.getElementById("SS6").onclick=SHOWSHOW_6;

	function SHOWSHOW_1(){
		document.getElementById("BIG").src = "images/001.jpg";
	}
	function SHOWSHOW_2(){
		document.getElementById("BIG").src = "images/002.jpg";
	}
	function SHOWSHOW_3(){
		document.getElementById("BIG").src = "images/003.jpg";
	}
	function SHOWSHOW_4(){
		document.getElementById("BIG").src = "images/004.jpg";
	}
	function SHOWSHOW_5(){
		document.getElementById("BIG").src = "images/005.jpg";
	}
	function SHOWSHOW_6(){
		document.getElementById("BIG").src = "images/006.jpg";
	}
}