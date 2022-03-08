class Gempa {

    constructor(lokasi, skala) {
        this.lokasi = lokasi;
        this.skala = skala;
    }

    dampak() {

        for (const iterator in this.lokasi) {
            let randomSkala = Math.random() * this.skala,
                dampak = (randomSkala >= 0 && randomSkala <= 2) ? "Tidak Terasa" :
                (randomSkala > 2 && randomSkala <= 4) ? "Bangunan Retak-Retak" :
                (randomSkala > 4 && randomSkala <= 6) ? "Bangunan Roboh" :
                (randomSkala > 6) ? "Bangunan Roboh Dan Berpotensi Tsunami" :
                "Tidak Ada";
            document.querySelector('tbody').innerHTML += `
                <tr>
                    <td> ${Number(iterator)+1} </td>
                    <td> ${this.lokasi[iterator]} </td>
                    <td> ${randomSkala.toPrecision(2)} </td>
                    <td> ${dampak} </td>
                </tr>
            `
        }
    }
}
let lokasi = ['Russia', 'Ukraina', 'Israel', 'Portugal', 'Jerman', 'Belanda', 'Nigeria', 'Spanyol', 'Francis', 'Swedia'],
    gempaDunia = new Gempa(lokasi, 10);
gempaDunia.dampak();