// iframe full height
function autoResize(id){
    var newheight;
    var newwidth;
    if(document.getElementById){
        newheight=document.getElementById(id).contentWindow.document .body.scrollHeight;
        newwidth=document.getElementById(id).contentWindow.document .body.scrollWidth;
    }
    document.getElementById(id).height= (newheight) +50 + "px";
    document.getElementById(id).width= (newwidth) + "px";
    
    // Android glitch
	//if ((android) && (androidVersion > 3)) {
    //iFrameContentHeight = document.getElementById(id).contentDocument.body.offsetHeight;
    //document.getElementById(id).style.height = iFrameContentHeight + 'px';
    //}  
}
