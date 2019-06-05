const qr = document.getElementById("qr");

window.onload = () => {
    const qrCreate = `http://localhost:5000/qr/?bcid=qrcode&text=${1222}`

    qr.setAttribute("src", qrCreate);
}