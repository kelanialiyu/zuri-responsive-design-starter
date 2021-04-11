navbar=document.getElementsByClassName("nav-links")[0];
menubtn=document.getElementsByClassName("menu-btn")[0];
menubtn.onclick= function(e){
	if(navbar.style.display=="none"){
		if(window.matchMedia("(max-width: 600px)").matches){
			navbar.style.display="table-caption";
		}
		else{
			navbar.style.display="flex";
		}
	}
	else{
		navbar.style.display="none";
	}
};
function screenQuery(){
	if(window.matchMedia("(max-width: 600px)").matches){
		navbar.style.display="none";
		menubtn.style.display="inline-flex";
	}
	else{
		navbar.style.display="flex";
		menubtn.style.display="none";
	}		
}
screenQuery();
document.onresize=screenQuery();
window.onresize=function(){
	screenQuery();
}
console.log(navbar);