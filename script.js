let sayi1Value;
let sayi2Value;
let sonuc;

const sayi1DOM=document.getElementById("sayi-1");

const sayi2DOM=document.getElementById("sayi-2");

const sonucDOM=document.getElementById("sonuc");

const btnToplaDOM=document.getElementById("topla");

const btnCikarDOM=document.getElementById("cikar");

const btnBolDOM=document.getElementById("bol");

const btnCarpDOM=document.getElementById("carp");

btnToplaDOM.addEventListener("click",topla);
btnCikarDOM.addEventListener("click",cikar);
btnBolDOM.addEventListener("click",bol);
btnCarpDOM.addEventListener("click",carp);


// Toplama
function topla()
{
	if(sayi1DOM.value=="" || sayi2DOM.value=="")
	{
		alert("Bos alan bırakmayınız")
	}
	else
	{
		sayi1Value=parseInt(sayi1DOM.value);
		sayi2Value=parseInt(sayi2DOM.value);
		sonuc=sayi1Value+sayi2Value;
		sonucDOM.value=sonuc;
	}	
	sifirla();
}
// Çıkarma
function cikar()
{
	if(sayi1DOM.value=="" || sayi2DOM.value=="")
	{
		alert("Bos alan bırakmayınız")
	}
	else
	{
		sayi1Value=parseInt(sayi1DOM.value);
		sayi2Value=parseInt(sayi2DOM.value);
		sonuc=sayi1Value-sayi2Value;
		sonucDOM.value=sonuc;
	}	
	sifirla();
}

//Bolme
function bol()
{
	if(sayi1DOM.value=="" || sayi2DOM.value=="")
	{
		alert("Bos alan bırakmayınız")
	}
	else
	{
		sayi1Value=parseInt(sayi1DOM.value);
		sayi2Value=parseInt(sayi2DOM.value);
		sonuc=sayi1Value/sayi2Value;
		sonucDOM.value=sonuc;
	}	
	sifirla();
}

//Carpma
function carp()
{
	if(sayi1DOM.value=="" || sayi2DOM.value=="")
	{
		alert("Bos alan bırakmayınız")
	}
	else
	{
		sayi1Value=parseInt(sayi1DOM.value);
		sayi2Value=parseInt(sayi2DOM.value);
		sonuc=sayi1Value*sayi2Value;
		sonucDOM.value=sonuc;
	}	
	sifirla();
}

function sifirla()
{
	sayi1Value="";
	sayi2Value="";
	sayi1DOM.value="";
	sayi2DOM.value="";
}





