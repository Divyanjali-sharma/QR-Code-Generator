document.getElementById('generateBtn').addEventListener('click', function() {
    const qrText = document.getElementById('qrText').value;
    const canvas = document.getElementById('qrCanvas');
    const qr = new QRious({
        element: canvas,
        value: qrText,
        size: 200,
        level: 'H'
    });
});
