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

//Gelen İsleme Göre Hesaplama
function hesapla(islem)
{
	const sayi1Value=parseInt(sayi1DOM.value);
	const sayi2Value=parseInt(sayi2DOM.value);
	let sonuc=0;

	//İnput Alanlarını Kontrol Blokları
	if(isNaN(sayi1Value) || isNaN(sayi2Value))
	{
		alert("Boş alan Bırakmayınız.")
	}
	
	else
	{
	switch (islem) {
		case "topla":
			sonuc=sayi1Value+sayi2Value;
			
			break;
			
		case "cikar":
			sonuc=sayi1Value-sayi2Value;
				
			break;
				
		case "bol":
			sonuc=sayi1Value/sayi2Value;
					
			break;
					
		case "carp":
			sonuc=sayi1Value*sayi2Value;
			
			break;
			
			default:
				break;
			}
		}
		sonucDOM.value=sonuc;
	    sifirla();
	}
	//Gelen İsleme Göre Hesaplama END






