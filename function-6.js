// Soal No. 1
// Buat sebuah function untuk toko online
// Jawaban 
function onlineShop (buyer,product){
    return console.log("Terima kasih", buyer, "telah membeli produk", product);
};
onlineShop("Rodhiyah Desviana","Kuaci");

// Soal No. 2
// Buat sebuah function helper untuk convert temperatur Celcius ke Fahrenheit dan sebaliknya
// Jawaban

// function convert Celcius ke Fahrenheit
function converToFahrenheit (number){
    return number * (9/5);
};

function getFahrenheit (celcius){
    return converToFahrenheit(celcius) + 32;
};
console.log(getFahrenheit(15));

// function convert Fahrenheit ke Celcius
function convertToCelcius (number1) {
    return number1 - 32;
};

function getCelcius (fahrenheit){
    return convertToCelcius(fahrenheit) * (5/9);
};
console.log(getCelcius(59));

// Soal No. 3
// Membuat program untuk menghitung umur kucing dalam usia manusia
// Jawaban
let hitungUsia = (umurKucing) =>{
    let usiaManusia;
    if (umurKucing == 1){
        usiaManusia = 15;
    }
    else if (umurKucing == 2){
        usiaManusia = 15 + 9;
    }
    else if (umurKucing > 2){
        usiaManusia = (umurKucing - 2) * 4 + 24 ;
    }
    else {
        usiaManusia = 0;
    }
    return usiaManusia;
}
console.log(hitungUsia(4));

// Soal No. 4
// Buat sebuah function untuk mengubah format semua string menjadi huruf kecil
// Jawaban
let changeFormat = valueString => valueString.toLowerCase();
console.log(changeFormat("RODHIYAH DESVIANA"));

