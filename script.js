let sayi1Value;
let sayi2Value;
let sonuc;

const sayi1DOM=document.getElementById("sayi-1");

const sayi2DOM=document.getElementById("sayi-2");

const sonucDOM=document.getElementById("sonuc");

const btnToplaDOM=document.getElementById("topla");

btnToplaDOM.addEventListener("click",topla);

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
function sifirla()
{
	sayi1Value="";
	sayi2Value="";
	sayi1DOM.value="";
	sayi2DOM.value="";
}





