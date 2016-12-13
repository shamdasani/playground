function compile() {

	var html = document.getElementById("html");
	var css = document.getElementById("css");
	var js = document.getElementById("js");
	var code = document.getElementById('code').contentWindow.document;
	
	 document.body.onkeyup = function(){
	    code.open();
		code.writeln(html.value+"<style>"+css.value+"</style>");
		code.close();
      }

     document.getElementById("run").onclick = function(){
	   	code.open();
		code.writeln("<script>" + js.value + "</script>");
		code.close();
      }
	

	
};

compile();
