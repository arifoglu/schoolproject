// her sinifin not ortalamasini bulan fonksiyon
const findAvarage = (pArray, pClassName) => {

    pArray.forEach(sinif => {

        if(pClassName ==sinif.sinifAdi ){

            let length = sinif.ogrenciler.length;

            let matTotal = sinif.ogrenciler.reduce((total, ogrenci) => total += ogrenci.matematikNotu , 0 )
            let fizikTotal = sinif.ogrenciler.reduce((total, ogrenci) => total += ogrenci.fizikNotu , 0 )
            let geoTotal = sinif.ogrenciler.reduce((total, ogrenci) => total += ogrenci.geometriNotu , 0 )
            let kimyaTotal = sinif.ogrenciler.reduce((total, ogrenci) => total += ogrenci.kimyaNotu , 0 )

            let avarageMath =  Math.floor(matTotal/length);
            let avarageFizik = Math.floor(fizikTotal/length);
            let avarageGoe = Math.floor(geoTotal/length);
            let avarageKimya = Math.floor(kimyaTotal/length);

            const avarageBar = document.querySelector("#avarage-bar");
            avarageBar.innerHTML = ` 

            <li class="nav-item d-flex flex-row bd-highlight mb-3">
                <div class="p-2 bd-highlight">Matematik</div>
                <div class="p-2 bd-highlight">${avarageMath}</div>
            </li>

            <li class="nav-item d-flex flex-row bd-highlight mb-3">
                 <div class="p-2 bd-highlight">Fizik</div>
                <div class="p-2 bd-highlight">${avarageFizik}</div>
             </li>

            <li class="nav-item d-flex flex-row bd-highlight mb-3">
                <div class="p-2 bd-highlight">Kimya</div>
                <div class="p-2 bd-highlight">${avarageKimya}</div>
             </li>

            <li class="nav-item d-flex flex-row bd-highlight mb-3">
                <div class="p-2 bd-highlight">Geometri</div>
                <div class="p-2 bd-highlight">${avarageGoe}</div>
            </li>
        `
        } 
    })
}

// ogrencileri ve notlarini tablo olarak gosteren fonskiyon
const studentsListAndGrades = (pArray, pClassName) => {

    pArray.forEach(sinif => {

        if(sinif.sinifAdi == pClassName){

                const ogrenciSayisi = sinif.ogrenciler.length
                const container = document.querySelector('#mainboardOne');
                const className = document.querySelector("#class-name");

                container.innerHTML =''
                
                sinif.ogrenciler.map(ogrenci => {

                className.innerHTML = `${pClassName} (${ogrenciSayisi} Students)`;
                container.innerHTML  += `
                <div class="card" style="width: 18rem;">

                <div class="card-header ; bg-info">
                ${ogrenci.ogrenciAdi} ${ogrenci.ogrenciSoyadi} 
                </div>
      
                <ul class="list-group list-group-flush">
                  <li class="list-group-item d-flex bd-highlight">
                      <div class="p-2 w-100 bd-highlight">Matematik</div>
                      <div class="p-2 flex-shrink-1 bd-highlight">${ogrenci.matematikNotu}</div>
                  </li>
                  <li class="list-group-item d-flex bd-highlight">
                      <div class="p-2 w-100 bd-highlight">Fizik</div>
                      <div class="p-2 flex-shrink-1 bd-highlight">${ogrenci.fizikNotu}</div>
                  </li>
                  <li class="list-group-item d-flex bd-highlight">
                      <div class="p-2 w-100 bd-highlight">Kimya</div>
                      <div class="p-2 flex-shrink-1 bd-highlight">${ogrenci.kimyaNotu}</div>
                  </li>
                  <li class="list-group-item d-flex bd-highlight">
                      <div class="p-2 w-100 bd-highlight">Geometri</div>
                      <div class="p-2 flex-shrink-1 bd-highlight">${ogrenci.geometriNotu}</div>
                  </li>
                </ul>       
                `
            })
        }
    })
    findAvarage(pArray, pClassName);
}

// okul genel ortalamalarini bulan fonksiyon
const findGeneralAvarage = (pArray) => {

    let matToplam = pArray.reduce((total, siniflar) => total += siniflar.ogrenciler.reduce((total, ogrenci) => total += ogrenci.matematikNotu, 0), 0 );
    let fizikToplam = pArray.reduce((total, siniflar) => total += siniflar.ogrenciler.reduce((total, ogrenci) => total += ogrenci.fizikNotu, 0), 0 );
    let kimyaToplam = pArray.reduce((total, siniflar) => total += siniflar.ogrenciler.reduce((total, ogrenci) => total += ogrenci.kimyaNotu, 0), 0 );
    let geoToplam = pArray.reduce((total, siniflar) => total += siniflar.ogrenciler.reduce((total, ogrenci) => total += ogrenci.geometriNotu, 0), 0 );

    //okul geneli bilgiler
    let ogrenciSayisi = pArray.reduce((total, sinif) => total += sinif.ogrenciler.length, 0);
    let matOrtalamasi = matToplam/ogrenciSayisi
    let fiziktOrtalamasi = fizikToplam/ogrenciSayisi
    let kimyaOrtalamasi = kimyaToplam/ogrenciSayisi
    let geoOrtalamasi = geoToplam/ogrenciSayisi

    let array = [matOrtalamasi, fiziktOrtalamasi, kimyaOrtalamasi, geoOrtalamasi];
    return array;
}

// her sinifin not ortalamasini bulan fonksiyon
const sinifOrtalamalari = (pArray, pClassName) => {

    let array

    pArray.map(sinif => {

        if(pClassName ==sinif.sinifAdi ){

            let length = sinif.ogrenciler.length;

            let matTotal = sinif.ogrenciler.reduce((total, ogrenci) => total += ogrenci.matematikNotu , 0 )
            let fizikTotal = sinif.ogrenciler.reduce((total, ogrenci) => total += ogrenci.fizikNotu , 0 )
            let geoTotal = sinif.ogrenciler.reduce((total, ogrenci) => total += ogrenci.geometriNotu , 0 )
            let kimyaTotal = sinif.ogrenciler.reduce((total, ogrenci) => total += ogrenci.kimyaNotu , 0 )

            let avarageMath =  Math.floor(matTotal/length);
            let avarageFizik = Math.floor(fizikTotal/length);
            let avarageGoe = Math.floor(geoTotal/length);
            let avarageKimya = Math.floor(kimyaTotal/length);

            let arrayyy = [avarageMath, avarageFizik, avarageGoe, avarageKimya];

            array = arrayyy
        } 
    })
    return array
}


///grafik
const labels = [
    'Matematik',
    'Fizik',
    'Kimya',
    'Geometri'
  ];

  
  const renderChart =(pId, pData) => {
    
  const myChart = new Chart(
    document.getElementById(pId),
    {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'lhadi',
            backgroundColor: 'rgba(124, 133, 26, 0.5)',
            borderColor: 'rgb(255, 99, 132)',
            data: pData,
    
          }]
        },

        options: {
          
          scales: {
            y: {
                suggestedMin: 0,
                suggestedMax: 100
            },
          },
          plugins: {
            legend: {
                display: false,
            },
          }
        }

    }
  );
  }


  
// grafiklerin basliklarini olusturan fonksiyon
const chartHeader = (pArray, pId) => {
    let element = document.getElementById(`${pId}`)
    element.innerHTML = ''

    pArray.map((elm, index) => {
    const labelNames = ['', 'Toplam Ogrenci Sayisi', 'Matematik Ortalamsi', 'Fizik Ortalamsi', 'Kimya Ortalamsi', 'Geometri Ortalamsi',]
        element.innerHTML +=  `

        <li class="list-group-item">${labelNames[index]} ${elm}</li>

        ` 
    })
}