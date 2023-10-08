//if-else

let ukuran = 25;//isi sesuai keinginan

if (ukuran < 5 ) {
    console.log("Ukurannya Sangat kecil")
}else if (ukuran < 10){
    console.log("Ukurannya Kecil")
}else if (ukuran < 15){
    console.log("Ukurannya Sedang")
}else if (ukuran < 20){
    console.log("Ukurannya Besar")
}else if (ukuran >=20 ){
    console.log("Ukurannya Sangat Besar")
}else{
    console.log("Ukuran tidak valid")
}

console.log("-----")
//nested if
let nilai = 100;//isi nilainya 

if (nilai >= 60) {
  if (nilai >= 90) {
      console.log("Hebat! Kamu dapat Grade A, Harus konsisten ya!");
  } else if(nilai >= 80) {
      console.log("Kamu dapat Grade B, Ayo semangat!");
  } else {
     console.log("Kamu dapat Grade C, Ayo Semangat!")
  }
} else {
  console.log("Sayang sekali, kamu harus belajar lebih keras. Ayo semangat!");
}

console.log("-----")
//for statement

const buah = ["Apel", "Pisang", "Jeruk", "Mangga", "Semangka", "Durian", "Naga"];//silahkan tambahkan buah favoritmu


// Inisialisasi variabel hasil
let hasil = "";

// Loop untuk iterasi melalui elemen-elemen dalam array buah
for (let i = 0; i < buah.length; i++) {
    // Tambahkan elemen ke variabel hasil
    hasil += buah[i];

    // Tambahkan koma jika bukan elemen terakhir dan tambahkan titik jika elemen terakhir
    if (i < buah.length - 1) {
        hasil += ", ";
    }else{
        hasil += ". ";
    }
}
console.log("Berikut daftar buah terpopuler : " +hasil );

console.log("-----")
//while

let jumlahEpisode = 0;
let season = 1;

while (season <= 5) {
    let episodeSeason = 1;

    while (episodeSeason <= 5) {
        console.log(`Season ${season}, Episode ${episodeSeason}`);
        jumlahEpisode++;
        episodeSeason++;
    }

    console.log(`Season ${season} telah berakhir.`);
    season++;
}

console.log(`Total jumlah episode: ${jumlahEpisode}. Terima kasih sudah menonton!`);

console.log("-----")
//do while

let currentSong = 1;
const songList = [
    "This Town - Niall Horan",
    "Spiral - LONGMAN",
    "Summertime Sadness - Lana Del Rey",
    "The Scientist - Coldplay",
    "Take Me Home, Country Roads - John Denver"
];

do {
    console.log(`Now Playing: ${songList[currentSong - 1]}`);
    currentSong++;
} while (currentSong <= songList.length);

console.log("Semua lagu telah diputar.");

console.log("-----")
//function

function ucapsalam(bahasa) {
  let salam;
  switch (bahasa.toLowerCase()) {
      case "indonesia":
          salam = "Selamat pagi!";
          break;
      case "inggris":
          salam = "Good morning!";
          break;
      case "spanyol":
          salam = "¡Buenos días!";
          break;
      case "prancis":
          salam = "Bonjour!";
          break;
      case "jepang":
          salam = "おはよう (Ohayou)!";
          break;
      default:
          salam = "Bahasa tidak dikenali.";
  }
  return salam;
}

const bahasa = "jepang"; // Pilih bahasa (indonesia, inggris, spanyol, prancis, jepang)
const salam = ucapsalam(bahasa);
console.log(salam );
