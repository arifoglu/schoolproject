/**
 * Ödev:  Not Görüntüleme Sistemi

Bir okul icin not görüntüleme sistemi olusturunuz. 

-- Min. 3 sinif mevcut olmalidir.
-- Her sinifta ögrenciler listelenmelidir.
-- Her bir ögrencinin adi soyadi, aldigi dersleri ve puanlari gösterilmelidir.
-- Istenilen program okulun ve siniflarin not ortalamalarini ekranda gösterecektir.
-- Anasayfa da ise bu veriler grafiksel olarak gösterilecektir. 
-- Proje ekte verilen Mockuplar esas alinarak yapilacaktir.
-- UI Design icin Bootstrap kullanabilirsiniz.
-- Gruplar ekte verilmistir.

Kriterler:

• Ödevi teslim tarihinden sonra göndermek(-20)
• Ödevi teslim tarihini takip eden cumartesi gününden sonra göndermek(-50)

1. Program akis adimlarinin, programin baslagicinda maddeler halinde yazilmasi (analiz) [-20].
2. Programin duzgun calisiyor olmasi [-20]
3. Algoritmanin dogru kurilmasi [-10]
4. Programin verilen Mockup'a uygun olarak olusturulmasi [-40]
5. Programinin hizalamalarinin duzgun olmasi [-10]

 */



let okulOrtalamalri = findGeneralAvarage(sinifListesi);
let aOrtalamalari = sinifOrtalamalari(sinifListesi, 'A');
let bOrtalamalari = sinifOrtalamalari(sinifListesi, 'B');
let cOrtalamalari = sinifOrtalamalari(sinifListesi, 'C');

const aSinifi = document.querySelector('#a-sinifi');
const bSinifi = document.querySelector('#b-sinifi');
const cSinifi = document.querySelector('#c-sinifi');
const home = document.querySelector('#home');


// ogrenci sazisi// mat ort // fizik ort// kimzaOrt // geoOrt
let arraySchool = ['Okul Geneli', 21, 83, 85, 83, 88];
let arrayA = ['A sinifi', 6, 61, 65, 62, 69];
let arrayB = ['B Sinifi', 7, 86, 95, 88, 98];
let arrayC = ['C Sinifi', 8, 96, 92, 92, 94];

aSinifi.addEventListener('click',()=>{
    studentsListAndGrades(sinifListesi, 'A');
    document.querySelector('.school-chart').style.display = 'none';
} );

bSinifi.addEventListener('click',()=>{
    studentsListAndGrades(sinifListesi, 'B');
    document.querySelector('.school-chart').style.display = 'none';
} );

cSinifi.addEventListener('click',()=>{
    studentsListAndGrades(sinifListesi, 'C');
    document.querySelector('.school-chart').style.display = 'none';
} );

home.addEventListener('click',()=>{

  renderChart('okul', okulOrtalamalri);
  renderChart('a', aOrtalamalari);
  renderChart('b', bOrtalamalari);
  renderChart('c', cOrtalamalari);
  chartHeader(arraySchool, '1');
  chartHeader(arrayA, '2');
  chartHeader(arrayB, '3');
  chartHeader(arrayC, '4');
  
} );



