//-- Zone -- Function Reset
function kosongall() {
    let frm = document.getElementById("formulir");
    frm.a1.value = "";
    frm.a2.value = "";
}

//-- Zone -- Function Perhitungan
function tambah() {
    let frm = document.getElementById("formulir")
    let a1 = parseFloat(frm.a1.value);
    let a2 = parseFloat(frm.a2.value);
    //Alert Validation
    if (isNaN(a1) || a1 == '') {
        swal("HARAP ISI DATA BERUPA ANGKA!", "", "error");
    } else if (isNaN(a2) || a2 == '') {
        swal("HARAP ISI DATA BERUPA ANGKA!", "", "error");
    } else {
        let total = a1 + a2;
        frm.hasil.value = total;
    }

}

function kurang() {
    let frm = document.getElementById("formulir")
    let a1 = parseFloat(frm.a1.value);
    let a2 = parseFloat(frm.a2.value);
    //Alert Validation
    if (isNaN(a1) || a1 == '') {
        swal("HARAP ISI DATA BERUPA ANGKA!", "", "error");
    } else if (isNaN(a2) || a2 == '') {
        swal("HARAP ISI DATA BERUPA ANGKA!", "", "error");
    } else {
        let total = a1 - a2;
        frm.hasil.value = total;
    }
}

function kali() {
    let frm = document.getElementById("formulir")
    let a1 = parseFloat(frm.a1.value);
    let a2 = parseFloat(frm.a2.value);
    //Alert Validation
    if (isNaN(a1) || a1 == '') {
        swal("HARAP ISI DATA BERUPA ANGKA!", "", "error");
    } else if (isNaN(a2) || a2 == '') {
        swal("HARAP ISI DATA BERUPA ANGKA!", "", "error");
    } else {
        let total = a1 * a2;
        frm.hasil.value = total;
    }
}

function bagi() {
    let frm = document.getElementById("formulir")
    let a1 = parseFloat(frm.a1.value);
    let a2 = parseFloat(frm.a2.value);
    //Alert Validation
    if (isNaN(a1) || a1 == '') {
        swal("HARAP ISI DATA BERUPA ANGKA!", "", "error");
    } else if (isNaN(a2) || a2 == '') {
        swal("HARAP ISI DATA BERUPA ANGKA!", "", "error");
    } else {
        let total = a1 / a2;
        frm.hasil.value = total;
    }
}

function pangkat() {
    let frm = document.getElementById("formulir")
    let a1 = parseFloat(frm.a1.value);
    let a2 = parseFloat(frm.a2.value);
    //Alert Validation
    if (isNaN(a1) || a1 == '') {
        swal("HARAP ISI DATA BERUPA ANGKA!", "", "error");
    } else if (isNaN(a2) || a2 == '') {
        swal("HARAP ISI DATA BERUPA ANGKA!", "", "error");
    } else {
        let total = Math.pow(a1, a2);
        frm.hasil.value = total;
    }
}

//-- End Zone -- Function Perhitungan