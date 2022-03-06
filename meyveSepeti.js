function meyveElementiYarat(meyveIsmi) {
  var meyveElementi = document.createElement("p");

  meyveElementi.innerHTML = meyveIsmi;
  meyveSepetiElementi.appendChild(meyveElementi);
}

var meyveEkleFonksiyonu = () => {
  var kullaniciMeyvesi = prompt("Eklemek istediğiniz meyvenin ismini yaziniz");

  if (kullaniciMeyvesi.length > 0) {
    meyveElementiYarat(kullaniciMeyvesi);
  } else {
    alert("Bir meyve ismi girmediniz");
  }
};

var meyveSepetiElementi = document.getElementById("meyveSepeti");
var meyveEkleElementi = document.createElement("button");
var meyvelerDizisi = ["Cilek", "Portakal", "Kivi"];

meyveEkleElementi.innerHTML = "Meyve Ekle";
meyveEkleElementi.onclick = meyveEkleFonksiyonu;
meyveSepetiElementi.after(meyveEkleElementi);

for (i in meyvelerDizisi) {
  meyveElementiYarat(meyvelerDizisi[i]);
}
