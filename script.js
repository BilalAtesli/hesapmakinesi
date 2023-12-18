// İnputlar
const sayi1DOM=document.getElementById("sayi-1");

const sayi2DOM=document.getElementById("sayi-2");

const sonucDOM=document.getElementById("sonuc");
// İnputlar END

//Eventler
document.getElementById("topla").addEventListener("click",function()
{
	hesapla("topla");
})

document.getElementById("cikar").addEventListener("click",function()
{
	hesapla("cikar");
})
document.getElementById("bol").addEventListener("click",function()
{
	hesapla("bol");
})
document.getElementById("carp").addEventListener("click",function()
{
	hesapla("carp");
})
//Eventler END


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





