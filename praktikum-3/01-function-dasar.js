// 01-function-dasar.js
function sapa() {
    console.log('Halo! Selamat Datang Di Praktikum Javascript');

}
sapa();
sapa();

function SapaNama(Nama) {
    console.log(`Halo, ${Nama}! Selamat belajar.`);   
}
SapaNama('Budi');
SapaNama('Siti');

function tambah(angka1, angka2) {
    const hasil = angka1 + angka2;
    return hasil;
}
const hasilpenjumlahan = tambah(10, 25);
console.log('10 + 25 =', hasilpenjumlahan);
console.log('7 + 13 =', tambah(7, 13));


function hitung(nilai, pangali = 2) {
    return nilai * pangali;
}
console.log(hitung(5));
console.log(hitung(5, 3));

const PesanGlobal = 'Saya Ada Di Mana Saja';

function CekScope() {
    const PesanLokal = 'Saya Hanya Ada Dalam Function Ini';
    console.log(PesanGlobal);
    console.log(PesanLokal);
}

CekScope();
console.log(PesanGlobal);


//1.Function kurang
function kurang(a,b) {
    return a - b;
}

//2.Function kali
function kali(a,b) {
    return a * b;
}

//3.Function bagi(dengan pengecekan nol)
function bagi(a,b) {
    if(b===0) {
        console.log('Error:tidak bisa membagi dengan nol');
        return null;
    }
    return a/b;
}

//4.Function Kalkulator
function kalkulator(a,operator,b) {
    switch(operator) {
        case'+':
          return a + b;
        case'-':
          return kurang(a,b);
        case'*':
          return kali(a,b);
        case'/':
          return bagi(a,b);
          default:
            console.log('Operasi tidak dikenali');
            return null;      
    }
}

//5.Pengujian
console.log('\n=== TEST KALKULATOR ===');

console.log('10 + 5 =', kalkulator(10,'+',5));
console.log('10 - 7 =', kalkulator(10,'-',7));
console.log('10 * 4 =', kalkulator(10,'*',4));
console.log('10 / 2 =', kalkulator(10,'/',2));
console.log('10 + 0 =', kalkulator(10,'/',0)); //test errorv