
class Pasien {
    constructor(id, nama, prioritas, waktuDaftar) {
        this.id = id;
        this.nama = nama;
        this.prioritas = prioritas; 
        this.waktuDaftar = waktuDaftar;
    }
}


class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(data) {
        this.items.push(data);
    }

    dequeue() {
        return this.isEmpty() ? null : this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    tampilkan() {
        return this.items.map(
            p => `${p.id}-${p.nama} (${p.prioritas})`
        );
    }
}


class AntrianRS {
    constructor() {
        this.antrianDarurat = new Queue();
        this.antrianBiasa = new Queue();
    }

    
    daftar(pasien) {
        if (pasien.prioritas === "darurat") {
            this.antrianDarurat.enqueue(pasien);
            console.log(
                `${pasien.nama} masuk antrian DARURAT`
            );
        } else {
            this.antrianBiasa.enqueue(pasien);
            console.log(
                `${pasien.nama} masuk antrian BIASA`
            );
        }
    }

    
    layani() {
        let pasien;

        if (!this.antrianDarurat.isEmpty()) {
            pasien = this.antrianDarurat.dequeue();
        } else if (!this.antrianBiasa.isEmpty()) {
            pasien = this.antrianBiasa.dequeue();
        } else {
            console.log("Tidak ada pasien dalam antrian");
            return;
        }

        console.log(
            `Melayani: ${pasien.id} | ${pasien.nama} | ${pasien.prioritas}`
        );
    }

    
    tampilkanAntrian() {
        console.log("\n=== ANTRIAN DARURAT ===");
        console.log(this.antrianDarurat.tampilkan());

        console.log("\n=== ANTRIAN BIASA ===");
        console.log(this.antrianBiasa.tampilkan());
    }

    
    semuaKosong() {
        return (
            this.antrianDarurat.isEmpty() &&
            this.antrianBiasa.isEmpty()
        );
    }
}

const rs = new AntrianRS();

const dataPasien = [
    new Pasien(1, "Aldo", "biasa", "07:00"),
    new Pasien(2, "Bodrex", "darurat", "08:05"),
    new Pasien(3, "Caca", "biasa", "08:40"),
    new Pasien(4, "Dono", "darurat", "08:30"),
    new Pasien(5, "Kairi", "biasa", "08:15"),
    new Pasien(6, "Firman", "darurat", "08:20"),
    new Pasien(7, "Galih", "biasa", "08:25"),
    new Pasien(8, "Hana", "darurat", "08:30"),
    new Pasien(9, "Andra", "biasa", "08:35"),
    new Pasien(10, "Jokowi", "biasa", "08:45")
];


console.log("=== PENDAFTARAN PASIEN ===");
dataPasien.forEach(p => rs.daftar(p));

rs.tampilkanAntrian();


console.log("\n=== PROSES PELAYANAN ===");

while (!rs.semuaKosong()) {
    rs.layani();
}