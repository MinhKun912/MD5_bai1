function ketQua() {
    let a = +document.getElementById(1).value;
    let b = +document.getElementById(2).value;
    let c = +document.getElementById(3).value;

    let chuVi = (a + b + c) / 3

    document.getElementById('KQ').innerHTML = chuVi;
}