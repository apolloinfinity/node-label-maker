const qr = document.getElementById("qr");
const print = document.getElementById("print");
const itemInfo = {
    number: document.querySelector('.item-num').innerText,
    description: document.querySelector('.item-description').innerText,
    lot: document.querySelector('.item-lot').innerText,
    quantity: document.querySelector('.item-quantity').innerText,
    warehouse: document.querySelector('.item-warehouse').innerText,
    received: document.querySelector('.item-received').innerText,
}

window.onload = async () => {
    const qrCreate = await `http://localhost:5000/qr/?bcid=qrcode&scale=5&text=${itemInfo.number}`

    qr.setAttribute("src", qrCreate);
};

function getBase64() {
    const imgCanvas = document.createElement("canvas");
    const imgContext = imgCanvas.getContext("2d");
    imgCanvas.width = qr.width;
    imgCanvas.height = qr.height;

    imgContext.drawImage(qr, 0, 0, qr.width, qr.height)

    const imgData = imgCanvas.toDataURL("image/png");

    return imgData;
}

print.addEventListener("click", async function () {
    try {
        const qrData = getBase64();
        itemInfo.dataURL = qrData;
        const postSettings = {
            method: "POST",
            headers: { "Content-Type": "application/json; charset=utf-8" },
            body: JSON.stringify(itemInfo)
        }

        await fetch("http://127.0.0.1:5000/api/labels", postSettings)
    } catch (err) {
        console.log(err)
    }

});
