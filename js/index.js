// 鼠标放到亿贝call上时，背景切换，模块切换
      function bd(){
            document.getElementById("CALL").style.background="linear-gradient(#ef9723, #ea8e14)";
            
            document.getElementById("contact").style.background="linear-gradient(#cb670d, #b85801)";
            document.getElementById("login1").style.display="block";
            document.getElementById("login2").style.display="none";
      }
	 // 鼠标放到亿贝通讯录上时，背景切换，模块切换
       function bd1(){
            document.getElementById("CALL").style.background="linear-gradient(#cb670d, #b85801)";
            document.getElementById("contact").style.background="linear-gradient(#ef9723, #ea8e14)";
      	document.getElementById("login1").style.display="none";
      	document.getElementById("login2").style.display="block";

      }