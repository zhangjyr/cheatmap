$.noConflict();
	jQuery(document).ready(function($) {
		function cheatKeyMap(str,context,cb){
 		var cheat_train = str.split("");
 		var match_offset;
		var keymap = {
 			38:"上",
 			40:"下",
 			37:"左",
 			39:"右"
 		};

 		for(var i = 65;i<91;i++){
 			keymap[i] = String.fromCharCode(i)
 		}

 		function init(){
	 		match_offset = 0;
 		}

 		function log(){
 			match_offset++;
 			console.log(match_offset);
 			if(match_offset == cheat_train.length){
 				cb();
 			}
 		}

 		init();
	 	$(context).on("keyup",function(e){
	 		if(keymap[e.keyCode]==cheat_train[match_offset]){
	 			log()
	 		}else{
	 			init();
	 			if(keymap[e.keyCode]==cheat_train[match_offset]){
	 				log();	
	 			}
	 		}
	 	});
	}

	cheatKeyMap("上上下下左左右右ABAB",document,function(){
		alert("!!!");
	});
});