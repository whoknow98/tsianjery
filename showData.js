var membertaona=document.getElementById("taona");
var membertelov=document.getElementById("telovolana");
var memberles=document.getElementById("lohateny");
var memberlest=document.getElementById("texte");
var memberlesa=document.getElementById("andininy");
var membertelh=document.getElementById("lesona");
var ret=0;//telovolana faha-
var lth=0;//length telovolana
var tn=2000;//taona
var tlh="";//lohateny telovolana
var url="tsianjery.json";
var dat=[];//array containing telovolana
var llth=0;//length tsianjery (lesona)
var les=0;//current lesona to display
var ll=1;
var btnStat=true;
var numles=0;
function getData(){	
	//if (bv>=0 && bv<data.length){
	membertaona.innerHTML="";
	membertelov.innerHTML="";
	memberles.innerHTML="";
	memberlest.innerHTML="";
	memberlesa.innerHTML="";
	membertelh.innerHTML="";
	var ourData;
	ourRequest=new XMLHttpRequest();
ourRequest.open('GET', url,false);
ourRequest.onload=function(){
		ourData=JSON.parse(ourRequest.responseText);
		(window.lth)=ourData.telovolana.length;
		if (ret<lth){
		(window.tlh)=ourData.telovolana[ret].lohateny;		
		} else {
			(window.tlh)="tsisy";
		}
		(window.tn)=ourData.taona;
	//renderHTML(ourData.telovolana,les);	
	(window.dat)=ourData.telovolana;	
};
ourRequest.overrideMimeType("text/plain");
ourRequest.send();
};
function showData(les){
	(window.les)=les;
	getData();
	renderHTML(dat,les);
}
function renderHTML(data,les){
	membertaona.insertAdjacentHTML('beforeend',tn);
	
	if (ret<lth){
		(window.llth)=data[ret].tsianjery.length;
		membertelov.insertAdjacentHTML('beforeend',tlh);
		membertelh.insertAdjacentHTML('beforeend',"Telovolana "+ll);
		//console.log(data[ret]);
		if (les<llth){
			(window.numles)=les+1;
		//le=les+1
	loh="<span style='color:red'> Lesona "+numles+'</span> '+data[ret].tsianjery[les].lohateny;
	memberles.insertAdjacentHTML('beforeend',loh);
	tex=data[ret].tsianjery[les].vakiteny;
	memberlest.insertAdjacentHTML('beforeend',tex);
	and=data[ret].tsianjery[les].andrininy;
	memberlesa.insertAdjacentHTML('beforeend',and);
	} else {	
		tsisy();		
	}
	}
	else {		
		tsisy();
	}
}

function showtel(xxx){
	(window.ret)=xxx;
	ll=xxx+1;
	membertelh.insertAdjacentHTML('beforeend',"Telovolana "+ll);
	getData();
	renderHTML(dat,les);
	disab();
	enab();
}
function disab(){
for (i=1;i<=14;i++){
		str="btn"+i;
		document.getElementById(str).disabled=true;
	}
}
function enab(){
for (i=1;i<=llth;i++){
		str="btn"+i;
		document.getElementById(str).disabled=false;
	}
}
function tsisy(){
	stringtoput="tsisy";
	straff="<span style='color:red'> Lesona "+numles+" </span> "+stringtoput;
		//membertelov.insertAdjacentHTML('beforeend',stringtoput);
		memberles.insertAdjacentHTML('beforeend',straff);
		memberlest.insertAdjacentHTML('beforeend',stringtoput);
		memberlesa.insertAdjacentHTML('beforeend',stringtoput);
}
