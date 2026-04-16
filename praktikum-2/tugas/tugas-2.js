// deklarasi variabel 
const beratBadan = 68;     // dalam kg
const tinggiBadan = 1.72;  // dalam meter

// hitung BMI 
let bmi = beratBadan / (tinggiBadan * tinggiBadan);

// ambil 2 angka desimal
let bmiFix = bmi.toFixed(2);

//menentukan kategori 
let kategori = "";

if (bmi < 18.5) {
    kategori = "Kurus (Underweight)";
}else if (bmi >= 18.5 && bmi <= 24.9) {
    kategori = "Normal (ideal)";
}else if (bmi >= 25.0 && bmi <= 29.9) {
    kategori = "Kelebihan Berat Badan (Overweight)";
}else {
    kategori = "Obesitas (Obese)";
}
// tampilan hasil
console.log(`Berat: ${beratBadan} kg | Tinggi: ${tinggiBadan} m | BMI: ${bmiFix} | Kategori: ${kategori}`);